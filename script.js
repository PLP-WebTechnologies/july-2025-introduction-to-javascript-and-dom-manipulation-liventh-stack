// ================================
// Part 1: Variable Declarations & Conditionals
// ================================
let age = 21;
let isStudent = true;

if (age >= 18 && isStudent) {
    document.getElementById('conditional-result').textContent = "You are an adult student.";
} else if (age >= 18) {
    document.getElementById('conditional-result').textContent = "You are an adult.";
} else {
    document.getElementById('conditional-result').textContent = "You are a minor.";
}

// ================================
// Part 2: Custom Functions
// ================================
function greetUser(name) {
    return `Hello, ${name}! Welcome to the site.`;
}

function squareNumber(num) {
    return num * num;
}

// Display function results
document.getElementById('function-result').textContent =
    greetUser("Liventh") + " The square of 5 is " + squareNumber(5);

// ================================
// Part 3: Loops
// ================================
// Example 1: for loop
let loopList = document.getElementById('loop-list');
for (let i = 1; i <= 5; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `Item number ${i}`;
    loopList.appendChild(listItem);
}

// Example 2: while loop
let count = 6;
while (count <= 10) {
    let listItem = document.createElement('li');
    listItem.textContent = `Item number ${count}`;
    loopList.appendChild(listItem);
    count++;
}

// ================================
// Part 4: DOM Interactions
// ================================
// 1. Change background color
document.getElementById('change-color-btn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});

// 2. Display user input in real-time
let userInput = document.getElementById('user-input');
let displayInput = document.getElementById('display-input');

userInput.addEventListener('input', function() {
    displayInput.textContent = `You typed: ${userInput.value}`;
});

// 3. Dynamically add a new paragraph
let newParagraph = document.createElement('p');
newParagraph.textContent = "This paragraph was added dynamically via JavaScript.";
document.body.appendChild(newParagraph);
