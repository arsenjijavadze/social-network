import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'David' },
        { id: 2, name: 'Aleksandr' },
        { id: 3, name: 'Solomon' },
        { id: 4, name: 'Elisabeth' },
        { id: 5, name: 'Hanna' },
        { id: 6, name: 'Mark' },
    ]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Follow the white rabbit' },
        { id: 3, message: 'Hello' },
        { id: 4, message: 'Hi' },
        { id: 5, message: 'Hi' },

    ]

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />


            </div>

        </div>
    )
}

export default Dialogs;