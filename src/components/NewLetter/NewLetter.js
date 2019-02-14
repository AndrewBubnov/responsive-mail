import React, {Component} from 'react';
import './NewLetter.css'
import {connect} from 'react-redux'
import { newLetterClose, fillElement, newLetterSend } from '../../actions/mailCreators'

class NewLetter extends Component{

    render(){
        const { newLetter } = this.props.emails
        const reSubject = newLetter.subject ? newLetter.subject : undefined
        const reAddress = newLetter.to ? newLetter.to : undefined
        return(
            <div className="new-letter">
                <div onClick={this.props.newLetterClose} className="new-letter-header"><div className="new-letter-header-message">New message</div>
                    <div className="new-letter-close">&#10006;</div>
                </div>
                <div className="new-letter-form">
                    <label ><div className="new-letter-form-align">Address</div>
                        <input onChange={(e) => this.props.fillElement(e, newLetter)} type="text" name="to" defaultValue={reAddress}/>
                    </label>
                    <label><div className="new-letter-form-align">Theme</div>
                        <input type="text" onChange={(e) => this.props.fillElement(e, newLetter)} name="subject" defaultValue={reSubject}/>
                    </label>
                    <textarea onChange={(e) => this.props.fillElement(e, newLetter)} name="text" rows="10" cols="50">
                    </textarea>
                    <button onClick={() => this.props.newLetterSend(this.props.emails, true)}>Send</button>
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
        newLetterClose: () => dispatch(newLetterClose()),
        fillElement: (e, newLetter) => dispatch(fillElement(e, newLetter)),
        newLetterSend: (emails, newLetter) => dispatch(newLetterSend(emails, newLetter))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewLetter);