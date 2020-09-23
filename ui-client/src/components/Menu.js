import React, { Component } from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import history from './../history';

const apiUrl = `localhost:8080/sandwich-shop/v1`;

export default class Menu extends Component {
    state = {
        menu_items: []
    };

async loadMenuItems() {
    const res = await axios.get(apiUrl + '/menu_items');
    this.setState({
      menu_items: res.data
    });
  }

  componentDidMount() {
    this.loadMenuItems();
  }

  render() {
    return (
        <div class="table-wrapper">
          <table class="table table-hovered">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Sandwich Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.menu_items.map(item => (
                <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <a onClick={() => history.push(`/order/${item.id}`)} target="_blank" rel="noopener" class="btn btn-sm btn-success">Order</a>
                </td>   
                </tr>  
              ))}   
            </tbody>
          </table>
        </div>
    );
  }
}