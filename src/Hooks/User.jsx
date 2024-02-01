import instance from "../Axios/Instance";

const UseUserApis = () => {
  const getUsers = async () => {
    const Response = await instance.get(`/userList`);
    return Response;
  };

  const createUser = async (body) => {
    const response = await instance.post(`/userSingup`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const updateUser = async (body, id) => {
    const response = await instance.put(`/updateUser/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const getUserInfo = async (id) => {
    const response = await instance.get(`/getUserInfo/${id}`);
    return response;
  };

  const deleteUserInfo = async (id) => {
    const response = await instance.delete(`/deleteUserInfo/${id}`);
    return response;
  };

  const changeUserStatus = async ({ id, params }) => {

    console.log(id, params);
    const response = await instance.put(`userStatus/${id}?activeStatus=${params?.activeStatus}`);
    return response;
  };

  return {
    createUser,
    getUsers,
    updateUser,
    getUserInfo,
    deleteUserInfo,
    changeUserStatus,
  };
};

export default UseUserApis;
