import { Spin } from 'antd';
import React from "react";
import styles from './Spinner.module.scss';

const Spinner = ({ isLoading, children }) => {
    const loadingAndChildren = isLoading && children;
    const childrenLoaded = !isLoading && children;
    if (loadingAndChildren) {
        return (
            <Spin>{children}</Spin>
        )
    }
    else if (childrenLoaded) {
        return (<>{children}</>)
    }
    else return null;
}


export default Spinner;