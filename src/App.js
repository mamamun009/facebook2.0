import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          {/* <Header /> */}

          <div className="app_body">
            <Sidebar />
            {/* App Body */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
