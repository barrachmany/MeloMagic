import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import OpenAI from "openai";
import env from "dotenv";


env.config();

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//         {
//             "role": "user",
//             "content": "hello, how are you?"
//         }
//     ],
//     temperature: 1,
//     max_tokens: 256,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
// });

// console.log(response.data.choices[0].message.content);

const initApp = () => {
    const promise = new Promise((resolve) => {

        const db = mongoose.connection;
        db.once("open", () => console.log("Connected to Database"));
        db.on("error", (error) => console.error(error));
        const url = process.env.DB_URL;

        mongoose.connect(url).then(() => {
            const app = express();
            
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use((req, res, next) => {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Methods", "*");
                res.header("Access-Control-Allow-Headers", "*");
                res.header("Access-Control-Allow-Credentials", "true");
                next();
            })

            app.get("/", (rec, res) => {
                res.send("hello word")
            });

            resolve(app);
        });
    });
    return promise;
};

export default initApp;