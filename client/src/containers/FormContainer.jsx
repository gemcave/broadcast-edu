import React, { useState } from 'react';

function FormContainer({setSent, channel}) {
	const [input, setInput] = useState("");
	const onInputChange = (e) => setInput(e.target.value);

	const onClick = () => {
		const data = {
			date: new Date(),
			msg: input,
			type: "sent"
		}

		channel.postMessage({...data});
		setSent(prevState => ([...prevState, {...data}]));
		setInput("");
	}
	return (
		<div className="form">
			<input 
					placeholder={"Type your message"}
					style={{ height: 100 }}
					onChange={onInputChange}
					value={input} />
			<button className="submit-btn" onClick={onClick}>
				Submit
			</button>

		</div>
	);
}

export default FormContainer;