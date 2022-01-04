# ReanimatedIstanbul

## Project overview

This repo was created using the following:

- react native cli
- react-native-reanimated
- babel-plugin-istanbul

## So what?

The code runs perfectly fine if we use only one of the dependencies that I talked about.
<br />
If you remove `istanbul` from `babel.config.js` the app builds and the animations areworking properly.
<br />
If you remove the `reanimated` instructions and then add a plain view to the app it also works fine.

## What is the error?

![Error](./error.png?raw=true)
