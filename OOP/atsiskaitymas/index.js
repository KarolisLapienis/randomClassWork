import Bird from "./modulesJS/classBird.js"
import Dog from "./modulesJS/classDog.js"
import Fish from "./modulesJS/classFish.js"

console.log(Bird, Fish, Dog);

const selectionContainer = document.createElement('div');
selectionContainer.id = 'selectionContainer'
document.body.append(selectionContainer)


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

    form.append(label, input);
};

createInputField("Name", "name", "name", "text");
createInputField("Name", "name", "name", "text");createInputField("Name", "name", "name", "text");

const createButton = document.createElement("button");
createButton.type = "button";
createButton.textContent = "Create Reader";

form.append(createButton);
formContainer.append(form);
document.body.append(formContainer);
