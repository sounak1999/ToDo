import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo(props) {
    return (
        <List className = "todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary = {props.todo.todo} secondary = 'Deadline'/>
            </ListItem>
            <DeleteIcon onClick = {event => {db.collection('todos').doc(props.todo.id).delete()}} />
        </List>
    )
}

export default Todo
