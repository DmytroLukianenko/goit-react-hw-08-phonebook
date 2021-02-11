import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
// import './UserMenu.css';

const UserMenu = ({ avatar, email, onLogout }) => {
    return (
        <div className="avatar-wrapper">
            <div className="account-avatar">
                <img
                    className="avatar avatar--hover"
                    src={avatar}
                    alt="User avatar"
                    width="44"
                    height="44"
                />
            </div>
            <span className="account-title">{email}</span>
            <button className="logout-btn" type="button" onClick={onLogout}>
                Logout
      </button>
        </div>
    );
};

const mapStateToProps = state => ({
    email: authSelectors.getUserEmail(state),
    avatar:
        'https://img1.freepng.ru/20180519/lea/kisspng-jack-black-kung-fu-panda-showdown-of-legendary-le-5affe1a46e1027.5440406515267188844508.jpg',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
    UserMenu,
);