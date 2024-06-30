import type { IncomingMessage, ServerResponse } from "http";
import JWT from "jsonwebtoken";
import { unauthorizedError } from "../utils/errors";

export function checkAuth(req: IncomingMessage, res: ServerResponse) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    unauthorizedError(res);
    return false;
  }

  if (!authHeader.startsWith("Bearer")) {
    unauthorizedError(res);
    return false;
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    unauthorizedError(res);
    return false;
  }
  try {
    const decoded = JWT.verify(token, process.env.SECRET!);
    (req as any).user = decoded;
    return true;
  } catch (error) {
    unauthorizedError(res);
    return false;
  }
}
