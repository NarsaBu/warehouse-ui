import axios from "axios";
import {DEFAULT_PATH, ROUTES} from "./urls";

export async function getSuppliers() {
    try {
        const response = await axios.get(DEFAULT_PATH.api + ROUTES.supplier);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function createSupplier(name) {
    try {
        const response = await axios.post(
            DEFAULT_PATH.api + ROUTES.supplier,
            {
                name: name
            });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function updateSupplier(oldName, name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.supplier,
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

export async function deleteSupplier(name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.supplier,
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