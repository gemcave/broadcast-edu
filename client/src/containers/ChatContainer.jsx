import React from 'react';
import MessageList from '../components/MessageList';

function ChatContainer({chats}) {
	const sortedChats = chats.sort((a,b) => {
		return a.date - b.date;
	})

	return (
		<div>
				<MessageList messages={sortedChats}/>
		</div>
	);
}

export default ChatContainer;