import { StartFunc as StartFuncFromDOMContentLoaded } from "./DOMContentLoaded.js";

const StartFunc = () => {
    document.addEventListener("DOMContentLoaded", StartFuncFromDOMContentLoaded);
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

StartFunc();