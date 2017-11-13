import * as http from "http";
import Debug from "debug";
import app from "./app";

const PORT = 3000;
const debug = new Debug("demo-overflow:root");

app.listen(PORT, () => {
  debug(`Server runing at port ${PORT}`);
});
