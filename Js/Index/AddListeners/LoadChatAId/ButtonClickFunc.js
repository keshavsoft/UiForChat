let StartFunc = () => {
    jFInsertChatWithTime({ inMessage: "Yes", inTime: "10:48am" });

    jFLocalAdjustHeight();
};

const jFInsertChatWithTime = ({ inMessage, inTime }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.getElementById("ChatWithContainerId");
        const template = document.getElementById("ChatReceivedTemplateId");

        const clone = template.content.cloneNode(true);
        let td = clone.querySelector("p");
        td.textContent = inMessage;

        let jVarLocalSmall = clone.querySelector("small");
        jVarLocalSmall.textContent = inTime;

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
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

export { StartFunc };