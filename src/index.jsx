import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import '../assets/stylesheets/application.scss'
import App from './components/App'

const root = document.getElementById('root')
if (root) {
  ReactDOM.render(
    <BrowserRouter basename={process.env.REPO_NAME}>
      <App />
    </BrowserRouter>,
    root
  )
}
