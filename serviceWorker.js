chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if (tab.url?.startsWith("chrome://")) return undefined;

  if (tab.active && changeInfo.status === "complete") {
    chrome.scripting.executeScript({
      files: ['script.js'],
      target: {tabId: tab.id}
    })
  }
});
