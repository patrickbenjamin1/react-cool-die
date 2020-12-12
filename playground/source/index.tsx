import '../../react-cool-die/source/styles.scss';
import './styles.scss';

import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as ReactDOM from 'react-dom';

import Home from './views/home';

const App: React.FunctionComponent = () => <Home />;

const render = () => {
    const entryPoint = document.getElementById('host');

    ReactDOM.render(<App />, entryPoint);
};

render();
