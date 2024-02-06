import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppStrings, colorCodes } from "../../Helper/Constant";
import {
    Box,
    Button,
    Card,
    MenuItem,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
    IconButton,
    Divider,
    useTheme,
} from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { answerKeySvg } from "../../Assets/AnswerKey";

const CreateQuiz = () => {
    const [quizName, setQuizName] = useState("");
    const [description, setDescription] = useState("");
    const [questions, setQuestions] = useState([
        { id: 1, name: "", type: "Checkbox", options: [{ id: 1, value: "Option 1" }], questionAnswer: "" },
    ]);
    const [answerkey, setAnswerkey] = useState(null);
    const theme = useTheme();
    const navigate = useNavigate();

    console.log(questions, "questions");

    const handleAddQuestion = () => {
        const newQuestion = {
            id: questions.length + 1,
            name: "",
            type: "text",
            options: [{ id: 1, value: "Option 1" }],
        };
        setQuestions([...questions, newQuestion]);
    };

    const handleAddOption = (questionIndex) => {
        const newOptions = [
            ...questions[questionIndex].options,
            {
                id: questions[questionIndex].options.length + 1,
                value: `Option ${questions[questionIndex].options.length + 1}`,
            },
        ];
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options = newOptions;
        setQuestions(updatedQuestions);
    };

    const handleEditOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex].editing = true;
        setQuestions(updatedQuestions);
    };

    const handleSaveOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex].editing = false;
        setQuestions(updatedQuestions);
    };

    const handleDeleteOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options = updatedQuestions[
            questionIndex
        ].options.filter((_, i) => i !== optionIndex);
        setQuestions(updatedQuestions);
    };

    const handleQuestionNameChange = (index, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].name = event.target.value;
        setQuestions(updatedQuestions);
    };

    const handleQuestionTypeChange = (index, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].type = event.target.value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, event) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].questionAnswer = event.target.value;
        updatedQuestions[questionIndex].options[optionIndex].value = event.target.value;
        setQuestions(updatedQuestions);
    };


    const handleSaveAnserKey = (questionIndex) => {
        setAnswerkey(questionIndex);
    };

    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            <Button
                boxShadow={2}
                sx={{
                    background: "#fff",
                    color: "black",
                    borderRadius: "15px",
                    padding: "5px 20px 5px 12px",
                }}
                onClick={() => navigate(-1)}
            >
                {" "}
                <IconButton sx={{ margin: "0px" }}>
                    <ArrowBackIosIcon
                        size="small"
                        color={theme?.palette?.grey[800]}
                        sx={{ fontSize: "14px", color: theme?.palette?.grey[800] }}
                    />
                </IconButton>
                {AppStrings?.back}
            </Button>
            <Box
                pb={2}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant="h5">{"Create new quiz"}</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                    <Box>
                        <Typography>Quiz Name</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            variant="outlined"
                            margin="normal"
                            type="text"
                            value={quizName}
                            onChange={(e) => setQuizName(e.target.value)}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Box>
                        <Typography>Description</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            variant="outlined"
                            margin="normal"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    {questions.map((question, index) => {
                        return (
                            <Card sx={{ marginBottom: "10px" }} key={question.id}>
                                <form style={{ padding: "0px" }}>
                                    {index === answerkey && <Typography sx={{ padding: "15px" }} >Choose correct answers</Typography>}
                                    {index === answerkey && <Divider />}
                                    <Box p={2} sx={{ display: "flex", gap: 3 }}>
                                        {index === answerkey ? (
                                            <>{`${answerkey + 1}. ${questions[answerkey].name}`}</>
                                        ) : (
                                            <TextField
                                                sx={{ width: "70%" }}
                                                variant="outlined"
                                                fullWidth
                                                size="small"
                                                value={question.name}
                                                onChange={(e) => handleQuestionNameChange(index, e)}
                                                style={{ marginBottom: "10px" }}
                                            />
                                        )}

                                        {index !== answerkey && (
                                            <FormControl
                                                sx={{ width: "30%" }}
                                                fullWidth
                                                variant="outlined"
                                                style={{ marginBottom: "10px" }}
                                            >
                                                <Select
                                                    value={question.type}
                                                    onChange={(e) => handleQuestionTypeChange(index, e)}
                                                    size="small"
                                                >
                                                    <MenuItem value="text">
                                                        {AppStrings?.multiple_choice || "Multiple Choice"}
                                                    </MenuItem>
                                                    <MenuItem value="Checkbox">
                                                        {AppStrings?.checkbox || "Checkbox"}
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        )}
                                    </Box>
                                    {question.type === "Checkbox" && (
                                        <div style={{ padding: "0 20px" }}>
                                            <InputLabel>Options</InputLabel>
                                            <RadioGroup>
                                                {question.options.map((option, optionIndex) => (
                                                    <div
                                                        key={option.id}
                                                        style={{
                                                            width: "100%",
                                                            display: "flex",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <FormControlLabel
                                                            value={option.value}
                                                            control={<Radio />}

                                                            disabled={index === answerkey ? false : true}
                                                            label={
                                                                option.editing ? (
                                                                    <TextField
                                                                        variant="outlined"
                                                                        size="small"
                                                                        value={option.value}
                                                                        onChange={(event) =>
                                                                            handleOptionChange(
                                                                                index,
                                                                                optionIndex,
                                                                                event
                                                                            )
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <Box
                                                                        sx={{
                                                                            width: "100%",
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            alignItems: "center",
                                                                        }}
                                                                    >
                                                                        {option.value}
                                                                        <Box
                                                                            sx={{ position: "absolute", right: 0 }}
                                                                        >
                                                                            <IconButton
                                                                                type="button"
                                                                                onClick={() =>
                                                                                    handleEditOption(index, optionIndex)
                                                                                }
                                                                            >
                                                                                <BorderColorOutlinedIcon fontSize="small" />
                                                                            </IconButton>
                                                                            <IconButton
                                                                                type="button"
                                                                                onClick={() =>
                                                                                    handleDeleteOption(index, optionIndex)
                                                                                }
                                                                            >
                                                                                <DeleteOutlineOutlinedIcon fontSize="small" />
                                                                            </IconButton>
                                                                        </Box>
                                                                    </Box>
                                                                )
                                                            }
                                                            style={{ marginRight: "20px" }}
                                                        />
                                                        {option.editing && (
                                                            <Box sx={{ marginRight: "20px" }}>
                                                                <IconButton
                                                                    onClick={() =>
                                                                        handleSaveOption(index, optionIndex)
                                                                    }
                                                                >
                                                                    <SaveOutlinedIcon fontSize="small" />
                                                                </IconButton>
                                                            </Box>
                                                        )}
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                            <Button
                                                type="button"
                                                sx={{
                                                    padding: "6px 10px",
                                                    mg: 2,
                                                    border: "none",
                                                    "&:hover": { border: "none" },
                                                }}
                                                variant="outlined"
                                                onClick={() => handleAddOption(index)}
                                                style={{ marginTop: "10px", marginBottom: "10px" }}
                                            >
                                                + Add Option
                                            </Button>
                                        </div>
                                    )}
                                </form>
                                <Divider />
                                {index === answerkey ? (
                                    // answerkey done buttons
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            width: "100%",
                                            padding: "5px 20px",
                                        }}
                                    >
                                        <span></span>
                                        <Button
                                            onClick={() => handleSaveAnserKey(null)}
                                            variant="primary"
                                            sx={{
                                                color: theme?.palette.primary.main,
                                                background: theme.palette.primary.lighter,
                                                my: 1,
                                            }}
                                        >
                                            Done
                                        </Button>
                                    </Box>
                                ) : (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            width: "100%",
                                            padding: "8px 20px",
                                        }}
                                    >
                                        <Button
                                            color="secondary"
                                            onClick={() => handleSaveAnserKey(index)}
                                            sx={{ display: "flex", alignItems: "center" }}
                                        >
                                            <span sx={{ pe: 1 }}>{answerKeySvg}
                                            </span> Answer key
                                        </Button>
                                        <Button variant="primary"> <IconButton
                                            type="button"
                                        // onClick={() =>
                                        //   handleDeleteOption(index, optionIndex)
                                        // }
                                        >
                                            <DeleteOutlineOutlinedIcon fontSize="small" />
                                        </IconButton></Button>
                                    </Box>
                                )}
                            </Card>
                        );
                    })}
                    <Box sx={{ display: "flex", justifyContent: "end", width: "100%" }}>
                        <Button
                            type="submit"
                            onClick={handleAddQuestion}
                            variant="contained"
                            style={{
                                marginTop: "10px",
                                background: theme.palette.grey[300],
                                color: theme.palette.grey[600],
                            }}
                        >
                            + Add Question
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Button
                sx={{ position: "fixed", bottom: 4, left: "60%" }}
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
            >
                Submit
            </Button>
        </Container>
    );
};

export default CreateQuiz;
