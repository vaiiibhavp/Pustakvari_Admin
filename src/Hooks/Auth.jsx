import instance from "../Axios/Instance";

const useAuthApis = () => {
    const userLogin = async (params) => {
        let res = await instance.post(`/userLogin`, params);
        return res.data;
    };

    const registerUser = async (body) => {
        let Response = await instance.post(`api/register`, body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return Response;
    };

    const authLogOut = async () => {
        let res = await instance.post(`/api/logout`, {
            headers: {
                Accept: "application/json",
            },
        });
        return res;
    };

    const resetPassword = async (paramsBody) => {
        let res = await instance.post(`/api/reset_password`, paramsBody);

        return res.data;
    };

    const forgotPassword = async (body) => {
        let res = await instance.post(`/api/forget_password`, body, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return res.data;
    };

    const getUserProfile = async () => {
        let res = await instance.get(`/users/profile`);
        return res.data;
    };

    return {
        resetPassword,
        registerUser,
        forgotPassword,
        userLogin,
        getUserProfile,
        authLogOut,
    };
};

export default useAuthApis;
