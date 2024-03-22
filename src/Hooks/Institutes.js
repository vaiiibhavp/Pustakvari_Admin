import instance from "../Axios/Instance";
const useInstitues = () => {
  const getInstituteList = async () => {
    const Response = await instance.get(`/instituteList`);
    return Response.data;
  };

  const createInstituteRecord = async (body) => {
    const response = await instance.post(`/createInstitute`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  const updateInstituteRecord = async (body, id) => {
    const response = await instance.put(`/updateInstitute/${id}`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  const getInstituteBookList = async (id) => {
    const Response = await instance.get(`/instituteBookList/${id}`);
    return Response.data;
  };


  const assignInstituteBook = async (id,bookId) => {
    const response = await instance.post(`/assignBooktoInstitute/${id}?bookId=${bookId}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  const deleteInstituteBook = async (id,bookId) => {
    const response = await instance.delete(`/deleteInstituteBook/${id}?bookId=${bookId}`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  const getInstituteRecordDetail = async (id) => {
    const response = await instance.get(`/getInstituteInfo/${id}`);
    return response.data;
  };

  const deleteInstituteRecord = async (id) => {
    const response = await instance.delete(`/deleteInstituteInfo/${id}`);
    return response.data;
  };

  const onStatusChangeInstitute = async ({ id, params }) => {
    const response = await instance.put(
      `/instituteStatus/${id}?activeStatus=${params}`
    );
    return response.data;
  };

  return {
    getInstituteList,
    createInstituteRecord,
    updateInstituteRecord,
    getInstituteRecordDetail,
    deleteInstituteRecord,
    onStatusChangeInstitute,
    assignInstituteBook,
    deleteInstituteBook,
    getInstituteBookList
  };
};

export default useInstitues;
