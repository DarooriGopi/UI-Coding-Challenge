import React from 'react';
import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = () =>
    <div>
        <h2 className="black-heading">Sports Magazine</h2>
        <h2 className="sub-heading">Sports Magazine Settings</h2>
		<hr/>
        { Routes }
        <footer className={footer}>
        </footer>
    </div>;

export default App;
