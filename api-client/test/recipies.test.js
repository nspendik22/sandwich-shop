const Recipies = require("../models/recipies.model.js");
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const should = chai.should();

const SERVER_URL = 'http://localhost:8080';

chai.use(chaiHttp)

describe('/GET recipe/:id', () => {
    it('it should return the recipe of a BLT ', (done) => {
        chai.request(SERVER_URL)
        .get('/sandwich-shop/v1/recipies/1')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });
});
