import createApiClient from "./api.service";
import { userAccStore } from "@/Store/userStore";
const userStore = userAccStore();
const commonConfig = {
    headers: {
        'Authorization': `Bearer ${userStore.user.token}`,
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    },
};

class ProductService {
    constructor(baseUrl = "/api/products"){
        this.api = createApiClient(baseUrl);
    }

    async getAll(){
        return (await this.api.get('/' , commonConfig)).data;
    }

    async create(data){
        return (await this.api.post('/', data, commonConfig)).data;
    }

    async deleteAll(){
        return (await this.api.delete('/' , commonConfig)).data;
    }

    async get(id){
        return (await this.api.get(`/${id}`, commonConfig)).data;
    }

    async update(id,data){
        return (await this.api.put(`/${id}`, data, commonConfig)).data;
    }

    async delete(id){
        return (await this.api.delete(`/${id}`, commonConfig)).data;
    }

    async login(data){
        return (await this.api.post('/login',data , commonConfig)).data;
    }

    async getAllAvailable(){
        return (await this.api.get('/findallavailable' , commonConfig)).data;
    }

    async unavailable(id){
        return (await this.api.get(`/unavailable/${id}` , commonConfig)).data;
    }

    async available(id){
        return (await this.api.get(`/available/${id}` , commonConfig)).data;
    }

    async findByPlace(manufacture){
        return (await this.api.get(`/findByPlace/${manufacture}` , commonConfig)).data;
    }

    async findByBrand(brand){
        return (await this.api.get(`/findByBrand/${brand}` , commonConfig)).data;
    }
}

export default new ProductService();