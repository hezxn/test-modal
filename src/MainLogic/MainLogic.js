import React, {Component} from 'react';
import Button from './../components/Button/Button'
import Modal from './../components/Modal/Modal'
import './../App.css';


class MainLogic extends Component {

  state = {
    wasClicked: false
}


modalHandler = () => {
  this.setState({wasClicked: true});
}

cancelModalHandler = () => {
  this.setState({wasClicked: false});
}
  render () {
    const fruits = [ 'Apple', 'Banana', 'Orange', 'Pineapple', 'Guava', 'WaterMelon', 'Papaya','Strawberry','Grapes','Mango']

    return (
      <div>
        <Button open={this.modalHandler}>Click Me</Button>

        <Modal show={this.state.wasClicked} modalClosed={this.cancelModalHandler}>
        {fruits.map((fruit) => <li>{fruit}</li>)}
        <strong>Done</strong>
        </Modal>
      </div>
    );
  }
}

export default MainLogic;
