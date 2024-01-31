import React from "react";
import { AppRouter } from "./router";
import { Provider } from "react-redux";
import { store } from "./store";
import { NextUIProvider } from "@nextui-org/react";

const App = () => {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <div className="dark bg-site bg-no-repeat bg-cover overflow-hidden">
          <AppRouter />
        </div>
      </NextUIProvider>
    </Provider>
  );
};

export default App;
