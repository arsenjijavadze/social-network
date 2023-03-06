import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Form, NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";

const Dialogs = (props) => {



    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        //props.onSendMessageClick();
        props.dispatch(sendMessageCreator());

    }

    let onMessageChange = () => {
        let newMessageBody = newMessageElement.current.value;
        // props.updateNewMessageText(newMessageBody);
        props.dispatch(updateNewMessageBodyCreator(newMessageBody))

    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onMessageChange}
                            ref={newMessageElement}
                            value={props.dialogsPage.newMessageBody}
                            placeholder='Enter your message'
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;