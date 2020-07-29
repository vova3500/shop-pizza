import {
    pizzasAPI
} from "../../api/api";

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items
})

export const fetchPizzas = () =>
    async (dispatch) => {
        let resposne = await pizzasAPI.getPizzas()
        if (resposne.statusText === "OK") {
            dispatch(setPizzas(resposne.data))
        }
    };