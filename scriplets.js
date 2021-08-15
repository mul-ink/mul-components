/// hello-scriplet.js
(function() {
    console.log('Hello scriplet!');    
})();

/// stadia-skip
(() => {
const queryByText = (text) => new Promise(resolve => {
    const element = document.evaluate(`//button[contains(., '${text}')]`, document, null, XPathResult.ANY_TYPE, null ).iterateNext()
    
    if (element) {
        return document.evaluate(`//button[contains(., '${text}')]`, document, null, XPathResult.ANY_TYPE, null ).iterateNext()
    }

    const observer = new MutationObserver(() => {
        if (element) {
            resolve(element);
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
const skipSurvey = await queryByText('Skip');
})();
