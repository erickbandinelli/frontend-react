import React from 'react';
import DataTableStyle from './style';

type TableProps = {
    qtn: string
}

const DataTable: React.FC<TableProps> = (props) => {

	return (
        <DataTableStyle>
            <h1>{props.qtn}</h1>
        </DataTableStyle>
	)
}

export default DataTable
