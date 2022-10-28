import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Teams';

import { Response } from 'superagent';
import teams from '../../../../__tests__/expected_results/teams';

chai.use(chaiHttp);

const { expect } = chai;

const teamListMock = teams;


describe('Testando Teams', () => {

  let chaiHttpResponse: Response;

   afterEach(()=> { sinon.restore() });

  it('Verifica se a rota get teams retorna todos os times', async () => {

    chaiHttpResponse = await chai.request(app).get('/teams');

    expect(chaiHttpResponse.body).to.deep.equal(teamListMock);
    expect(chaiHttpResponse.status).to.be.equal(200);
  });

});