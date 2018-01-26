class StoryBox extends React.Component {
  render() {
    return ( <div>Story Box</div> );
  }
}

let target = document.getElementById('story-app');

ReactDOM.render (
  <StoryBox />, target
);
