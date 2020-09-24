import React, { Component } from "react";
import axios from 'axios';
import history from './../history';
import '../assets/Menu.css';

const apiUrl = `http://localhost:8080/sandwich-shop/v1`;

export default class Menu extends Component {
    state = {
        menu_items: []
    };

    async loadMenuItems() {
        const res = await axios.get(apiUrl + '/menu_items');
        console.log("Result: ", res);
        this.setState({
            menu_items: res.data
        });
    }

    componentDidMount() {
        this.loadMenuItems();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 mb-60">
                        <div className="section-title text-center">
                            <p>Welcome to Nik's Sandwich Shop</p>
                            <h4>our menu</h4>
                        </div>
                    </div>
                </div>
                {this.state.menu_items.map(item => (
                    <a onClick={() => history.push(`/order/${item.id}`)} target="_blank" rel="noopener">
                        <div className="menu_style1">
                            <div className="single_menu_list">
                                <div className="menu_content">
                                    <h4>{item.name}<span>${item.price}</span></h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        );
    }
}