import createApiClient from "./api.service";
import { userAccStore } from "@/Store/userStore";
const userStore = userAccStore();

const commonConfig = {
    headers: {
        'Authorization': `Bearer ${userStore.user.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

class UserService {
    constructor(baseUrl = "/api/users"){
        this.api = createApiClient(baseUrl);
    }

    async getAll(){
        return (await this.api.get('/' ,commonConfig )).data;
    }

    async create(data){
        return (await this.api.post('/', data)).data;
    }

    async deleteAll(){
        return (await this.api.delete('/',commonConfig )).data;
    }

    async get(id){
        return (await this.api.get(`/${id}`,{headers: {
            'Authorization': `Bearer ${userStore.user.token}`,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
        },} )).data;
    }

    async update(id,data){
        return (await this.api.put(`/${id}`,data,commonConfig )).data;
    }

    async delete(id){
        return (await this.api.delete(`/${id}`,{headers: {
            'Authorization': `Bearer ${userStore.user.token}`,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
        },} )).data;
    }

    async login(data){
        return (await this.api.post('/login',data)).data;
    }

    async logout(id){
        return (await this.api.get(`/logout/${id}`)).data;
    }

    async lockUser(id){
        return (await this.api.get(`/lockUser/${id}`)).data;
    }

    async unLockUser(id){
        return (await this.api.get(`/unLockUser/${id}`)).data;
    }

    async verify(id){
        return (await this.api.get(`/verify/mail/${id}`)).data;
    }
}

export default new UserService();