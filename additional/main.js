
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
//     const monthDuration = document.createElement('h3');
//     monthDuration.innerText = `monthDuration - ${item.monthDuration}`;
//
//     const hourDuration = document.createElement('h3');
//     hourDuration.innerText = `hourDuration - ${item.hourDuration}`;
//
//     const divH3El = document.createElement('div')
//     divH3El.classList.add('h3-el')
//     divH3El.append(monthDuration, hourDuration)
//
//     const modules = document.createElement('ul')
//     const divUlEl = document.createElement('div')
//     divUlEl.classList.add('ul-el')
//     divUlEl.append(modules)
//
//     for (let module of item.modules) {
//         let liEl = document.createElement('li');
//         liEl.innerText = module
//         modules.append(liEl)
//     }
//     const divBoxWrap = document.createElement('div')
//     divBoxWrap.classList.add('box-wrap')
//     divBoxWrap.append(title, divH3El, divUlEl)
//     const br = document.createElement('br')
//     crounses.append(divBoxWrap, br)
//
// }
// scriptJs.before(crounses)

// VAR2
// const scriptJs = document.querySelector('script')
// const courses = document.createElement('div')
// courses.classList.add('item')
// for (let item of coursesArray) {
//     let x = ''
//     for (let i = 0; i < item.modules.length; i++) {
//         x += `<li>${item.modules[i]}</li>`
//         console.log(item.modules.length);
//     }
//     courses.insertAdjacentHTML("beforeend", `<div class="box-wrap"> <h2>${item.title}</h2> <div class="h3-el"><h3>monthDuration - ${item.monthDuration}</h3> <h3> hourDuration - ${item.hourDuration}</h3></div> <div class="ul-el"><ul><b>Modules:</b> ${x}</ul></div>  </div> <br>`)
// }
// scriptJs.before(courses)
//
// let el = document.getElementsByClassName('heading')
// let ell = document.querySelector('.heading')


// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

