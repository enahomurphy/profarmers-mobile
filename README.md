# Profarmers Mobile App
This is the official repo for the profarmers mobile app.  

## Technology
- React Native
- React
- Native Base [link](http://nativebase.io/)
- Graphql (Apollo)
- Styled components

## Development
- Clone repo and cd to folder
- Copy .env.example to .env and change the host of the API_URL to you local ip address
- Make sure your profarmers-api is running.
- run `yarn install` && `yarn start`
- You can either use and emulator(android or ios) or use your device
- Note on mac you need to install XCODE to have access to ios emulator or install android studio to have access to android emulator
- Android emulator requires you to install abd emulation device. 
- To use you phone follow this [link](https://aboutreact.com/how-to-run-react-native-app-on-real-device-android/)
- run `yarn ios` or `yarn android` to get started. (NB you need to manually start android emulator is you are run)

## Common Issues
- Changes not reflecting -> asset server by quitting yarn start process and starting over
- Using windows checkout these links [first](https://shift.infinite.red/getting-started-with-react-native-development-on-windows-90d85a72ae65) [second](https://facebook.github.io/react-native/docs/getting-started)
- If after asset server reload you app is still not working, try deleting the app and running  `yarn ios or yarn android`