import { Router } from 'preact-router';

import Header from './header';

import { ActionsProvider } from '../Actions';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => {
  return (
	<div id="app">
		<Header />
    <ActionsProvider>
		<Router>
			<Home path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</Router>
    </ActionsProvider>
	</div>
  )
}

export default App;
