
function getAllContentResourcePayloads() {
    return document.querySelectorAll("div.interactive-activity-container > div.activity-payload > div.content-resource");
}

function solversAlreadyGenerated() {
    // impl
    return false;
}

function generateSolvers() {
    if (solversAlreadyGenerated()) {
        return;
    }
    // impl
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === "generate-solvers") {
        generateSolvers();
    }
});