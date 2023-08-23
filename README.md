# NuacemCwApp

Visit [Nuacem application](itsmehrd.github.io/ng-app-deployment) to see the UI
## Best viewed on 
Medium, large & extra large screens. 
Mobile view support omitted intentionally.

## Setting up the local
1. Clone the repo in cmd using: `git clone https://github.com/itsmehrd/nuacem-cw-app.git`
2. Change the directory to `nuacem-cw-app` in cmd using: `cd nuacem-cw-app`
3. Set `legacy-peer-dependency` support for Angular v10 using:`npm config set legacy-peer-deps true`
4. Install node modules using: `npm install` (or `npm install --legacy-peer-deps` if you excluded the step 3 above)

## Development server

5. Run `npm run openssl-start` for a dev server (to let the app run on your local machine, even if the node version on your local machine mismatches with that of angular v10 requirement). 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.1.

6. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Build

7. Run `npm run openssl-build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `npm run openssl-build-prod-base-href-deploy` command for a production build.
