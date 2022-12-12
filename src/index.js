import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
// import store from "../../redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <div>App Component</div>
      </App>
      {/* // child components of App/ other logic */}
    </Provider>
  </React.StrictMode>
);
