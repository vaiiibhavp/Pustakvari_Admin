

import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { AppStrings, colorCodes } from '../../Helper/Constant'
import { Box, Button, Card, MenuItem, Container, FormControl, FormControlLabel, Grid, InputLabel, Radio, RadioGroup, Select, TextField, Typography, IconButton, Divider, useTheme } from '@mui/material'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const CreateQuiz = () => {
    const [questionName, setQuestionName] = useState('');
    const [questionType, setQuestionType] = useState('radio');
    const [options, setOptions] = useState([{ id: 1, value: 'Option 1' }]);
    const theme = useTheme()

    const navigate = useNavigate();

    const [isAnswerkey, setIsAsnwerKey] = useState(false)

    const handleAddOption = () => {
        const newOptions = [...options, { id: options.length + 1, value: `Option ${options.length + 1}` }];
        setOptions(newOptions);
    };

    const handleEditOption = (index) => {
        const newOptions = [...options];
        newOptions[index].editing = true;
        setOptions(newOptions);
    };

    const handleSaveOption = (index) => {
        const newOptions = [...options];
        newOptions[index].editing = false;
        setOptions(newOptions);
    };

    const handleDeleteOption = (index) => {
        const newOptions = options.filter((_, i) => i !== index);
        setOptions(newOptions);
    };

    const handleQuestionNameChange = (event) => {
        setQuestionName(event.target.value);
    };

    const handleQuestionTypeChange = (event) => {
        setQuestionType(event.target.value);
    };

    const handleOptionChange = (index, event) => {
        const newOptions = [...options];
        newOptions[index].value = event.target.value;
        setOptions(newOptions);
    };
    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            <Button shadow={2} sx={{ background: "#fff", color: "black", borderRadius: "15px", padding: "5px 20px 5px 2px" }} onClick={() => navigate(-1)}> <IconButton><KeyboardBackspaceIcon size="small" /></IconButton>Back</Button>
            <Box pb={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>{'Create new quiz'}</Typography>



            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                    <Box>
                        <Typography>
                            Quiz Name
                        </Typography>

                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            // label="Email"
                            sx={{ marginTop: "0px", background: "white" }}
                            size='small'
                            placeholder={AppStrings?.email}
                            variant="outlined"
                            margin="normal"
                            type="email"
                        // value={formik.values.email}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // error={formik.touched.email && Boolean(formik.errors.email)}
                        // helperText={formik.touched.email && formik.errors.email}
                        />

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Box>
                        <Typography>
                            Description
                        </Typography>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            // label="Email"
                            sx={{ marginTop: "0px", background: "white" }}
                            size='small'
                            placeholder={AppStrings?.email}
                            variant="outlined"
                            margin="normal"
                            type="email"
                        // value={formik.values.email}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // error={formik.touched.email && Boolean(formik.errors.email)}
                        // helperText={formik.touched.email && formik.errors.email}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                    <Card p={3}>
                        {/* <Box p={3} sx={{ display: "flex", gap: 3 }}>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                // label="Email"
                                sx={{ marginTop: "0px", width: "70%", }}
                                size='small'
                                placeholder={"Questions"}
                                variant="outlined"
                                margin="normal"
                                type="email"
                            // value={formik.values.email}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // error={formik.touched.email && Boolean(formik.errors.email)}
                            // helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                // label="Email"
                                sx={{ marginTop: "0px", width: "30%" }}
                                size='small'
                                placeholder={"type"}
                                variant="outlined"
                                margin="normal"
                                type="email"
                            // value={formik.values.email}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // error={formik.touched.email && Boolean(formik.errors.email)}
                            // helperText={formik.touched.email && formik.errors.email}
                            />
                        </Box> */}

                        <form style={{ padding: "10px" }}>
                            <Box p={2} sx={{ display: "flex", gap: 3 }}>

                                <TextField
                                    sx={{ width: "70%" }}
                                    label="Question Name"
                                    variant="outlined"
                                    fullWidth
                                    value={questionName}
                                    onChange={handleQuestionNameChange}
                                    style={{ marginBottom: '10px' }}
                                />

                                <FormControl sx={{ width: "30%" }} fullWidth variant="outlined" style={{ marginBottom: '10px' }}>
                                    <InputLabel>Question Type</InputLabel>
                                    <Select
                                        value={questionType}
                                        onChange={handleQuestionTypeChange}
                                        label="Question Type"
                                    >
                                        <MenuItem value="text">Text</MenuItem>
                                        <MenuItem value="radio">Radio</MenuItem>
                                        {/* Add more question types as needed */}
                                    </Select>
                                </FormControl>
                            </Box>

                            {questionType === 'radio' && (
                                <div style={{ padding: "0 20px" }} >
                                    <InputLabel>Options</InputLabel>
                                    <RadioGroup>
                                        {options.map((option, index) => (
                                            <div key={index} style={{ width: "100%", display: 'flex', alignItems: 'center' }}>
                                                <FormControlLabel
                                                    value={option.value}
                                                    control={<Radio />}
                                                    sx={{ width: "100%", position: "relative" }}
                                                    label={
                                                        option.editing ? (
                                                            <TextField
                                                                variant="outlined"
                                                                size="small"
                                                                value={option.value}
                                                                onChange={(event) => handleOptionChange(index, event)}
                                                            />
                                                        ) : (
                                                            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>

                                                                {option.value}
                                                                <Box sx={{ position: "absolute", right: 0 }}>

                                                                    <IconButton type="button" onClick={() => handleEditOption(index)}>
                                                                        <BorderColorOutlinedIcon fontSize="small" />
                                                                    </IconButton>
                                                                    <IconButton type="button" onClick={() => handleDeleteOption(index)}>
                                                                        <DeleteOutlineOutlinedIcon fontSize="small" />
                                                                    </IconButton>
                                                                </Box>
                                                            </Box>
                                                        )
                                                    }
                                                    style={{ marginRight: '20px' }}
                                                />
                                                {option.editing && (
                                                    <Box sx={{ marginRight: "20px" }}>
                                                        <IconButton onClick={() => handleSaveOption(index)}>
                                                            <SaveOutlinedIcon fontSize="small" />
                                                        </IconButton>
                                                    </Box>
                                                )}
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    <Button type="button" variant="outlined" onClick={handleAddOption} style={{ marginTop: '10px' }}>
                                        + Add Option
                                    </Button>
                                </div>
                            )}


                        </form>
                        <Divider />
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "5px 20px" }}>
                            <Button color='secondary' onClick={() => setIsAsnwerKey(true)}>Answer key</Button>
                            <Button variant='primary'>Delete</Button>


                        </Box>







                    </Card>
                    <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
                        <Button type="submit" variant="contained" style={{ marginTop: '10px', background: theme.palette.grey[300], color: theme.palette.grey[600] }}>
                            + Add Question
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Button sx={{ position: "fixed", bottom: 4, left: "60%" }} type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Submit
            </Button>
        </Container>
    )
}

export default CreateQuiz
