import React, { useEffect, useState } from "react";
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
    Tooltip,
} from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { answerKeySvg } from "../../Assets/AnswerKey";
import useQuiz from "../../Hooks/Quiz";
import ShowsMessageModal from "../../Component/ShowMessageModal";

const CreateQuiz = () => {
    const [quizName, setQuizName] = useState("");
    const [description, setDescription] = useState("");
    const [typeList, setTypeList] = useState([])

    const [modalData, setModalData] = useState({
        showSuccessModal: false,
        message: "",
    })
    let { getQuizTypeList, createQuizRecord } = useQuiz();


    const [questionText, setQuestions] = useState([
    ]);
    const [answerkey, setAnswerkey] = useState(null);
    const theme = useTheme();
    const navigate = useNavigate();


    const handleAddQuestion = () => {
        const newQuestion = {
            id: questionText.length + 1,
            question: "",
            type: "text",
            option: [{ id: 1, value: "Option 1" }],
        };
        setQuestions([...questionText, newQuestion]);
    };

    const handleAddOption = (questionIndex) => {
        const newOptions = [
            ...questionText[questionIndex].option,
            {
                id: questionText[questionIndex].option.length + 1,
                value: `Option ${questionText[questionIndex].option.length + 1}`,
            },
        ];
        const updatedQuestions = [...questionText];
        updatedQuestions[questionIndex].option = newOptions;
        setQuestions(updatedQuestions);
    };

    const handleEditOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questionText];
        updatedQuestions[questionIndex].option[optionIndex].editing = true;
        setQuestions(updatedQuestions);
    };

    const handleSaveOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questionText];
        updatedQuestions[questionIndex].option[optionIndex].editing = false;
        setQuestions(updatedQuestions);
    };

    const handleDeleteOption = (questionIndex, optionIndex) => {
        const updatedQuestions = [...questionText];
        updatedQuestions[questionIndex].option = updatedQuestions[
            questionIndex
        ].option.filter((_, i) => i !== optionIndex);
        setQuestions(updatedQuestions);
    };

    const handleQuestionNameChange = (index, event) => {
        const updatedQuestions = [...questionText];
        updatedQuestions[index].question = event.target.value;
        setQuestions(updatedQuestions);
    };

    const handleQuestionTypeChange = (index, event) => {
        const updatedQuestions = [...questionText];


        updatedQuestions[index].type = event.target.value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, event) => {
        const updatedQuestions = [...questionText];

        updatedQuestions[questionIndex].option[optionIndex].value = event.target.value;
        setQuestions(updatedQuestions);
    };

    // save question answer
    const handleSaveAnswer = (questionIndex, event) => {
        const updatedQuestions = [...questionText];
        updatedQuestions[questionIndex].answer = event.target.value;
        setQuestions(updatedQuestions);
    };


    const handleSaveAnserKey = (questionIndex) => {
        setAnswerkey(questionIndex);
    };




    const createQuiz = () => {
        delete questionText?.id;
        let error = false;
        // Validation for empty quiz name, description, and question text
        if (!quizName || !description || !questionText || questionText.length === 0) {
            console.error("Quiz name, description, and at least one question are required.");
            return error = true;// Exit function if validation fails
        } else {
            error = false
        }

        // Validation for empty question, type, and answer in each question
        for (const question of questionText) {
            if (!question.question || !question.type || !question.answer) {
                console.error("Question, type, and answer are required for each question.");
                return error = true; // Exit function if validation fails
            } else {
                error = false
            }
        }





        if (!error) {

            let data = {
                quizName: quizName,
                description: description,
                questionText: questionText.map((item) => {
                    return {
                        question: item.question,
                        option: item.option.map((optionText) => optionText.value),
                        questionType: item.type,
                        answer: item.answer
                    }
                })
            }

            createQuizRecord(data).then((res) => {
                if (res.status === 201) {
                    setModalData((prev) => ({ ...prev, showSuccessModal: true, message: res.message }))
                    setTimeout(() => {
                        navigate("/Quiz")
                    }, 2000);
                }
            }).catch((err) => {
                console.log(err);
            })


        }



    }




    useEffect(() => {
        getQuizTypeList().then((res) => {
            if (res.status === 200) {

                setTypeList(res.data || [])
            }

        }).catch((err) => {
            console.log(err);
        })
    }, [])




    return (
        <Container maxWidth="xl" sx={{ position: "relative" }}>
            <Box display={"flex"} pb={3} sx={{ alignItems: "center" }}>

                <Button
                    boxShadow={2}
                    sx={{
                        // background: "#fff",
                        // color: "black",
                        borderRadius: "50%",
                        padding: 0,

                        "&:hover": {
                            background: "none"
                        }

                        // padding: "5px 20px 5px 12px",
                    }}
                    onClick={() => navigate(-1)}
                >
                    <IconButton sx={{ margin: "0px" }}>
                        <ArrowBackIosIcon
                            size="small"
                            color={theme?.palette?.grey[800]}
                            sx={{ fontSize: "16px", color: theme?.palette?.grey[800] }}
                        />
                    </IconButton>
                    {/* {AppStrings?.back} */}
                </Button>
                <Box
                    // pb={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h5">{"Create new quiz"}</Typography>
                </Box>
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
                    {questionText.map((question, index) => {
                        return (
                            <Card sx={{ marginBottom: "10px" }} key={question.id}>
                                <form style={{ padding: "0px" }}>
                                    {index === answerkey && <Typography sx={{ padding: "15px" }} >Choose correct answers</Typography>}
                                    {index === answerkey && <Divider />}
                                    <Box p={2} sx={{ display: "flex", gap: 3 }}>
                                        {index === answerkey ? (
                                            <>{`${answerkey + 1}. ${questionText[answerkey].question}`}</>
                                        ) : (
                                            <TextField
                                                sx={{ width: "70%" }}
                                                variant="outlined"
                                                fullWidth
                                                size="small"
                                                value={question.question}
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
                                                    {typeList.map((type) => {
                                                        return (
                                                            <MenuItem key={type._id} value={type?._id}>
                                                                {type.pattern || "Multiple Choice"}
                                                            </MenuItem>
                                                        )
                                                    })}

                                                    {/* <MenuItem value="Checkbox">
                                                        {AppStrings?.checkbox || "Checkbox"}
                                                    </MenuItem> */}
                                                </Select>
                                            </FormControl>
                                        )}
                                    </Box>
                                    {question.type === "65bc956e471d1efeff9367db" && (
                                        <div style={{ padding: "0 20px 10px 15px" }}>
                                            <InputLabel>Options</InputLabel>
                                            <RadioGroup>
                                                {question.option.map((option, optionIndex) => (
                                                    <div
                                                        key={option.id}
                                                        style={{
                                                            width: "100%",
                                                            display: "flex",
                                                            mb: 1,
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <FormControlLabel
                                                            value={option.value}
                                                            control={<Radio />}
                                                            onChange={(event) => handleSaveAnswer(index, event)}
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


                                                                        {index !== answerkey && <Box
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
                                                                        </Box>}

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
                                                                    <Tooltip title={"Save"}>
                                                                        <SaveOutlinedIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />
                                                                    </Tooltip>
                                                                </IconButton>
                                                            </Box>
                                                        )}
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                            {index !== answerkey && <Button
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
                                            </Button>}

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
                onClick={createQuiz}
            >
                Submit
            </Button>

            <ShowsMessageModal isOpen={modalData.showSuccessModal} setIsOpen={setModalData} message={modalData?.message} />
        </Container>
    );
};

export default CreateQuiz;
