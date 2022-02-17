const showMore = () => { document.getElementById('learnMore-text').style.visibility = "visible"; };
let userForm = document.querySelector('#form');

function formHandler(event) {
    event.preventDefault();
    const USER_NAME = document.querySelector('#username').value;
    const PASSWORD = document.querySelector('#password').value;
    console.log(USER_NAME, PASSWORD);
    const alertDOM = document.querySelector('#alert');

    const alertFunction = () => `
    <div class="alert alert-danger alert-dismissible fade show mt-3" id="alert" role="alert">
    <strong>Bir sorun oluştu!</strong> Şifre veya mail/telefon kısımları boş bırakılamaz.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    
    if (USER_NAME === "" || PASSWORD === "") {
        alertDOM.innerHTML = alertFunction();
    } else {
        document.getElementById('form').reset();
        document.getElementById('header').innerHTML = `Hoş geldin, ${USER_NAME.toUpperCase().slice(0, 1)}${USER_NAME.slice(1)} giriş başarılı.`;
    }
};