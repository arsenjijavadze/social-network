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
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>

                <DialogItem name="David" id="1" />
                <DialogItem name="Aleksandr" id="2" />
                <DialogItem name="Solomon" id="3" />
                <DialogItem name="Elisabeth" id="4" />
                <DialogItem name="Hanna" id="5" />
                <DialogItem name="Mark" id="6" />

            </div>
            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="Follow the white rabbit" />
                <Message message="How are you?" />
                <Message message="Hello" />
                <Message message="Hi" />

            </div>

        </div>
    )
}

export default Dialogs;