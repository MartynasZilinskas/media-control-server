import express from "express";
import path from "path";

import { withMedia } from "./modules/media";

const PORT: number | string = process.env.PORT || 3000;

const app = express();

app.use(withMedia());

app.use("/", express.static(path.join(__dirname, "wwwroot")));

app.listen(PORT, () => console.info(`Server is online ${PORT} port.`));
