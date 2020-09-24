
import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const apiUrl = `http://localhost:8080/sandwich-shop/v1`;

class Order extends Component {

    state = {
        recipe: []
    };

    async loadRecipe() {
        const { id } = this.props.match.params
        const res = await axios.get(apiUrl + '/recipies/' + id);
        this.setState({
          recipe: (res.data).concat(res.data.slice().reverse())
        });
      }
    
      componentDidMount() {
        this.loadRecipe();
      }

    render() {
        return (
            <div class="sandwich-wrapper">
                {this.state.recipe.map(item => (
                    <p>
                        {item.count/2 + " " + item.unit + " of " + item.name}
                    </p>
                ))}
            </div>
        );
    }
}

export default Order;