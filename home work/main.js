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
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
// const scriptJs = document.querySelector('script')
// for (let item of coursesAndDurationArray) {
//     scriptJs.insertAdjacentHTML("beforebegin", `<div class="item"><h2 class="heading">${item.title}</h2>.........................<p class="description">${item.monthDuration}</p></div>`)
// }


// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// VAR1
// const scriptJs = document.querySelector('script')
// const crounses = document.createElement('div')
// crounses.classList.add('item')
// for (let item of coursesArray) {
//     const title = document.createElement('h3');
//     title.innerText = item.title
//
//     const monthDuration = document.createElement('h4');
//     monthDuration.innerText = item.monthDuration;
//
//     const hourDuration = document.createElement('h3');
//     hourDuration.innerText = item.hourDuration;
//
//     const modules = document.createElement('ul')
//
//     for (let module of item.modules) {
//         let liEl = document.createElement('li');
//         liEl.innerText = module
//         modules.append(liEl)
//     }
//     const divEl = document.createElement('div')
//     divEl.append(title, monthDuration, hourDuration, modules)
//     crounses.append(divEl)
// }
// scriptJs.before(crounses)

// // VAR2
// const scriptJs = document.querySelector('script')
// const courses = document.createElement('div')
// courses.classList.add('item')
// for (let item of coursesArray) {
//     let x = ''
//     for (let i = 0; i < item.modules.length; i++) {
//         x += `<li>${item.modules[i]}</li>`
//         console.log(item.modules.length);
//     }
//     courses.insertAdjacentHTML("beforeend", `<div> <h2>${item.title}</h2> <h3>${item.monthDuration}</h3> <h3>${item.hourDuration}</h3> <ul>${x}</ul>  </div>`)
// }
// scriptJs.before(courses)
//
// let el = document.getElementsByClassName('heading')
// let ell = document.querySelector('.heading')


// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

