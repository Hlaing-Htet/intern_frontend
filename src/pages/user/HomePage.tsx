import { useEffect } from "react";

import { useFetchProducts } from "../../hooks/useProductsApi";

const HomePage = () => {
  const { data, isLoading, isError, error, isSuccess, refetch, status } =
    useFetchProducts();

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [isSuccess]);
  console.log(status);
  if (isError) {
    return (
      <p className="flex flex-col items-center justify-center h-screen ">
        {error.message}
      </p>
    );
  }
  if (isLoading) {
    return (
      <p className="flex flex-col items-center justify-center h-screen ">
        loading
      </p>
    );
  }
  const handleRefetch = () => {
    refetch();
  };

  return (
    <div>
      {/* <h1 className="text-6xl font-bold">{number}</h1>
      {isShowCart ? <Outlet context={[setNumber]} /> : null}
      <div className="flex items-start justify-center gap-4 mt-8 ">
        <button onClick={() => setIsShowCart(true)}>on</button>
        <button onClick={() => setIsShowCart(false)}>set</button>
        <input
          type="number"
          value={value}
          min={0}
          max={12}
          onChange={handleChange}
          className="w-20 "
        />
      </div> */}
      {data?.map((item) => (
        <div className="p-4 m-2 bg-blue-300 " key={item.id}>
          {item.title}
        </div>
      ))}
      <button onClick={handleRefetch}>refetch</button>
    </div>
  );
};

export default HomePage;
