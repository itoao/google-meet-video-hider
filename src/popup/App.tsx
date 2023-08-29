import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [selector, setSelector] = useState('.aGWPv');

  useEffect(() => {
    // ストレージからセレクタを取得し、状態を設定します。
    chrome.storage.sync.get('selector', (data) => {
      setSelector(data.selector || '.aGWPv');
    });
  }, []);

  const saveSelector = () => {
    // 入力されたセレクタをストレージに保存します。
    chrome.storage.sync.set({ selector }, () => {
      console.log('Selector saved: ' + selector);
    });
  };

  const toggleVideo = () => {
    chrome.tabs.executeScript(null as unknown as number, { file: 'content/index.tsx.js' });
    window.close();
  };

  return (
    <div>
      <label htmlFor="selector">Selector:</label>
      <input
        type="text"
        id="selector"
        value={selector}
        onChange={(e) => setSelector(e.target.value)}
      />
      <button onClick={saveSelector}>Save</button>
      <button onClick={toggleVideo}>Toggle Video</button>
    </div>
  );
};

export default App;
