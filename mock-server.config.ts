import type { MockServerConfig } from 'mock-config-server';

const mockServerConfig: MockServerConfig = {
  rest: {
    baseUrl: '/api',
    configs: [
      {
        method: 'post',
        path: '/users',
        routes: [
          {
            data: {success: true}
          }
        ]
      }
    ]
  },
};

export default mockServerConfig