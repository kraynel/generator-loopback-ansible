const authentication = require('../../server/boot/authentication');

describe('authentication', () => {
  it('should enable server authentication', () => {
    serverMock = {
      enableAuth: sinon.stub()
    }
    authentication(serverMock);
    serverMock.enableAuth.should.have.been.calledOnce;
  });
});
