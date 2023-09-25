import { OpenAI } from "openai";

const openai = new OpenAI.OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default openai;

