import React from "react";
import { TableRow, TableCell } from "@mui/material";

function Customer({id, img, name, birth, gender, job}) {
    return(
        <div>
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell><img src={img} alt="" /></TableCell>
                <TableCell>{birth}</TableCell>
                <TableCell>{gender}</TableCell>
                <TableCell>{job}</TableCell>
            </TableRow>
        </div>
    )
}

export default Customer;