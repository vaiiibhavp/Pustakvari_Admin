import instance from "../Axios/Instance";
const useNotifiaction = () => {
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

    console.log(userTypeBaseUrl, "log");
    let res = await instance.get(userTypeBaseUrl);
    return res.data;
  };
  return {
    getNotifiactionList,
  };
};

export default useNotifiaction;
