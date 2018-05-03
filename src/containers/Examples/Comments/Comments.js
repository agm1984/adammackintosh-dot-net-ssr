import React, { Component } from 'react'

// Comments System is Non-MVP functionality
// This will be added after the UI is more crystallized
// and after more user feedback has been collected.
class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [{ id: 0, author: 'Ralph Johnson', content: 'Testing 1 2 3' }],
    }
  }

  addNewComment = () => {
    // GraphQL mutation
    // Websocket
    return null
  }

  render() {
    return (
      <div>
        <h3>Comments</h3>
        {this.state.comments.map(comment => (
          <div>Comment: {JSON.stringify(comment)}</div>
        ))}
        <div>
          <button onClick={this.addNewComment}>
            ADD COMMENT
          </button>
        </div>
      </div>
    )
  }
}

export default Comments
