import React from 'react';
import './Drawer.css';
import LetterType from "../LetterType/LetterType";
import {connect} from "react-redux";



const Drawer = (props) => {
    const classArray = props.open ? "drawer open" : "drawer";
        return (
            <div className={classArray}>
             <LetterType/>
            </div>
        )
};
const mapStateToProps = (state) => {
    return {
        open: state.mails.topMenuOpen,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         writeLetter: (letter) => dispatch(writeLetter(letter)),
//     }
// }
export default connect(mapStateToProps, null)(Drawer);