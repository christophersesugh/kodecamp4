import path from "node:path";
import fs from "node:fs";
import http, { IncomingMessage, ServerResponse } from "node:http";
import { handleAuth } from "./routes";
import { formatRequestUrl } from "./utils/helpers";
import { HTTP_METHODS, PATHS, STATUS_CODES } from "./constants/types";
import { notFoundError } from "./utils/errors";
import { handleNotes } from "./routes/notes";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const htmlFilePath = path.join(__dirname, "../public", "index.html");
const htmlFileContent = fs.readFileSync(htmlFilePath, "utf8");

function sendHTML(res: ServerResponse, html: string) {
  res.writeHead(STATUS_CODES.OK, { "Content-Type": "text/html" });
  res.write(html);
  res.end();
}

function serverHandler(req: IncomingMessage, res: ServerResponse) {
  const { method, path } = formatRequestUrl(req);
  if (path === PATHS.INDEX && method === HTTP_METHODS.GET) {
    sendHTML(res, htmlFileContent);
  } else if (path.startsWith(PATHS.AUTH)) {
    handleAuth(req, res);
  } else if (path.startsWith(PATHS.NOTES)) {
    handleNotes(req, res);
  } else {
    notFoundError(res, "Route not found");
  }
}

const app = http.createServer(serverHandler);

export { app };
