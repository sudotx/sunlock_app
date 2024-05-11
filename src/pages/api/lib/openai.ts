import { Configuration, OpenAIApi } from "openai"
const api_key = process.env.OPENAI_API_KEY

export const openAiMagic = async (user: string, insructions: string, assistant: string[]) => {
  const messages: any = [
    { role: "system", content: insructions },
    { role: "user", content: user },
  ]

  const userMessages = generateUserMessage(assistant)
  for (const m of userMessages) {
    messages.push(m)
  }
  try {
    const api_key = process.env.OPENAI_API_KEY
    const configuration = new Configuration({ apiKey: api_key })
    const openai = new OpenAIApi(configuration)
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      max_tokens: 500,
      temperature: 0.8,
      messages
    })
    return completion?.data?.choices[0].message?.content
  } catch (error: any) {
    return "There has been an error. Please try again later."
  }
}

const generateUserMessage = (userMessages: string[]) => userMessages.map((message: string) => ({ role: "assistant", content: message }))