export function createElement(tag, classEl, text = '') {
    const el = document.createElement(tag)
    el.classList.add(classEl)
    el.textContent = text
    return el
}
export function customAppendChild(array, tag) {
    array.forEach(item => {
        tag.appendChild(item)
    })
}
export function checkValue(item, elem) {
    elem.classList.add(item)
}
export function clearInputs(array) {
    array.forEach(item => {
        item.value = ''
    })
}
export function addToLocalStorage($items) {

}