import MainPage from "./pages/MainPage";
import "./App.css";
import TodoPage from "./pages/TodoPage";
import UserPage from "./pages/userPage/UserPage";
import PokemonPage from "./pages/Pokemon/PokemonPage";

function App() {
  return (
    <div className="App">
      {/*<MainPage />*/}
      {/*  <TodoPage/>*/}
      {/*  <UserPage/>*/}
        <PokemonPage/>
    </div>
  );
}

export default App;
