import { StartFunc as StartFuncButtonClickFunc } from './ButtonClickFunc.js';

let StartFunc = () => {
	let jVarLocalHtmlId = document.getElementById('LoadChatAId');

	if (jVarLocalHtmlId === null === false) {
		jVarLocalHtmlId.addEventListener('click', StartFuncButtonClickFunc);
	};
};

export { StartFunc };