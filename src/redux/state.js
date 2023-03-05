const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you? smth', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 },
                { id: 3, message: 'bla bla', likesCount: 1 },
            ],
            newPostText: 'social-network-project'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'David' },
                { id: 2, name: 'Aleksandr' },
                { id: 3, name: 'Solomon' },
                { id: 4, name: 'Elisabeth' },
                { id: 5, name: 'Hanna' },
                { id: 6, name: 'Mark' },
            ],
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'Follow the white rabbit' },
                { id: 3, message: 'Hello' },
                { id: 4, message: 'Hi' },
                { id: 5, message: 'Hi' },

            ],
            newMessageText: 'words'
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        if (action.type === ADD_POST) {

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}
export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => (

    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
)

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })


export const updateNewMessageTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: text
    }
)






export default store;

window.store = store;