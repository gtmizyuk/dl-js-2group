console.log('Привіт.');
console.log('Простий калькулятор готовий до роботи.');

const messageData = 'Перевірте вхідні дані!';
const messageToken = 'Упс! Забули обрати арифметичну дію!';
const messageDivisionByZero = 'Ділення на нуль! Будьте уважні!';
const messageSuccess = 'Обчислення проведено успішно!';
const actionsSign = ['+', '-', '*', '/', '**'];

function toCalc() {  

    let form = document.forms["form_calc"];
    
    let firstNumber = parseFloat(form.elements["first"].value);
    let secondNumber = parseFloat(form.elements["second"].value);
    let a = document.getElementById("actions");
    let actionValue = a.options[a.selectedIndex].value;
    let actionText = a.options[a.selectedIndex].text;

    //console.log(firstNumber, secondNumber, actionText);       
    
    if ( isNaN(firstNumber) || isNaN(secondNumber) ) {
        showMessageErrorData();
    } 
    else if (!actionValue || actionValue === 'Оберіть дію...') {
        showMessageErrorToken();
    }
    else if (secondNumber === 0 && actionText === 'Ділення') {
        showMessageErrorDivisionByZero();
    }
    else {
        let sign = null;
        switch (actionValue) {
            case 'addition':
                resultCalc = firstNumber + secondNumber;
                sign = actionsSign[0];
                break
            case 'subtraction':
                resultCalc = firstNumber - secondNumber;
                sign = actionsSign[1];
                break
            case 'multiplication':
                resultCalc = firstNumber * secondNumber;
                sign = actionsSign[2];
                break
            case 'division':
                resultCalc = firstNumber / secondNumber;
                resultCalc = resultCalc.toFixed(4);
                sign = actionsSign[3];
                break
            case 'elevation':
                resultCalc = Math.pow(firstNumber, secondNumber);
                sign = actionsSign[4];
                break
            default:
                console.log("Це малоймовірно, але щось пішло не так!");
        } 
        showMessageResult(`${firstNumber} ${sign} ${secondNumber} = ${resultCalc}`);
    }
}

function showMessageErrorData() {
    alert(messageData); 
    console.log(messageData);   
}

function showMessageErrorToken() {
    alert(messageToken); 
    console.log(messageToken); 
}

function showMessageErrorDivisionByZero() {
    alert(messageDivisionByZero); 
    console.log(messageDivisionByZero); 
}

function showMessageResult(result) {
    alert(messageSuccess + '\n' + result); 
    console.log(result, 'OK'); 
}

button.addEventListener("click", toCalc);