const popup = document.querySelector('.popup');
const mainBtn = document.querySelector('#button');
const closeBtn = document.querySelector('.close-btn');
const resetBtn = document.querySelector('.reset-btn');

// Adding some addEventListeners
mainBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
window.addEventListener('click', outsideClick);
resetBtn.addEventListener('click', clickReset);
mainBtn.addEventListener('click', clickCounter)

// Function that opens the popup
function openPopup() {
    popup.style.display = 'block'
}

// Function that closes the popup
function closePopup() {
    popup.style.display = 'none'
}

// Function that closes the popup when clicked outside of the popup
function outsideClick(e) {
    if (e.target == popup) {
        closePopup()
    }
}

// Function that counts clicks on a button, and show another button after 5 clicks to reset local storage
function clickCounter() {
    if (typeof(Storage) !== 'undefined') {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById('result').innerHTML = ' ' + localStorage.clickcount + ' times ';
    } else {
        document.getElementById('result').innerHTML = '0 clicks';
    }

    if (localStorage.clickcount >= 5) {
        resetBtn.style.display = 'block';
    } else {
        resetBtn.style.display = 'none';
    }
}


//Function that reset local storage with 'clickcount'
function clickReset() {
   localStorage.removeItem('clickcount');
}
