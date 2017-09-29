function onCommand(command) {
    chrome.tabs.query({url: 'https://egghead.io/*'}, function(tabs) {

        // Open an Egghead.io tab if one does not exist yet.
        if (tabs.length === 0) {
            chrome.tabs.create({url: 'https://egghead.io/'});
        }

        // Apply command on all Egghead.io tabs.
        for (var tab of tabs) {
            var code = '';
            if (tab.url.startsWith('https://egghead.io')) {
                switch (command) {
                case 'play-pause': code = 'document.querySelector("#bmpui-id-183").click()'; break;
                case 'next': code = 'document.querySelector(".nowPlaying").nextSibling.firstChild.click()'; break;
                case 'back-ten': code = 'document.querySelector(".index__rewindButton__2muJg").click()'; break;
                case 'forward-twenty-five': code = 'document.querySelectorAll(".index__rewindButton__2muJg")[1].click()'; break;
                case 'previous': code = 'document.querySelector(".nowPlaying").previousSibling.firstChild.click()'; break;
                }
            }
            if (code.length) {
                chrome.tabs.executeScript(tab.id, {code: code});
            }
        }

        // Unload background page as soon as we're done.
        window.close();
    });
}

chrome.commands.onCommand.addListener(onCommand);
