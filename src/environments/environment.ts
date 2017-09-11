// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDqltPZbruk5SDZSx0KBHmld-UKBIxGRx8",
    authDomain: "harvey-insurance-application.firebaseapp.com",
    databaseURL: "https://harvey-insurance-application.firebaseio.com",
    projectId: "harvey-insurance-application",
    storageBucket: "harvey-insurance-application.appspot.com",
    messagingSenderId: "163739972926"
  }
};
