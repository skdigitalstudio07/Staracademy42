import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
    res.send("⭐ Star Academy AI Backend is Running!");
});

app.post("/api/ask", async (req, res) => {

    try {

        const { subject, question } = req.body;

        if (!question || !question.trim()) {
            return res.status(400).json({
                error: "Question is required"
            });
        }

        const prompt = `
You are Star Academy AI Teacher.

Subject: ${subject || "All Subjects"}

Student Question:
${question}

Answer the student clearly and accurately.

Rules:
- Explain in simple language.
- If it is Mathematics, show step-by-step working.
- If it is Reasoning, explain the logic.
- If it is History, Geography, Science or GK, give a clear explanation.
- For Hindi or English, explain grammar/language where appropriate.
- If the question is ambiguous, ask for clarification.
- Do not pretend to know something if you are uncertain.
- Prefer Hindi/Hinglish when the student's question is in Hindi/Hinglish.
`;

        const completion = await client.responses.create({
            model: "gpt-5-mini",
            input: prompt
        });

        res.json({
            answer: completion.output_text
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "AI service temporarily unavailable."
        });

    }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Star Academy AI running on port ${PORT}`);
});
