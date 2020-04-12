export default {
  development: {
    swagger: {
      endpoint: 'swagger',
      filePath: 'dist/swagger.yaml'
    },
    mongo: {
      uri: 'mongodb://localhost:27017/kurukshetra?retryWrites=true'
    },
    firebase: {
      storageBucket: 'opennetwork-3c31a.appspot.com'
    },
    gcp: {
      apikey: 'AIzaSyAKSHrKKo07MnDjjLLh7a9j2Z_NJqE2z7Y'
    }
  },
  production: {
    swagger: {
      endpoint: 'swagger',
      filePath: 'dist/swagger.yaml'
    },
    mongo: {
      uri: 'mongodb+srv://infidelitybook:infidelitybook@opennetwork-4idx8.gcp.mongodb.net/infidelitybook?retryWrites=true&w=majority',
      options: {
        user: 'infidelitybook',
        pass: 'infidelitybook',
        auth: {
          authSource: 'admin'
        }
      }
    },
    firebase: {
      storageBucket: 'opennetwork-3c31a.appspot.com'
    },
    gcp: {
      apikey: 'AIzaSyAKSHrKKo07MnDjjLLh7a9j2Z_NJqE2z7Y'
    }
  }
};
