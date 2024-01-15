

const photoContainer = document.createElement('div')
document.body.appendChild(photoContainer)
photoContainer.className = 'photoContainer'

const photo = document.createElement('img')
photo.alt = 'OOPS'
photoContainer.appendChild(photo)
    
const newPhoto = async()=>{
        const getPhoto = await fetch('https://dog.ceo/api/breeds/image/random/3')
        const photoData = await getPhoto.json()
        console.log(photoData)
}
newPhoto()

print(2 + '3')