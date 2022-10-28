import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http')
import { app } from '../app';


chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /login testes', () => {

  describe('Quando a requisição tem sucesso', async () => {

    it('Deve retornar um status 200', async () => {
      const httpResponse = await chai
      .request(app)
      .post('/login')
      .send({email: 'any@email.com', password: '1234567890'})

      expect(httpResponse.status).to.equal(200);
    })
 })
});