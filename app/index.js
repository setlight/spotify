import React from 'react'
import ReactDOM from 'react-dom'
import './styles'
import fetch from 'isomorphic-fetch'

function callApi(endpoint, schema) {
    // const finalUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

    const finalUrl = 'https://api.spotify.com/v1/search?type=artist&q=beyonce'

    return fetch(finalUrl)
        .then(res => console.log(res))
}


ReactDOM.render(
    <h1>Hello World!</h1>,
    document.getElementById('app')
)
