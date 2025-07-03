const screen = document.querySelector(".screen");
let currentScreen = '';

function getNumber(number) {
    currentScreen += number;
    screen.innerText = currentScreen;
}

function getOperator(operator) {
    currentScreen += `${operator}`;
    screen.innerText = currentScreen;
}

function calculateResult() {
    try {
        currentScreen = eval(currentScreen);
        screen.innerText = currentScreen;
    } catch {
        screen.innerText = "Error";
    }
}

function clearScreen() {
    currentScreen = '';
    screen.innerText = currentScreen;
}

function backSpace() {
    currentScreen = currentScreen.slice(0, -1);
    screen.innerText = currentScreen;
}