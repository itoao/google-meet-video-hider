chrome.storage.sync.get('selector', (data) => {
  const selector = data.selector || '.aGWPv';
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.style.display = 'none';
  });
});
