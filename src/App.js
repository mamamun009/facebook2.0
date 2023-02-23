import "./App.css";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer />
            {/* App Body */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
