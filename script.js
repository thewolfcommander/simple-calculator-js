window.addEventListener('load', () => {
    const screen = document.querySelector('.screen');
    screen.innerHTML = 'Welcome';

    const cellText = document.querySelectorAll('.cell-text');


    const joinNumber = (bigNumber, num) => bigNumber += num;

    let num1 = '';
    let num2 = '';
    let result = 0;

    cellText.forEach(button => {
        button.addEventListener('click', () => {
            let text = button.innerHTML;
            function forNum1(text) {
                switch(text) {
                    case "1": {
                        num1 = joinNumber(num1, '1');
                        break;
                    }
                    case "2": {
                        num1 = joinNumber(num1, '2');
                        break;
                    }
                    case "3": {
                        num1 = joinNumber(num1, '3');
                        break;
                    }
                    case "4": {
                        num1 = joinNumber(num1, '4');
                        break;
                    }
                    case "5": {
                        num1 = joinNumber(num1, '5');
                        break;
                    }
                    case "6": {
                        num1 = joinNumber(num1, '6');
                        break;
                    }
                    case "6": {
                        num1 = joinNumber(num1, '6');
                        break;
                    }
                    case "7": {
                        num1 = joinNumber(num1, '7');
                        break;
                    }
                    case "8": {
                        num1 = joinNumber(num1, '8');
                        break;
                    }
                    case "9": {
                        num1 = joinNumber(num1, '9');
                        break;
                    }
                    case "0": {
                        num1 = joinNumber(num1, '0');
                        break;
                    }
                    // Other Functions
                    case "CE": {
                        num1 = num1.slice(0, num1.length-1);
                        break;
                    }
                    case 'C': {
                        num1 = '';
                        break;
                    }
                    case '+': {
                        result = parseFloat(num1) + 10.00;
                        break;

                    }
                }
            }
            forNum1(text);
            screen.innerHTML = num1;
            // screen.innerHTML = result;
        })
    });

    const add = (num1, num2) => {
        return num1 + num2;
    }

    const sub = (num1, num2) => {
        return num1 - num2;
    }

    const mul = (num1, num2) => {
        return num1 * num2;
    }

    const div = (num1, num2) => {
        if (num2 === 0) {
            return "Mathematical Error";
        }
    }
})