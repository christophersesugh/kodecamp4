import zlib from "node:zlib";
import fs from "node:fs";

const rS = fs.createReadStream("name.txt");
const gzip = zlib.createGzip();
const wS = fs.createWriteStream("./zip/name.txt.gz");

rS.pipe(gzip).pipe(wS);

wS.on("error", (err) => {
  throw new Error("Opps, an error occured.", err);
});
