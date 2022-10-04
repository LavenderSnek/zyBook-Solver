
function sendAddSolverMessageToCs() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currTab = tabs[0];
        if (currTab) {
            chrome.tabs.sendMessage(currTab.id, {text:"generate-solvers"});
        }
    });
}

//unhide menu if on correct page
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let ct = tabs[0];
    if (ct && ct.url.startsWith("https://learn.zybooks.com/zybook/")) {
        document.getElementById("valid-page").removeAttribute("hidden");
        sendAddSolverMessageToCs();
    } else {
        document.getElementById("invalid-page").removeAttribute("hidden");
    }
});
