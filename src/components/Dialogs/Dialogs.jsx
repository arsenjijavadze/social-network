import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css"

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'David' },
        { id: 2, name: 'Aleksandr' },
        { id: 3, name: 'Solomon' },
        { id: 4, name: 'Elisabeth' },
        { id: 5, name: 'Hanna' },
        { id: 6, name: 'Mark' },
    ]



    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Follow the white rabbit' },
        { id: 3, message: 'Hello' },
        { id: 4, message: 'Hi' },
        { id: 5, message: 'Hi' },

    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />)



    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;