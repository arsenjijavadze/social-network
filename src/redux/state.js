let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
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
}

// posts

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

//messages
export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {

    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;