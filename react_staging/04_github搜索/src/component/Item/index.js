import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  render() {
    const {avatar_url, html_url, login} = this.props
    return (
        <div className="card">
            <a href={html_url} target="_blank" rel="noreferrer">
                <img alt="sf" src={avatar_url} style={{width: '100px'}}/>
            </a>
            <p className="card-text">{login}</p>
        </div>
    )
  }
}
