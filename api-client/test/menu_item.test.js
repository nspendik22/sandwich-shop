const Menu_Item = require("../models/menu_item.model.js");
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const should = chai.should();

const SERVER_URL = 'http://localhost:8080';

chai.use(chaiHttp)

describe('/GET menu_items', () => {
    it('it should Get all menu items', (done) => {
        chai.request(SERVER_URL)
        .get('/sandwich-shop/v1/menu_items')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });
});
describe('/GET menu_items/:id', () => {
    it('it should return the data of menu item id of 1', (done) => {
        chai.request(SERVER_URL)
        .get('/sandwich-shop/v1/menu_items/1')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});
describe('/GET menu_items/search', () => {
    it('it should return the BLT menu item', (done) => {
        chai.request(SERVER_URL)
        .get('/sandwich-shop/v1/menu_items/search?query=blt')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });
});

describe('/POST menu_items', () => {
    it('it sould post the menu item', (done) => {
        const menu_item = {
            name: "Roast Beef Sandwich",
            description: "A sandwich with Roast Beef, lettuce and tomato",
            price: "11.50"
        };
        chai.request(SERVER_URL)
        .post('/sandwich-shop/v1/menu_items')
        .send(menu_item)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});
