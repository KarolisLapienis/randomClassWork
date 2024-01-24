import Bird from "./classes/classBird.js"
import Dog from "./classes/classDog.js"
import Fish from "./classes/classFish.js"


const selectionContainer = document.createElement('div');
selectionContainer.id = 'selectionContainer';
document.body.append(selectionContainer);

const dogButton = document.createElement("button");
dogButton.type = "button";
dogButton.id = "dogButton";
dogButton.textContent = "Dog";

selectionContainer.append(dogButton);

const fishButton = document.createElement("button");
fishButton.type = "button";
fishButton.id = "fishButton";
fishButton.textContent = "Fish";

selectionContainer.append(fishButton);

const birdButton = document.createElement("button");
birdButton.type = "button";
birdButton.id = "birdButton";
birdButton.textContent = "Bird";

selectionContainer.append(birdButton);

console.log(Bird, Fish, Dog);

const formContainer = document.createElement("div");
formContainer.id = "formContainer";

const form = document.createElement("form");
form.id = "animal";

const createInputField = (labelText, inputId, inputName, type) => {
    const label = document.createElement("label");
    label.textContent = `${labelText}:`;

    const input = document.createElement("input");
    input.type = type;
    input.id = inputId;
    input.name = inputName;

    form.append(label, input);
};




createInputField("Name", "name", "name", "text");
createInputField("Name", "name", "name", "text");
createInputField("Name", "name", "name", "text");

const submitButton = document.createElement("button");
submitButton.type = "button";
submitButton.textContent = "Submit";
createButton.addEventListener("click", createAnimal);

function createAnimal() {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const booksTaken = document.getElementById("booksTaken").value;

    const newReader = new Reader(name, lastName, cardNumber);
    newReader.setBooks(booksTaken);

    readers.push(newReader);
    displayReaders();

    console.log(newReader);
    console.log(readers);
}



form.append(submitButton);
formContainer.append(form);
document.body.append(formContainer);