import type { IncomingMessage, ServerResponse } from "node:http";
import { HTTP_METHODS, PATHS } from "../constants/types";
import { notFoundError } from "../utils/errors";
import { formatRequestUrl } from "../utils/helpers";
import { me, signin, signout, signup } from "../controllers";

export function handleAuth(req: IncomingMessage, res: ServerResponse) {
  const { method, path } = formatRequestUrl(req);
  if (path === `${PATHS.AUTH}/signup` && method === HTTP_METHODS.POST) {
    signup(req, res);
  } else if (path === `${PATHS.AUTH}/signin` && method === HTTP_METHODS.POST) {
    signin(req, res);
  } else if (path === `${PATHS.AUTH}/me` && method === HTTP_METHODS.GET) {
    me(req, res);
  } else if (path === `${PATHS.AUTH}/signout` && method === HTTP_METHODS.GET) {
    signout(res);
  } else {
    notFoundError(res, "Auth route not found");
  }
}
