import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import { servayRecords } from '../Data/TableData';

const SurvayTable = () => {

    const [tableState, setTableState] = useState({
        data: servayRecords,
        CostSortStatus: "asc",
        revnuStatue: "asc"

    })


    const sortByCost = () => {
        if (tableState?.CostSortStatus === "asc") {
            let LowToHaighSort = servayRecords?.sort((a, b) => a.cost - b.cost)
            setTableState((prev) => ({
                ...prev, CostSortStatus: "desc", data: LowToHaighSort
            }))
        } else if (tableState?.CostSortStatus === "desc") {
            let HaighToLowSort = servayRecords?.sort((a, b) => b.cost - a.cost)
            setTableState((prev) => ({
                ...prev, CostSortStatus: "asc", data: HaighToLowSort
            }))
        }
    }



    const sortByRevnu = () => {
        if (tableState?.revnuStatue === "asc") {
            let LowToHaighSort = servayRecords?.sort((a, b) => a.Revenu - b.Revenu)
            setTableState((prev) => ({
                ...prev, revnuStatue: "desc", data: LowToHaighSort
            }))
        } else if (tableState?.revnuStatue === "desc") {
            let HaighToLowSort = servayRecords?.sort((a, b) => b.Revenu - a.Revenu)
            setTableState((prev) => ({
                ...prev, revnuStatue: "asc", data: HaighToLowSort
            }))
        }
    }


    return (
        <div style={{ maxWidth: 600, margin: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>Campaigns</th>
                        <th style={tableHeaderStyle}>Clicks</th>
                        <th style={tableHeaderStyle} onClick={() => sortByCost()} >Cost <span title={tableState?.CostSortStatus === "asc" ? "Low to haigh" : "Haigh to low"}>{tableState?.CostSortStatus === "asc" ? <SouthIcon sx={{ fontSize: "15px" }} /> : <NorthIcon sx={{ fontSize: "15px" }} />} </span> </th>
                        <th style={tableHeaderStyle}>Conversions</th>
                        <th style={tableHeaderStyle} onClick={() => sortByRevnu()}>Revenu  <span title={tableState?.revnuStatue === "asc" ? "Low to haigh" : "Haigh to low"}>{tableState?.revnuStatue === "asc" ? <SouthIcon sx={{ fontSize: "15px" }} /> : <NorthIcon sx={{ fontSize: "15px" }} />} </span></th>
                    </tr>
                </thead>
                <tbody>
                    {tableState?.data?.map((item, index) => (
                        <tr key={index}>
                            <td style={tableCellStyle}>{item.campaigns}</td>
                            <td style={tableCellStyle}>{item.clicks}</td>
                            <td style={tableCellStyle}>{item.cost}</td>
                            <td style={tableCellStyle}>{item.conversions}</td>
                            <td style={tableCellStyle}>{item.Revenu}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const tableHeaderStyle = {
    backgroundColor: '#f4f4f4',
    borderBottom: '1px solid #ddd',
    padding: 8,
    textAlign: 'left',
    fontWeight: 'bold',
};

const tableCellStyle = {
    borderBottom: '1px solid #ddd',
    padding: 8,
};

export default SurvayTable;
