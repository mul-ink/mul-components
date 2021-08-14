/// hello-scriplet.js
(function() {
    console.log('Hello scriplet!');    
})();

/// reddit
(() => {
const waitForElementByText = (text) => new Promise(resolve => {
    
    if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
const continueOnBrowser = document.evaluate("//button[contains(., 'Continue')]", document, null, XPathResult.ANY_TYPE, null ).iterateNext();
})();
