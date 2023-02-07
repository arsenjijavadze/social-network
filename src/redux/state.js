import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you? smth', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 11 },
            { id: 3, message: 'bla bla', likesCount: 1 },
        ],
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

        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;