// import React, {Component, Fragment} from 'react';
// import {Transition, animated} from 'react-spring'
// import './MailList.css'
// import Drawer from "../LetterDrawer/LetterDrawer";
// import {connect} from 'react-redux'
// import { deleteLetter, reverseMessage, readLetter, letterTextShow, setUnRead, handleCheckboxes, deleteLetterGroup, groupCheck } from '../../actions/mailCreators'
//
//
//
// class MailList extends Component {
//
//     componentDidMount() {
//         this.props.setUnRead(this.props.emails.mailList['received'])
//     }
//     handleTouch = (start, item, mailList, unRead, e) => {
//            if (e.touches[0].clientX - start > window.innerWidth/2) this.props.deleteLetter(this.props.emails, [item])
//            if (start - e.touches[0].clientX > window.innerWidth/3) this.props.readLetter(item, mailList, unRead)
//     }
//
//     render(){
//         const { mailList, active, drawerIsOpen, textShow, unRead, checkboxesArray, search, groupCheck } = this.props.emails
//         let startTouch = 0
//         let currentMailList= null
//         if (mailList[active].length > 0){
//             const set = new Set(mailList[active].filter(element => element.from.includes(search)))
//             mailList[active].filter(element => element.subject.includes(search)).forEach(element => set.add(element))
//             mailList[active].filter(element => element.to.includes(search)).forEach(element => set.add(element))
//             currentMailList = Array.from(set).map((item) => {
//                 let letter = item.from || item.to
//                 letter = letter + ' - ' + item.subject
//                 if (window.innerWidth < 380 && letter.length > 33){
//                     letter = letter.substring(0, 31) + '...'
//                 }
//                 const index = letter.indexOf(search)
//             return (<li key={item.id}>
//                     <div className="letter-wrapper">
//
//                         {window.innerWidth > 380 && <input onChange={(e) => this.props.handleCheckboxes(item, checkboxesArray, mailList, active, groupCheck, e)}
//                                                            checked={item.checked} className="letter-checkbox" type="checkbox"/>}
//                         <div className="table-line">
//                             <div className={item.status ? null : 'active-letter'}>
//                                 <div className="letter-line"
//                                      onTouchStart={(e) => {startTouch = e.touches[0].clientX}}
//                                      onTouchMove={(e) => this.handleTouch(startTouch, item, mailList, unRead, e)}
//                                      onMouseEnter={window.innerWidth > 380 ? () => this.props.letterTextShow(item.id) : null}
//                                      onMouseLeave={window.innerWidth > 380 ? () => this.props.letterTextShow(0) : null}>
//                                     {window.innerWidth > 380 && <div onClick={() => this.props.deleteLetter(this.props.emails, [item])} className="delete-letter-button">
//                                     </div>}
//                                     {window.innerWidth > 380 && active === 'received' && <div className={item.answered ? "back-icon icon-answered" : "back-icon"}>
//                                     </div>}
//                                     <span className="date">{new Date(item.id).toString().split(' ').splice(1,3).join('-')}</span>
//
//                                     {window.innerWidth > 380 ? <span onClick={() => this.props.readLetter(item, mailList, unRead)}
//                                           className={textShow === item.id ? "letter-name name-blurred" : "letter-name"} >
//                                         {index > 0 && <span>{letter.substring(0, index)}</span>}
//                                         <span className="marked">{letter.substring(index, index + search.length)}</span>
//                                         <span>{letter.substring(index + search.length)}</span>
//                                         </span> : <span onClick={() => this.props.readLetter(item, mailList, unRead)} className="letter-name">{letter}</span>}
//
//                                     {textShow === item.id && <span className="letter-text">{item.text}</span>}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </li>)
//             })}
//         else {
//             currentMailList = (
//                 <li>
//                     <div className="no-letters">No letters in this folder so far</div>
//                 </li>
//             )}
//         const drawerOffset = window.innerWidth > 380 ? 50 : 0
//
//         return (
//             <Fragment>
//                 <div className="mail-list">
//
//                     {window.innerWidth > 380 && mailList[active].length > 0 && <button onClick={() => this.props.deleteLetterGroup(this.props.emails, checkboxesArray)}
//                                                             className={checkboxesArray[active].length > 0 ? "delete-chosen chosen-active" : "delete-chosen"}>Delete</button>}
//                     {window.innerWidth > 380 && mailList[active].length > 0 && <input onChange={() => this.props.groupCheck(mailList, active, checkboxesArray, groupCheck)} checked={groupCheck}
//                                                             className="letter-checkbox group-checkbox" type="checkbox"/>}
//
//                     <ul>
//                         {currentMailList}
//                     </ul>
//
//                 </div>
//
//                 <Transition
//                     native
//                     items = {drawerIsOpen}
//                     from = {{position: 'absolute', left: '100vw', top: '0vh'}}
//                     enter = {{position: 'absolute', left: drawerOffset + 'vw', top: '0vh'}}
//                     leave = {{position: 'absolute', left: '100vw', top: '0vh'}}
//                     config = {{duration: 500, delay: this.props.emails.delay}}
//                 >
//                     {show => show && (props =>(
//                         <animated.div style ={props}>
//                             <Drawer />
//                         </animated.div>
//                     ))}
//                 </Transition>
//             </Fragment>
//         );
//     }
// }
//
//
// const mapStateToProps = (state) => {
//     return {
//         emails: state.mails,
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteLetter: (emails, item) => dispatch(deleteLetter(emails, item)),
//         reverseMessage: (from, subject, id, iconPress ) => dispatch(reverseMessage(from, subject, id, iconPress)),
//         readLetter: (id, mailList, active) => dispatch(readLetter(id, mailList, active)),
//         letterTextShow: (id) => dispatch(letterTextShow(id)),
//         setUnRead: (list) => dispatch(setUnRead(list)),
//         handleCheckboxes: (item, checkboxesArray,  mailList, active, groupCheck, e) => dispatch(handleCheckboxes(item, checkboxesArray,  mailList, active, groupCheck, e)),
//         deleteLetterGroup: (emails, itemList) => dispatch(deleteLetterGroup(emails, itemList)),
//         groupCheck: (mailList, active, checkboxesArray, check) => dispatch(groupCheck(mailList, active, checkboxesArray, check)),
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(MailList)





