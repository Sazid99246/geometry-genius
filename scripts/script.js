// shared functions
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area
}

// getting random background color
function randomBg(elementId) {
    const element = document.getElementById(elementId);

    // Generate random color on mouseover
    element.addEventListener('mouseover', function () {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const bgColor = `rgb(${red}, ${green}, ${blue})`;
        element.style.backgroundColor = bgColor;
    });

    // Remove background color on mouseout
    element.addEventListener('mouseout', function () {
        element.style.backgroundColor = ''; // Reset background color
    });
}


randomBg('card-1');
randomBg('card-2');
randomBg('card-3');
randomBg('card-4');
randomBg('card-5');
randomBg('card-6');

// Triangle
function calculateTriangleArea() {
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height')
    const area = 0.5 * base * height
    setInnerTextById('triangle-area', area);
}

// Rectangle
function calculateRectangleArea() {
    const length = getInputValueById('rectangle-length');
    const width = getInputValueById('rectangle-width');
    const area = length * width;
    setInnerTextById('rectangle-area', area);
}

// Parallelogram
function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height')
    const area = base * height;
    setInnerTextById('parallelogram-area', area);
}

// Rhombus
function calculateRhombusArea() {
    const d1 = getInputValueById('d1');
    const d2 = getInputValueById('d2');
    const area = 0.5 * d1 * d2;
    setInnerTextById('rhombus-area', area);
}

// Pentagon
function calculatePentagonArea() {
    const perimeter = getInputValueById('pentagon-perimeter');
    const base = getInputValueById('pentagon-base');
    const area = 0.5 * perimeter * base;
    setInnerTextById('pentagon-area', area);
}

// Ellipse
function calculateEllipseArea() {
    const a = getInputValueById('ellipse-a');
    const b = getInputValueById('ellipse-b');
    const area = (Math.PI * a * b).toFixed(2);
    setInnerTextById('ellipse-area', area);
}