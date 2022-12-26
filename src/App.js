import Signup from "./components/Signup";
import Login from "./components/Login";
import { Grid } from "@mantine/core";
import "../src/styles/Logo.css";

// import Logindesc from "./components/Logindesc";
// import Signupdesc from "./components/Signupdesc";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Grid justify="space-around">
        <Grid.Col md={6} lg={4} span={12}>
          <Signup />
        </Grid.Col>
        <Grid.Col md={6} lg={3} span={12}>
          <Login />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default App;
