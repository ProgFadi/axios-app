
import React, { Component } from 'react'
import ActionAreaCard from './cart';
import './item.css'



export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {
              name: 'cat',
              price: 20
            },
          ]
        }
      }
    
      onSubmit = event => {
        event.preventDefault();
        const name = this.name.value;
        const price = this.price.value;
        const info = {name: name, price: price};
        const data = [...this.state.data, info];
        this.setState({
          data: data
        });
      };
    
      render() {
        return (
            <div className="container">
            <h1>add cart</h1>

          <div className="row">
            <form className="form-inline" onSubmit={this.onSubmit}>
              <input
                  type="text"
                  className="form-control mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Name"
                  ref={input => this.name = input}/>
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <input
                    type="text"
                    className="form-control"
                    placeholder="price"
                    ref={input => this.price = input}/>
              </div>
              <button type="submit" className="btn btn-primary">add prudact</button>
            </form>
          </div>

          <hr/>

          <div className="row1">
            {
              this.state.data.map((info, index) => <ActionAreaCard  key={index} info={info}/>)
            }
          </div>

        </div>
        );
    }
  
}