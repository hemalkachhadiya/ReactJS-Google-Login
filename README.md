# React + Vite + Firebase Authentication

This project is a minimal setup for a React application using Vite with Firebase authentication via Google Sign-In.

## Features
- React with Vite for fast development
- Firebase Authentication (Google Sign-In)
- ESLint for code linting
- Hot Module Replacement (HMR)

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: v16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

### Step 1: Clone the Repository
```sh
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

### Step 2: Install Dependencies
```sh
npm install
```

### Step 3: Install Firebase
```sh
npm install firebase
```

## Firebase Setup

### Step 4: Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Navigate to **Project Settings > General**
4. Click **Add App** (Select Web)
5. Copy your Firebase configuration

### Step 5: Configure Firebase in Your Project
Create a `firebaseConfig.js` file inside the `src/config` folder:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
```

## Implement Google Sign-In

### Step 6: Create a Sign-In Button
Add the following code inside your component file (e.g., `src/components/SignInButton.js`):

```javascript
import { auth, googleProvider } from "../config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const SignInButton = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Error during Google sign in", error);
    }
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignInButton;
```

### Step 7: Use the Component
Import and use the `SignInButton` component in `App.js`:

```javascript
import SignInButton from "./components/SignInButton";

function App() {
  return (
    <div>
      <h1>React + Vite + Firebase Auth</h1>
      <SignInButton />
    </div>
  );
}

export default App;
```

## Running the Project
```sh
npm run dev
```
This will start the development server on `http://localhost:5173/`.

## Build for Production
```sh
npm run build
```

## License
This project is licensed under the MIT License.

---

Happy coding! 🚀