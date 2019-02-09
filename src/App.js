import React, { Component, Fragment } from 'react';
import {Transition, animated} from 'react-spring'
import LetterType from './components/LetterType/LetterType'
import MailList from './components/MailList/MailList'
import NewLetter from "./components/NewLetter/NewLetter";
import Search from "./components/Search/Search";
import DrawerButton from "./components/DrawerButton/DrawerButton";
import './App.css';
import {connect} from 'react-redux'
import { writeLetter } from "./actions/mailCreators";


class App extends Component {
   render() {
       const active = this.props.emails.active.substring(0,1).toLocaleUpperCase() + this.props.emails.active.substring(1)
        return (
            <Fragment>
                {window.innerWidth <= 380 && <div className="header">{active}</div>}
                <DrawerButton/>
                <button onClick={() => this.props.writeLetter(this.props.emails.newLetter, true)}
                        className="new-message-button">{window.innerWidth > 380 ? 'New letter' : '+'}</button>

                <Transition
                native
                items = {this.props.emails.writingLetter}
                from = {{opacity: 1, position: 'absolute', left: '0vw', top: '0vh'}}
                enter = {{opacity: 1, position: 'absolute', left: '0vw', top: '15vh'}}
                leave = {{opacity: 0, position: 'absolute', left: '0vw', top: '0vh'}}
                >
                    {show => show && (props =>(
                        <animated.div style ={props}>
                        <NewLetter />
                        </animated.div>
                    ))}
                </Transition>

                <div className="main-region">

                    {window.innerWidth > 380 && <LetterType />}
                    <div className="list-wrapper">
                        {window.innerWidth > 380 && <Search/>}
                    <MailList />
                    </div>
                </div>
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
       writeLetter: (letter) => dispatch(writeLetter(letter)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);