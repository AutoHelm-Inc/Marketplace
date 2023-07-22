import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {getDownloadURL, ref as sRef} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
import { getDatabase, get, ref } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

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

//function to return firebase app details, this is passed in when running getStorage()
//ex. downloadAhilFile(getStorage(app))
export function initializeFirebase(){
    const app = initializeApp(firebaseConfig);
    return app;
}

//This function return an <a> tag with a link to download the ahil file,
//setting openLink=true, will open the .ahil file in a new tab
export function downloadAhilFile(storage, fileName, filePath) {
    return getDownloadURL(sRef(storage, filePath))
        .then((url) => {
            return fetch(url).then((response) => {
            return response.blob().then((blob) => ({ blob, contentType: response.headers.get('Content-Type') }));
            });
        })
        .then(({ blob, contentType }) => {
            // Create a download link
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
    
            // Get the file extension from the content type
            const extension = "AHIL";
            
            // Set the proper file name with the extension
            link.download = `${fileName}.${extension}`;
    
            // Trigger the download
            link.click();
      })
        .catch((error) => {
            // Handle any errors
            alert("Error occurred");
    });
  }

//Given the database entry name, it willl return the file path
//in our file server and the file name
export async function databaseGetEntry(entryName){

    var ret = [];
    const dbRef = ref(getDatabase(), "Cloud_Saves/" + entryName);
    
    await get(dbRef).then((snapshot)  => {
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

//function to export our contents of our cloud_saves
//database into a json format which we can traverse
export async function databaseToJson(){
    
    var jsonString;
    const dbRef = ref(getDatabase(), "Cloud_Saves/");
    
    await get(dbRef).then((snapshot)  => {
        if (snapshot.exists()) {
          jsonString = snapshot.val();
        } 
    }).catch((error) => {
        console.error(error);
    });

    return jsonString;

}

//function that checks our database entrys and grabs projects
//that match the search string and returns an array with all 
//relevant workflows
//Note specifying empty string pulls everything
export function searchDatabaseProjects(databaseJson, searchString){

    var keys = Object.keys(databaseJson);
    var succesfulQueries = [];

    var index = 0;
    keys.forEach(key => {
        if(searchString === "" || key.toLowerCase().indexOf(searchString.toLowerCase()) >= 0){
            succesfulQueries.push(key);
        }
    })

    var ret = [];
    for(var i = 0; i < succesfulQueries.length; i++){
        ret.push(databaseJson[succesfulQueries[i]]);
    }

    return ret;


}


