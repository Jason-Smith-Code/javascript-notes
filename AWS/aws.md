# Amazon Web Services : AWS

https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/

# Using AWS + Amplify

Amplify : simplifies the process of hosting, building and deploying an App on AWS
Amplify CLI : The Amplify CLI allows you to create, manage, and remove AWS services directly from your terminal.

1. Create AWS account
2. Enable IAM (Identity and Access Management)
3. Setup new project on github
4. Import project into VScode, install framework in the main directory otherwise further configuration will need to be made in Amplify setup
5. Visit AWS and search for Amplify
6. Get started with Amplify Hosting
7. Select GitHub
8. Install Amplify on the project
9. Make a change to the app, allow some time for the Amplify to build and deploy, then check to see if the changes were pushed to live
10. Install Amplify CLI : "npm install -g @aws-amplify/cli"
11. run configure command amplify configure
    ran into problem, stackoverflow helped, needed to run another command
    "Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned"
    as I was getting an error "cannot be loaded because running scripts is disabled on this system. "
12. run "amplify pull --appId d199n0bcmeyqx9 --envName staging" to connect to the configured app
    ! 12. may be setup incorrectly, npm run start, and npm run build were customized. Re-initiate
