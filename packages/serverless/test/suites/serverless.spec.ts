import { Environment } from '@mockoon/commons';
import { expect } from 'chai';
import { MockoonServerless } from '../../src';

const mockEnvironment: Environment = {
  uuid: 'caa83503-bf21-41c6-b71f-8068fa6dd54d',
  lastMigration: 27,
  name: 'Basic data',
  endpointPrefix: '',
  latency: 0,
  port: 3000,
  routes: [],
  proxyMode: false,
  proxyHost: '',
  cors: true,
  headers: [],
  proxyReqHeaders: [],
  proxyResHeaders: [],
  proxyRemovePrefix: false,
  hostname: '',
  tlsOptions: {
    enabled: false,
    type: 'CERT',
    pfxPath: '',
    certPath: '',
    keyPath: '',
    caPath: '',
    passphrase: ''
  },
  data: [],
  folders: [],
  rootChildren: [],
  callbacks: []
};

describe('Serverless', () => {
  it('should create a class instance', () => {
    const mockoonServerless = new MockoonServerless(mockEnvironment);
    expect(mockoonServerless).to.be.an.instanceOf(MockoonServerless);
  });

  it('should create a request listener instance', () => {
    const mockoonServerless = new MockoonServerless(mockEnvironment);

    expect(mockoonServerless.requestListener()).to.be.an.instanceOf(Function);
  });

  it('should create an AWS handler', () => {
    const mockoonServerless = new MockoonServerless(mockEnvironment);

    expect(mockoonServerless.awsHandler()).to.be.an.instanceOf(Function);
  });
});
