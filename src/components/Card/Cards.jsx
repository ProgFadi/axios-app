import React, { Component } from "react";
import Card from "./Card";
import Form from "./Form";
import img1 from "../../assets/images/pic.jpeg"
import "./style.css"
import axios from 'axios';

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Arr: [],
            SearchedArr: [],
        }
    }
    
    Search = key => {
        const newResults = this.state.Arr.filter(item => item.title.toLowerCase().includes(key.toLowerCase()));
        this.setState({ SearchedArr:newResults})
      };
    componentDidMount = () => {
        axios.get(`https://fakestoreapi.com/products?limit=3`)
        .then(res => {
            const products = res.data;
            this.setState({
                Arr:products,
                SearchedArr:products
            })
        })
    }
    
    
    render(){
        return (
            <div className="container-fluid  justify-content-ceter">
                <input type="text" placeholder="Search ..." onChange={event => this.Search(event.target.value)} />
                    
                <div className="row d-flex" >
                        {
                            this.state.SearchedArr.map(function(item, i){
                                return <Card key={i} imgsrc={img1} title={item.title} price={item.price} />
                            })
                        }
                </div>
                
            </div>
        )
    }
}

export default Cards