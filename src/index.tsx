import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import currentUser from "./redux/reducers/user";
import rootReducer from "./redux/reducers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const UsingContext = createContext<any>(null);

const StoreValue = createStore(rootReducer);

root.render(
  <UsingContext.Provider
    value={{
      Information: {
        username: "Thirushan",
        email: "s.r.thirushan2002@gmail.com",
      },  
    }}
  >
    <Provider store={StoreValue}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </UsingContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
