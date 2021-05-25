import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";

function Header() {
    return (
        // BEM 
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            <img className="header__logo" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftous-logos.com%2Fwp-content%2Fuploads%2F2018%2F04%2Flogo-Tinder.png&f=1&nofb=1" alt="tinder logo" />
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header