import OpenAI from "openai";
import { OPENAI_API_KEY } from "";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export default function Home() {
  // This is the function that will be called when the button is clicked
  const generateText = async () => {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello</div>
    </main>
  );
}
