import { ServerResponse } from "node:http";
import { STATUS_CODES } from "../constants/types";

/**
 * Send response to client
 * @param {ServerResponse} res - ServerResponse
 * @param {number} statusCode - number
 * @param {Object} data - object
 * @returns {void}
 */
export function sendResponse(
  res: ServerResponse,
  statusCode: number,
  data: object
): void {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

interface ISendResponse {
  statusCode?: number;
  message?: string;
  data?: object | null;
}
export function sendSuccess(
  res: ServerResponse,
  {
    statusCode = STATUS_CODES.OK,
    message = "Success",
    data = null,
  }: ISendResponse
) {
  sendResponse(res, statusCode, { success: true, message, data: data ?? null });
}

interface ISendError {
  statusCode?: number;
  message?: string;
  data?: object | null;
}
export function sendError(
  res: ServerResponse,
  {
    statusCode = STATUS_CODES.INTERNAL_SERVER_ERROR,
    message = "Internal server error.",
  }: ISendError
) {
  sendResponse(res, statusCode, { success: false, message });
}
