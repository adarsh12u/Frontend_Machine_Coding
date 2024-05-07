import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './Store/store.js'
import {Provider} from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import {persiststores} from './Store/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
<PersistGate persistor={persiststores}>

<Provider store={store}>
    <App />
  </Provider>,
</PersistGate>
)
