// ================ Все Элементы ================
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease')
const counter = document.querySelector('#counter')
const closePopup = document.querySelector('#closePopup')
const clearBtn = document.querySelector('#clear')
const multiBtn = document.getElementsByClassName('btn-numbers')
const popup = document.querySelector('#decreaseBox')


// ================ Функция которая умножает значение ================
for (let i = 0; i < multiBtn.length; i++) {
    multiBtn[i].addEventListener('click', () => {
        counter.innerHTML = parseInt(counter.innerHTML) * multiBtn[i].innerHTML
    })
}

// ================ Функция которая прибавляет к значению ================
increaseBtn.addEventListener('click', () => {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
})

// ================ Функция которая отнимает от значения ================
decreaseBtn.addEventListener('click', () => {
    if (parseInt(counter.innerHTML) > 0) {
        counter.innerHTML = parseInt(counter.innerHTML) - 1;
    } else {
        popup.style.display = 'flex'
    }
})

// ================ Функция которая очищает значение ================
clearBtn.addEventListener('click', () => {
    counter.innerHTML = 0
})

// ================ Функция которая показывает popup если мы отнимаем больше 0 ================
closePopup.addEventListener('click', () => {
    popup.style.display = 'none'
})