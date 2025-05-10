const StartFunc = () => {

    document.addEventListener("DOMContentLoaded", (event) => {
        console.log("DOM fully loaded and parsed");
    });

};

const jFInsertContact = () => {
    // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
    if ("content" in document.createElement("template")) {
        // Instantiate the table with the existing HTML tbody
        // and the row with the template
        const tbody = document.getElementById("ChatDivId");
        const template = document.getElementById("ChatContactTemplateId");

        // Clone the new row and insert it into the table
        const clone = template.content.cloneNode(true);
        // let td = clone.querySelectorAll("td");
        // td[0].textContent = "1235646565";
        // td[1].textContent = "Stuff";

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFInsertContactTyping = () => {
    // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
    if ("content" in document.createElement("template")) {
        // Instantiate the table with the existing HTML tbody
        // and the row with the template
        const tbody = document.getElementById("ChatDivId");
        const template = document.getElementById("ChatTemplateTypingId");

        // Clone the new row and insert it into the table
        const clone = template.content.cloneNode(true);
        // let td = clone.querySelectorAll("td");
        // td[0].textContent = "1235646565";
        // td[1].textContent = "Stuff";

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFInsertChat = () => {
    if ("content" in document.createElement("template")) {
        const tbody = document.getElementById("ChatWithContainerId");
        const template = document.getElementById("ChatSentTemplateId");

        const clone = template.content.cloneNode(true);

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
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

function modifyText() {
    const t2 = document.getElementById("MessageInputId");

    jFInsertChatWithTime({ inMessage: t2.value });

    t2.value = "";

    jFLocalAdjustHeight();
};

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

const jF1 = () => {
    let div = document.querySelector('div.scrollableBox');

    let span = document.createElement('span');
    span.textContent = 'Hello';

    let divCurrentUserScrollPosition = div.scrollTop + div.offsetHeight;
    let divScrollHeight = div.scrollHeight;

    // We have the current scroll positions saved in
    // variables, so now we can append the new element.
    div.append(span);


    if ((divScrollHeight === divCurrentUserScrollPosition)) {
        // Scroll to bottom of div
        div.scrollTo({ left: 0, top: div.scrollHeight });
    };
};
