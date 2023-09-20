


import React from "react";

import {  useGetCrokCategoryQuery } from "../../store/slice/service/crokAPI.js";


function HOC({ child }) {
    const Child = child;


    const { data, isError, isLoading, isFetching, isSuccess } =  useGetCrokCategoryQuery();
  

    return (
        <>
            { (isLoading  || isFetching )  && <p>loading</p>}
            { isError  && <p>not found 404</p>}
            {isSuccess  && (
              <Child data={data}/>
            )}
        </>
    );
}

export default HOC;