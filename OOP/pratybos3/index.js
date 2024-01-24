class Reader {
    constructor(name, lastName, cardNumber) {
        this.name = name;
        this.lastName = lastName;
        this.cardNumber = cardNumber;
        this.booksTaken = [];
    }

    setBooks(book) {
        this.booksTaken.push(book);
    }

    getBooks() {
        return this.booksTaken;
    }

    getInfo() {
        return `Name: ${this.name}, Last name: ${this.lastName}, Card number: ${this.cardNumber}, Books taken: ${this.booksTaken}`;
    }
}

const readers = [];

function displayReaders() {
    const readersContainer = document.getElementById("readersContainer");
    readersContainer.innerHTML = "";

    readers.forEach(reader => {
        const readerDiv = document.createElement("div");
        readerDiv.textContent = reader.getInfo();
        readersContainer.appendChild(readerDiv);
    });
}

const formContainer = document.createElement("div");
formContainer.id = "formContainer";

const form = document.createElement("form");
form.id = "readerForm";

const createInputField = (labelText, inputId, inputName, type) => {
    const label = document.createElement("label");
    label.textContent = `${labelText}:`;

    const input = document.createElement("input");
    input.type = type;
    input.id = inputId;
    input.name = inputName;
    input.required = true;

    form.appendChild(label);
    form.appendChild(input);
};

createInputField("Name", "name", "name", "text");
createInputField("Last Name", "lastName", "lastName", "text");
createInputField("Card Number", "cardNumber", "cardNumber", "text");

createInputField("Books Taken", "booksTaken", "booksTaken", "text");

const createButton = document.createElement("button");
createButton.type = "button";
createButton.textContent = "Create Reader";
createButton.addEventListener("click", createReader);

form.appendChild(createButton);
formContainer.appendChild(form);

document.body.appendChild(formContainer);

const readersContainer = document.createElement("div");
readersContainer.id = "readersContainer";
document.body.appendChild(readersContainer);

function createReader() {
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