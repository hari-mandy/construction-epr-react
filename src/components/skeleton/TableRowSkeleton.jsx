import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TableRowSkeleton = ({ amount }) => { // Defaults to 5 rows if not provided
    const loadRows = Array.from({ length: amount });

    return (
        <>
            {loadRows.map((_, index) => (
                <tr className="table-data" key={index} role="row">
                    <td role="cell"><Skeleton width={100} /></td>
                    <td role="cell"><Skeleton width={100} /></td>
                    <td role="cell"><Skeleton width={100} /></td>
                    <td role="cell"><Skeleton width={100} /></td>
                    <td role="cell"><Skeleton width={100} /></td>
                    <td role="cell"><Skeleton width={100} /></td>
                    <td role="cell"><Skeleton width={100} /></td>
                </tr>
            ))}
        </>
    )
}

export default TableRowSkeleton
