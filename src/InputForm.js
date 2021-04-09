import React, {useState} from "react";
import {Button, TextField, Box} from "@material-ui/core";

function InputForm(props){
    const [chat, setChat] = useState("");

    function handleChange(e){
        setChat(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if (chat){
            props.sendMessage(chat);
        }
        setChat("");
    }

    return (
        <>
        	<Box display="flex" alignItems="center" justifyContent="center">
        		<h1><u> Messaging App </u></h1><br/> 
        	</Box>
        	<Box display="flex" alignItems="center" justifyContent="center">
	            <form onSubmit={handleSubmit}>
	                <TextField type="text" id="standard-basic" label="Enter message..." onChange={handleChange} value={chat}/>
	                <Button type="submit" variant="contained" color="primary"> Send </Button>
	            </form>
	        </Box>
        </>
    );
}

export default InputForm;