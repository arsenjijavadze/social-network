import React from "react";
import classes from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    User1
                </div>
                <div className={classes.dialog}>
                    User2
                </div>
                <div className={classes.dialog}>
                    User3
                </div>
                <div className={classes.dialog}>
                    User4
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>hello</div>
                <div className={classes.message}>Follow the white rabbit.</div>
            </div>

        </div>
    )
}

export default Dialogs;