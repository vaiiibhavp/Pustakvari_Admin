import instance from "../Axios/Instance";
const useNotifiaction = () => {
  // ---------------------NOTIFICATION LIST -----------------------------

  const getNotifiactionList = async (requestParams) => {
    let userTypeBaseUrl;
    if (requestParams?.instituteInfo) {
      userTypeBaseUrl = `/getNotificationList?usertype=Institutes`;
    } else if (requestParams?.userInfo) {
      if (requestParams?.userInfo?.userType === "SUPER_ADMIN") {
        userTypeBaseUrl = `/getNotificationList`;
      } else {
        userTypeBaseUrl = `/getNotificationList?usertype=Users`;
      }
    } else {
      userTypeBaseUrl = `/getNotificationList?usertype=All`;
    }

    let res = await instance.get(userTypeBaseUrl);
    return res.data;
  };

  // ---------------------NOTIFICATION USER TYPES LIST -----------------------------

  const getNotifiactionUserTypeList = async (requestParams) => {
    let res = await instance.get(`getUserTypeList`);
    return res.data;
  };

  // ---------------------NOTIFICATION TYPES LIST -----------------------------

  const getNotifiactionTypeList = async (requestParams) => {
    let res = await instance.get(`getNotificationTypeList`);
    return res.data;
  };

  // ---------------------CREATE NOTIFICATION  -----------------------------

  const createNotifiacation = async (body) => {
    let res = await instance.post(`createNotification`, body);
    return res.data;
  };

  return {
    createNotifiacation,
    getNotifiactionList,
    getNotifiactionUserTypeList,
    getNotifiactionTypeList,
  };
};

export default useNotifiaction;
