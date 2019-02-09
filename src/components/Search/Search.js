import React, {Component} from 'react'
import './Search.css'
import {connect} from 'react-redux'
import { handleSearch } from '../../actions/mailCreators'


class Search extends Component{

    render(){


        return (
           <input className="search-input"
                  onChange={(e) => this.props.handleSearch(e)}
                  value={this.props.emails.search}
                  placeholder="Find letter"
           />
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
        handleSearch: (e) => dispatch(handleSearch(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)