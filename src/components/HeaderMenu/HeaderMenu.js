import React from 'react';
import styles from './HeaderMenu.module.scss';
import MyButton from "../MyButton";
// TODO REMOVE AS A MOCK
export default function HeaderMenu() {
    return <div>
        <MyButton value="ОБОРУДОВАНИЕ" />
        <MyButton value="ИНСТРУМЕНТЫ" />
        <MyButton value="РАСХОДКА" />
        <MyButton value="ОТЧЕТЫ" />
        <MyButton value="БАЗА" />
    </div>
}
