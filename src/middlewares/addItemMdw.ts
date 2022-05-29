import { handleErrorResponse } from "../utils/handleResponse.ts";

export const validateRequestBody = async (ctx: any, next: any) => {
  if (!ctx.request.hasBody) {
    handleErrorResponse(ctx, {
      error: 400,
      message: "Bad Request",
    });
    return;
  }

  const body = await ctx.request.body().value;

  if (!body.title) {
    handleErrorResponse(ctx, {
      error: 400,
      message: "Title is missing",
    });
    return;
  }

  await next();
};
