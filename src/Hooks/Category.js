import instance from "../Axios/Instance";

const useCategoryApis = () => {
  const getCateogoryList = async () => {
    const Response = await instance.get(`/categoryList`);
    return Response.data;
  };

  const createCategory = async (body) => {
    const response = await instance.post(`/addCategory`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  const updateCategoryRecord = async ({ id, body }) => {
    const response = await instance.put(`/categoryUpdate/${id}`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  };

  const getCategoryRecordDetail = async (id) => {
    const response = await instance.get(`/getInstituteInfo/${id}`);
    return response.data;
  };

  const deleteCategoryRecord = async (id) => {
    const response = await instance.delete(`/deleteCategory/${id}`);
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
