// Задача 1
const containsOnlyDigits = (str) => {
    const regExp = /^\d$/
    console.log(regExp.test(str))
}

console.log(containsOnlyDigits("12345")); 
console.log(containsOnlyDigits("12a45"));

// Задача 2
let i = 0
const second = setInterval(() => {
    i++
    console.log("Прошла секунда")
}, 1000)

// Задача 3 

const count = () => {
    let i = 1
    const interval = setInterval(() => {
        i++
        console.log(i)
        if (i >= 10) {
            clearInterval(interval)
        }
    }, 1000)
}

count() 


// Задача 4

const block = document.querySelector(".block")

block.onclick = () => {
    block.classList.toggle('red')       
}

// Задача 5
window.onload = () => {
    const xhr = new XMLHttpRequest
    xhr.open('GET', 'data.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()
    xhr.onload = () => {
        const data = JSON.parse(xhr.response)
        console.log(data.key)
        console.log(data.key2)
        console.log(data.key3)
    }
}

