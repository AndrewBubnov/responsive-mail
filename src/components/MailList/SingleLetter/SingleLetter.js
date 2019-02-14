// import React from 'react'
// import {connect} from 'react-redux'
// import {
//     deleteLetter, deleteLetterGroup, groupCheck,
//     handleCheckboxes,
//     letterTextShow,
//     readLetter,
//     reverseMessage,
//     setUnRead
// } from "../../actions/mailCreators";
//
//
// const SingleLetter = (props) => {
//
//     const { letter, index, item } = props
//     const { mailList, active, textShow, unRead, checkboxesArray, search, groupCheck } = props.emails
//     const desktop = window.innerWidth > 380
//     let startTouch = 0
//     let offset = 0
//
//
//     const handleTouch = (start, item, mailList, unRead, e) => {
//         offset = e.touches[0].clientX - start
//         console.log(offset)
//         if (e.touches[0].clientX - start > window.innerWidth/2) props.deleteLetter(props.emails, [item])
//         if (start - e.touches[0].clientX > window.innerWidth/3) props.readLetter(item, mailList, unRead)
//     }
//
//     return (
//         <div className="letter-wrapper">
//
//             {desktop &&
//             <input onChange={(e) => props.handleCheckboxes(item, checkboxesArray, mailList, active, groupCheck, e)}
//                    checked={item.checked} className="letter-checkbox" type="checkbox"/>}
//             <div className="table-line">
//                 <div className={item.status ? null : 'active-letter'}>
//                     <div className="letter-line"  style={{transform: `translateX(${offset}px)`}}
//                          onTouchStart={(e) => {startTouch = e.touches[0].clientX}}
//                          onTouchMove={(e) => handleTouch(startTouch, item, mailList, unRead, e)}
//                          onMouseEnter={desktop ? () => props.letterTextShow(item.id) : null}
//                          onMouseLeave={desktop ? () => props.letterTextShow(0) : null}>
//                         {desktop && <div onClick={() => props.deleteLetter(props.emails, [item])}
//                                     className="delete-letter-button">
//                                     </div>}
//                         {desktop && active === 'received' &&
//                         <div className={item.answered ? "back-icon icon-answered" : "back-icon"}>
//                         </div>}
//                         <span className="date">{new Date(item.id).toString().split(' ').splice(1, 3).join('-')}</span>
//
//                         {desktop ? <span onClick={() => props.readLetter(item, mailList, unRead)}
//                                                          className={textShow === item.id ? "letter-name name-blurred" : "letter-name"}>
//                                         {index > 0 && <span>{letter.substring(0, index)}</span>}
//                             <span className="marked">{letter.substring(index, index + search.length)}</span>
//                                         <span>{letter.substring(index + search.length)}</span>
//                                         </span> : <span onClick={() => props.readLetter(item, mailList, unRead)}
//                                                         className="letter-name">{letter}</span>}
//
//                         {textShow === item.id && <span className="letter-text">{item.text}</span>}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
//
// }
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
// export default connect(mapStateToProps, mapDispatchToProps)(SingleLetter)




import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    deleteLetter, deleteLetterGroup, groupCheck,
    handleCheckboxes,
    letterTextShow,
    readLetter,
    reverseMessage,
    setUnRead
} from "../../../actions/mailCreators";
import './SingleLetter.css'


class SingleLetter extends Component{
    state ={
        startTouch: 0,
        offset: 0,
        back: false,
    }

handleStart = (startTouch) => {
        this.setState({startTouch, back: false})
}

handleMove = (item, mailList, unRead, e) => {
        let offset = e.touches[0].clientX - this.state.startTouch
        if (offset > 0) this.setState({offset})
        if (offset > window.innerWidth * 0.6) this.props.deleteLetter(this.props.emails, [item])
        if (this.state.startTouch - e.touches[0].clientX > window.innerWidth / 3) this.props.readLetter(item, mailList, unRead)
    }
handleEnd = () => {
    this.setState({offset: 0, back: true})
}
render() {
    const {letter, index, item} = this.props
    const {mailList, active, textShow, unRead, checkboxesArray, search, groupCheck} = this.props.emails
    const desktop = window.innerWidth > 710
    const style = this.state.back ? {transform: `translateX(${this.state.offset}px)`, transition: `transform .3s ease-in-out`} : {transform: `translateX(${this.state.offset}px)`}



    return (
        <div className="letter-wrapper">

            {desktop &&
            <input onChange={(e) => this.props.handleCheckboxes(item, checkboxesArray, mailList, active, groupCheck, e)}
                   checked={item.checked} className="letter-checkbox" type="checkbox"/>}
            <div className="table-line">
                <div className={item.status ? null : 'active-letter'}>
                    <div className="letter-line" style={style}
                         onTouchStart={(e) => this.handleStart(e.touches[0].clientX)}
                         onTouchEnd={this.handleEnd}
                         onTouchMove={(e) => this.handleMove(item, mailList, unRead, e)}
                         onMouseEnter={desktop ? () => this.props.letterTextShow(item.id) : null}
                         onMouseLeave={desktop ? () => this.props.letterTextShow(0) : null}>
                        {desktop && <div onClick={() => this.props.deleteLetter(this.props.emails, [item])}
                                         className="delete-letter-button">
                        </div>}
                        {desktop && active === 'received' &&
                        <div className={item.answered ? "back-icon icon-answered" : "back-icon"}>
                        </div>}
                        <span className="date">{new Date(item.id).toString().split(' ').splice(1, 3).join('-')}</span>

                        {desktop ? <span onClick={() => this.props.readLetter(item, mailList, unRead)}
                                         className={textShow === item.id ? "letter-name name-blurred" : "letter-name"}>
                                        {index > 0 && <span>{letter.substring(0, index)}</span>}
                            <span className="marked">{letter.substring(index, index + search.length)}</span>
                                        <span>{letter.substring(index + search.length)}</span>
                                        </span> : <span onClick={() => this.props.readLetter(item, mailList, unRead)}
                                                        className="letter-name">{letter}</span>}

                        {textShow === item.id && <span className="letter-text">{item.text}</span>}

                    </div>
                </div>
            </div>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleLetter)