const useNotifiaction = () => {
  const getNotifiactionType = async () => {
    let res = await instance.get();
  };
  return {
    getNotifiactionType,
    getNotifiactionList,
  };
};
