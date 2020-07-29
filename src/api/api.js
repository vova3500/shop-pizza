import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001",
});

export const pizzasAPI = {
    getPizzas() {
        return instance.get("pizzas")
    }
}