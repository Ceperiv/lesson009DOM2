// Все робити за допомоги js.

// // - створити блок,
//
// const divCreate = document.createElement('div')
// //     - додати йому класи wrap, collapse, alpha, beta
// divCreate.className = 'wrap collapse alpha beta'
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// divCreate.innerHTML = `<h2>Доброго вечора! Ми з України!!!</h2>`
// divCreate.style.cssText = `
// padding: 10px;
// color: brown;
// background: silver;
// font-size: 500;
// border-radius: 5px
// `
// // - додати цей блок в body.
// document.body.appendChild(divCreate)
//
// // - клонувати його повністю, та додати клон в body.
// document.body.appendChild(divCreate.cloneNode(true))


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let array = ['Main','Products','About us','Contacts'];
// let createLiOfArr = document.querySelector('.menu');
// for (let item of array) {
//     createLiOfArr.insertAdjacentHTML('beforebegin',`<li>${item}</li>`)
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// const scriptJs = document.querySelector('script')
// const createDiv = document.createElement('div')
// scriptJs.before(createDiv)
// for (let item of coursesAndDurationArray) {
//     createDiv.insertAdjacentHTML("beforebegin", `<p>${item.title} --- ${item.monthDuration}</p>`)
// }


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

const scriptJs = document.querySelector('script')
for (let item of coursesAndDurationArray) {
    scriptJs.insertAdjacentHTML("beforebegin", `<div class="item"><h2 class="heading">${item.title}</h2>.........................<p class="description">${item.monthDuration}</p></div>`)
}

