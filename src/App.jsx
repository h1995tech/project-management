import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        <Project /> 
      </main>
    </>
  );
}

export default App;
