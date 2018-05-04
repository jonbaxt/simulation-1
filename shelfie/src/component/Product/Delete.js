import React, {Component} from 'react';
import axios from 'axios';


// export default function Delete(elementId){
export default class Delete extends Component {
constructor(props){
    super(props)

    // console.log(props)
    this.state = {
        buttons: [],
        dataTo: [],
        button: ''
    }
    this.deleteProduct = this.deleteProduct.bind( this );
}

componentDidMount(){
    axios.get('/api/inventory').then( result => {
        // console.log(result.data)
        this.setState({inventory: result.data})
        // console.log(this.state.inventory);
      }).catch( err => console.log( err ) )
}

deleteProduct(){
    // console.log(this.props);
    let indexNumber = this.props.here;
    // console.log(indexNumber);
    axios.delete(`/api/inventory/`+indexNumber)
    .then( (elem ) => {
        console.log(`This is inside delete from the method`,elem)
        // this.componentDidUpdate();
        this.componentDidMount();
    })
    .catch( (err ) => console.log(`Not quite`, err))
}

// console.log(elementId)

    // axios.delete('api/inventory/' + elementId).then( result =>{
    //   console.log(result)
    // }).catch(err => { console.log(err)})


  render(){
      return(
          <div>
              <button onClick={this.deleteProduct}>Delete</button>
          </div>
      )
  }
}