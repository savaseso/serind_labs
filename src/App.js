import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { theme } from "./themes/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import List from "./pages/List";
import Detail from "./pages/Detail";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
        <ToastContainer autoClose={2500} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
