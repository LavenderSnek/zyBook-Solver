

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

