import React from "react";
import classes from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <div className="dialog">
                    User1
                </div>
                <div className="dialog">
                    User2
                </div>
                <div className="dialog">
                    User3
                </div>
                <div className="dialog">
                    User4
                </div>
            </div>
            <div className="messages">
                <div className="message">Hi</div>
                <div className="message">hello</div>
                <div className="message">Follow the white rabbit.</div>
            </div>

        </div>
    )
}

export default Dialogs;