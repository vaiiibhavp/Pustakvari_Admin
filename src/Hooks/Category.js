import instance from "../Axios/Instance";

const useCategoryApis = () => {
  const getCateogoryList = async () => {
    const Response = await instance.get(`/categoryList`);
    return Response.data;
  };

  const createCategory = async (body) => {
    const response = await instance.post(`/addCategory`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

  const updateCategoryRecord = async (body, id) => {
    const response = await instance.put(`/updateInstitute/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  };

  const getCategoryRecordDetail = async (id) => {
    const response = await instance.get(`/getInstituteInfo/${id}`);
    return response.data;
  };

  const deleteCategoryRecord = async (id) => {
    const response = await instance.delete(`/deleteInstituteInfo/${id}`);
    return response.data;
  };
  return {
    getCateogoryList,
    createCategory,
    updateCategoryRecord,
    getCategoryRecordDetail,
    deleteCategoryRecord,
  };
};

export default useCategoryApis;
