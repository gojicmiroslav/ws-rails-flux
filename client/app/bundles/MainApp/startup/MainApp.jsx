import React from 'react';
import ReactOnRails from 'react-on-rails';

import Main from '../containers/Main';

const MainApp = (props) => (
  <Main {...props} />
);

ReactOnRails.register({ MainApp });