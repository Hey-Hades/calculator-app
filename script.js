let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
let operators = ['+', '-', '*', '/', '%'];

// 🔘 Button Clicks
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// ⌨️ Keyboard Support
document.addEventListener('keydown', (e) => {
    let key = e.key;

    if ((key >= '0' && key <= '9') || operators.includes(key)) {
        handleInput(key);
    }
    else if (key === 'Enter') {
        handleInput('=');
    }
    else if (key === 'Backspace') {
        handleInput('DEL');
    }
    else if (key === 'Escape') {
        handleInput('AC');
    }
    else if (key === '.') {
        handleInput('.');
    }
});

// 🧠 Core Logic
function handleInput(value) {

    if (value === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    }

    else if (value === 'AC') {
        string = "";
        input.value = string;
    }

    else if (value === 'DEL') {
        string = string.slice(0, -1);
        input.value = string;
    }

    else {
        let lastChar = string[string.length - 1];

        // ❌ Prevent starting with operator (except -)
        if (string === "" && operators.includes(value) && value !== '-') {
            return;
        }

        // ❌ Prevent double operators
        if (operators.includes(value) && operators.includes(lastChar)) {
            return;
        }

        string += value;
        input.value = string;
    }
}
