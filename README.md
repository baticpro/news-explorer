# Example News application written on React Native, that displays news

Might be useful as example for beginners. Contains:
- fastlane fast deployment system
- CodePush integration for updating JS

## Instalation

- `yarn` - install dependencies
- `yarn setup` - set up config file

Go to the [News API](https://newsapi.org/) for API KEY and paste it to `/src/config/config.js` inside API_KEY variable.

## Deployment

- `yarn fastlane:ios` - build and push iOS build to TestFlight

## CodePush

You can update only JS bundle without uploading app to store.

- `yarn push:[android|ios]` - push bundle for specific platform