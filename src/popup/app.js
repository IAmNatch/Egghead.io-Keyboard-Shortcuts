let button = document.getElementById('toExt');

button.addEventListener("click", function(){
    chrome.tabs.create({ url: 'chrome://chrome/extensions' });
});
