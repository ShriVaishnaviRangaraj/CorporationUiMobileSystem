import React from 'react';
import {Table} from "@mui/material";

export default function useTable(records,headCells) {
    const TblContainer = props => {
        <Table>
            {props.children}
        </Table>
    }
    return{
        TblContainer
    }
}

