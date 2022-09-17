# Getting started with Amplify chrome extension
![extension](https://user-images.githubusercontent.com/87995712/190833957-617158f4-4161-476a-bf76-a25273661da4.gif)

## Prerequisites

The following prerequisites are required for this post: 
* An AWS account
* NPM

## Installation Steps: 

1. Clone the project https://github.com/ykethan/Amplify-Chrome-extension.git
2. Run `npm install` in the terminal to install dependencies.
3. Run `npm install -g @aws-amplify/cli` in terminal.
4. Run `amplify configure` to configure AWS credentials. 
Please refer to the instruction at [Amplify documentation]("https://docs.amplify.aws/cli/start/install/#option-2-follow-the-instructions") for additional information.
5. Run `amplify init` in the terminal and fill in the the application information as necessary.
6. Run `amplify push`
7. Once the push completes, run `npm run build` then do the following
    ### Load extension into Chrome browser by utilizing the following steps
    1. Open brower and go to extensions
    2. Enable developer mode by toggling `developer mode` present right side top of the screen.
    3. Click `Load unpacked` and travese to the project folder.
    4. Select the build folder present in the project.

![enabledev](https://user-images.githubusercontent.com/87995712/190834009-79efc4c4-07d9-468e-b15e-6f2488ddfcde.gif)

8. Open `https://docs.amplify.aws/` in a new tab.
9. Create a new account in the Cognito login screen. Note that you must provide a valid email, as a verification code will be sent. 

![image](https://user-images.githubusercontent.com/87995712/190833760-0b19bc5a-a033-4e89-8875-c6080ef83980.png)

10. Upon logging in, the page will load a Button at the top.
11.	Upon selecting the Pick a file button and selecting a picture from your PC, we’ll observe the output as follows.


![image](https://user-images.githubusercontent.com/87995712/190833857-942ee458-4af5-474e-93a4-d5f7c8b36ca1.png)

## Cleanup resources

You can delete your Amplify application if you aren’t going to use it anymore. Run the following command in the terminal at the root of the project.

`amplify delete`

Note that this action can’t be undone. Once the project is deleted, you can’t recover it. If you need it again, then you must re-deploy it.
Delete the extension from the Chrome browser.

