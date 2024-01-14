

import React, { useState } from 'react'
import { AppStrings, colorCodes } from '../../Helper/Constant'
import { Box, Button, Card, MenuItem, Container, FormControl, FormControlLabel, Grid, InputLabel, Radio, RadioGroup, Select, TextField, Typography, IconButton, Divider } from '@mui/material'

const CreateQuiz = () => {
    const [questionName, setQuestionName] = useState('');
    const [questionType, setQuestionType] = useState('');
    const [options, setOptions] = useState([{ id: 1, value: 'Option 1' }]);

    const handleAddOption = () => {
        const newOptions = [...options, { id: options.length + 1, value: '' }];
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
            <Box pb={2} mx={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                <Typography variant='h5'>{'Create new quiz'}</Typography>
                <Box>
                    <Button sx={{ background: colorCodes?.PRIMARY_COLOR, color: "#fff" }}>+{AppStrings?.add_quize}</Button>
                </Box>


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

                                                                    <IconButton onClick={() => handleEditOption(index)}>
                                                                        {/* <EditIcon fontSize="small" /> */}e
                                                                    </IconButton>
                                                                    <IconButton onClick={() => handleDeleteOption(index)}>
                                                                        {/* <DeleteIcon fontSize="small" /> */}d
                                                                    </IconButton>
                                                                </Box>
                                                            </Box>
                                                        )
                                                    }
                                                    style={{ marginRight: '20px' }}
                                                />
                                                {option.editing && (
                                                    <IconButton onClick={() => handleSaveOption(index)}>
                                                        {/* <SaveIcon fontSize="small" /> */}s
                                                    </IconButton>
                                                )}
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    <Button variant="outlined" onClick={handleAddOption} style={{ marginTop: '10px' }}>
                                        + Add Option
                                    </Button>
                                </div>
                            )}


                        </form>
                        <Divider />
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "5px 20px" }}>
                            <div>Answer key</div>
                            <div>Delete</div>


                        </Box>







                    </Card>
                    <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>

                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
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
