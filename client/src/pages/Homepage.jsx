import React, { useState, useEffect } from "react";
import ChatContainer from "../containers/ChatContainer";
import FormContainer from "../containers/FormContainer";

const channel = new BroadcastChannel("main");

const Homepage = props => {
	const [received, setReceived] = useState([]);
	const [sent, setSent] = useState([]);

	useEffect(() => {
		channel.onmessage = ({data}) => {
			setReceived(prevState => ([...prevState, { ...data, type: "reveived" }]));
		}
	}, []);

    return (
        <div>
            Time to start coding!
						<FormContainer 
							setSent={setSent}
							channel={channel}
							/>
						<ChatContainer 
							chats={sent.concat(received)}/>
        </div>
    );
};

export default Homepage;