import React, {useState, useEffect} from "react";
import InputForm from "./InputForm.js";
import Messages from "./Messages.js";
import uuidv4 from "uuid/dist/v4";
import firebase from "firebase/app";
import "firebase/firestore";
import "./App.css";

const firebaseConfig = {
    apiKey: "AIzaSyBr4njvtnb0zOmHVPV2Sl3ZUvDirCRvxOg",
    authDomain: "reactchaty.firebaseapp.com",
    projectId: "reactchaty",
    storageBucket: "reactchaty.appspot.com",
    messagingSenderId: "361316550872",
    appId: "1:361316550872:web:55f11adf5c7fc6bef02fad"
};
firebase.initializeApp(firebaseConfig);

function App(){
    const [chats, setChats] = useState([]);
    const [name, setName] = useState("");
    const db = firebase.firestore();

    useEffect(() => {
    	const popup = prompt("What is your name?");
        const db = firebase.firestore();
        let data = [];

        db.collection("messages").orderBy("timestamp").onSnapshot((s) => {
            data = [];
            s.forEach((c) => {
                data.push(c.data().message);
            });
            setChats(data);
        });
        setName(popup);
    }, []);

    function sendMessage(mess){
        db.collection("messages").doc(uuidv4()).set({
            message: `${name}: ${mess}`,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    return (
        <>
            <InputForm sendMessage={sendMessage}/>
            <Messages data={chats}/>
        </>
    );
}

export default App;