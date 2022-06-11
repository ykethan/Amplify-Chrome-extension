import logo from './logo.svg';
import './App.css';


import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { AmplifyS3Album } from '@aws-amplify/ui-react/legacy';

import awsExports from './aws-exports';
Amplify.configure(awsExports);




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
      <AmplifyS3Album />
      </header>
    </div>
  );
}

export default withAuthenticator(App);