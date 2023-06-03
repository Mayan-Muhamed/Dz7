const btn = document.querySelector('.btn')
const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.previous')
const name = document.querySelector('.name')
const age = document.querySelector('.age')
let dataIndex = 0
let data = []

btn.onclick = async () => {
    const request = await fetch('peoples.json')
    data = await request.json()
    showData()
}


nextBtn.onclick = () => {
    dataIndex = (dataIndex + 1) % data.length
    showData()
}

previousBtn.onclick = () => {
    dataIndex = (dataIndex - 1 + data.length) % data.length
    showData()
}


const showData = () => {
    const person = data[dataIndex]
    name.innerHTML = person.name
    age.innerHTML = person.age
}


const fetchData = async () => {
    const resp = await fetch('info.json')
    const data = await resp.json()
    console.log(data)
}
fetchData()


