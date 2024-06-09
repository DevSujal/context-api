import "./App.css";
import Login from "./components/Login/Login";
import Profile from "./components/Projfile/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="flex justify-center items-center w-screen h-screen bg-black text-white">
        <div className=" w-1/4">
          <h1 className="text-center font-bold text-3xl my-6 text-blue-800">
            Context Api
          </h1>
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
