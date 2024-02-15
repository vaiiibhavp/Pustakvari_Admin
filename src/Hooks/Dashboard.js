import instance from "../Axios/Instance";

const useDashboard = () => {
  const getDashboardData = async () => {
    let res = await instance.get("/dashboardStatics");
    return res.data;
  };
  return {
    getDashboardData,
  };
};

export default useDashboard;
