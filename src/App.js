import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';

import { Navigation } from './components';

export const App = ({ children }) => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
