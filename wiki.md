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

adding react vector icons is more then just npm install package, you have to dump font files into xcode (takes 20-30 mins):

step 1:
https://github.com/oblador/react-native-vector-icons#installation
step 2:
https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06