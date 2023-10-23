import {createUssue} from "./blocks/created";


const $form = document.querySelector('.form')
$form.addEventListener('submit', e => {
    e.preventDefault()
    createUssue()
})

// document.body.addEventListener('click', e => {
//     if (e.target.classList.contains('add')) {
//         e.preventDefault()
//         console.log('submit')
//     }
// })