import React, {Component, Fragment} from 'react';
import {Transition, animated} from 'react-spring'
import './MailList.css'
import Drawer from "../LetterDrawer/LetterDrawer";
import {connect} from 'react-redux'
import { deleteLetter, reverseMessage, readLetter, letterTextShow, setUnRead, handleCheckboxes, deleteLetterGroup, groupCheck } from '../../actions/mailCreators'
import SingleLetter from "./SingleLetter/SingleLetter";



class MailList extends Component {

    componentDidMount() {
        this.props.setUnRead(this.props.emails.mailList['received'])
    }

    render(){
        const { mailList, active, drawerIsOpen, checkboxesArray, search, groupCheck } = this.props.emails

        let currentMailList= null
        if (mailList[active].length > 0){
            const set = new Set(mailList[active].filter(element => element.from.includes(search)))
            mailList[active].filter(element => element.subject.includes(search)).forEach(element => set.add(element))
            mailList[active].filter(element => element.to.includes(search)).forEach(element => set.add(element))
            currentMailList = Array.from(set).map((item) => {
                let letter = item.from || item.to
                letter = letter + ' - ' + item.subject
                if (window.innerWidth < 380 && letter.length > 33){
                    letter = letter.substring(0, 31) + '...'
                }
                const index = letter.indexOf(search)
                return (<li key={item.id}>
                            <SingleLetter letter={letter} index={index} item={item}/>
                        </li>)
            })}
        else {
            currentMailList = (
                <li>
                    <div className="no-letters">No letters in this folder so far</div>
                </li>
            )}
        const drawerOffset = window.innerWidth > 710 ? 50 : 0

        return (
            <Fragment>
                <div className="mail-list">

                    {window.innerWidth > 710 && mailList[active].length > 0 && <button onClick={() => this.props.deleteLetterGroup(this.props.emails, checkboxesArray)}
                                                                                       className={checkboxesArray[active].length > 0 ? "delete-chosen chosen-active" : "delete-chosen"}>Delete</button>}
                    {window.innerWidth > 710 && mailList[active].length > 0 && <input onChange={() => this.props.groupCheck(mailList, active, checkboxesArray, groupCheck)} checked={groupCheck}
                                                                                      className="letter-checkbox group-checkbox" type="checkbox"/>}

                    <ul>
                        {currentMailList}
                    </ul>

                </div>

                <Transition
                    native
                    items = {drawerIsOpen}
                    from = {{position: 'absolute', left: '100vw', top: '0vh'}}
                    enter = {{position: 'absolute', left: drawerOffset + 'vw', top: '0vh'}}
                    leave = {{position: 'absolute', left: '100vw', top: '0vh'}}
                    config = {{duration: 500, delay: this.props.emails.delay}}
                >
                    {show => show && (props =>(
                        <animated.div style ={props}>
                            <Drawer />
                        </animated.div>
                    ))}
                </Transition>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        emails: state.mails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteLetter: (emails, item) => dispatch(deleteLetter(emails, item)),
        reverseMessage: (from, subject, id, iconPress ) => dispatch(reverseMessage(from, subject, id, iconPress)),
        readLetter: (id, mailList, active) => dispatch(readLetter(id, mailList, active)),
        letterTextShow: (id) => dispatch(letterTextShow(id)),
        setUnRead: (list) => dispatch(setUnRead(list)),
        handleCheckboxes: (item, checkboxesArray,  mailList, active, groupCheck, e) => dispatch(handleCheckboxes(item, checkboxesArray,  mailList, active, groupCheck, e)),
        deleteLetterGroup: (emails, itemList) => dispatch(deleteLetterGroup(emails, itemList)),
        groupCheck: (mailList, active, checkboxesArray, check) => dispatch(groupCheck(mailList, active, checkboxesArray, check)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailList)