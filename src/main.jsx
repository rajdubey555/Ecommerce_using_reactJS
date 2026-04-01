import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext.jsx';
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import 'react-loading-skeleton/dist/skeleton.css';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter  >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
)
