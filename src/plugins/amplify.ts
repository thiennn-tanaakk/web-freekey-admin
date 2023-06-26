import { Amplify } from "aws-amplify";

const COOKIESTORAGE_SECURE =
  import.meta.env.VITE_COOKIESTORAGE_SECURE === "true";

Amplify.configure({
  Auth: {
    // (required) only for Federated Authentication - Amazon Cognito Identity Pool ID
    // identityPoolId: "XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab",

    // (required)- Amazon Cognito Region
    region: import.meta.env.VITE_REGION,

    // (optional) - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    // identityPoolRegion: "XX-XXXX-X",

    // (optional) - Amazon Cognito User Pool ID
    userPoolId: import.meta.env.VITE_USER_POOL_ID,

    // (optional) - Amazon Cognito Web Client ID (26-char alphanumeric string, App client secret needs to be disabled)
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENTID,

    // (optional) - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // (optional) - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    cookieStorage: {
      // - Cookie domain (only required if cookieStorage is provided)
      domain: import.meta.env.VITE_COOKIESTORAGE_DOMAIN,
      // (optional) - Cookie path
      path: "/",
      // (optional) - Cookie expiration in days
      expires: 365,
      // (optional) - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
      // sameSite: "strict" | "lax",
      // (optional) - Cookie secure flag
      // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      secure: COOKIESTORAGE_SECURE,
    },

    /**
    // (optional) - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_PASSWORD_AUTH',

    // (optional) - Manually set key value pairs that can be passed to Cognito Lambda Triggers
    clientMetadata: { myCustomKey: 'myCustomValue' },

    // (optional) - Hosted UI configuration
    oauth: {
      domain: 'your_cognito_domain',
      scope: [
        'phone',
        'email',
        'profile',
        'openid',
        'aws.cognito.signin.user.admin'
      ],
      redirectSignIn: 'http://localhost:3000/',
      redirectSignOut: 'http://localhost:3000/',
      clientId: '1g0nnr4h99a3sd0vfs9',
      responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
    }
    */
  },
});
