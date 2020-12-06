console.log('Завітайте у клуб "Enter"!');

const messageData = "Неправильно введені дані!\nІм'я та місто - це текстові дані, а вік - ціле число.";
const messageAgeYoung = 'Недостатній вік для входу у клуб "Enter".\nДякуємо за розуміння.';
const messageAgeOld = 'На жаль, Ви застарі для клубу "Enter".\nДякуємо за розуміння.';

function showMessage(message) {
    alert(message); 
    console.log(message);   
}

function logIn() {  

    let form = document.forms["form_club"];
    
    let nameUser = form.elements["name"].value;
    let cityUser = form.elements["city"].value;
    let ageUser = parseInt(form.elements["age"].value, 10);
    
    console.log(nameUser, cityUser, ageUser);       
    
    if ( !nameUser || !cityUser || isNaN(ageUser) ) {
        showMessage(messageData);
    } 
    else if (ageUser < 21 || ageUser > 45) {
        if (ageUser < 18) {
            showMessage(`Алло, це управління поліції в місті ${cityUser}?\nОсоба до 18 років намагалась потрапити у клуб "Enter"!`);
        }
        else if (ageUser >= 18 && ageUser <21) {
            showMessage(messageAgeYoung);
        }
        else {
            showMessage(messageAgeOld);
        }
    }
    else {
        showMessage(`Раді вітати Вас, ${nameUser}, у клубі "Enter" в місті ${cityUser}!\nТанці, коктейлі до ранку!`);
    }   
}

button.addEventListener("click", logIn);
