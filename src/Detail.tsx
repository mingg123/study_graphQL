import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Query } from "react-apollo";
const Detail = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.moveId}</div>;
};
export default Detail;
