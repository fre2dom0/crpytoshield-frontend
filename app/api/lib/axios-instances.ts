import axios from "axios";

export const scanner = axios.create({
    baseURL: 'https://9b14874a1ef7.ngrok-free.app/',
    timeout: 5000,
});