## 🔐 Secure User Authentication with Backend-Managed Cognito

This project demonstrates a complete user authentication workflow using Amazon Cognito, providing a user-friendly interface for login, error handling, password change enforcement, and home page access post-login.
> 🛡️ Authentication Approach Used:
> This implementation follows the Backend-Managed Authentication model. The front-end sends login requests to a backend server, which securely communicates with AWS Cognito to handle authentication, token management, and session control.

### Features Overview

* **Login Page**
  Users are prompted to enter their username and password to log in. The login form is designed for simplicity and clarity.

  ![Login Interface](<ui/src/static/Screenshot 2025-05-23 at 8.44.10 AM.png>)

* **Error Handling: User Does Not Exist**
  If a user enters a username that is not registered in the Cognito User Pool, an appropriate error message is shown.

  ![User Does Not Exist](<ui/src/static/Screenshot 2025-05-23 at 9.35.40 AM.png>)

* **Error Handling: Incorrect Password**
  When an incorrect password is entered for a valid username, the interface displays an error message informing the user.

  ![Incorrect Password](<ui/src/static/Screenshot 2025-05-23 at 9.18.11 AM.png>)

* **Force Password Change**
  If Cognito requires the user to change their password (e.g., after an admin reset or first login), the user is redirected to a password change form after entering valid credentials.

  ![Password Change Interface](<ui/src/static/Screenshot 2025-05-23 at 9.39.16 AM.png>)

* **Successful Login & Home Page Access**
  Upon successful login (and password change, if required), the user is redirected to the home page, where authenticated content is accessible.

  ![Home Page](<ui/src/static/Screenshot 2025-05-23 at 9.51.42 AM.png>)

### 🧩 Technologies Used

* **Frontend:** Reactjs
* **Authentication:** AWS Cognito SDK integration
* **Backend (optional):** Java, Spring Boot
* **UI/UX:** Responsive and error-friendly design for better usability

### 🔧 How It Works

1. User accesses the login interface.
2. Enters credentials:

   * Invalid user: "User does not exist" message.
   * Invalid password: "Incorrect password" message.
   * Valid credentials but requires password change: redirected to the password update page.
3. After a successful login:

   * User session is created.
   * Access token is used to navigate to secure areas of the app (e.g., home page).


### 📖 Further Reading
To learn more about the different ways to integrate AWS Cognito authentication into your projects, check out this detailed blog post:


[**Three Approaches to Integrate AWS Cognito Authentication in Your Project**](https://lemrabotttoulba.com/blogs/cognito-auth)

This article explores:
* **Direct UI Integration with AWS Cognito API** _using front-end SDKs like AWS Amplify_
* **Backend-Managed Authentication,** _where your backend handles user verification and token management_
* **Cognito Hosted UI** _a quick, fully managed solution using AWS’s built-in login interface_

Each method is explained with its pros, cons, and best use cases, helping you choose the right fit for your app’s architecture and security needs.


## 👨‍💻Enjoy
---
