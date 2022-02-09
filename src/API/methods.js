import axios from "axios";
import { DEFAULT_PATH, ROUTES } from "./urls";

export async function getConsumableName() {
    try {
        const response = await axios.get(DEFAULT_PATH.api+ROUTES.consumableName);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

