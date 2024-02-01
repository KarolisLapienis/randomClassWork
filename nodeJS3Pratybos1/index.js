const addMovieForm = document.createElement("form")


// title, releaseDate, genre, oscars, oscarNominations


const mainElement = document.querySelector("main")

const addMovieBtn = document.createElement("button")
addMovieBtn.innerText = "Add movie"


main.append(addMovieBtn, addMovieForm)

function createAndAppendInputFields() {
    const createInput = (type, name, placeholder, id, attributes = {}) => {
        const input = document.createElement("input");
        input.type = type;
        input.name = name;
        input.placeholder = placeholder;
        input.id = id; // Assign the id
        Object.assign(input, attributes);
        addMovieForm.append(input);
    };

    createInput("text", "input1", "Input 1", "input1-id", { required: true });
    createInput("number", "input2", "Input 2", "input2-id", { min: 0, max: 100 });
    createInput("email", "input3", "Input 3", "input3-id", { required: true });
    createInput("password", "input4", "Input 4", "input4-id", { minLength: 8 });
    createInput("date", "input5", "Input 5", "input5-id");
    createInput("checkbox", "input6", "Input 6", "input6-id", { checked: true });
}

// Call the function to create and append the input fields
createAndAppendInputFields();

