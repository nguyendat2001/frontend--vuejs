<template>
    <header class="w3-container" style="padding-top:22px">
        <h5><b><i class="fa fa-dashboard"></i> My Dashboard</b></h5>
    </header>
    
    <div class="w3-row-padding w3-margin-bottom">
    <div class="w3-quarter">
        <div class="w3-container w3-red w3-padding-16">
        <div class="w3-left"><i class="fa-solid fa-money-bill-trend-up w3-xxxlarge"></i></div>
        <div class="w3-right">
            <h3>{{this.totalRevenue}}$</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Total Revenue</h4>
        </div>
    </div>
    <div class="w3-quarter">
        <div class="w3-container w3-blue w3-padding-16">
        <div class="w3-left"><i class="fa-solid fa-users w3-xxxlarge"></i></div>
        <div class="w3-right">
            <h3>{{this.numUsers.length}}</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Users</h4>
        </div>
    </div>
    <div class="w3-quarter">
        <div class="w3-container w3-teal w3-padding-16">
        <div class="w3-left"><i class="fa-solid fa-toolbox w3-xxxlarge"></i></div>
        <div class="w3-right">
            <h3>{{this.numProducts.length}}</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Products</h4>
        </div>
    </div>
    <div class="w3-quarter">
        <div class="w3-container w3-orange w3-text-white w3-padding-16">
        <div class="w3-left"><i class="fa-solid fa-bag-shopping w3-xxxlarge"></i></div>
        <div class="w3-right">
            <h3>{{this.numOrders.length}}</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Orders</h4>
        </div>
    </div>
    </div>

    <div class="w3-panel">
    <div class="w3-row-padding" style="margin:0 -16px">
        <div class="w3-third">
        <h5>Regions</h5>
        <img src="https://www.w3schools.com/w3images/region.jpg" style="width:100%" alt="Google Regional Map">
        </div>
        <div class="w3-twothird">
        <h5>Sales</h5>
        <table class="w3-table w3-striped w3-white">
            <tr v-for="(product,index) in this.figuresProduct">
                <td><i class="fa-solid fa-cart-shopping w3-text-blue w3-large"></i></td>
                <td>{{product.product_name}}</td>
                <td><i>sold: {{product.number}} items</i></td>
            </tr>

        </table>
        </div>
    </div>
    </div>
    <hr>
    <div class="row">
        
        <div class="col-8">
            <Bar v-if="loaded"
                id="my-chart-id"
                :options="chartOptions"
                :data="this.chartData"
            />
        </div>
        <div class="col-4">
            <Doughnut v-if="loaded" id="my-chart-id" :data="this.chartData" :options="chartOptions" />
        </div>
    </div>
</template>

<script>
import { Bar, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale ,ArcElement } from 'chart.js'

ChartJS.register(Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import orderService from "@/services/order.service";
import userService from "@/services/user.service";
import productService from "@/services/product.service";
// import * as chartConfig from './data.js';

export default {
    components: {
        userService,
        orderService,
        productService,
        Bar,
        Doughnut
    },
    data() {
        return {
            // chartData: null,
            chartData: {
                labels: null,
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: null
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: true
            },
            loaded: false,
            numOrders: 0,
            numProducts: 0,
            numUsers: 0,
            totalRevenue: 0,
            figuresProduct: [],
        };
    },
    methods: {
        async getAllData(){
            try {
                console.log(this.chartData);
                this.numOrders = await orderService.getAll();
                this.numUsers = await userService.getAll();
                this.numProducts = await productService.getAll();
                const colors = ['#FF0000', '#00FF00',' #0000FF', '#FFFF00','#00FFFF', '#FF00FF',
                     '#C0C0C0', '#808080', '#FFCCFF','#FFCCCC','#CCCC33','#CCCC00','#99CCFF','#99CCCC',
                     '#FF66FF', '#FF66CC', '#FF6699', '#FF6666','#FF6633','#FF6600','#CC66FF','#CC66CC']
                const data = await orderService.topSale();
                let i = 0; 
                let revenue = 0;
                const labels = [];
                const figure = [];
                const backgroundColor = [];
                data.forEach(function(element) {
                    labels.push(element.product_name);
                    figure.push(element.number*element.price);
                    backgroundColor.push(colors[i]);
                    revenue = revenue + element.number* element.price;
                    i++;
                });
                this.figuresProduct = data;
                this.totalRevenue = revenue;
                this.chartData.labels =  labels;
                this.chartData.datasets[0].label =  'Revenue Each Product';
                this.chartData.datasets[0].data =  figure;
                this.chartData.datasets[0].backgroundColor =  backgroundColor;
                
                console.log(this.chartData);
            } catch (error) {
                console.log(error);
            }
        },
        
    },
    async mounted() {
        this.loaded = false;
        await this.getAllData();
        this.loaded = true;

    },
};
</script>

<style scoped src="@/assets/navbar.css">
@import './assets/navbar.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';
</style>