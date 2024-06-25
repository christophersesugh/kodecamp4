import type { IncomingMessage, ServerResponse } from "node:http";
import { formatRequestUrl } from "../utils/helpers";
import { HTTP_METHODS, PATHS } from "../constants/types";
import { notFoundError } from "../utils/errors";
import {
  addNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../controllers";

export function handleNotes(req: IncomingMessage, res: ServerResponse) {
  const { method, path } = formatRequestUrl(req);
  if (path === PATHS.NOTES && method === HTTP_METHODS.GET) {
    getNotes(req, res);
  } else if (path === PATHS.NOTES && method === HTTP_METHODS.POST) {
    addNote(req, res);
  } else if (
    path.startsWith(`${PATHS.NOTES}/`) &&
    method === HTTP_METHODS.GET
  ) {
    getNote(req, res);
  } else if (
    path.startsWith(`${PATHS.NOTES}/`) &&
    method === HTTP_METHODS.PATCH
  ) {
    updateNote(req, res);
  } else if (
    path.startsWith(`${PATHS.NOTES}/`) &&
    method === HTTP_METHODS.DELETE
  ) {
    deleteNote(req, res);
  } else {
    notFoundError(res, "Notes route not found.");
  }
}
