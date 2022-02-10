import axios from "axios";
import {DEFAULT_PATH, ROUTES} from "./urls";

export async function getRecipients() {
    try {
        const response = await axios.get(DEFAULT_PATH.api + ROUTES.recipient);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function createRecipient(name) {
    try {
        const response = await axios.post(
            DEFAULT_PATH.api + ROUTES.recipient,
            {
                name: name
            });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function updateRecipient(oldName, name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.recipient,
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

export async function deleteRecipient(name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.recipient,
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