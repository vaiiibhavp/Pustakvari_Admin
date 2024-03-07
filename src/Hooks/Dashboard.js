import instance from "../Axios/Instance";

const useDashboard = () => {
  const getDashboardData = async (userInfo) => {
    let hasInstitute = userInfo?.userType === "INSTITUTE";
    let res = await instance.get(
      hasInstitute
        ? `dashboardStatics?instituteId=${userInfo?._id}`
        : "/dashboardStatics"
    );
    return res.data;
  };
  return {
    getDashboardData,
  };
};

export default useDashboard;
