// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjgUEn24Luyx2y_kFEH1QwnWKoNyEOFmI",
    authDomain: "diabetes-c30af.firebaseapp.com",
    projectId: "diabetes-c30af",
    storageBucket: "diabetes-c30af.appspot.com",
    messagingSenderId: "546363987043",
    appId: "1:546363987043:web:bad1ae1848b37ddfb65456",
    measurementId: "G-ZKCP3XVJ8K"
  };
  

firebase.initializeApp(firebaseConfig)
let database = firebase.firestore()




// function createUser{

// // create user

// let newUserEmail = "novoteste@teste.com"
// let newUserPassword = "12345678"

// firebase.auth().createUserWithEmailAndPassword(newUserEmail, newUserPassword)
//       .then(user => {
//         console.log(user);
//       }).catch(error => {
//         console.log(error);
//       })

//     }




// show user online and offline:

// function login() {

//   let UserEmail = "novoteste@teste.com"
//   let UserPassword = "12345678"

//   auth.signInWithEmailAndPassword(UserEmail, UserPassword)
//       .then(loggedUser => {
//         console.log(auth.currentUser);
//       }).catch(error => {
//         console.log(error);
//       })
// }
// login()

//

// function logout() {
//   auth.signOut().then().catch(error => {
//     console.log(error);
//     })
// }

// setTimeout(logout, 2000)


  let userOnline = auth.currentUser
  console.log(userOnline);



//add data of new peaple in firebase
database.collection("data-glucose").doc("new-person").update({
  name: "teste",
  glucose: 23
}).then(() => {
  console.log("Informações inseridas com sucesso");
}).catch(err=>{ 
  console.log(err);
})













//catching selecteds glucoses in real time

// database.colletion("data-gluose").where("glucose", ">", "75").onSnapshot()
//     .then(snapshot => {
//       snapshot.forEah((doc) => {
//         let person = doc.data()
//         console.log(person.name, person.glucose);
//       })
//     })




  
// catching data from collection "data-glucose" with js

// database.collection("data-glucose").get()
//                                     .then((snapshot) => {
//                                         snapshot.forEach((doc) => {
//                                             let personData = doc.data()
//                                             console.log(personData.name);
//                                         })
//                                     })



// catch name and glucose and sending to the firebase
// after "writen", n=name  g=glucose 

let writen = ""
let writeg = ""

function sendName() {
  writen = document.getElementById("name-person").value
  document.getElementById("writen").innerHTML = writen  
  //glucose
  writeg = document.getElementById("glucose-person").value
  document.getElementById("writeg").innerHTML = writeg
}