// Elements
const totalCountMain = document.getElementById("counter__t-count-main");
const additionCountMain = document.getElementById("counter__a-count-main");
const additionCountText = document.getElementById("counter__a-count-text");
const addButton = document.getElementById("counter__btn-add");
const saveButton = document.getElementById("counter__btn-save");

// Variables
let totalCount = 0;
let additionCount = 0;

// Functions
function add() {
    additionCount += 1;
    additionCountMain.innerText = additionCount;

    if (!additionCountText.classList.contains("display")) {
        additionCountText.classList.add("display");
    }
}

function save() {
    totalCount += additionCount;
    totalCountMain.innerText = totalCount;

    additionCount = 0;
    additionCountMain.innerText = additionCount;
}

// Main
totalCountMain.innerText = totalCount;
additionCountMain.innerText = additionCount;