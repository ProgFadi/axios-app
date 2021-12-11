import { Component } from 'react'
import Card from './Card'


// is_new={false} image_url, name, price, rating, num_reviews

// export default function Products() {
export default class Products extends Component {

    state = {
        prods: [],
        is_loading: true,
        err: false,
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(json => this.setState({
                prods: json,
                is_loading: false,
            }))
            .catch(err => this.setState({
                err: false,
                is_loading: false,
            }))
    }

    render() {
        const { prods, is_loading, err } = this.state

        if (err) {
            return <h1> something went wrong </h1>
        } else if (is_loading) {
            return <h1> still loading </h1>
        } else {
            return (
                <div style={{display:"flex"}}>
                {prods.map((p, i) => (
                    <Card key={i} name={p.title} price={p.price} rating={4} num_reviews={101} image_url={p.image}/>
                ))}
                </div> 
            )
        }

    }
}
