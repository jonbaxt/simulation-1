let initial_state = {
    formData: {
        id: '',
        name: '',
        imgURL: '',
        price: 0
    },
    formStorage: [],
    cancelButton: {
        clicked: false
    }
};
const SAVE_NAME = 'SAVE_NAME';
const SAVE_URL = 'SAVE_URL';
const SAVE_PRICE = 'SAVE_PRICE';
const ADD_TO_DATA = 'ADD_TO_DATA';
const DELETE_IMAGE = 'DELETE_IMAGE';

export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case ADD_TO_DATA:
        return console.log(action.payload);
        default:
            return state;
    }
} 

export function addToData(newData){
    return {
        type: ADD_TO_DATA,
        payload: newData
    }
}