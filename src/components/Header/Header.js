import React, { Component } from 'react';
import Search from './Search/Search'
import UserControl from './UserControl/UserControl'
import './Header.css'

class Header extends Component {

    render() {
        return (
            <header>
                <div className="logo">
                    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png" alt="Logo"/>
                </div>
                <div className="search-block">
                    <Search/>
                </div>
                <div className="control">
                    <UserControl/>
                </div>
            </header>
        );
    }
}

export default Header;