type ButtonPropsType = {
	callBack: () => any; // НУЖНО ПРОТИПИЗИРОВАТЬ
	name: string; // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = (props: ButtonPropsType) => {
	const callBackHandler = () => {
		props.callBack();
	};

	return (
		<button id={'hw04-button'} onClick={callBackHandler}>
			{props.name}
		</button>
	);
};
