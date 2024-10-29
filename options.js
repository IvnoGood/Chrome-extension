// Saves options to chrome.storage
const saveOptions = () => {
    const temp = document.getElementById('temp').value;

    chrome.storage.local.set(
        { temp: temp },
        () => {
            const status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(() => {
                status.textContent = '';
            }, 750);
        }
    );
};

// Restores select box and checkbox state using preferences
const restoreOptions = () => {
    chrome.storage.local.get(
        { temp: 'Fahrenheit' },
        (items) => {
            document.getElementById('temp').value = items.temp;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
