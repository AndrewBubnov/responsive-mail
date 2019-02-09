import React, {Component, Fragment} from 'react'
import './Letter.css'
import {connect} from 'react-redux'
import { fillElement, newLetterSend, letterScroll} from '../../../actions/mailCreators'


class Letter extends Component{

    render(){
        const {newLetter, mailList, currentlyShown: letter} = this.props.emails
        const receivedMessage = mailList['received'].some(item => item.id === letter.id)

        let addressing = letter.from !== '' ? 'From' : 'To'
        let answer = null;
        if (addressing === 'From'){
            answer =
                <Fragment>
                    <span className="service-line">Answer this letter:</span>
                    <textarea name="text" onChange={(e) => this.props.fillElement(e, newLetter)} value={newLetter.text} className="answer-letter">
                </textarea>
                    <button className="letter-buttons send-button" onClick={() => {this.props.newLetterSend(this.props.emails, false)}}>Send</button>
                </Fragment>
        }

        return (
                <div className="letter">
                    <div className="letter-inner">
                        <div className="letter-title">
                            <span className="service-line">{addressing}: </span>{letter.from || letter.to}
                            {letter.answered && <div className="back-icon icon-answered"> </div>}
                        </div>
                        <div className="letter-title">
                            <span className="service-line">Subject: </span>{letter.subject}
                        </div>
                        <p className="incoming-letter">{letter.text}</p>
                        {answer}
                        <button className={receivedMessage ? "letter-buttons ignore-button" : "letter-buttons ignore-button ignore-only"}
                                onClick={() => {this.props.letterScroll(this.props.emails, mailList, false)}}>Ignore</button>
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
        fillElement: (e, newLetter) => dispatch(fillElement(e, newLetter)),
        newLetterSend: (emails) => dispatch(newLetterSend(emails)),
        letterScroll: (emails, mailList, newLetter) => dispatch(letterScroll(emails, mailList, newLetter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Letter)