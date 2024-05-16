"use client";
import React, { useEffect, useState } from "react";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "../../secrets";
import Button from "@/components/atoms/Button";
import TypeOfItinerary from "@/components/chatQuestions/typeOfItinirary";
import parseSchedule from "@/components/helperFunctions/itineraryBreakdown";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const ChatPage = () => {
  const [conversation, setConversation] = useState<
    { role: string; content: string | null }[]
  >([]);

  const [userMessage, setUserMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userRequirements, setUserRequirements] = useState<object>({});

  const generateResponse = async (userMessage: string) => {
    const updatedConversation = [
      ...conversation,
      { role: "user", content: userMessage },
    ];

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: updatedConversation,
      });

      console.log(completion);
      const assistantResponse = completion.choices[0].message.content;

      setConversation([
        ...updatedConversation,
        { role: "assistant", content: assistantResponse },
      ]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  const handleButtonClick = async () => {
    setIsLoading(true);
    if (userMessage.trim()) {
      await generateResponse(userMessage);
      setUserMessage("");
    }
  };

  // useEffect(()=>{
  //   parseSchedule(conversation)
  // }, [conversation])

  console.log(conversation);

  return (
    <div className="flex bg-slate-900 rounded-lg min-h-screen flex-col items-center justify-between p-24">
      {/* <TypeOfItinerary /> */}
      {isLoading ? (
        <div>
          <p>Loading results...</p>
        </div>
      ) : (
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
      )}
      <div className="flex gap-2 h-10 w-full justify-between">
        <input
          type="text"
          placeholder="Type a message"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="
          bg-slate-600 w-full border-gray-300 rounded-lg p-2 text-md text-gray-200 
          focus:border
          focus:border-slate-900
          "
        />
        {
          <Button
            title="Do something"
            variant="primary"
            onClick={handleButtonClick}
            disabled={userMessage === "" ? true : false}
          />
        }
      </div>
    </div>
  );
};

export default ChatPage;
