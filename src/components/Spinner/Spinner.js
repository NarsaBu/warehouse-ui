import { Spin } from 'antd';
import React, { useState } from "react";
import styles from './Spinner.module.scss';

const Spinner = ({children }) => {
    const [isLoading, toggleLoading] = useState(true);
    
    const startLoading = isLoading && !children;
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