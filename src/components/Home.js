import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col ,Row,button} from 'react-bootstrap';
import item from './item'



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    }
  }

  componentDidMount = async () => {
    const url = `http://localhost:3000`;
    const allData = await.axios.get(`${url}/Flowers`);
    this.setState({
      allData: allData.data
    })

    addFav = async (idx) => {
      const url = `http://localhost:3000`;
      const obj = {
        name: this.state.allData[idx].name,
        photo: this.state.allData[idx].photo,
        instructions: this.state.allData[idx].instructions,
        await.axios.post(`${url}/createFav`, obj)
      }

    }

  }
  
  render() {
    return (
      <>
        <h1>API Flowers</h1>

        <Row> {this.state.allData.map((item,idx)=>{
          <col> 
          <item
            key={idx}
            item={item}
            addFav={this.addFav}
            idx={idx}
          />  </col>)
    ) }
    </Row>
      </>
    )
  }
}

export default Home;
