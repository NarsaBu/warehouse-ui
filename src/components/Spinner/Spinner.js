import {Spin, Table} from 'antd';
import React from "react";

const Spinner = () => {

    return <Table columns={tableColumns} dataSource={tableData} />

}

ReactDOM.render(
    <div className="spinner">
        <Spin />
    </div>,
    mountNode,
);

export default Spinner;