import {app} from "./firebase.js";
import {getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

const db = getFirestore(app)
console.log(db)
console.log(doc)

const settingDoc = async()=>{
    await setDoc(doc(db, "cars", '1'), {
        make: "Lada",
        model: '1010',
        year: '2000',
        fuelConsumption: '12'
    }).then(()=>{
        alert('all good!')
    }).catch((error)=>{
        console.log(error)
    })
}

//settingDoc()

const addDocument= async()=>{
    await addDoc(collection(db, "cars"), {
        make: "BMW",
        model: 'm240i',
        year: '2020',
        fuelConsumption: '10'
    }).then(()=>{
        alert('all good!')
    }).catch((error)=>{
        console.log(error)
    })
}

// addDocument()

const getDocument = async()=>{
    const docSnap = await getDoc(doc(db, 'cars', '1'))
    console.log('Document data:', docSnap.data())
}

// getDocument()

const getAllDocuments = async()=>{
    const querySnapshot = await getDocs(collection(db, "cars"))
    const array=[]
    querySnapshot.forEach(el=> array.push(el.data()))
    // querySnapshot.forEach(el=> console.log(el.data()))
    console.log(array)
}

// getAllDocuments()

const updateDocument = async()=>{
    await updateDoc(doc(db, 'cars', 'v0Xz2s44f0iPdkc7l5EK'), {
        model:'M5',
        fuelConsumption: '16'
    })
}
// updateDocument()

const deleteDocument = async()=>{
    await deleteDoc(doc(db, 'cars', 'Tlee4AbZEvbCBS3B4CGy'))
}

deleteDocument()

