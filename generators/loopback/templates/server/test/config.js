const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonchai = require('sinon-chai');

chai.use(chaiAsPromised);
chai.use(sinonchai);

global.assert = chai.assert
global.expect = chai.expect
global.should = chai.should()
global.sinon = require('sinon');
