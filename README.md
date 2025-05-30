# DialogueX - Web and Android Application

This repository contains the source code for the DialogueX application, including both the web version (built with React and Vite) and the configuration for building an Android application using Capacitor.

## Project Overview

DialogueX is a communication platform featuring:
*   Real-time chat
*   AI-powered chat features
*   User feeds
*   Story viewing
*   Live streaming capabilities
*   User profiles

This project combines a web frontend with Capacitor integration to enable deployment as a native Android app.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SoNSoN2007/dialoguex.git
    cd dialoguex
    ```

2.  **Install dependencies:**
    Make sure you have Node.js (v16+) and npm/yarn installed.
    ```bash
    npm install
    # or
    yarn install
    ```

## Building the Application

### Web Version

1.  **Run development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  **Build for production:**
    ```bash
    npm run build
    # or
    yarn build
    ```
    The production files will be located in the `dist` directory.

### Android Version (using Capacitor)

Building the Android version requires a local Android development environment (Android Studio, Android SDK, NDK).

1.  **Ensure web assets are built:**
    ```bash
    npm run build
    ```

2.  **Sync Capacitor:**
    ```bash
    npx cap sync android
    ```

3.  **Build the Android App (APK/AAB):**
    Detailed steps for setting up your environment (installing Android Studio, SDK, NDK, configuring `local.properties`) and building the APK/AAB (debug and release) are provided in the separate guide: `dialoguex_amazon_appstore_guide.md` (which was previously sent).

    In summary, after setting up your environment, you would typically run:
    ```bash
    cd android
    ./gradlew assembleDebug  # For debug APK
    # or
    ./gradlew assembleRelease # For release APK (requires signing setup)
    cd ..
    ```

4.  **Open in Android Studio:**
    ```bash
    npx cap open android
    ```

## Deployment

*   **Web:** The `dist` folder can be deployed to any static web hosting service.
*   **Android:** The generated APK/AAB file can be submitted to the Google Play Store or Amazon App Store by following their respective guidelines (refer to `dialoguex_amazon_appstore_guide.md` for Amazon-specific steps).

## Previously Deployed Web Link

A web version was previously deployed to `https://icwthmkn.manus.space/`. Please note that this deployment might be temporary and could become inactive.

