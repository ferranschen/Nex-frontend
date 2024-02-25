import React, { useRef, useState, useEffect } from 'react'
import { SendChatMessageButton, RefreshChatRoomButton } from 'ui/buttons'
import { SectionTitle } from 'ui/titles'
import { v4 as uuidv4 } from 'uuid'
import { initLLM, sendQuestionToLLM } from 'lib/data'
import {
  MessageUIServer,
  MessageUIUser,
} from 'ui/interaction/Chatroom/MessageUI'
import {useOnMountUnsafe} from 'lib/mount'


export default function ChatRoom() {
  const chatRoomRef = useRef(null)
  const [chatHistory, setChatHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const initLLMData = async () => {
    try {
      const data = await initLLM()
      const message = data.message
      updateChatHistory('LLM', message)
    } catch (error) {
      console.error('Error in initLLMData: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const sendQuestionToLLMHelper = async (question) => {
    try {
      const data = await sendQuestionToLLM(question)
      const message = data.message
      console.log('message: ', message)
      updateChatHistory('LLM', message)
    } catch (error) {
      console.error('Error in sendQuestionToLLMHelper: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendChatMessage = () => {
    const message = chatRoomRef.current.value
    chatRoomRef.current.value = ''
    updateChatHistory('You', message)
    setIsLoading(true)
    sendQuestionToLLMHelper(message)
  }
  const handleClearChatHistory = () => {
    clearChatHistory()
    // also the llm should remove the previous talk's contents (context management)
  }
  //   old version:
  //   const updateChatHistory = (sender, message) => {
  //     setChatHistory([...chatHistory, { id: uuidv4(), sender, message }])
  //   }
  // use functional update to avoid stale state
  const updateChatHistory = (sender, message) => {
    setChatHistory((currentChatHistory) => [
      ...currentChatHistory,
      { id: uuidv4(), sender, message },
    ])
  }
  const clearChatHistory = () => {
    setChatHistory([])
  }

  useOnMountUnsafe(() => {
    setIsLoading(true)
    initLLMData()
  },[])

  useEffect(() => {

  }, [chatHistory])

  useEffect(() => {
    if (isLoading) {
      console.log('ChatRoom is Loading...')
    } else {
      console.log('ChatRoom is not Loading...')
    }
  }, [isLoading])

  return (
    <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg overflow-y-scroll hover:border-2 hover:border-gray-200">
      <SectionTitle title="ChatRoom" />
      <div className="flex antialiased text-gray-800">
        <div className="flex-row h-full w-full ">
          <div className="flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-50 h-full p-4">
            <div className="grid grid-cols-12 gap-y-2">
              {chatHistory.map((chat) => {
                if (chat.sender === 'You') {
                  return (
                    <MessageUIUser
                      key={chat.id}
                      sender={chat.sender}
                      message={chat.message}
                    />
                  )
                } else {
                  return (
                    <MessageUIServer
                      key={chat.id}
                      sender={chat.sender}
                      message={chat.message}
                    />
                  )
                }
              })}
              {isLoading ? (
                <MessageUIServer
                  sender="LLM"
                  message="Typing..."
                  isLoading={isLoading}
                />
              ) : null}
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <RefreshChatRoomButton onClick={handleClearChatHistory} />
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    ref={chatRoomRef}
                    type="text"
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSendChatMessage()
                        }
                    }}
                  />
                </div>
              </div>
              <div className="ml-4">
                <SendChatMessageButton onClick={handleSendChatMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
