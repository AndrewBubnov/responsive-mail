import React from 'react';
import './Bacdrop.css';
import { topMenuToggle} from "../../actions/mailCreators";
import {connect} from "react-redux";
import './Bacdrop.css'


const Backdrop = (props) => {
        return (
            <div onClick={() => props.topMenuToggle(true)} className="backdrop">
            </div>
        )
};

const mapDispatchToProps = (dispatch) => {
    return {
        topMenuToggle: (topMenuOpen) => dispatch(topMenuToggle(topMenuOpen)),
    }
}

export default connect(null, mapDispatchToProps)(Backdrop)