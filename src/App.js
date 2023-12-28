import { Provider } from "react-redux";
import "./App.css";
import Body from "./component/body/Body";
import Header from "./component/header/Header";
import AppStore from "./utils/AppStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./component/body/maincontainer/MainContainer";
import Watch from "./component/Watch/Watch";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
      ],
    },
  ]);

  return (
    <Provider store={AppStore}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
