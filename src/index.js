import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { MantineProvider, Text } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import store from './redux/store';

import App from './components/App/App';


const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme= {{
          colorScheme: 'light',
          fontFamily: 'Verdana, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: 'Greycliff CF, sans-serif' },
        }}
      >
        <Notifications />
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
