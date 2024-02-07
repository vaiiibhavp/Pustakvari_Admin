import instance from "../Axios/Instance";

const useQuiz = () => {
  const getQuizTypeList = async () => {
    const Response = await instance.get(`/getQuestionType`);
    return Response.data;
  };

  const getAllQuizes = async () => {
    const Response = await instance.get(`/getQuizList`);
    return Response.data;
  };

  const createQuizRecord = async (data) => {
    const Response = await instance.post(`/addQuiz`, data);
    return Response.data;
  };

  const deleteQuizRecord = async (id) => {
    const response = await instance.delete(`/deleteQuiz/${id}`);
    return response.data;
  };

  return {
    getAllQuizes,
    createQuizRecord,
    getQuizTypeList,
    deleteQuizRecord,
  };
};

export default useQuiz;
