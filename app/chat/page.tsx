import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: message,
    });

    return new Response(
      JSON.stringify({ reply: response.output_text }),
      { status: 200 }
    );

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({ error: "AI failed" }),
      { status: 500 }
    );
  }
}