import type { IncomingMessage, ServerResponse } from "node:http";
import { sendSuccess } from "../utils/response";
import { Note } from "../model";
import { checkAuth } from "../middlewares/auth";
import { badRequestError, internalServerError } from "../utils/errors";
import { getUserId } from "../model/auth";
import { STATUS_CODES } from "../constants/types";

export async function getNotes(req: IncomingMessage, res: ServerResponse) {
  sendSuccess(res, { data: { notes: await Note.getNotes() } });
}
export function getNote(req: IncomingMessage, res: ServerResponse) {}

export function addNote(req: IncomingMessage, res: ServerResponse) {
  const auth = checkAuth(req, res);
  if (!auth) return;

  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    const userId = getUserId(req);
    const { title, content } = JSON.parse(body);
    if (!title || !content || !userId) {
      return badRequestError(res, "All fields required");
    }
    const note = await Note.addNote({
      title,
      content,
      userId,
    });
    if (!note) {
      return internalServerError(res, "Error creating note");
    }

    sendSuccess(res, {
      statusCode: STATUS_CODES.CREATED,
      data: { note },
    });
  });
}
export function updateNote(req: IncomingMessage, res: ServerResponse) {}
export function deleteNote(req: IncomingMessage, res: ServerResponse) {}
