const block = document.querySelector('.block')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

let count = 0

const getTodos = async () => {
    try {
        const request = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const response = await request.json()
        block.innerHTML = `
            <h2>${response.title}</h2>
            <span>${response.id}</span>
            <h3>${response.completed}</h3>
        `
    }catch (error){
        console.error('error')
    }
}

nextBtn.onclick = () => {
    count++
    getTodos()
}

prevBtn.onclick = () => {
    if (count > 0) {
        count--
        getTodos()
    }else {
        block.innerHTML = `
            <h3>Click Next</h3>>
        `
    }
}


//fetch() to /posts

const fetchData = async ()=>{
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
    }
    catch (error) {
        console.log(error)
        }
}

fetchData()
