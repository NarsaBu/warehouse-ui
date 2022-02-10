import axios from "axios";
import {DEFAULT_PATH, ROUTES} from "./urls";

export async function getEndUsers() {
    try {
        const response = await axios.get(DEFAULT_PATH.api + ROUTES.endUser);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function createEndUser(name) {
    try {
        const response = await axios.post(
            DEFAULT_PATH.api + ROUTES.endUser,
            {
                name: name
            });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function updateEndUser(oldName, name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.endUser,
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

export async function deleteEndUser(name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.endUser,
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