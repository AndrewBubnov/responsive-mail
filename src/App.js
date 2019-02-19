import React, { Component, Fragment } from 'react';
import {Transition, animated} from 'react-spring'
import LetterType from './components/LetterType/LetterType'
import MailList from './components/MailList/MailList'
import NewLetter from "./components/NewLetter/NewLetter";
import Search from "./components/Search/Search";
import DrawerButton from "./components/DrawerButton/DrawerButton";
import './App.css';
import {connect} from 'react-redux'
import { writeLetter, topMenuToggle } from "./actions/mailCreators";
import Drawer from "./components/Drawer/Drawer";


class App extends Component {

    render() {
        const active = this.props.emails.active.substring(0,1).toLocaleUpperCase() + this.props.emails.active.substring(1)
        const desktop = window.innerWidth > 710
        const offsetLeft = desktop ? '10vw' : '0vw'

        return (
             <Fragment>
                {!desktop && <div className="header">{active}</div>}
                <DrawerButton/>
                <Drawer/>

                <button onClick={() => this.props.writeLetter(this.props.emails.newLetter, true)}
                        className="new-message-button">{window.innerWidth > 710 ? 'New letter' : '+'}</button>

                <Transition
                native
                items = {this.props.emails.writingLetter}
                from = {{opacity: 1, position: 'absolute', left: offsetLeft, top: '0vh'}}
                enter = {{opacity: 1, position: 'absolute', left: offsetLeft, top: '15vh'}}
                leave = {{opacity: 0, position: 'absolute', left: offsetLeft, top: '0vh'}}
                >
                    {show => show && (props =>(
                        <animated.div style ={props}>
                        <NewLetter />
                        </animated.div>
                    ))}
                </Transition>

                <div className="main-region">

                    {desktop && <LetterType />}
                    <div className="list-wrapper">
                        {desktop && <Search/>}
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
        topMenuToggle: (open) => dispatch(topMenuToggle(open)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);