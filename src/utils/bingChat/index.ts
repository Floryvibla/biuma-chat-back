import dotenv from 'dotenv'
import { oraPromise } from 'ora'
import { BingChat } from 'bing-chat'

import { biumaIAChat, msgIsNotExistBriefing, dataConversationWithBiuma } from '@prompts/data'

dotenv.config()

const API = new BingChat({
    cookie: process.env.BING_COOKIE as string
})

export async function onStartChat() {
    const prompt = biumaIAChat
    const res = await API.sendMessage(prompt)
    
    return res.text
}

export async function onNotExistBriefing() {
    const prompt = msgIsNotExistBriefing
    const res = await API.sendMessage(prompt)
    
    return res
}

export async function conversationWithBiuma(msg: string, conversation: any) {
    const prompt = dataConversationWithBiuma(msg)
    let res = await API.sendMessage(conversation ? msg : prompt, conversation)
    
    return res
}

export async function createChat() {
    const prompt = dataConversationWithBiuma("Opa beleza?")
    let res = await API.createConversation()
    
    return res
}
