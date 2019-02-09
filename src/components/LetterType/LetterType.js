import React, { Component } from 'react';
import './LetterType.css'
import {newLetterClose, reverseMessage, changeFolder} from "../../actions/mailCreators";
import {connect} from "react-redux";

class LetterType extends Component {

     render() {
        const { folders, active, unRead } = this.props.emails
        let folderList = folders.map( (item) => {
            let classN = item.id === active ? "active" : "regular"
            return (<li
                key={item.id}
                onClick={() => this.props.changeFolder(item.id)}
                className={classN}>
                <span className="folder-line"><div>{item.name}</div>
                    <div className="unread-counter">{item.id === 'received' && unRead > 0 && unRead}</div>
                </span>
            </li>)
        })
        return (
                <ul className="folders">
                    {folderList}
                </ul>
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
        newLetterClose: () => dispatch(newLetterClose()),
        reverseMessage: (from, subject, id, iconPress ) => dispatch(reverseMessage(from, subject, id, iconPress)),
        changeFolder: ( id ) => dispatch(changeFolder(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LetterType);