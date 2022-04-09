function Clear(){
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("desc").value = "";
}

function Submit(){
    if(document.getElementById("name").value != "" && document.getElementById("surname").value != "" && document.getElementById("telephone").value != "" && document.getElementById("birthdate").value != "" && document.getElementById("desc").value != ""){
        if(confirm(document.getElementById("name").value + "\n" + document.getElementById("surname").value + "\n" + document.getElementById("telephone").value + "\n" + document.getElementById("birthdate").value + "\n" + document.getElementById("desc").value + "\n" + "Подтвердить?")){
            alert("Данные сохранены");
        }
        else{
            document.getElementById("name").value = "";
            document.getElementById("surname").value = "";
            document.getElementById("telephone").value = "";
            document.getElementById("birthdate").value = "";
            document.getElementById("desc").value = "";
        }
    }
    else{
        alert("Заполните все поля");
    }
}