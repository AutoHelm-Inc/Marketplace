import { initializeApp } from "firebase/app";
// import { initializeApp as initializeApp2 } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getStorage, getDownloadURL, ref as sRef } from "firebase/storage";
import { getDatabase, onValue, get, child, ref } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//Firebase details
const firebaseConfig = {
    apiKey: "AIzaSyAljhWFqObrRGHEIvq6_NEZW2sBd9Pml9g",
    authDomain: "autohelm.firebaseapp.com",
    databaseURL: "https://autohelm-default-rtdb.firebaseio.com",
    projectId: "autohelm",
    storageBucket: "autohelm.appspot.com",
    messagingSenderId: "285273283758",
    appId: "1:285273283758:web:4261bc6a4d65206d2c213f",
    measurementId: "G-GT1YFR4R3M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// initializeApp2(firebaseConfig)

//function to return firebase app details, this is passed in when running getStorage()
//ex. downloadAhilFile(getStorage(app))
export async function initializeFirebase() {
    const firebaseApp = initializeApp(firebaseConfig);
    return firebaseApp;
}


//This function return an <a> tag with a link to download the ahil file,
//setting openLink=true, will open the .ahil file in a new tab
export function downloadAhilFile(storage, fileName, filePath, openLink) {

    const link = document.createElement("a");
    link.href = "";
    //link.target = "_blank";

    getDownloadURL(sRef(storage, filePath))
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            // This can be downloaded directly:
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();

            link.href = url;
            link.download = fileName;
            if (openLink)
                link.click();

        })
        .catch((error) => {
            // Handle any errors
            alert("Error occured");
        });

    return link;

}

export async function login(email, password) {
    // try {
    //     if (!app) {
    //         console.log("fpwoiefpweijf");
    //         app = await initializeApp(firebaseConfig);
    //     }
    //     const auth = getAuth(app);
    //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //     const user = userCredential.user;
    //     console.log(user.email);
    // } catch (e) {
    //     console.log(e);
    // }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.email);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

}

//Given the database entry name and a user's email, it willl return the file path
//in our file server and the file name
export async function databaseGetEntry_Private(entryName, email) {

    var ret = [];
    const dbRef = ref(getDatabase(), "Private/" + email.split("@")[0] + (email.split("@")[1]).split(".")[0] + "/" + entryName);

    await get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
            var filePath = snapshot.val().Path;
            var fileName = snapshot.val().Name;
            ret[0] = fileName;
            ret[1] = filePath;
        }
    }).catch((error) => {
        console.error(error);
    });

    return ret;

}

//Given the database entry name and assumning its public, it will return the file path
//in our file server and the file name
export async function databaseGetEntry_Public(entryName) {

    var ret = [];
    const dbRef = ref(getDatabase(), "Public/" + entryName);

    await get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
            var filePath = snapshot.val().Path;
            var fileName = snapshot.val().Name;
            ret[0] = fileName;
            ret[1] = filePath;
        }
    }).catch((error) => {
        console.error(error);
    });

    return ret;

}

//function to export our contents of all private cloud saves of a particular user
//database into a json format which we can traverse
export async function databaseToJson_Private(email) {

    var jsonString;
    const dbRef = ref(getDatabase(), "Private/" + email.split("@")[0] + (email.split("@")[1]).split(".")[0] + "/");

    await get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
            jsonString = snapshot.val();
        }
    }).catch((error) => {
        console.error(error);
    });

    return jsonString;

}

//function to export our contents of all public cloud saves
//database into a json format which we can traverse
export async function databaseToJson_Public() {

    var jsonString;
    const dbRef = ref(getDatabase(), "Public/");

    await get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
            jsonString = snapshot.val();
        }
    }).catch((error) => {
        console.error(error);
    });

    return jsonString;

}

//function that checks public and private workflows for any and all workflows created
//by a specific user
export function getUserWorkflows(email, databaseJson_private, databaseJson_public) {

    if (databaseJson_public == null || databaseJson_private == null) {
        return [];
    }
    else {
        var workflows = [];
        var keys_private = Object.keys(databaseJson_private);

        for (var i = 0; i < keys_private.length; i++) {
            workflows.push(databaseJson_private[keys_private[i]]);
        }

        var keys_public = Object.keys(databaseJson_public);
        var values = Object.values(databaseJson_public);

        for (var j = 0; j < keys_public.length; j++) {
            if ((values[j].Username !== undefined) && (values[j].Username == email)) {
                console.log(databaseJson_public[keys_public[j]]);
                workflows.push(databaseJson_public[keys_public[j]]);
            }
        }

        return workflows;
    }

}

//This function can be used to search for all public workflows, specifically designed for the explore page
export function getPublicWorkflows(databaseJson_public, searchString) {

    if (searchString == null || databaseJson_public == null) {
        return [];
    }
    else {
        var keys = Object.keys(databaseJson_public);
        var succesfulQueries = [];

        var index = 0;
        keys.forEach(key => {
            if (key.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 || searchString === "") {
                succesfulQueries.push(key);
            }
        })

        var ret = [];

        for (var i = 0; i < succesfulQueries.length; i++) {
            ret.push(databaseJson_public[succesfulQueries[i]]);
        }

        return ret;
    }

}


//LEGACY FUNCTIONS, DO NOT USE, ONLY HERE UNTIL WE MIGRATE TO NEW FUNCTIONS
export async function databaseToJson() {

    var jsonString;
    const dbRef = ref(getDatabase(app), "Cloud_Saves/");

    await get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
            jsonString = snapshot.val();
        }
    }).catch((error) => {
        console.error(error);
    });

    return jsonString;

}

export function searchDatabaseProjects(databaseJson, searchString) {

    if (searchString == null || databaseJson == null) {
        return [];
    }
    else {
        var keys = Object.keys(databaseJson);
        var succesfulQueries = [];

        var index = 0;
        keys.forEach(key => {
            if (key.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 || searchString === "") {
                succesfulQueries.push(key);
            }
        })

        var ret = [];

        for (var i = 0; i < succesfulQueries.length; i++) {
            ret.push(databaseJson[succesfulQueries[i]]);
        }

        return ret;
    }


}


