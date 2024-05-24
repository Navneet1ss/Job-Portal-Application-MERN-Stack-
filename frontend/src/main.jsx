import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({   //The Context is created to manage and share state globally across the application.
  isAuthorized: false,
});

const AppWrapper = () => { //By setting up the context in this manner, any component within the App component tree can consume the isAuthorized and user states and their respective update functions using the useContext hook. T
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render( //React.StrictMode: A wrapper component that helps identify potential problems in the application. It doesn't render any visible UI but activates additional checks and warnings for its children.
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
