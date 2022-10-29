const NewsClient = require('./newsClient');
const mockJsonGuardian = require('./guardianSearchWithThumbnails.json');
require('jest-fetch-mock').enableMocks();

describe('Client class', () => {
  it('calls fetch and loads data', (done) => {
    const newsClient = new NewsClient();

    fetch.mockResponseOnce(mockJsonGuardian);

    newsClient.loadNews((returnedDataFromApi) => {
      expect(returnedDataFromApi.response.status).toBe('ok');
      expect(returnedDataFromApi.response.results).not.toBeNull();

      done();
    });
  });
});
