
import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function TablePaginationDemo({ count, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }) {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);



    return (
        <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}
