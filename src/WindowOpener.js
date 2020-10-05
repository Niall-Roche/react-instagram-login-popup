import React from 'react';
import {string, func} from 'prop-types';

const propTypes = {
    url: string.isRequired,
    name: string,
    opts: string,
    onSuccess: func,
}

const defaultProps = {
    opts: `dependent=${1}, alwaysOnTop=${1}, alwaysRaised=${1}, alwaysRaised=${1}, width=${300}, height=${300}`
}

const WATCH_INTERVAL = 500;

// Main Window.
let browser = null;
// child window.
let popup = null;
// interval
let timer = null;
// Has left domain flag
let leftDomain = false;

const WindowOpener = ({ children, url, onSuccess, name, opts, }) => {

    browser = window.self;

    const watcher = () => {
        try {
            if (popup.document.domain === document.domain)
            {
                if (leftDomain && popup.document.readyState === "complete")
                {
                    // we're here when the child window returned to our domain
                    clearInterval(timer);
                    onSuccess(popup.document.URL);
                    popup.close();
                }
            }
            else {
                // this code should never be reached, 
                // as the x-site security check throws
                // but just in case
                leftDomain = true;
            }
        }
        catch(e) {
            // we're here when the child window has been navigated away or closed
            if (popup.closed) {
                clearInterval(timer);
                alert("closed");
                return; 
            }
            // navigated to another domain  
            leftDomain = true;
        }
    }


    const onClick = () => {
        // if there is  already a child open, let's set focus on it
        if (popup && !popup.closed) {
            popup.focus();

            return ;
        }

        // we open a new window.
        popup = browser.open(url, name, opts);

        if (timer === null) {
            // each two seconds we check if the popup still open or not
            timer = setInterval(watcher, WATCH_INTERVAL);
        }

        return;
    }

    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
}

WindowOpener.propTypes = propTypes;
WindowOpener.defaultProps = defaultProps;

export default WindowOpener;