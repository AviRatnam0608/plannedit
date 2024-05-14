"use client";
import React, { useState } from "react";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "../../secrets";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const ChatPage = () => {
  const [conversation, setConversation] = useState<
    { role: string; content: string | null }[]
  >([]);

  const [userMessage, setUserMessage] = useState<string>("");

  const generateResponse = async (userMessage: string) => {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "user", content: userMessage },
        { role: "assistant", content: "" }, // Placeholder for system response
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(completion);
    const assistantResponse = completion.choices[0].message["content"];
    setConversation([
      ...conversation,
      { role: "assistant", content: assistantResponse },
    ]);
  };

  const handleButtonClick = async () => {
    await generateResponse(userMessage);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {conversation.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user" ? "user-message" : "assistant-message"
            }
          >
            {message.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Type a message"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 text-md text-gray-800"
        />
      </div>
      <button
        onClick={handleButtonClick}
        className="border border-red-200 rounded-lg p-2 text-md text-red-800 mt-4 hover:bg-red-200 hover:text-red-800"
      >
        Click to see something
      </button>
    </main>
  );
};

export default ChatPage;
