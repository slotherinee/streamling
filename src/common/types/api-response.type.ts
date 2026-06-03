export type ApiOkResponse<T> = {
  status: 'ok';
  data: T;
};

export type ApiErrorResponse = {
  status: 'error';
  statusCode: number;
  message: string;
  timestamp: string;
};

export type ApiResponse<T> = ApiOkResponse<T> | ApiErrorResponse;
