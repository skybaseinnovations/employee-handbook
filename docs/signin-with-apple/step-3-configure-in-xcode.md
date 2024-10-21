---
description: >-
  Configure Apple Developer Account: Create an Apple Developer account, enable
  'Sign in with Apple,' and register your app.
---

# Step 3: Configure in Xcode

#### Step 3: **Configure in Xcode**

1. **Open your project in Xcode**:
   * Launch Xcode and open the project or workspace for your app.
2. **Select your target**:
   * In the Project Navigator (the left-hand pane), select your app's target (usually your app name under the "Targets" section).
3. **Go to the 'Signing & Capabilities' tab**:
   * At the top of the Xcode window, click on the target settings and navigate to the "Signing & Capabilities" tab.
4. **Add the 'Sign in with Apple' capability**:
   * Click the "+" button in the top-left corner of the 'Capabilities' section.
   * From the list of available capabilities, find and select **"Sign in with Apple"**.
   * Xcode will automatically configure the entitlement and add it to your project.
5. **Ensure 'Sign in with Apple' is enabled in the App ID**:
   * Xcode should synchronize the App ID on the Apple Developer portal with this capability. Ensure that the App ID used for your app includes "Sign in with Apple" by checking the developer portal.
6. **Enable 'iCloud Keychain' (Optional)**:
   * If your app supports seamless sign-in across devices, enable **iCloud Keychain** to allow for credentials to be stored securely.
7. **Verify provisioning profiles**:
   * Xcode will automatically update the provisioning profile to include the new "Sign in with Apple" entitlement. Ensure that your app is signed with the correct profile.
8. **Build and Run**:
   * After adding the capability, build and run your app to ensure everything is set up correctly.

This step ensures that your app is correctly configured to use Apple’s authentication services.
