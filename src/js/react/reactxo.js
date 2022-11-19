// import { flsModules } from "./modules.js";
import React from 'react';
import { createRoot } from 'react-dom/client'
'use strict';
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}
createRoot(document.querySelector('#like_button_container')).render(<LikeButton />)