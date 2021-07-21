chrome.storage.local.get({
  redirection: true,
}, (items) => {
  if (items.redirection) {
    window.location.host = 'www.luogu.com.cn';
  }
});
