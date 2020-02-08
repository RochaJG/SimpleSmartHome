import React from 'react';
import Routes from '~/routes';
import Theme from './theme';
import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

const App = () => (
  <Theme>
    <Routes />
  </Theme>
);

export default App;
