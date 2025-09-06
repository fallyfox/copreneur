- Installing Tailwind:
npm install nativewind tailwindcss 
After success of above, run: npx tailwindcss init
Continue with step 2 and more: https://www.nativewind.dev/docs/getting-started/installation
Add "./app/**/*.{js,jsx,ts,tsx}" on content:[]

Step 4: run: npx expo customize metro.config.js

After Step 5: create a file on the root directory: nativewind-env.d.ts and add:
/// <reference types="nativewind/types"/>
This enables Typescript to understand tailwind classes, preventing constant error messages.

Open metro.config.js files and correctly update "./global.css" to "./app/globals.css"

Recommended: after lots of setup restart development server with --clear flag
npx expo start --clear

### CV screen
full names
React Native Developer - Major (main field, eg React Native)
Years    Proficiency
4        Pro

Skills and years of experince
JavaScript  5
Git         7
GitHub      4
Others

Projects
title
About the project. Some more info
Link to project

Contributions
title
description
How you contributed
Link to project



In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
