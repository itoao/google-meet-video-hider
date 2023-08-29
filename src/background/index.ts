chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(null as unknown as number, { file: 'src/content/index.tsx' });
});
