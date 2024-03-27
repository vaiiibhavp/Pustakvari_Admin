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
    FormGroup,
    Checkbox,
} from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { answerKeySvg } from "../../Assets/AnswerKey";
import useQuiz from "../../Hooks/Quiz";
import ShowsMessageModal from "../../Component/ShowMessageModal";
import { toast } from "react-toastify";
import useEbookApis from "../../Hooks/Ebook";

const CreateQuiz = () => {
    const {
        getLangaugeBookList,
      } = useEbookApis();
    const [quizName, setQuizName] = useState("");
    const [description, setDescription] = useState("");
    const [typeList, setTypeList] = useState([]);
    const [languageList, setLanguageList] = useState([]);
    const [language, setLanguage] = useState(null);
      console.log('language',language);
    const [modalData, setModalData] = useState({
        showSuccessModal: false,
        message: "",
    });

    const [quizTextError, setQuizTextError] = useState(null);
    const [descriptionError, setDescriptionError] = useState(null);
    let { getQuizTypeList, createQuizRecord } = useQuiz();

    const [questionText, setQuestions] = useState([]);
    const [answerkey, setAnswerkey] = useState(null);
    const theme = useTheme();
    const navigate = useNavigate();

    const handleAddQuestion = () => {
        const newQuestion = {
            id: questionText?.length + 1,
            question: "",
            type: "",
            answer: [],
            option: [{ id: 1, value: "", editing: true }],
        };
        setQuestions([...questionText, newQuestion]);
    };

    const handleAddOption = (questionIndex) => {
        const currentOptions = [...questionText[questionIndex].option];

        const newOption = {
            id: currentOptions.length + 1,
            value: "",
            editing: true,
        };

        const newOptions = [...currentOptions, newOption];
        const updatedQuestions = [...questionText];
        updatedQuestions[questionIndex].option = newOptions;
        const lastIndex = currentOptions.length - 1;
        if (
            currentOptions.length > 0 &&
            updatedQuestions[questionIndex].option[lastIndex]?.value?.length > 0
        ) {
            updatedQuestions[questionIndex].option[lastIndex].editing = false;
        }

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

    const handleDeleteQuestion = (questionIndex) => {
        let updatedQuestions = questionText.filter((_, i) => i !== questionIndex);
        setQuestions(updatedQuestions);
    };

    const handleQuestionNameChange = (index, event) => {
        const updatedQuestions = [...questionText];
        updatedQuestions[index].question = event.target.value;
        setQuestions(updatedQuestions);
    };

    const handleQuestionTypeChange = (index, event) => {
        const updatedQuestions = [...questionText];
        updatedQuestions[index].answer = []
        updatedQuestions[index].type = event.target.value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, event) => {
        const updatedQuestions = [...questionText];

        updatedQuestions[questionIndex].option[optionIndex].value =
            event.target.value;
        setQuestions(updatedQuestions);
    };

    // save question answer
    const handleSaveAnswer = (questionIndex, event, value = "", radio = false) => {
        const updatedQuestions = [...questionText];
        // updatedQuestions[questionIndex].answer = event.target.value;
        if(radio){
            updatedQuestions[questionIndex].answer = [value]
        }else{
            const index = updatedQuestions[questionIndex].answer.indexOf(value);
            if (index > -1) { // only splice array when item is found
                updatedQuestions[questionIndex].answer.splice(index, 1); // 2nd parameter means remove one item only
            }
            else{
                updatedQuestions[questionIndex].answer.push(value);
            }
        }
        setQuestions(updatedQuestions);
    };

    const handleSaveAnserKey = (questionIndex) => {
        // const updatedQuestions = [...questionText];

        // const currentOptions = [...questionText[questionIndex].option];
        // const lastIndex = currentOptions.length - 1;
        // if (currentOptions.length > 0 && updatedQuestions[questionIndex].option[lastIndex]?.value?.length > 0) {
        //     updatedQuestions[questionIndex].option[lastIndex].editing = false;
        // }
        // setQuestions(updatedQuestions);

        let currentQuestion = questionText[questionIndex];

        // if (
        //     currentQuestion?.type?.length > 0 &&
        //     currentQuestion?.question?.length > 0
        // ) {
        setAnswerkey(questionIndex);
        // }
    };

    const createQuiz = () => {
        delete questionText?.id;
        let error = false;
        // Validation for empty quiz name, description, and question text
        if (
            !quizName ||
            !description ||
            !questionText ||
            questionText?.length === 0
        ) {
            if (!quizName && !description) {
                setQuizTextError("Quiz text is required");
                setDescriptionError("Description is required");
                toast.dismiss();
                toast.warning("Please provide a name and description for the quiz before continuing", { autoClose: 2000, className: 'custom-toast' })
            }
            if (!quizName) {
                setQuizTextError("Quiz text is required");
                toast.dismiss();
                toast.warning("Please provide a name for the quiz before continuing", { autoClose: 2000, className: 'custom-toast' })
            } else if (!description) {
                setDescriptionError("Description is required");
                toast.dismiss();
                toast.warning("Please provide a description for the quiz before continuing", { autoClose: 2000, className: 'custom-toast' })
            } else {
                toast.dismiss();
                toast.warning("Please add questions to the quiz before continuing.", { autoClose: 2000, className: 'custom-toast' })
            }


            return (error = true); // Exit function if validation fails
        } else {
            error = false;
        }

        // Validation for empty question, type, and answer in each question
        for (const question of questionText) {
            if (!question.question || !question.type || !question.answer) {
                toast.dismiss();
                toast.warning(`Please review all questions and answers to ensure they are set up properly.`, { autoClose: 2000, className: 'custom-toast' })
                return (error = true); // Exit function if validation fails
            } else {
                error = false;
            }
        }

        if (!error) {
            let data = {
                quizName: quizName,
                language: language || '',
                description: description,
                questionText: questionText.map((item) => {
                    return {
                        question: item.question,
                        option: item.option.map((optionText) => optionText.value),
                        questionType: item.type,
                        answer: item.answer,
                    };
                }),
            };

            createQuizRecord(data)
                .then((res) => {
                    if (res.status === 201) {
                        setModalData((prev) => ({
                            ...prev,
                            showSuccessModal: true,
                            message: res.message,
                        }));
                        setTimeout(() => {
                            navigate("/Quiz");
                        }, 2000);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        getLangaugeBookList().then((res) => {
            if (res.status === 200) {
                setLanguageList(res.data || []);
            }
        })
    },[])

    useEffect(() => {
        getQuizTypeList()
            .then((res) => {
                if (res.status === 200) {
                    setTypeList(res.data || []);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => { }, [answerkey]);

    return (
        <Container maxWidth="xl" sx={{ position: "relative", textAlign: "center" }}>
            <Box display={"flex"} pb={3} sx={{ alignItems: "center" }}>
                <Button
                    boxShadow={2}
                    sx={{
                        // background: "#fff",
                        // color: "black",
                        borderRadius: "50%",
                        padding: 0,

                        "&:hover": {
                            background: "none",
                        },

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
                <Grid item xs={12} md={4} lg={4}>
                    <Box>
                        <Typography sx={{ textAlign: "start" }}>Quiz Name</Typography>
                        <TextField
                            fullWidth
                            size="small"
                            sx={{ mt: 0.5 }}
                            variant="outlined"
                            margin="normal"
                            type="text"
                            error={Boolean(quizTextError)}
                            placeholder="Enter quiz name..."
                            value={quizName}
                            onChange={(e) => {
                                setQuizTextError(null);
                                setQuizName(e.target.value);
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Box>
                        <Typography sx={{ textAlign: "start" }}>Description</Typography>
                        <TextField
                            fullWidth
                            sx={{ mt: 0.5 }}
                            size="small"
                            variant="outlined"
                            margin="normal"
                            type="text"
                            error={Boolean(descriptionError)}
                            placeholder="Enter quiz description..."
                            value={description}
                            onChange={(e) => {
                                setDescriptionError(null);
                                setDescription(e.target.value);
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                        }}
                    >
                        <Typography style={{ padding: "0 0 5px 0" }}>
                            Language:
                        </Typography>
                        <FormControl
                            sx={{ marginTop: "0px" }}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        >
                            <Select
                            id="bookLanguage"
                            size="small"
                            name="bookLanguage"
                            value={language}
                            onChange={(e) => {
                                setLanguage(e.target.value);
                            }}
                            >
                            {languageList?.map((category) => (
                                <MenuItem key={category?._id} value={category?._id}>
                                {category.language}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    {questionText.map((question, index) => {
                        return (
                            <Card sx={{ marginBottom: "10px" }} key={question.id}>
                                <form style={{ padding: "0px" }}>
                                    {index === answerkey && (
                                        <Typography sx={{ padding: "15px", textAlign: "start" }}>
                                            Choose correct answers
                                        </Typography>
                                    )}
                                    {index === answerkey && <Divider />}
                                    <Box p={2} sx={{ display: "flex", gap: 3 }}>
                                        {index === answerkey ? (
                                            <Typography sx={{ fontWeight: "600" }}>{`Q ${answerkey + 1} : ${questionText[answerkey].question
                                                }`}</Typography>
                                        ) : (
                                            <TextField
                                                sx={{ width: "70%" }}
                                                variant="outlined"
                                                fullWidth
                                                placeholder="Enter question here..."
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
                                                placeholder="Select Type"
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
                                                        );
                                                    })}

                                                    {/* <MenuItem value="Checkbox">
                                                        {AppStrings?.checkbox || "Checkbox"}
                                                    </MenuItem> */}
                                                </Select>
                                            </FormControl>
                                        )}
                                    </Box>
                                    {question.type === "65bc956e471d1efeff9367db" ? (
                                        <div style={{ padding: "0 20px 10px 15px" }}>
                                            <InputLabel sx={{ textAlign: "start" }}>
                                                Options
                                            </InputLabel>
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
                                                            onChange={(event) =>
                                                                handleSaveAnswer(index, event, option.value, true)
                                                            }
                                                            disabled={index === answerkey ? false : true}
                                                            label={
                                                                option.editing ? (
                                                                    <TextField
                                                                        variant="outlined"
                                                                        size="small"
                                                                        placeholder="Enter Option Name Here..."
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

                                                                        {index !== answerkey && (
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
                                                                                        handleDeleteOption(
                                                                                            index,
                                                                                            optionIndex
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <DeleteOutlineOutlinedIcon fontSize="small" />
                                                                                </IconButton>
                                                                            </Box>
                                                                        )}
                                                                    </Box>
                                                                )
                                                            }
                                                            style={{ marginRight: "20px" }}
                                                        />
                                                        {option.editing && (
                                                            <Box sx={{ marginRight: "20px" }}>
                                                                <IconButton
                                                                    // title={option.value?.length === 0 && "Enter something in op"}
                                                                    onClick={() => {
                                                                        if (option.value?.length > 0) {
                                                                            handleSaveOption(index, optionIndex);
                                                                        }
                                                                    }}
                                                                >
                                                                    <Tooltip title={"Save"}>
                                                                        <SaveOutlinedIcon
                                                                            fontSize="small"
                                                                            sx={{
                                                                                color: theme.palette.secondary.main,
                                                                            }}
                                                                        />
                                                                    </Tooltip>
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
                                                        )}
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                            <Box
                                                sx={{
                                                    textAlign: "start",
                                                }}
                                            >
                                                {index !== answerkey && (
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
                                                )}
                                            </Box>
                                        </div>
                                    ): question.type === "65bc953a471d1efeff9367d7" ?
                                    <div style={{ padding: "0 20px 10px 15px" }}>
                                        <InputLabel sx={{ textAlign: "start" }}>Options</InputLabel>
                                        <FormGroup>
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
                                                        control={<Checkbox />}
                                                        checked={question.answer.includes(option.value)} // Assuming each option has a 'selected' property
                                                        onChange={(event) => handleSaveAnswer(index, event, option.value)}
                                                        disabled={index === answerkey ? false : true}
                                                        label={
                                                            option.editing ? (
                                                                <TextField
                                                                    variant="outlined"
                                                                    size="small"
                                                                    placeholder="Enter Option Name Here..."
                                                                    value={option.value}
                                                                    onChange={(event) =>
                                                                        handleOptionChange(index, optionIndex, event)
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

                                                                    {index !== answerkey && (
                                                                        <Box sx={{ position: "absolute", right: 0 }}>
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
                                                                    )}
                                                                </Box>
                                                            )
                                                        }
                                                        style={{ marginRight: "20px" }}
                                                    />
                                                    {option.editing && (
                                                        <Box sx={{ marginRight: "20px" }}>
                                                            <IconButton
                                                                onClick={() => {
                                                                    if (option.value?.length > 0) {
                                                                        handleSaveOption(index, optionIndex);
                                                                    }
                                                                }}
                                                            >
                                                                <Tooltip title={"Save"}>
                                                                    <SaveOutlinedIcon
                                                                        fontSize="small"
                                                                        sx={{
                                                                            color: theme.palette.secondary.main,
                                                                        }}
                                                                    />
                                                                </Tooltip>
                                                            </IconButton>
                                                            <IconButton
                                                                type="button"
                                                                onClick={() => handleDeleteOption(index, optionIndex)}
                                                            >
                                                                <DeleteOutlineOutlinedIcon fontSize="small" />
                                                            </IconButton>
                                                        </Box>
                                                    )}
                                                </div>
                                            ))}
                                        </FormGroup>
                                        <Box
                                            sx={{
                                                textAlign: "start",
                                            }}
                                        >
                                            {index !== answerkey && (
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
                                            )}
                                        </Box>
                                    </div>             
                                    : null}
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
                                        {console.log(questionText[index], "testttt")}
                                        <Button
                                            // color="secondary"
                                            onClick={() => handleSaveAnserKey(index)}
                                            sx={
                                                questionText[index]?.question?.length > 0 &&
                                                    questionText[index]?.type?.length > 0 &&
                                                    questionText[index]?.option?.length > 0
                                                    ? {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        color: theme.palette.secondary.main,
                                                    }
                                                    : {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        color: theme.palette.grey[500],
                                                        cursor: "not-allowed",
                                                    }
                                            }
                                        >
                                            <span
                                                sx={{
                                                    pe: 2,
                                                    stroke: `${questionText[index]?.question?.length > 0 &&
                                                        questionText[index]?.type?.length > 0 &&
                                                        questionText[index]?.option?.length > 0
                                                        ? theme.palette.secondary.main
                                                        : theme.palette.grey[200]
                                                        }`,
                                                }}
                                            >
                                                {answerKeySvg}
                                            </span>{" "}
                                            Answer key
                                        </Button>
                                        <Button variant="primary">
                                            {" "}
                                            <IconButton
                                                type="button"
                                                onClick={() => handleDeleteQuestion(index)}
                                            >
                                                <DeleteOutlineOutlinedIcon fontSize="small" />
                                            </IconButton>
                                        </Button>
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
                sx={
                    false
                        ? {
                            position: "fixed",
                            bottom: 10,
                            borderRadius: "18px",
                            padding: "5px 30px",
                            background: theme.palette.grey[300],
                            color: theme.palette.grey[500],
                        }
                        : {
                            position: "fixed",
                            bottom: 10,
                            borderRadius: "18px",
                            padding: "5px 30px",
                            background: theme.palette.primary.main,
                            color: "#fff",
                        }
                }
                type="submit"
                variant="contained"
                onClick={createQuiz}
            >
                Submit
            </Button>

            <ShowsMessageModal
                isOpen={modalData.showSuccessModal}
                setIsOpen={setModalData}
                message={modalData?.message}
            />
        </Container>
    );
};

export default CreateQuiz;
