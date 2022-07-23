# Getting started with Amplify chrome extension

1. Clone the project https://github.com/ykethan/Amplify-Chrome-extension.git
2. Run npm install in terminal.
3. Run `npm install -g @aws-amplify/cli` in terminal.
4. Run `amplify configure` to configure credentials. 
Please refer to the instruction at [Amplify documentation]("https://docs.amplify.aws/cli/start/install/#option-2-follow-the-instructions") for additional information.
5. Run `amplify init` in terminal and follow the instructions.
6. Run `amplify push`
7. Run `npm run build` then do the following
    ### Load extension into Chrome browser by utilizing the following steps
    1. Open brower and go to extensions
    2. Enable developer mode by toggling `developer mode` present right side top of the screen.
    3. Click `Load unpacked` and travese to the project folder.
    4. Select the build folder present in the project.

8. Open `https://docs.amplify.aws/` in a new tab.
9. Create a new account and then login 
