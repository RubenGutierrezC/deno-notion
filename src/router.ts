import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { addPage } from "./services.ts";
import { validateRequestBody } from "./middlewares/addItemMdw.ts";
import {
  handleOkResponse,
  handleErrorResponse,
} from "./utils/handleResponse.ts";

export const router = new Router();

router.post("/add-item", validateRequestBody, async (ctx) => {
  try {
    const body = await ctx.request.body().value;

    await addPage(body);

    handleOkResponse(ctx, {
      status: 201,
      message: "Item added successfully",
    });
  } catch (error) {
    handleErrorResponse(ctx, {
      status: 500,
      message: "Internal Server Error",
      error,
    });
  }
});
