import { useEffect, useState } from 'react';
import React from 'react';
import { getUsers } from '../../api';
import { IUser } from '../../types/interfaces/User';
import './styles.scss';
import User from '../User';
import { ESortOptions } from '../../types/enums';
import { Spinner } from '../../elements/Spinner';

const UsersList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [sortBy, setSortBy] = useState<string>(ESortOptions.NONE);
  const [sortedUsers, setSortedUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState<string>('');

  const filteredUsers = users.filter(user => user.username.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  const handleSearchOnChange = (value: string): void => {
    setSearch(value);
  }

  const handleSortByOnChange = (value: string): void => {
    setSortBy(value);
  }

  useEffect(() => {
    switch (sortBy) {
      case ESortOptions.ASC:
        setSortedUsers(filteredUsers.sort((currentUser, nextUser) => currentUser.username.localeCompare(nextUser.username)));
        break;
      case ESortOptions.DESC:
        setSortedUsers(filteredUsers.sort((currentUser, nextUser) => nextUser.username.localeCompare(currentUser.username)));
        break;
      case ESortOptions.NONE:
      default:
        setSortedUsers(filteredUsers.sort((currentUser, nextUser) => currentUser.id - nextUser.id));
        break;
    }
  }, [sortBy, search, users])

  useEffect(() => {
    getUsers()
      .then(loadedUsers => {
        setUsers(loadedUsers);
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <div className="users-page">
      <h1 className="title box">Users</h1>
      <div className="users-page__content">
        <div className="filters-box">
          <div className="search box">
            <input
              type="text"
              name="search"
              className="search__input filter"
              value={search}
              placeholder={'Search a user'}
              onChange={(e) => handleSearchOnChange(e.target.value)}
            />
          </div>
          <div className="subtitle box">
            <label className="sort__label">
              <p className="sort__label-text">{'Sort by:'}</p>
              <select
                name='select'
                value={sortBy}
                onChange={(e) => handleSortByOnChange(e.target.value)}
                className="select filter"
              >
                {Object.values(ESortOptions).map((value) => (
                  <option
                    key={value}
                    value={value}
                    className="option"
                  >
                    {`${value}`}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="users-list">
          {!sortedUsers.length && !users.length && (
            <Spinner />
          )}
          {users.length && !sortedUsers.length && (
            <h2 className="title">Ooops...User not found</h2>
          )}
          {sortedUsers && sortedUsers.map(user => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>

  );
}

export default UsersList;
