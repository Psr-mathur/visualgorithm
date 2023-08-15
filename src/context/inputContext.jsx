import { createContext, useState } from "react";

export const InputContext = createContext({
	getLength: 10,
	setLength: (e) => {},
});

const InputContextProvider = ({ children }) => {
	const [length, setLength] = useState(10);
	const handleChangeLength = (val) => {
		if (val < 3) {
			setLength(3);
		} else if (window.innerWidth <= 568 && val > 10) {
			setLength(10);
		} else if (val > 30) {
			setLength(30);
		} else {
			setLength(parseInt(val));
		}
	};
	return (
		<InputContext.Provider
			value={{
				getLength: length,
				setLength: handleChangeLength,
			}}
		>
			{children}
		</InputContext.Provider>
	);
};
export default InputContextProvider;
