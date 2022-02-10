import axios from "axios";
import {DEFAULT_PATH, ROUTES} from "./urls";

export async function getEquipmentNames() {
    try {
        const response = await axios.get(DEFAULT_PATH.api + ROUTES.equipmentName);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function createEquipmentName(name) {
    try {
        const response = await axios.post(
            DEFAULT_PATH.api + ROUTES.equipmentName,
            {
                name: name
            });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export async function updateEquipmentName(oldName, name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.equipmentName,
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

export async function deleteEquipmentName(name) {
    try {
        const response = await axios.put(
            DEFAULT_PATH.api + ROUTES.equipmentName,
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