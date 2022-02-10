import axios from "axios";
import {DEFAULT_PATH, ROUTES} from "./urls";

export async function getInstrumentNames() {
    try {
        const response = await axios.get(DEFAULT_PATH.api + ROUTES.instrumentName);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function createInstrumentName(name) {
    try {
        const response = await axios.post(
            DEFAULT_PATH.api + ROUTES.instrumentName,
            {
                name: name
            });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function updateInstrumentName(oldName, name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.instrumentName,
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

export async function deleteInstrumentName(name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.instrumentName,
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