const StartFunc = () => {
    console.log("DOM fully loaded and parsed");

    const jVarLocalSendButtonId = document.getElementById("SendButtonId");
    jVarLocalSendButtonId.addEventListener("click", modifyText, false);

    const inputElement = document.getElementById("MessageInputId");

    inputElement.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents form submission if input is within a form

            const jVarLocalSendButtonId = document.getElementById("SendButtonId");

            jVarLocalSendButtonId.click(); // Triggers the button click
        }
    });
};

const jFLocalAdjustHeight = () => {
    let div = document.getElementById('ChatWithContainerId');

    let divCurrentUserScrollPosition = div.scrollTop + div.offsetHeight;
    let divScrollHeight = div.scrollHeight;
    console.log("divScrollHeight : ", divCurrentUserScrollPosition, divScrollHeight);

    if ((divScrollHeight > divCurrentUserScrollPosition)) {
        // Scroll to bottom of div
        div.scrollTo({ left: 0, top: div.scrollHeight });
    };
};

const jFInsertChatWithTime = ({ inMessage }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.getElementById("ChatWithContainerId");
        const template = document.getElementById("ChatSentTemplateId");

        const clone = template.content.cloneNode(true);
        let td = clone.querySelector("p");
        td.textContent = inMessage;

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

function modifyText() {
    const t2 = document.getElementById("MessageInputId");

    jFInsertChatWithTime({ inMessage: t2.value });

    t2.value = "";

    jFLocalAdjustHeight();
};


export { StartFunc };