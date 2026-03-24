import axios from "axios";

const api = axios.create({
    baseURL: "https://reqres.in/api", // free test API
});

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
     // Add API KEY
  config.headers["x-api-key"] = "reqres_13ea3b717cc74b32be710f0ce5132091";
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;