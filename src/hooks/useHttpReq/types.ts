type methodType = "get" | "post" | "put" | "delete";

export interface useHttpReqParamsType {
  path: string;
  method?: methodType;
}

export interface useHttpReqReturnType {
  data?: any;
  error?: any;
  loading?: boolean;
}
