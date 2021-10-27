// меню скролл

const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');

function toggleMenu() {
    menuElem.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
}

burger.addEventListener('click', () => {
    toggleMenu()
})

const links = document.querySelectorAll('.menu-list_link');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const ID = e.target.getAttribute('href').substr(1);
        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})


// вкладка для детей и взрослых

const tabsHeadlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');

for (let btn of tabsHeadlerElems) {
    btn.addEventListener('click', () => {
        tabsHeadlerElems.forEach (item => {
            item.classList.remove('bnt-disain-active')
            btn.classList.add('bnt-disain-active')
        })

        tabsContentElems.forEach( content => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden')
            }
            else {
                content.classList.add('hidden')
            }
        })
    })
}

// аккордион

const questions = document.querySelectorAll('.questions-par');
const answers = document.querySelectorAll('.answers');

questions.forEach((question, index) => {
    question.addEventListener ('click', () => {
        questions.forEach((question) => {
            question.classList.remove('questions-active');
        })

        question.classList.add('questions-active');

        answers.forEach((answer, index) => {
            answer.classList.add('hidden');
        })

        answers[index].classList.remove('hidden')
    })
})


const btns = document.querySelectorAll('.answers-link');
const lists = document.querySelectorAll('.answers-item');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btns.forEach((btnItem, idx) => {
            if (btnItem === btn) {
                btnItem.classList.toggle('answers-link_active');
                lists[idx].classList.toggle('hidden');
            }

            else {
                btnItem.classList.remove('answers-link_active');
                lists[idx].classList.add('hidden');
            }
        })
    })
})

// модальное окно

const modalBtn = document.querySelector('.modal_open');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })

modal.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('overlay') || target.classList.contains('modal_close')) {
        modal.classList.add('hidden')
    }
})

