
//unhide menu if on correct page
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let ct = tabs[0];
    if (ct && ct.url.startsWith("https://learn.zybooks.com/zybook/")) {
        document.getElementById("menu").removeAttribute("hidden");
    } else {
        document.getElementById("invalid-page").removeAttribute("hidden")
    }
});

function sendAddSolverMessageToCs() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currTab = tabs[0];
        if (currTab) {
            chrome.tabs.sendMessage(currTab.id, {text:"generate-solvers"})
        }
    });
}

// zyBooks updates the page dynamically so a button is simpler
document.getElementById("generate-solvers").addEventListener("click", sendAddSolverMessageToCs)
