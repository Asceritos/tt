import UserSVG from '../../assets/icons/UserSVG';
import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../types/interfaces/User';
import './styles.scss';

interface UserProps {
  user: IUser
}

const User: FC<UserProps> = ({ user }) => {
  return (
    <div className={'user'}>
      <h4 className='user__username'>{`@${user.username}`}</h4>
      <h3 className='user__name'>
        <UserSVG />
        {user.name}
      </h3>
      <div className='user__links'>
        <Link to={`/users/${user.id}/posts`} className={'user__link'}>
          Posts
        </Link>
        <Link to={`/users/${user.id}/albums`} className={'user__link'}>
          Albums
        </Link>
      </div>
    </div>
  );
}

export default User;