## 🔐 Amazon Cognito Authentication Interface

This project demonstrates a complete user authentication workflow using **Amazon Cognito**, providing a user-friendly interface for login, error handling, password change enforcement, and home page access post-login.

### Features Overview

* **Login Page**
  Users are prompted to enter their username and password to log in. The login form is designed for simplicity and clarity.

  ![Login Interface](<demo/Screenshot 2025-05-23 at 8.44.10 AM.png>)

* **Error Handling: User Does Not Exist**
  If a user enters a username that is not registered in the Cognito User Pool, an appropriate error message is shown.

  ![User Does Not Exist](<demo/Screenshot 2025-05-23 at 9.35.40 AM.png>)

* **Error Handling: Incorrect Password**
  When an incorrect password is entered for a valid username, the interface displays an error message informing the user.

  ![Incorrect Password](<Screenshot 2025-05-23 at 9.18.11 AM.png>)

* **Force Password Change**
  If Cognito requires the user to change their password (e.g., after an admin reset or first login), the user is redirected to a password change form after entering valid credentials.

  ![Password Change Interface](<demo/Screenshot 2025-05-23 at 9.39.16 AM.png>)

* **Successful Login & Home Page Access**
  Upon successful login (and password change, if required), the user is redirected to the home page, where authenticated content is accessible.

  ![Home Page](<demo/Screenshot 2025-05-23 at 9.51.42 AM.png>)

### 🧩 Technologies Used

* **Frontend:** React / Angular / Vue (Update as per your stack)
* **Authentication:** AWS Cognito Hosted UI or SDK integration
* **Backend (optional):** Java Spring Boot / Node.js / Python Flask
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


### 📸 Demo
1. Login Interface
A simple and user-friendly login screen where users can enter their credentials.

2. Error: User Does Not Exist
Displayed when the entered username is not found in the Cognito user pool.

3. Error: Incorrect Password
Shown when the password entered for an existing user is incorrect.

4. Force Password Change Interface
Appears when Cognito requires the user to set a new password, typically after a temporary password or admin reset.

5. Home Page After Successful Login
Displayed once the user has successfully logged in and passed any password update requirements.

---