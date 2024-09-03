import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="background min-h-screen p-2">
      <div className="flex bg-white justify-center mx-6 rounded-lg p-2 mt-5">
        <h1 className="text-2xl font-bold">RANDOM GIFS</h1>
      </div>
      <div className="flex flex-col items-center mt-8 gap-8">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
