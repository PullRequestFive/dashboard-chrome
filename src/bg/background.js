chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request, sender, sendResponse);
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  }
);
