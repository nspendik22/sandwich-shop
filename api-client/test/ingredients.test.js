process.env.NODE_ENV = "test";

const Ingredients = require("../models/ingredients.model.js");
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const should = chai.should();

chai.use(chaiHttp)

describe('/GET ingredients', () => {
    it('it should Get all of the ingredients', (done) => {
        chai.request('http://localhost:8080')
        .get('/sandwich-shop/v1/ingredients')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });
});
describe('/GET ingredients/:id', () => {
    it('it should return the data of ingredients id of 1', (done) => {
        chai.request('http://localhost:8080')
        .get('/sandwich-shop/v1/ingredients/1')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});
describe('/GET ingredients/search', () => {
    it('it should return the tomato', (done) => {
        chai.request('http://localhost:8080')
        .get('/sandwich-shop/v1/ingredients/search?query=tomato')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });
});

describe('/POST ingredients', () => {
    it('it sould post the menu item', (done) => {
        const menu_item = {
            name: "BBQ Sauce",
            unit: "Ounce",
        };
        chai.request(app)
        .post('/sandwich-shop/v1/ingredients')
        .send(menu_item)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});
