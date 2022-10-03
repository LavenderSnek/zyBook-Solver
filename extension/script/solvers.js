

function _solveMultipleChoiceQuestion(content) {
    let checkMark = content.querySelector("div.ember-view > div.chevron-container > div")
    if (checkMark.getAttribute("aria-label") === "Question completed") {
        return // already solved
    }

    let choiceButtons = content.querySelectorAll("div.question > div.question-choices > div > input")

    for (let i = 0; i < choiceButtons.length; i++) {
        setTimeout(() => {
            let choice = choiceButtons.item(i);
            choice.click();
        }, 250 * i);
    }
}

function solveMultipleChoiceBlock(content) {
    let questions = content.children;
    for (let i = 0; i < questions.length; i++) {
        setTimeout(() => {
            let q = questions.item(i);
            _solveMultipleChoiceQuestion(q);
        }, 250 * i);
    }
}


function _solveShortAnswerQuestion(content) {
    let checkMark = content.querySelector("div.ember-view > div.chevron-container > div")
    if (checkMark.getAttribute("aria-label") === "Question completed") {
        return; // already solved
    }

    let showBtn = content.querySelector("div.question-container  > div.input > div.buttons > button.show-answer-button");
    showBtn.click();
    showBtn.click();

    let textBox = content.querySelector("div.question-container  > div.input > div.highlight > pre > textarea");
    let checkBtn = content.querySelector("div.question-container  > div.input > div.buttons > button.check-button");

    setTimeout(() => {
        textBox.value = content.querySelector("div.forfeit > div.answers > span.forfeit-answer").innerText;
        // event to make zybooks update
        // the answer isn't accepted otherwise
        textBox.dispatchEvent(new Event('paste'));
        checkBtn.click();
    }, 250);
}

function solveShortAnswerBlock(content) {
    let questions = content.children;
    for (let i = 0; i < questions.length; i++) {
        setTimeout(() => {
            let q = questions.item(i);
            _solveShortAnswerQuestion(q);
        }, 250 * i);
    }
}
