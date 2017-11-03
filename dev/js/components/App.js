import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Add features</h2>
        <UserList />
        <hr />
        <h2>Features added</h2>
        <UserDetails />
    </div>
);

export default App;
