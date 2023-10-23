import {checkValue, clearInputs, createElement, customAppendChild} from "./utils";

export const createUssue = () => {
    let flex,
        elem
    const $description = document.querySelector('.desc'),
        $assign = document.querySelector('.user'),
        $severity = document.querySelector('.select'),
        $items = document.querySelector('.items')
    const el = createElement('div', 'item')
    customAppendChild([createElement('div', 'item-title', `${$description.value.trim()}`),flex = createElement('div', 'flex')], el)
    customAppendChild([elem = createElement('div', 'time', `${$severity.value}`), createElement('div', 'user', `${$assign.value.trim()}`)], flex)
    customAppendChild([createElement('button', 'btn', 'close'), createElement('button', 'btn', 'delete')], el)
    checkValue($severity.value, elem)
    clearInputs([$assign, $description])
    $items.appendChild(el)
}