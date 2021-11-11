import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBarHeader extends Component {
  render() {
    return (
     <div className="header wrap">
         <div className="row">
    <div class="ui pointing secondary menu">
        <span><li><a href="/" class="item">Home</a></li></span>
        <span><li><a href="/pixguru" class="item">Pixguru</a></li></span>
        <span><li><a href="/pixguruvideo"class="item">PixguruVideo</a></li></span>
        <span><li><a href="/" class="item">Person Detection</a></li></span>
        <span><li><a href="/" class="item">Face Recognition</a></li></span>
        <span><li><a href="/" class="item">Motion Detection</a></li></span>
    </div>
    </div>
    </div>

    )
  }
}