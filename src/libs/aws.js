import { Amplify } from 'aws-amplify';

const dev = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'table-tennis-tracker-uploads-dev-s3bucket-law166g8d5ok',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://api.dev.tabletennistracker.tk',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_8MHtF5GNM',
    APP_CLIENT_ID: '1k22isrga42boubhiiqvri9bq7',
    IDENTITY_POOL_ID: 'us-east-1:8944d405-8719-4e18-b210-69fabb71a0d4',
  },
};

const prod = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'table-tennis-tracker-uploads-prod-s3bucket-93rgpmqa6vt4',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://api.tabletennistracker.tk',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_ouetMiUFO',
    APP_CLIENT_ID: '5d4n2lq2a8g2inlbj85qip3uji',
    IDENTITY_POOL_ID: 'us-east-1:628ef21f-9f53-4521-8c27-c5ea4ba67012',
  },
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export function configure() {
  Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    },
    Storage: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
    },
    API: {
      endpoints: [
        {
          name: 'games',
          endpoint: config.apiGateway.URL,
          region: config.apiGateway.REGION,
        },
      ],
    },
  });
}
