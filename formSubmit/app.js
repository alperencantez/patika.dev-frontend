let button = document.getElementById("button");

function execute(e) {
    e.preventDefault();
    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if(surname == "" || name == "" || phone == "" || address == "") {
        alert("Bu alanlar boş bırakılamaz");
    } else {
        console.log(`
        Adınız: ${name}
        Soyadınız: ${surname}
        Telefon numaranız: ${phone}
        Adresiniz: ${address}`
        );
        alert("Formunuz başarıyla gönderildi");
        document.getElementById("header").innerHTML = "Hoş geldiniz";
    }   
};