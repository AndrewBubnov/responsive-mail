import React, {Component} from 'react'
import './Letter/Letter'
import {connect} from 'react-redux'
import Letter from "./Letter/Letter";
import {animated, Transition} from "react-spring";
import {drawerClose } from '../../actions/mailCreators'
import './LetterDrawer.css'

class LetterDrawer extends Component{

    render(){
        const leftOffset = window.innerWidth > 380 ? 5 : 0
        return (
            <div className="drawer-box">
                <div className="drawer-box-header">
                    <div onClick={this.props.drawerClose} className="drawer-box-close">&#10006;</div>
                </div>
                <div className="drawer-area">
            <Transition
                native
                items = {this.props.emails.letterIsShown}
                from = {{opacity: 1, position: 'absolute', left: leftOffset + 'vw', top: '100vh'}}
                enter = {{opacity: 1, position: 'absolute', left: leftOffset + 'vw', top: '10vh'}}
                leave = {{opacity: 0, position: 'absolute', left: leftOffset + 'vw', top: '-100vh'}}
                config = {{duration: 500}}
            >
                {show => show && (props =>(
                    <animated.div style ={props}>
                        <Letter/>
                    </animated.div>
                ))}
            </Transition>
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
        drawerClose: () => dispatch(drawerClose()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LetterDrawer)