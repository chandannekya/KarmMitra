import "./App.css";
import Container from "./components/Container";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";

let isLoggedIn = true; // Backend logic work

function App() {
  return <Container>{isLoggedIn ? <SignInPage /> : <SignUpPage />}</Container>;
}

export default App;
