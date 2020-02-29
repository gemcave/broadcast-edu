import React from 'react';

function MessageList({messages, showDate}) {
	if (messages.length === 0) {
		return <div>No messages yet</div>
	}
	return messages.map((m,idx) => {
		const className = showDate ? "msg-tracked" : m.type === 'sent' ? "msg-sent" : "msg-received;";
		return (
			<div ket={`${m.msg}-${idx}`} className={`msg-bubble ${className}`}>
				{showDate && 
					<p className="msg-timestamp">
						{m.date.toUTCString()}
					</p>	
				}			
				<p>{m.msg}</p>
			</div>
		);
	})
}

export default MessageList;