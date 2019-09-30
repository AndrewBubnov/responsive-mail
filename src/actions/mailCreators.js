import { WRITE_LETTER, CHANGE_FOLDER, LETTER_FIELD_FILL, LETTER_LIST, LETTER_SHOWN, CURRENT_LETTER, SET_FETCHING,
    TEXT_SHOW, SET_UNREAD, DRAWER_OPEN, SET_DELAY, CHECKBOXES_HANDLE, SET_SEARCH, GROUP_CHECK, MENU_TOGGLE, SET_WIDTH } from './mails'
import axios from 'axios'
//***********************

export const deleteLetter = (emails, itemList) => dispatch => {

    const {mailList, active, checkboxesArray} = emails
    dispatch({type: LETTER_SHOWN, payload: false})
    dispatch(setDelay(500))
    dispatch({type: DRAWER_OPEN, payload: false})
    const newCurrentList = mailList[active].slice().filter(letter => !itemList.some(element => element.id === letter.id))
    if (active === 'received') {
        dispatch(setUnRead(newCurrentList))
    }
    if (active !== 'deleted') {
        let newDeleted = mailList['deleted'].slice()
        itemList.forEach(item => item.checked = false)
        newDeleted = newDeleted.concat(itemList)
        dispatch({type: LETTER_LIST, payload: {...mailList, [active]: newCurrentList, 'deleted': newDeleted}})
        dispatch({type: TEXT_SHOW, payload: 0})
    } else {
        dispatch({type: LETTER_LIST, payload: {...mailList, [active]: newCurrentList}})
        dispatch({type: TEXT_SHOW, payload: 0})
    }
    if (itemList.length === 1 && checkboxesArray[active].some(element => element.id === itemList[0].id)) {
        checkboxesArray[active].splice(checkboxesArray[active].indexOf(itemList[0]), 1)
        dispatch({type: CHECKBOXES_HANDLE, payload: checkboxesArray})
    }
    dispatch({type: GROUP_CHECK, payload: false})
}
//***********************

export const reverseMessage = (to, subject, id, iconPress) => dispatch => {
    dispatch({type: LETTER_FIELD_FILL, payload: {to, subject: 'Re: ' + subject, id, answered: true}})
    dispatch({type: WRITE_LETTER, payload: iconPress})
}
//************************

export const writeLetter = (letter) => dispatch => {
    dispatch({type: WRITE_LETTER, payload: true})
    dispatch({type: LETTER_FIELD_FILL, payload: {...letter, to: '', subject: '', id: '', text: ''}})
}
//*************************

export const newLetterClose = () => dispatch => {
    dispatch({type: WRITE_LETTER, payload: false})
}
//**************************

export const changeFolder = (folderId) => dispatch => {
    dispatch ({type: CHANGE_FOLDER, payload: folderId})
    dispatch({type: MENU_TOGGLE, payload: false})
}
//***************************

export const fillElement = (e, newLetter) => dispatch => {
    dispatch({type: LETTER_FIELD_FILL, payload:{...newLetter, [e.target.name]: e.target.value}})
}
//****************************

export const newLetterSend = (emails, realLetter) => dispatch => {
    const letter = emails.newLetter
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (regexp.test(String(letter.to).toLowerCase())){
    if (letter.answered) {
        const newReceived = emails.mailList.received.map(item => {
            if (item.id === letter.id) {
                return item.answered = true;
            }
            return null;
        })
        dispatch({type: LETTER_LIST, payload: {...emails.mailList, 'received': newReceived}})
    }
    const subject = letter.subject === '' ? 'No subject' : letter.subject
    const newSubject = {to: letter.to, subject, text: letter.text}
    const newObj ={id: Date.now(), status: true, checked: false, from: '', ...newSubject}
    const sent = [...emails.mailList.sent, newObj]
    let tempList = {...emails.mailList, sent}
    dispatch({type: LETTER_LIST, payload: {...emails.mailList, sent}})
    dispatch(letterScroll(emails, tempList, realLetter))
        if (realLetter){
            const object = {
                to: letter.to,
                subject: letter.subject,
                text: letter.text,
            };
            axios.post(`/api`, object)


        }
    }
    else {
        dispatch({type: LETTER_FIELD_FILL, payload:{...letter, 'to': 'Please enter valid email address'}})
    }
}
//******************************

