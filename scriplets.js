(function() {
    console.log('Hello scriplet 16!');    
})();
(function() {
    document.addEventListener('click', function(ev) {
        var target = ev.target;
        while ( target !== null ) {
            if ( target.localName === 'a' && target.hasAttribute('target') ) {
                ev.stopPropagation();
                ev.preventDefault();
                break;
            }
            target = target.parentNode;
        }
    });
})();
(function() {
    const categoriesToHide = '{{1}}';  // Optional argument to filter posts by their category
    const setOfCategoriesToHide = (( ) => {
        if ( categoriesToHide === '' || categoriesToHide === '{{1}}' ) { return new Set(); }
        return new Set(categoriesToHide.split(/\s*\|\s*/).map(s => s.toUpperCase()));
    })();
    const magic = String.fromCharCode(Date.now() % 26 + 97) +
                  Math.floor(Math.random() * 982451653 + 982451653).toString(36);
    const findNestedProperty = (obj, prop) => {
        if (obj.hasOwnProperty(prop)) { return obj[prop]; }
        for (const key of Object.keys(obj)) {
            const nested = obj[key];
            if (typeof nested === 'object' && nested != null) {
                const val = findNestedProperty(nested, prop);
                if (val) { return val; }
            }
        }
        return undefined;
    };
    const processInsertedFeedUnit = (feedUnit) => {
            const keys = Object.keys(feedUnit).filter(key => key.startsWith('__reactProps'));
            if ( keys.length != 1 ) { return; }
            const key = keys[0];
            try {
                const root = feedUnit[key].children.props;
                const feedUnitCategory = findNestedProperty(root, 'category');
                if (feedUnitCategory === undefined) { return; }
                switch ( feedUnitCategory ) {
                    case 'ORGANIC':
                        break;
                    case 'SPONSORED':
                        feedUnit.classList.add(magic);
                        break;
                    default:
                        if ( setOfCategoriesToHide.has(feedUnitCategory) ) {
                            feedUnit.classList.add(magic);
                        }
                }
            } catch(e) {}
    };
    const start = ( ) => {
        const style = document.createElement('style');
        style.innerHTML = `
            .${magic} {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
        const observer = new MutationObserver(mutations => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if ( node instanceof HTMLDivElement &&
                       node.parentNode instanceof HTMLDivElement &&
                       node.parentNode.getAttribute('role') === 'feed') {
                        processInsertedFeedUnit(node);
                    }
                });
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    };
    window.addEventListener('load', (event) => {
        document.addEventListener('click', (event) => {
            const target = event.target.closest('a');
            if ( target ) {
                const url = new URL(target.href);
                if ( url.searchParams.get('fbclid') ) {
                    event.stopPropagation();
                    event.preventDefault();
                    url.searchParams.delete('fbclid');
                    window.open(url.href, '_blank').focus();
                }
            }
        });
    });
    if ( document.readyState === 'loading' ) {
        document.addEventListener('DOMContentLoaded', start, { once: true });
    } else {
        start();
    }
})();
