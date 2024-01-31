import instance from "../Axios/Instance";
const useEbookApis = () => {
  const getBooksList = async () => {
    const Response = await instance.get(`/getEbookList`);
    return Response.data;
  };
  const getTypeBookList = async () => {
    const Response = await instance.get(`/ebookTypeList`);
    return Response.data;
  };

  const createBookRecord = async (body) => {
    const response = await instance.post(`/createEbook`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

  const updateBookRecord = async (body, id) => {
    const response = await instance.put(`/updateEbook/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

  const getBookRecordDetail = async (id) => {
    const response = await instance.get(`/getEbookInfo/${id}`);
    return response.data;
  };

  const deleteBookRecord = async (id) => {
    const response = await instance.delete(`/deleteEbook/${id}`);
    return response.data;
  };

  return {
    getBooksList,
    getTypeBookList,
    createBookRecord,
    updateBookRecord,
    getBookRecordDetail,
    deleteBookRecord,
  };
};

export default useEbookApis;