import React from 'react'
import Chat from '../../components/Chat';
import { ContextProvider } from '../../SocketContext';



const video = () => {
  return (
      <div>
      <ContextProvider>
        <Chat />
      </ContextProvider>
    </div>
  )
}

export default video

