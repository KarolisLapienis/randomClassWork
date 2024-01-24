
import { getDatabase, ref, set, child, push, update, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"
import {firebaseConfig} from "./firebaseIntegration.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"

const app = initializeApp(firebaseConfig)
const db = getDatabase()

let enterPrice = document.getElementById("productID")
let enterName = document.getElementById("enterName")
let enterQuantity = document.getElementById("enterQuantity")

let insertBtn = document.getElementById("insert")
let updateBtn = document.getElementById("update")
let removeBtn = document.getElementById("remove")

insertBtn.addEventListener("click", (event)=>{
    event.preventDefault()

    const productName = enterName.value
    const productID = enterPrice.value
    const productQuantity = enterQuantity.value

    console.log(productName)

    set(ref(db, 'product/' + 1), {
        productName: productName,
        productQuantity: productQuantity,
        productID : productID
      })
      .then (()=>{
          alert("added succesfully!")
      })
      .catch((error)=>{
          alert(error)
      })
})

updateBtn.addEventListener("click", (event) =>{
    event.preventDefault()

    const productName = enterName.value
    const productID = enterPrice.value
    const productQuantity = enterQuantity.value

    get(child(ref(db), `product/${productID}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val())
          enterName.value = snapshot.val().productName
          enterQuantity.value = snapshot.val().productQuantity
        } else {
          console.log("No data available")
        }
      }).catch((error) => {
        console.error(error)
      })
})