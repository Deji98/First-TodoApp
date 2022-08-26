import React from 'react'
import {Button, ListItem, ListItemText} from "@mui/material";
import { db } from './Firebase_config';

export default function TodoListItem({todo, inprogress, id}) {

    function toggleInProgress(){
        db.collection("todos").doc(id).update({
            inprogress: !inprogress,
        });
    }

    function deleteTodo(){
        db.collection("todos").doc(id).delete();
    }
  
    return (
    <div style={{ display: "flex" }}> 
    <ListItem>
        <ListItemText
        primary = {todo}
        secondary = {inprogress ? "In progress": "completed"}
         />
    </ListItem>

    <Button onClick={toggleInProgress}>{inprogress ? "done": "Undone"}</Button>
    <Button onClick={deleteTodo}>x</Button>
    </div>
  );
}
