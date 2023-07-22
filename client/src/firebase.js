import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import {getStorage, getDownloadURL, ref as sRef} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
import { getDatabase,  onValue, get, child, ref } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

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
export function  initializeFirebase(){
    const app = initializeApp(firebaseConfig);
    return app;
}

//This function return an <a> tag with a link to download the ahil file,
//setting openLink=true, will open the .ahil file in a new tab
export function downloadAhilFile(storage, fileName, filePath, openLink){

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
        if(openLink == true)
            link.click();

    })
    .catch((error) => {
        // Handle any errors
        alert("Error occured");
    });

    return link;

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

    if(searchString == null || databaseJson == null){
        return [];
    }
    else{
        var keys = Object.keys(databaseJson);
        var succesfulQueries = [];

        var index = 0;
        keys.forEach(key => {
            if(key.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 || searchString === ""){
                succesfulQueries.push(key);
            }
        })
        
        var ret = [];

        for(var i = 0; i < succesfulQueries.length; i++){
            ret.push(databaseJson[succesfulQueries[i]]);
        }

        return ret;
    }


}


