import { StreamCall } from "@stream-io/video-react-sdk";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/main";
import { Room } from "./pages/room";
import { SignIn } from "./pages/sign-in";
import { useUser } from "./user-context";

function App() {
  const { call } = useUser();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route
          path="/room"
          element={
            call ? (
              <StreamCall call={call}>
                <Room />
              </StreamCall>
            ) : (
              <Navigate to="/" />
            )
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
