// This file contains functions to login, logout, signup users, etc.

// Login a user given their email and password
export function login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((err) => {
            console.log(err)
        });
}

// logout a user
export function logout() {

}

// signup a user given their email and password
export function signup(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((err) => {
            console.log(err)
        });
}

