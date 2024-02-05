import instance from "../Axios/Instance";
const useNotifiaction = () => {
  const getNotifiactionList = async () => {
    let res = await instance.get("/getNotificationList");
    return res.data;
  };
  return {
    getNotifiactionList,
  };
};

export default useNotifiaction;
