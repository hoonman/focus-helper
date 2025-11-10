const STORAGE_KEY = 'blockedLinks';

function initToggle() {
    const toggle = document.getElementById('toggle'); // toggle is a checkbox
    const status = document.getElementById('status'); // status is a div

    status.textContent = toggle.checked ? 'ON' : 'OFF';

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            status.textContent = 'ON';
        } else {
            status.textContent = 'OFF';
        }
    });
}

function saveLinks(links) {
    chrome.storage.local.set({ [STORAGE_KEY]: links }, () => {
        console.log('saved links', links);
    })
}

function loadLinks(callback) {
    chrome.storage.local.get([STORAGE_KEY], (res) => {
        const links = Array.isArray(res[STORAGE_KEY]) ? res[STORAGE_KEY] : [];
        callback(links);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initToggle();
});

