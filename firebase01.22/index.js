import {firebaseConfig} from './modules/firebaseIntegration.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  child,
  get,
  update
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
 
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

let enterEmail = document.getElementById('authenticationIDInput')
let enterPassword = document.getElementById('authenticationPasswordInput')

console.log(enterEmail)

let loginBtn = document.getElementById('loginBtn')
let registerBtn = document.getElementById('registerBtn')
let signOutBtn = document.getElementById('signOutBtn')

registerBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log(enterEmail.value, enterPassword.value)
    const email = enterEmail.value.trim()
    const password = enterPassword.value.trim()

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
    // ...
        const registerTime = new Date()

        set(ref(db, "/users/" + user.uid), {
            email: email,
            role: "simple",
            timestamp: `${registerTime}`
        })
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage)
    // ..
    });
})

loginBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    const email = enterEmail.value.trim(); // Retrieve email value
    const password = enterPassword.value.trim(); // Retrieve password value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            const loginTime = new Date();
            update(ref(db, '/users/' + user.uid), {
                timestamp: `${loginTime}`
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
});


onAuthStateChanged(auth, (user) => {
    console.log(user)
    if(user) {
        const uid = user.uid
        console.log(uid)
        get(child(ref(db), '/users/' + uid))
        .then((snapshot) => {
            console.log(snapshot)
            if(snapshot.exists()) {
                const usersDataFromDB = snapshot.val()
                const userRole = usersDataFromDB.role
                console.log(usersDataFromDB)

                if  (userRole==='admin') {
                    console.log('tu esi adminas')
                    const greetingImage = document.createElement("img")
                    greetingImage.src = "https://th.bing.com/th/id/R.a73e1c4f74e98c0946afbf0828c8e748?rik=6OmAfzWUbBfr4A&riu=http%3a%2f%2fs2.pinchstatic.com%2fimages%2frecipe%2f5%2f6%2f1%2f8%2f3%2fi.3.mLfddLzFjATnWbPPjyddQmJC7Fb0HRZmDZMEEdUDVos..jpg&ehk=CX5YJCIpVLf0Q4PQczSspAEo%2bJZOivARxYOgHfswDHQ%3d&risl=&pid=ImgRaw&r=0"
                }
                else {
                    console.log('esi simpas')
                    const greetingImage = document.createElement("img")
                    greetingImage.src = "https://th.bing.com/th/id/R.a73e1c4f74e98c0946afbf0828c8e748?rik=6OmAfzWUbBfr4A&riu=http%3a%2f%2fs2.pinchstatic.com%2fimages%2frecipe%2f5%2f6%2f1%2f8%2f3%2fi.3.mLfddLzFjATnWbPPjyddQmJC7Fb0HRZmDZMEEdUDVos..jpg&ehk=CX5YJCIpVLf0Q4PQczSspAEo%2bJZOivARxYOgHfswDHQ%3d&risl=&pid=ImgRaw&r=0"
                    greetingImage.id = "kugelis"
                    greetingImage.width = 300;
                    greetingImage.height = 300;
                    document.body.append(greetingImage)
                }
            }
        })
    }
    else{
        console.log('user is signed out')
    }
})

signOutBtn.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log("User signed out");
        })
        .catch((error) => {
            // An error happened.
            console.error("Error signing out:", error);
        });
});




// let enterBrand = document.getElementById("carBrandInput");
// let enterModel = document.getElementById("carModelInput");
// let enterYear = document.getElementById("carYearInput");
// let enterPrice = document.getElementById("carPriceInput");
// let enterPhoto = document.getElementById("favoriteCarPhotoInput");
// let form = document.getElementById('forma')
// let dataDiv = document.getElementById('dataDiv')
 
// let insertBtn = document.getElementById("insertBtn");
// let updateBtn = document.getElementById("updateBtn");
// let deleteBtn = document.getElementById("deleteBtn");

// insertBtn.addEventListener("click", (event) => {
//     event.preventDefault()

//     const carBrand = enterBrand.value
//     const carModel = enterModel.value
//     const carYear = enterYear.value
//     const carPrice = enterPrice.value
//     const carPhoto = enterPhoto.value

//     console.log(carBrand)
//     console.log(carModel)
//     console.log(carYear)
//     console.log(carPrice)
//     console.log(carPhoto)

//     set(push(ref(db, 'cars/')), {
//         carBrand: carBrand,
//         carModel: carModel,
//         carYear: carYear,
//         carPrice: carPrice,
//         carPhoto: carPhoto
//       })
//       .then (()=>{
//           alert("added succesfully!")
          
//       })
//       .catch((error)=>{
//           alert(error)
//       })
// })

// const getData = function() {
//     get(child(ref(db), 'cars/')).then((snapshot) => {
//         if (snapshot.exists()) {
//             console.log(snapshot.val())

//             const data = snapshot.val()
//             for(let car in data) {
//                 const carData = data[car]
//                 console.log(carData)
//                 dataDiv.innerHTML += `
//                 <div class="dataCard" style="width: 250px; height:  500px; border:2px solid red;">
//                 <img src="${carData.carPhoto}" style="height:150px; width:250px;">
//                 <h3>${carData.carBrand}</h3>
//                 <h4>${carData.carModel}</h4>
//                 <h4>${carData.carYear}</h4>
//                 <h4>${carData.carPrice}</h4>`
//             }
//         }
//         else {
//             console.log('No data')
//         }
//         })
//         .catch((error) => {
//             console.error(error)
//         })
//     }

// getData()


