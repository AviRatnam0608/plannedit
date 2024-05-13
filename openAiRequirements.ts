import OpenAI from "openai";
import { OpenAIAPIKey } from "./secrets";

// Initialize the OpenAI object with your credentials
const openai = new OpenAI({
  apiKey: OpenAIAPIKey,
});
