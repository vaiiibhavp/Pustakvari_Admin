import instance from "../Axios/Instance";

const useSubscription = () => {
  const getSubscriptonList = async () => {
    const Response = await instance.get(`/subscriptionList`);
    return Response.data;
  };

  const getSubscriptonDurationList = async () => {
    const Response = await instance.get(`/subscriptionDurationList`);
    return Response.data;
  };

  const createSubscription = async (body) => {
    const response = await instance.post(`/addSubscription`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const updateSubscripton = async (body, id) => {
    const response = await instance.put(`/updateSubscription/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const getSubscriptionDetail = async (id) => {
    const response = await instance.get(`/getSubscriptionInfo/${id}`);
    return response;
  };

  const deleteSubscription = async (id) => {
    const response = await instance.delete(`/deleteSubscription/${id}`);
    return response;
  };

  return {
    getSubscriptonList,
    deleteSubscription,
    getSubscriptionDetail,
    updateSubscripton,
    createSubscription,
    getSubscriptonDurationList,
  };
};

export default useSubscription;
