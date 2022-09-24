
function getAllContentResourcePayloads() {
    return document.querySelectorAll("div.interactive-activity-container > div.activity-payload > div.content-resource");
}

function generateSolvers() {
    let payloads = getAllContentResourcePayloads()

    for (let i = 0; i < payloads.length; i++) {
        let payload = payloads.item(i);

        if (payload.querySelector("div.zbs-solver-container")) {
            continue; // already generated
        }

        let btn = document.createElement("button");

        //todo: add evt listener

        btn.innerHTML = "Solve Section";
        btn.className = "zbs-solver"
        let btnParent = document.createElement("div");
        btnParent.className = "zbs-solver-container"
        btnParent.appendChild(btn);

        payload.insertAdjacentElement("beforebegin", btnParent);
    }

}

chrome.runtime.onMessage.addListener(function (msg) {
    if (msg.text === "generate-solvers") {
        generateSolvers();
    }
});