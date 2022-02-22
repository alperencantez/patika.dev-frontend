// Dark Mode Toggle

function darkMode() {
    let body = document.querySelector("body");
    if (document.querySelector("#buttonTheme").innerHTML == " Açık Mod") {
        document.querySelector("#task").style.backgroundColor = "#fff";
        document.querySelector("#task").style.color = "#333";
        body.style.backgroundColor = "#cacaca";
        document.querySelector("#buttonTheme").innerHTML = " Koyu Mod";
        document.querySelector("#buttonTheme").className = "bi bi-moon btn btn-dark mt-3";
    } else if (document.querySelector("#buttonTheme").innerHTML == " Koyu Mod")
    {
        document.querySelector("#task").style.backgroundColor = "#333";
        body.style.backgroundColor = "#333";
        document.querySelector("#task").style.color = "#cacaca";
        document.querySelector("#buttonTheme").innerHTML = " Açık Mod";
        document.querySelector("#buttonTheme").className = "bi bi-sun btn btn-light mt-3";
    }
}

// Triggers "ekle" button when enter key is pressed

document.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.querySelector("#liveToastBtn").click();
    }
});

function newElement() {
    let textbox = document.getElementById("task");
    if (textbox.value.length > 0) {
        // If user puts a valid input later, dismisses the alert banner

        const errorDOM = document.querySelector("#alert");
        errorDOM.style.visibility = "hidden";

        let li = document.createElement("li");
        li.setAttribute("id", "newElement");
    
        let list = document.querySelector("#list");
        li.textContent = textbox.value;
        list.appendChild(li);
        textbox.value = "";
        
        // Create delete button and add one for each line

        let logo = document.createElement("i");
        logo.setAttribute("class", "bi bi-trash2-fill text-danger float-right mr-4");
        let btnItem = document.querySelectorAll("#newElement");
        for (i = 0; i < btnItem.length; i++) {
            btnItem[i].append(logo);
        }

        // Delete items

        logo.addEventListener("click", deleteElements => {
            let list = document.querySelector("ul");
            list.removeChild(deleteElements.target.parentElement);
        });

        // Create check button and add one for each line

        let check = document.createElement("i");
        check.setAttribute("class", "bi bi-check-square-fill text-success float-right mr-4");
        let btnItem2 = document.querySelectorAll("#newElement");
        for (i = 0; i < btnItem2.length; i++) {
            btnItem2[i].append(check);
        }

        // Check items

        check.addEventListener("click", checkElements => {
            li.textContent = "✔ " + li.textContent;
            li.style.textDecoration = "line-through";
            li.style.color = "black";
            li.style.backgroundColor = "lightgreen";
        });
    }

    // If there is no input then show alert banner and use cross icon to deactivate it
 
    else if (textbox.value == "") {
        const errorDOM = document.querySelector("#alert");
        const alertBtn = document.querySelector("#alertButton")
        errorDOM.style.visibility = "visible";
        alertBtn.addEventListener("click", function hide() {
            errorDOM.style.visibility = "hidden";
        });
    }
};  
