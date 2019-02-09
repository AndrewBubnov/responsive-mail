import React, { Component, Fragment } from 'react';

class Search extends Component {

    render() {
        return (
            <Fragment>
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </Fragment>
        );
    }
}

export default Search;