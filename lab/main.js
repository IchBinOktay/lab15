document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('text-form');
    const textInput = document.getElementById('text-input');
    const textsList = document.querySelector('.list-group');
    const clearBtn = document.getElementById('clear-texts');
    const successAlert = document.querySelector('.alert-success');
    const dangerAlert = document.querySelector('.alert-danger');

    successAlert.style.display = 'none';
    dangerAlert.style.display = 'none';
    function showAlert(alertElement, message = '') {
        if (message) {
            alertElement.textContent = message;
        }
        alertElement.style.display = 'block';
        setTimeout(() => {
            alertElement.style.display = 'none';
        }, 2000);
    }
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputValue = textInput.value.trim();
        if (inputValue === '') {
            return;
        }
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between';
        listItem.textContent = inputValue;
        textsList.appendChild(listItem);
        textInput.value = '';
        showAlert(successAlert, `Added: ${inputValue}`);
    });
    clearBtn.addEventListener('click', function() {
        const listItems = textsList.querySelectorAll('li');
        listItems.forEach(function(item) {
            item.style.textDecoration = 'line-through';
        });
        showAlert(dangerAlert, 'Removed All Texts');
    });
});
