const ADD = 'ADD';
const EDIT = 'EDIT';

let initial_state = {
    formData: {
        id: '',
        name: '',
        imgURL: '',
        price: 0
    },
    formStorage: [],
    cancelButton: false,
    editButton: ADD,
    editButNum: null
};
const CHANGE_FORM_BUTTON = 'CHANGE_FORM_BUTTON';
const UPDATE_EDIT_NUM_CALL = 'UPDATE_EDIT_NUM_CALL';
const GET_UPDATE_EDIT = 'GET_UPDATE_EDIT';

// const SAVE_NAME = 'SAVE_NAME';
// const SAVE_URL = 'SAVE_URL';
// const SAVE_PRICE = 'SAVE_PRICE';
const ADD_TO_DATA = 'ADD_TO_DATA';
// const DELETE_IMAGE = 'DELETE_IMAGE';

export default function reducer(state=initial_state, action) {
    switch (action.type) {
        case CHANGE_FORM_BUTTON:
            return Object.assign({}, state, { editButton: action.payload })
        case UPDATE_EDIT_NUM_CALL:
            console.log(`Went to reducer`)
            return Object.assign({}, state, { editButNum: action.payload })
        case GET_UPDATE_EDIT:
            return state.editButton;
        case ADD_TO_DATA:
            return console.log(action.payload);
        default:
            return state;
    }
}

export function changeFormButton(buttonChange) {
    return {
        type: CHANGE_FORM_BUTTON,
        payload: buttonChange
    }
}
export function getEditChange() {
    return {
        type: GET_UPDATE_EDIT
    }
}
export function changeEditButtonNum(editNumId) {
    return {
        type: UPDATE_EDIT_NUM_CALL,
        payload: editNumId
    }
}


export function addToData(newData) {
    return {
        type: ADD_TO_DATA,
        payload: newData
    }
}