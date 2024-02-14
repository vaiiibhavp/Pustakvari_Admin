import { useSelector } from "react-redux";

const useUserTypeName = () => {
  let {
    user: { userInfo },
  } = useSelector((state) => state.AuthUser);

  let InstituteAdmin = userInfo?.userType === "INSTITUTE" ? true : false;

  return InstituteAdmin;
};

export default useUserTypeName;
