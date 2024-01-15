import { TextField } from '@mui/material'
import React from 'react'

const Searchbar = ({ onSearch }) => {
    const handleChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <TextField
            label="Search here ..."
            variant="outlined"
            size='small'
            onChange={handleChange}
        />
    )
}

export default Searchbar
