document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    if (validateForm(formData)) {
        fetch('https://jsonplaceholder.typicode.com/posts', { // Используйте тестовый endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => alert('Форма отправлена успешно!'))
        .catch(error => alert('Ошибка отправки формы!'));
    } else {
        alert('Пожалуйста, заполните все поля корректно.');
    }
});

function validateForm(data) {
    return data.firstName && data.lastName && /\S+@\S+\.\S+/.test(data.email) && /[+]?[0-9\s\-\(\)]{10,}/.test(data.phone);
}
