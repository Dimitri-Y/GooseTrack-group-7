import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/theme/themeSlice.js'
import { lightTheme, darkTheme } from './styles/theme.js';
import { GlobalStyles } from './styles/GlobalStyles.js';

function AppWrapper() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter basename="/GooseTrack-group-7">
            <AppWrapper />
          </BrowserRouter>
        </LocalizationProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
