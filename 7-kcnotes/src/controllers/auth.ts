import JWT from "jsonwebtoken";
import type { IncomingMessage, ServerResponse } from "http";
import { badRequestError, internalServerError } from "../utils/errors";
import { User } from "../model";
import { Scrypt } from "../utils/scrypt";
import { sendSuccess } from "../utils/response";
import { STATUS_CODES } from "../constants/types";
import { checkAuth } from "../middlewares/auth";
import { getUserNotes } from "../model/notes";

export function signup(req: IncomingMessage, res: ServerResponse) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      const { username, password } = JSON.parse(body);

      if (!username || !password) {
        return badRequestError(res, "Username and password are required.");
      }
      if (username.length < 3) {
        return badRequestError(res, "Username must be atleat 3 chars.");
      }
      if (password.length < 6) {
        return badRequestError(res, "Password must be atleat 6 chars.");
      }
      const existingUser = await User.getUser(username);
      if (existingUser) {
        return badRequestError(res, "User already exist.");
      }
      const hashedPassword = await Scrypt.hash(password);
      const user = {
        username,
        password: hashedPassword,
      };
      const createdUser = await User.createUser(user);
      if (!createdUser) return internalServerError(res, "Error creating user.");
      const token = JWT.sign(createdUser, process.env.SECRET!, {
        expiresIn: "7d",
      });
      sendSuccess(res, {
        statusCode: STATUS_CODES.CREATED,
        message: "sign up success",
        data: { token },
      });
    } catch (error) {
      internalServerError(res);
    }
  });
}
export function signin(req: IncomingMessage, res: ServerResponse) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      const { username, password } = JSON.parse(body);
      if (!username || !password) {
        return badRequestError(res, "Username and password are required.");
      }

      const existingUser = await User.getUser(username);
      if (!existingUser) {
        return badRequestError(res, "Invalid credentials.");
      }

      const isValid = await Scrypt.compare(existingUser.password, password);

      if (!isValid) {
        return badRequestError(res, "Invalid credentials.");
      }

      const payload = {
        id: existingUser.id,
        username: existingUser.username,
      };

      const token = JWT.sign(payload, process.env.SECRET!, {
        expiresIn: "7d",
      });

      sendSuccess(res, {
        message: "signin success",
        data: { token },
      });
    } catch (error) {
      internalServerError(res);
    }
  });
}
export async function me(req: IncomingMessage, res: ServerResponse) {
  const auth = checkAuth(req, res);
  if (!auth) return;

  const id = (req as any).user.id;
  const username = (req as any).user.username;

  const notes = await getUserNotes(id);

  sendSuccess(res, {
    data: {
      user: {
        id,
        username,
        notes,
      },
    },
  });
}
export function signout(res: ServerResponse) {
  sendSuccess(res, {
    message: "Signout success",
    data: { token: null },
  });
}
