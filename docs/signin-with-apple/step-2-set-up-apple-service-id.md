---
description: In this step let's generate a service id (optional steps are not mandatory)
---

# Step 2: Set up Apple Service ID



* **Generate a Service ID**:
  * After your App ID is created, navigate to the [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources) page again.
  * Click on **Identifiers**, then on the **"+"** button.
  * Select **Service IDs** and click **Continue**.
  * Provide a description (e.g., "Your App's Service ID") and enter a unique identifier (this will be the Service ID used in OAuth, e.g., `com.yourcompany.serviceid`).
  * Click **Continue**, and then click **Register**.
* **Configure Redirect URIs**:
  * After creating the Service ID, you’ll be redirected to the details page for the Service ID.
  * Scroll down to the **"Sign in with Apple"** section and click on **Configure**.
  * In the **"Domains and Redirect URLs"** section, add your app’s **Redirect URI** (for example, `https://yourapp.com/auth/callback`).
    * Ensure this URI matches what is configured in your app’s authentication flow.
  * Click **Next**, review the configuration, and then click **Save**.
* **Configure App's Sign-in Permissions** (Optional):
  * In the **Web Authentication Configuration**, you can specify which users can sign in with Apple using your Service ID.
  * Typically, leave the settings to the default unless specific conditions are needed.
* **Generate Key for Sign in with Apple (Optional)**:
  * If you need to verify tokens on your server, go to the **Keys** section under **Certificates, Identifiers & Profiles**.
  * Click on the **"+"** button to create a new key.
  * Enable **Sign in with Apple**, then create a key and download it. You'll need this key on the server to verify identity tokens.
