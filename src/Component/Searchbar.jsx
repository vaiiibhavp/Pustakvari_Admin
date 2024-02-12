import { TextField } from '@mui/material'
import React from 'react'

const Searchbar = ({ onSearch, isFull }) => {
    const handleChange = (event) => {
        onSearch(event.target.value);
    };


    return (
        <TextField
            // label="Search here ..."
            // fullWidth
            variant="outlined"
            placeholder='Search Here'
            size='small'
            sx={{ border: "1px solid white" }}
            onChange={handleChange}
        />
    )
}

export default Searchbar
