document.addEventListener('DOMContentLoaded', () => {
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
});