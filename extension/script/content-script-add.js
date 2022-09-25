
function _addScriptToDom(scriptName) {
    let s = document.createElement('script');
    s.src = chrome.runtime.getURL(scriptName);
    s.id = scriptName;
    (document.head || document.documentElement).appendChild(s);
}

function _isScriptAdded(scriptName) {
    return !!document.getElementById(scriptName);
}

function addScriptIfNotAdded(scriptName) {
    if (!_isScriptAdded(scriptName)) {
        _addScriptToDom(scriptName);
    }
}
