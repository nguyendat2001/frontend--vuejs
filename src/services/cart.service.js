import createApiClient from "./api.service";
import { userAccStore } from "@/Store/userStore";
const userStore = userAccStore()
const commonConfig = {
    headers: {
        'Authorization': `Bearer ${userStore.user.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

class ContactService {
    constructor(baseUrl = "/api/carts"){
        this.api = createApiClient(baseUrl);
    }

    async create(data){
        return (await this.api.post('/', data)).data;
    }

    async get(id){
        return (await this.api.get(`/${id}`)).data;
    }

    async update(id,data){
        return (await this.api.put(`/${id}`,data)).data;
    }

    async delete(id){
        return (await this.api.delete(`/${id}`)).data;
    }

    async deleteOneProduct(id,data){
        return (await this.api.post(`/deleteOneProduct/${id}`,data)).data;
    }

    async findByUserId(id){
        return (await this.api.get(`/findByUserId/${id}`,commonConfig)).data;
    }

    async deleteAddProduct(id){
        return (await this.api.get(`/deleteAllProduct/${id}`)).data;
    }
}

export default new ContactService();