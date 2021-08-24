 import React, { Component } from 'react';
 
 
 class item extends Component {
     render() {
         return (
             <div>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.photo} />
  <Card.Body>
    <Card.Title> {this.props.name}Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onclick{()=>this.props.addFav(this.props.idx)}>add to fav</Button>
  </Card.Body>
</Card>

             </div>
         );
     }
 }
 
 export default item;