import OpenAI from "openai";
import env from "dotenv";
import lyricEngine from "../common/lyricEngine.js";

env.config();


const createChat = async (req, res) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const message = req.body.message;
    const session = req.session

    try {
        session.history = session.history || [];
        session.history.push({ role: 'user', content: message });
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: 'system', content: `You are a song writer` },
                ...session.history
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        // lyricEngine.calculateLyricsSimilarity('I am a song writer', response.choices[0].message.content)
        res.json(response.choices[0].message.content);
    }
    catch (error) {
        console.log(error);
    }

}

export default { createChat };