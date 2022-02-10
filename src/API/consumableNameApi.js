import axios from "axios";
import {DEFAULT_PATH, ROUTES} from "./urls";

export async function getConsumableNames() {
    try {
        const response = await axios.get(DEFAULT_PATH.api + ROUTES.consumableName);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function createConsumableName(name) {
    try {
        const response = await axios.post(
            DEFAULT_PATH.api + ROUTES.consumableName,
            {
                name: name
            });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function updateConsumableName(oldName, name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.consumableName,
            {
                name: name
            },
            {
                params: {
                    oldName
                }
            });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function deleteConsumableName(name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.consumableName,
            null,
            {
                params: {
                    name
                }
            });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}