import React from 'react'

import ChannelList from './components/ChannelList'
import Conversation from './components/Conversation'

const Chat = ({ chatrooms }) => (
  <div>
    <ChannelList />
    <Conversation />
  </div>
)

export default Chat
