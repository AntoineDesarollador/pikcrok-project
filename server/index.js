
import express from "express";
import "dotenv/config";




import cors from "cors";



import router from "./router/index.js";

const app = express();
const PORT = process.env.PORT || process.env.LOCAL_PORT;

app
    .use(cors({ origin: "*" }))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    .use(router);




app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Listening at http://localhost:${PORT}`);
});