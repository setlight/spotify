import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configure-store'
import './styles'

const store = configureStore()

ReactDOM.render(
    <h1>Hello World!</h1>,
    document.getElementById('app')
)