export const letterScroll = (emails, mailList, newLetter) => dispatch => {
    dispatch({type: LETTER_FIELD_FILL, payload: {...emails.newLetter, to: '', subject: '', id: '', text: ''}})
    dispatch({type: WRITE_LETTER, payload: false})
    dispatch({type: LETTER_SHOWN, payload: false})
    if (!newLetter){
        const { currentlyShown, active, unRead } = emails
        const currentList = mailList[active]
        const index = currentList.findIndex(item => item.id === currentlyShown.id)
        if (index < currentList.length - 1){
            setTimeout(() => dispatch(readLetter(currentList[index + 1], mailList, unRead)), 500)
        } else {
            dispatch(setDelay(500))
            dispatch(drawerClose())
        }
    }
}

//******************************

export const readLetter = (item, mailList, unRead) => dispatch =>{
    const id = item.id
    let mailListUpdated = mailList['received'].map((item) => {
        let newObj ={...item};
        if (newObj.id === id) newObj.status = true
        return newObj
    });
    dispatch({type: LETTER_LIST, payload: {...mailList, 'received': mailListUpdated}})
    dispatch({type: CURRENT_LETTER, payload: item})
    dispatch({type: DRAWER_OPEN, payload: true})
    dispatch({type: LETTER_SHOWN, payload: true})
    dispatch({type: LETTER_FIELD_FILL, payload:  {to: item.from, subject: 'Re: ' + item.subject, id: item.id, answered: true}})
    dispatch(setDelay(0))
    if (!item.status){
    dispatch({type: SET_UNREAD, payload: unRead - 1})
    }
}
//*******************************

export const drawerClose = () => dispatch => {
    dispatch({type: DRAWER_OPEN, payload: false})
}
//*******************************

export const letterTextShow = (id) => dispatch => {
    dispatch({type: TEXT_SHOW, payload: id})
}
//*******************************

export const setUnRead = (inbox) => dispatch => {
    let unRead = inbox.filter(item => !item.status).length
    dispatch({type: SET_UNREAD, payload: unRead})
}
//*******************************

export const setDelay = (delay) => dispatch => {
    dispatch({type: SET_DELAY, payload: delay})
}
//*******************************

export const handleCheckboxes = (item, checkboxesArray,  mailList, active, check, e) => dispatch => {
    const id = item.id
    let mailListUpdated = mailList[active].map((item) => {
        let newObj ={...item};
        const array = checkboxesArray[active]
        if (newObj.id === id) {
            newObj.checked = !item.checked
            e.target.checked ? array.push(item) : array.splice(array.findIndex(element => element.id === item.id), 1)
        }
        return newObj
    });
    console.log(checkboxesArray[active])
    if (checkboxesArray[active].length < mailList[active].length){
        dispatch({type: GROUP_CHECK, payload: false})
    }
    dispatch({type: LETTER_LIST, payload: {...mailList, [active]: mailListUpdated}})
    dispatch({type: CHECKBOXES_HANDLE, payload: checkboxesArray})
}
//*******************************

export const deleteLetterGroup = (emails) => dispatch => {
    const {checkboxesArray, active} = emails
    dispatch(deleteLetter(emails, checkboxesArray[active]))
    dispatch({type: CHECKBOXES_HANDLE, payload: {...checkboxesArray, [active]: []}})
}
//*******************************

export const handleSearch = (e) => dispatch => {
    dispatch({type: SET_SEARCH, payload: e.target.value})
}
//*******************************

export const groupCheck = (mailList, active, checkboxesArray, check) => dispatch => {
    let mailListUpdated = mailList[active].map(item => {
        let newObj ={...item};
        if (!newObj.checked) {
            newObj.checked = true
            checkboxesArray[active].push(item)
        }
        else if (newObj.checked && check){
            newObj.checked = false
            checkboxesArray[active].splice(checkboxesArray[active].findIndex(element => element.id === item.id), 1)
        }
        return newObj
    })
    dispatch({type: LETTER_LIST, payload: {...mailList, [active]: mailListUpdated}})
    dispatch({type: CHECKBOXES_HANDLE, payload: checkboxesArray})
    dispatch({type: GROUP_CHECK, payload: !check})

}
//********************************

export const topMenuToggle = (topMenuOpen) => dispatch => {
    dispatch({type: MENU_TOGGLE, payload: !topMenuOpen})
}
//********************************

export const setMail = (mailList) => dispatch => {
    dispatch({type: SET_FETCHING, payload: true})
    axios.get(`/api/`)
        .then(response => {
            dispatch({type: LETTER_LIST, payload: {...mailList, 'received': response.data}})
            dispatch({type: SET_FETCHING, payload: false})
            dispatch(setUnRead(response.data))
        })
}
//********************************

export const setWidth = (width) => dispatch => {
    dispatch({type: SET_WIDTH, payload: width})
}


