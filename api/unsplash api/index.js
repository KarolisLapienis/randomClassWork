const API_KEY = 'uG8_F4FRn6sPzosXZVkNr1pihC1wU-O4rXHDzAjJmMs';

let container = document.getElementById('container');
console.log(container);

let button = document.createElement('button');
button.innerText = 'search photos';
container.appendChild(button);

let input = document.createElement('input');
input.type = 'text';
input.placeholder = 'input';

container.append(input, button);

const getPhotos = async () => {
    event.preventDefault();

    const inputValue = input.value.trim();
    console.log(inputValue);

    const result = await fetch(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${inputValue}&per_page=6`);
    console.log(result);

    let data = await result.json();
    console.log(data);

    
    const allImages = document.querySelectorAll('.image');
    allImages.forEach(img => img.remove());

    if (data.results.length === 0) {
        const infoElement = document.createElement('h2');
        infoElement.innerText = 'images not found';
        infoElement.className = 'notFound'
        container.appendChild(infoElement);
    } else {
        
        data.results.map(photo => {
            const image = document.createElement('img');
            image.src = photo.urls.small;
            image.alt = photo.alt_description;
            image.className = 'image'
            container.appendChild(image);
        });
    }
};

button.addEventListener('click', getPhotos);