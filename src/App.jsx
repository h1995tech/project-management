import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";
import FallbackProject from "./components/FallbackProject.jsx";

function App() {
  const [projects, setProjects] = useState({
    currentAction: 'no-project-created',
    selectedProjectId: null,
    projects: []
  }); // This state will allow to render components conditionally and will hold the list of projects, the currently selected project, and the current action (e.g., creating a project, viewing a project, etc.)

  function handleAddProject() {
    setProjects(prev => ({
      ...prev,
      currentAction: 'creating-project'
    }))
  }

  function handleSaveProject(newProject) {
    setProjects(prev => ({
      ...prev,
      currentAction: 'saving-project',
      projects: [...prev.projects, newProject] // This is where you would add the new project to the list of projects
    }))
  }

  console.log(projects);

  let content;
  if (projects.currentAction === 'no-project-created') {
    content = <FallbackProject onCreateNewProject={handleAddProject}/>;
  } else if (projects.currentAction === 'creating-project') {
    content = <Project onSaveProject={handleSaveProject}/>;
  } else if (projects.currentAction === 'saving-project') {
    content = <Project onSaveProject={handleSaveProject}/>;
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onAddProject={handleAddProject}/>
        {content}
      </main>
    </>
  );
}

export default App;
