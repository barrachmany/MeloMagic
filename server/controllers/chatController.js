import OpenAI from "openai";
import env from "dotenv";

env.config();


const createChat = async (req, res) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    
    const message = req.body.message;
    const sessionId = req.body.sessionId;
    const session = req.session

    try{
        session.history = session.history || [];
        session.history.push({ role: 'user', content: message });
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: 'system', content: `User: ${message}` },
                ...session.history
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          
          res.json(response.choices[0].message.content);
    }
    catch (error){
        console.log(error);
    }

    }

export default { createChat };