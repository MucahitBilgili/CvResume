## Setting up a project on Firebase
You need a free account to access all the features that Firebase has got to offer, so open up a Firebase account and go to the Firebase console page.

Add a new firebase project

Next, use the following steps:

Click the Add project button.
Enter a name for your project. I have named mine react-app-firebase. Keep in mind that project IDs are unique in Firebase.
Click Continue.
Disable Google Analytics; it is not required for this project.
Click Continue again.
You have successfully created a project on Firebase.

Configure Firebase hosting
To successfully host your application on Firebase, you need to install its tools and initialize it within your project.

Open a new terminal. Run this command to install Firebase tools globally:

```json npm install -g firebase-tools ```

Once the installation is completed, you now have global access to Firebase Command Line Interface tools. You can use them to deploy code and assets to your newly created Firebase project.

Connecting React to Firebase
From the terminal, sign in to your Firebase account:

```json firebase login ```

This command will open a browser and prompt you to select an account.

Next, ensure that you are within the root of the react-app-firebase project and issue this command to initialize it:

```json firebase init ```

You will be prompted to respond to some questions.

Choose hosting: Configure files for Firebase hosting and (optionally) set up GitHub Action deploys.
Use an existing project: Select the Firebase project you created earlier (react-app-firebase).
Enter build as the public directory.
Configure as a single-page app: Yes.
Set up automatic builds and deploys with GitHub: No. For this tutorial, we are using CircleCI to run tests and handle deployment.
Here is the output from the terminal:

You are about to initialize a Firebase project in this directory:
    
  /Users/xxxx/tutorial/react-app-firebase
    
? Which Firebase features do you want to set up for this directory? Press Space to select features, th
en Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set u
p GitHub Action deploys, Hosting: Set up GitHub Action deploys
    
#### Project Setup
    
First, lets associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we will just set up a default project.
    
? Please select an option: Use an existing project
? Select a default Firebase project for this directory: react-app-firebase-52972 (react-app-firebase)
i  Using project react-app-firebase-52972 (react-app-firebase)
    
#### Hosting Setup
    
Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your builds output directory.
    
? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No

✔  Wrote build/index.html
    
i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
    
✔  Firebase initialization complete!
The project’s initialization process also generated two unique files at the root of your project. These files are required for successful deployment and must be checked into source control.

firebase.json contains your project’s hosting configuration. It instructs Firebase CLI about the files in your project directory to upload and deploy.
.firebaserc specifies the project to connect to the uploaded code once you successfully deploy to Firebase.
