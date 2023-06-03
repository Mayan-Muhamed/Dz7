const getCard = async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        return data
    }catch (error){
        console.log('error!')
    }
}
const renderCard = async ()=>{
    const cardInner = document.querySelector('.card__inner')
    const cardData = await getCard()
    cardData.forEach((cards)=>{
        const card = document.createElement('div')
        card.className = 'card'
        const image = document.createElement('img')
        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMnvU01R6kJBDZ6uNBeuJNCI4dJf_3mNk9Gw&usqp=CAU'
        const title = document.createElement('h3')
        title.textContent = cards.title
        const text = document.createElement('p')
        text.textContent = cards.body
        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(text)
        cardInner.appendChild(card)
    })
}
renderCard()