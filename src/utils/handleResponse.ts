export const handleOkResponse = (
  ctx: any,
  { status = 200, data = {}, message = "ok" }
) => {
  ctx.response.status = status;
  ctx.response.body = {
    message,
    data,
  };
};

export const handleErrorResponse = (
  ctx: any,
  { error = {}, message = "SEVER ERROR", status = 500 }
) => {
  ctx.response.status = status;
  ctx.response.body = {
    message,
    error,
  };
};
