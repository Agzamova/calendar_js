'use strict';
let weeks = document.querySelector('.weeks')
let dates = document.querySelector('.dates')
let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()
let day = now.getDay()
let date = now.getDate()
let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
let current = document.querySelector('.current-date')
let btnPrevNext = document.querySelectorAll('.header span')

function loadWeeks() {
    let week = ``
    for (let i = 0; i < days.length; i++) {
        week += `<li>${days[i]}</li>`
    }
    weeks.innerHTML = week
}

loadWeeks()

function loadDate() {
    let item = ``
    let lastDayPrevMonth = new Date(year, month, 0).getDate()
    let lastDayCurrMonth = new Date(year, month + 1, 0).getDate()
    let firstDayCurrMonth = new Date(year, month, 1).getDay()
    let firstDayNextMonth = new Date(year, month + 1, 1).getDay()
    for (let i = firstDayCurrMonth; i > 0; i--) {
        item += `<li class="inactive">${lastDayPrevMonth - i + 1}</li>`
    }
    for (let i = 1; i <= lastDayCurrMonth; i++) {
        item += `<li class="${today(i) ? "active" : ""}">${i}</li>`
    }
    for (let i = firstDayNextMonth; i < 7; i++) {
        item += `<li class="inactive">${i - firstDayNextMonth + 1}</li>`
    }
    current.textContent = `${months[month]} ${year}`
    dates.innerHTML = item
}

loadDate()

function today(day) {
    let thisDate = new Date().getDate()
    let thisMonth = new Date().getMonth()
    let thisYear = new Date().getFullYear()

    if (day == thisDate && month == thisMonth && year == thisYear) {
        return true
    }
}

btnPrevNext.forEach(item => {
    item.addEventListener('click', function() {
        
        month = item.id === 'prev' ? month - 1 : month + 1
        if (month < 0 || month > 11) {
            let a = new Date(year, month)
            month = a.getMonth()
            year = a.getFullYear()
        }
        loadDate()
    })
})