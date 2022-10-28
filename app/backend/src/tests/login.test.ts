import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/Users';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const responseModelMock = {
  email: 'admin@admin.com',
  password: 'secret_admin'
}

const errorRequestMock = {
  email: 'lol@admin.com',
  password: '$2a$PW'
}

describe('Testa Login', () => {

  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Users, "findOne")
      .resolves(responseModelMock as Users);
  });

  afterEach(()=> { sinon.restore() });

  it('Verifica o caso onde o email ou senha são inválidos', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(errorRequestMock);
  
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'Incorrect email or password'});
    expect(chaiHttpResponse.body).not.to.have.property('token');
    expect(chaiHttpResponse.status).to.be.equal(401);
  });

  it('Verifica o caso onde não é passado email à requesição', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({  password: errorRequestMock.password   });
  
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'All fields must be filled'});
    expect(chaiHttpResponse.status).to.be.equal(400); 
  });

  it('Verifica o caso onde  não é passada senha à requesição', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({ email: errorRequestMock.email });
  
    expect(chaiHttpResponse.body).to.deep.equal({ message: 'All fields must be filled'});
    expect(chaiHttpResponse.status).to.be.equal(400);
    
  });

});