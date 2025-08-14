import axios from "axios";

export const scanner = axios.create({
    baseURL: 'https://108af125c7b7.ngrok-free.app/',
    timeout: 5000,
});