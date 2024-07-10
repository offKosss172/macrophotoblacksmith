window.onload = function () {
    console.log('Скрипт підключен!');
};

        var modalToggleBtnUnique = document.getElementById('openModalHeaderUnique');
        var modalWindowUnique = document.getElementById('modalUnique');
        var menuIconImgUnique = document.querySelector('#openModalHeaderUnique img');
    
    function toggleModalWindowAndIconsUnique() {
        var isModalOpenUnique = modalWindowUnique.style.display === 'flex';
        if (isModalOpenUnique) {
            modalWindowUnique.style.display = 'none';
            menuIconImgUnique.src = 'assets/img/menu.svg';
            document.body.style.overflow = ''; 
        } else {
            modalWindowUnique.style.display = 'flex';
            menuIconImgUnique.src = 'assets/img/cross.svg';
            document.body.style.overflow = 'hidden';
        }
    }
    
    modalToggleBtnUnique.onclick = toggleModalWindowAndIconsUnique;
    modalWindowUnique.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            modalWindowUnique.style.display = 'none';
            menuIconImgUnique.src = 'assets/img/menu.svg';
            document.body.style.overflow = '';
        }
    });
    

    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            document.querySelector("nav").classList.add("show");
        }, 2000);
    });
    




    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
    
        const name = document.getElementById('nameFormContact').value;
        const phone = document.getElementById('phoneFormContact').value;
        const select = document.getElementById('selectFormContact').value;

        const nameError = document.getElementById('nameError');
        const phoneError = document.getElementById('phoneError');
    
        nameError.textContent = '';
        phoneError.textContent = '';
    
        let isValid = true;
    

        const namePattern = /^[a-zA-Zа-яА-Я\s]{3,33}$/;
        if (!namePattern.test(name)) {
            nameError.textContent = "Ім'я повинно містити тільки букви";
            isValid = false;
        }
    
        const phonePattern = /^[0-9+\-\(\)\s]{9,33}$/;
        if (!phonePattern.test(phone)) {
            phoneError.textContent = "Телефон повинен містити тільки цифри";
            isValid = false;
        }
    
        if (!isValid) {
            return;
        }
    
        const message = `Им'я: ${name}\nТелефон: ${phone}\nТип: ${select}`;
    
        const token = '7314270642:AAHFb6CtA2CHhFFBV1yYqpKlkYSSU_QBIrA';
        const chat_id = '-4280626014';
    
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: message
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('дякую за ваше повідомлення!');
            } else {
                alert('помилка');
            }
        })
        .catch(error => {
            alert('не відправлено');
            console.error('Помилка:', error);
        });
    });