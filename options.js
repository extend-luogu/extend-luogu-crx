// Saves options to chrome.storage
function saveOptions() {
  chrome.storage.local.set({
    redirection: document.getElementById('redirection').checked,
  }, () => {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.local.get({
    redirection: true,
  }, (items) => {
    document.getElementById('redirection').checked = items.redirection;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
