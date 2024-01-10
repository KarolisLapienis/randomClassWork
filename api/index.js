
let container = document.getElementById('container')
console.log(container)

let button = document.createElement('button')
button.innerText = ('getPhoto')
container.appendChild(button)

let imgElement = document.createElement('img')
imgElement.style.width = '400px'
imgElement.style.height = '400px'

const getPhoto = async()=>{
    const result = await fetch("https://coffee.alexflipnote.dev/random.json")
    console.log(result)

    const data = await result.json()
    console.log(data)

    imgElement.src = data.file

    container.appendChild(imgElement)

}

button.addEventListener('click', getPhoto)