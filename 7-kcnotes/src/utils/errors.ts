import type { ServerResponse } from "node:http";
import { sendError } from "./response";
import { STATUS_CODES } from "../constants/types";

export function notFoundError(
  res: ServerResponse,
  message: string = "Not found."
) {
  sendError(res, { statusCode: STATUS_CODES.NOT_FOUND, message });
}

export function badRequestError(
  res: ServerResponse,
  message: string = "Bad Request."
) {
  sendError(res, { statusCode: STATUS_CODES.BAD_REQUEST, message });
}

export function unauthorizedError(
  res: ServerResponse,
  message: string = "Unauthorized."
) {
  sendError(res, { statusCode: STATUS_CODES.UNAUTHORIZED, message });
}

export function internalServerError(
  res: ServerResponse,
  message: string = "Internal server error."
) {
  sendError(res, { statusCode: STATUS_CODES.INTERNAL_SERVER_ERROR, message });
}
