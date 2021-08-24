import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';







class FavFlowers extends React.Component {
  

  constructor(props){
    super(props);
    this.state={
      FavArr:[],
      show:false,
      index=-1,
      name:'',
      photo:'',
      instructions:'',
  
    }
    }

    componentDidMount = async () => {
      const url = `http://localhost:3000`;
      const FavArr= await.axios.get(`${url}/getFav`);
      this.setState({
        FavArr: FavArr.data
      })
      
      
      delete =async (id)=>{
        const url = `http://localhost:3000`;
        const newArr= await.axios.deleye( `${url}/deleteFav?id=${id}`)

        this.setState({
          FavArr:newArr.data
        })
        }
    
  render() {
    return(
      <>
        <h1>My Favorite Flowers</h1>
      </>
    )
  }
}

export default FavFlowers;
