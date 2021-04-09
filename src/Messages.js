import React from "react";
import {List, ListItem, Box} from "@material-ui/core";

function Messages(props){
    const arr = props.data;
    const items = arr.slice(0).reverse().map((val, i) => {
        return (
            <ListItem key={i}> {val} </ListItem>
        );
    });

    return (
    	<Box display="flex" alignItems="center" justifyContent="center">
        	<List> {items} </List>
        </Box>
    );
}

export default Messages;