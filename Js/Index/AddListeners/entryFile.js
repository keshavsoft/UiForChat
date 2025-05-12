import { StartFunc as StartFuncDOMContentLoaded } from "./DOMContentLoaded/entryFile.js";
import { StartFunc as StartFuncFromLoadChatAId } from './LoadChatAId/EntryFile.js';

let StartFunc = () => {
    StartFuncDOMContentLoaded();
	StartFuncFromLoadChatAId();
};

export { StartFunc };