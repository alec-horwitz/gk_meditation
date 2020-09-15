react native nav has quite a learning curve -
- started first with a default bottom nav - this was almost impossible to customize
- then started fresh with a stack nav - seems more customizable - we will see - this tutorial helped:
https://heartbeat.fritz.ai/getting-started-with-stack-navigator-using-react-navigation-5-in-react-native-and-expo-apps-4c516becaee1

when running into errors like:
Invariant Violation: Module AppRegistry is not a registered callable module (calling runApplication)
after installing packages, pods, or restarting the server, kill node process, and clear cache then npm start again: 
https://stackoverflow.com/questions/43604603/module-appregistry-is-not-registered-callable-module-calling-runapplication

after npm installing packages, i.e. linear-gradient, ios can be weird about it, so after installing package, cd into the projects ios folder and run 'pod install', then clear cache and restart

linear gradient generator:
https://cssgradient.io/