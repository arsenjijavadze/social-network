import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css"

const Dialogs = (props) => {



    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        //props.addMessage();
        props.dispatch({ type: 'ADD-MESSAGE' });

    }

    let onMessageChange = () => {
        let textMessage = newMessageElement.current.value;
        // props.updateNewMessageText(textMessage);
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: textMessage })

    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange}
                    ref={newMessageElement}
                    value={props.dialogsPage.newMessageText} />
            </div>
            <div>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
}

export default Dialogs;