
let container = document.getElementById('container')
console.log(container)

let button = document.createElement('button')
button.innerText = ('get country')
container.appendChild(button)

let input = document.createElement('input')
input.type = 'text'
input.placeholder = 'search for a country'

container.append(input, button)

const getCountry = async()=>{
    event.preventDefault()

    const inputValue = input.value.trim()
    console.log(inputValue)

     const result = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
    // const result = await fetch('https://restcountries.com/v3.1/name/+ {inputValue}')
    console.log(result)

    const data = await result.json()
    // console.log(data)

    if(result.status === 404){
        const infoElement = document.createElement('h2')
        infoElement.innerText = result.statusText
        container.appendChild(infoElement)
    }
    else{

        const allCards = document.querySelectorAll('.card')
        allCards.forEach(card=> card.remove())
        console.log(data)
        data.map((country)=>{
            const card = document.createElement('div')
            card.className = 'card'

            const flag = document.createElement('img')
            flag.src = country.flags.png
            flag.alt = country.flags.alt || country.name.common

            const title = document.createElement('h3')
            title.innerText = country.name.common
            
            card.append(flag, title)
            container.appendChild(card)

            card.style.border = '5px solid black'
            card.style.maxWidth = '330px'
        })
    }
}

button.addEventListener('click', getCountry)