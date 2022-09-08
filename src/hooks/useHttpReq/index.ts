import axios from "axios";
import { useEffect, useState } from "react";
import { useHttpReqParamsType, useHttpReqReturnType } from "./types";

const useHttpReq = ({
  path,
  method = "get",
}: useHttpReqParamsType): useHttpReqReturnType => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({ url: path, method })
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [method, path]);

  return { data, error, loading };
};

export default useHttpReq;
