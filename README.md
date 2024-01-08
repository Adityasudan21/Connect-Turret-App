# Connect-Turret : A Linkdin Based Web App
"Connect Turret" is a LinkedIn-inspired web application designed for seamless professional networking.<br> Built with an advanced frontend stack, including React, Redux, JavaScript, HTML, and CSS, the app offers a dynamic and engaging user experience. <br>Leveraging Material-UI for a sleek and responsive design, it provides users with an intuitive interface to explore, connect, and chat with professionals.

## User Experience
Upon logging in, users are welcomed to the main page, where they can discover and interact with a network of professionals.
<br> The incorporation of Redux ensures efficient state management, creating a smooth and interactive browsing experience.<br> One of the standout features is the ability for users to upload and showcase their profile pictures, adding a personal touch to their online presence.
<br>
To enhance user engagement, "Connect Turret" utilizes React Flip-Move, providing seamless animations and transitions throughout the application. This not only adds a visually appealing touch but also contributes to the overall fluidity of the user interface.

### Tech Stack:

#### Frontend:
In the frontend development of Connect Turret, the following technologies and libraries were utilized to create a rich and interactive user interface:

1. **React:**
   - A JavaScript library for building user interfaces.
   - Enables the creation of reusable UI components and facilitates the development of single-page applications.

2. **Redux:**
   - A state management library for JavaScript applications.
   - Facilitates predictable state management in larger applications, enhancing data flow and making it easier to manage and debug application state.

3. **JavaScript:**
   - The core programming language for building dynamic and interactive web applications.
   - Utilized for client-side scripting and enhancing the functionality of the application.

4. **HTML:**
   - The standard markup language for creating the structure of web pages.
   - Responsible for defining the content and layout of the application.

5. **CSS:**
   - Style sheet language used for describing the presentation of a document.
   - Ensures the visual styling, layout, and responsiveness of the application.

6. **Material-UI:**
   - A popular React UI framework that provides pre-built, customizable components following the Material Design guidelines.
   - Enhances the visual appeal and consistency of the user interface.

7. **React Flip-Move:**
   - A React animation library used for creating smooth transitions and animations in the user interface.
   - Provides an engaging and visually pleasing experience for users.

These frontend technologies collectively contribute to the creation of a modern, responsive, and feature-rich web application, offering users an immersive networking experience on "Connect Turret."

#### Backend:
Tech stack used for Backend was Mainly Firebase as Backend and API and Node.js to conjuctuate the function of Cloud Functions by Firestore Database.

1. **Firebase:**
   - **Authentication:**
     - Firebase Authentication is employed for user sign-up, login, and secure management of user sessions.
   - Users can authenticate using various methods, such as email/password, Google sign-in, etc.

   - **Firestore:**
     - Firestore, a NoSQL database, stores user profiles, chat messages, and other application data.
     - User data, including profile information, can be structured and queried efficiently.

   - **Cloud Functions:**
     - Firebase Cloud Functions are utilized for server-side logic, triggered by events such as user authentication or changes in Firestore data.
     - Example use cases include sending notifications, updating data, or executing custom business logic.

   - **Hosting:**
     - Firebase Hosting is used to deploy and serve the frontend of the application.
     - Provides a fast and reliable content delivery network (CDN) for static assets.

   - **Cloud Storage:**
     - Firebase Cloud Storage is employed for storing and serving user-uploaded profile pictures.
     - Offers scalable and secure cloud-based storage solutions.

2. **Node.js:**
   - Node.js is used in conjunction with Firebase Cloud Functions.
   - Node.js allows developers to write server-side JavaScript code, which is executed in response to specific events or triggers.

This simplified and serverless backend architecture leverages the power of Firebase services for authentication, database management, server-side logic, hosting, and cloud storage. It provides a scalable and straightforward solution for building web applications with real-time features and user interactions.

#### APIs:
In the context of a Firebase-based backend, the application interacts with Firebase services, which provide API endpoints for authentication, database operations, cloud functions, and storage. Here's a breakdown of the API usage:

1. **Firebase Authentication API:**
   - Firebase Authentication provides APIs for user authentication.
   - Endpoints include methods for user sign-up, login, password recovery, and token verification.
   - Example: `createUserWithEmailAndPassword`, `signInWithEmailAndPassword`, etc.

2. **Firestore Database API:**
   - Firestore offers a NoSQL database with APIs for data storage and retrieval.
   - Endpoints include methods for adding, updating, deleting, and querying data.
   - Example: `add`, `update`, `delete`, `get`.

3. **Firebase Cloud Functions API:**
   - Firebase Cloud Functions allows the deployment of server-side logic in response to events.
   - Developers define functions that run in response to specific triggers.
   - Example: Function to send a notification when a new message is added to the chat.

4. **Firebase Cloud Storage API:**
   - Firebase Cloud Storage provides APIs for storing and retrieving files.
   - Endpoints include methods for uploading, downloading, and managing files.
   - Example: `put` for uploading a file, `get` for retrieving a file.

5. **Firebase Hosting API:**
   - Firebase Hosting doesn't have a direct API but is configured using the Firebase CLI or Firebase Hosting REST API.
   - Deployments and configurations are managed through commands like `firebase deploy`.

In summary, while Firebase services provide APIs for authentication, database operations, cloud functions, and storage, developers interact with these services using client libraries and SDKs rather than making direct HTTP requests to API endpoints. The Firebase SDKs for various platforms (web, iOS, Android) encapsulate the API calls and simplify integration into the application code.

### Deployment:
- **Firebase Hosting:** The app was deployed on Firebase Hosting, allowing for easy and scalable hosting of static assets and dynamic content. Firebase Hosting also provides a globally distributed content delivery network (CDN), ensuring fast and reliable access for users around the world.
- **Deployment URL:** The app is currently live and accessible at [https://connect-turret.web.app](https://connect-turret.web.app). Users can visit this URL to interact with the Connect Turret web application.

<br>

# Scalability and Project Scope
This tech stack and deployment approach offer a scalable and efficient solution, ensuring a smooth user experience and <br>
straightforward maintenance.

### Some Screenshots of Login Page
![Log-In Page](https://github.com/Adityasudan21/Connect-Turret-App/blob/main/Images/Login.png)

### Some Screenshots of Main Page with Posts
![Main Page](https://github.com/Adityasudan21/Connect-Turret-App/blob/main/Images/Main%20Page.png)

# Hosting of App
The application is hosted and accessible at https://connect-turret.web.app/, providing a global platform for professionals to connect, collaborate, and foster meaningful relationships. "Connect Turret" stands as a testament to the power of modern web technologies, creating an immersive networking experience for users worldwide.
<br>
Author: Aditya Sudan