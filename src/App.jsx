import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";
import FallbackProject from "./components/FallbackProject.jsx";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        <FallbackProject /> 
      </main>
    </>
  );
}

export default App;
