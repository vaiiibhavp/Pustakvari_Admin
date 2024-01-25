import instance from "../Axios/Instance";
const useInstitues = () => {
  const getInstituteList = async () => {
    const Response = await instance.get(`/instituteList`);
    return Response.data;
  };

  const createInstituteRecord = async (body) => {
    const response = await instance.post(`/createInstitute`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const updateInstituteRecord = async (body, id) => {
    const response = await instance.put(`/updateInstitute/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const getInstituteRecordDetail = async (id) => {
    const response = await instance.get(`/getInstituteInfo/${id}`);
    return response;
  };

  const deleteInstituteRecord = async (id) => {
    const response = await instance.delete(`/deleteInstituteInfo/${id}`);
    return response;
  };

  const onStatusChangeInstitute = async (id, body) => {
    const response = await instance.put(`/instituteStatus/${id}`, body);
    return response;
  };

  return {
    getInstituteList,
    createInstituteRecord,
    updateInstituteRecord,
    getInstituteRecordDetail,
    deleteInstituteRecord,
    onStatusChangeInstitute,
  };
};

export default useInstitues;
