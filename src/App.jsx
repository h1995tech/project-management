import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Project from "./components/Project.jsx";
import FallbackProject from "./components/FallbackProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
function App() {
  const [projects, setProjects] = useState({
    currentAction: 'no-project-created',
    selectedProjectId: null,
    projects: [],
    tasks: []
  }); // This state will allow to render components conditionally and will hold the list of projects, the currently selected project, and the current action (e.g., creating a project, viewing a project, etc.)

  function handleAddTask(text) {
      setProjects(prev => ({
        ...prev,
        tasks: [...prev.tasks, { id: Date.now(), text, projectId: prev.selectedProjectId }] // This is where you would add the new task to the list of tasks for the selected project
      }))
   }

  function handleDeleteTask() { }

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

  function handleCancelAddProject() {
    setProjects(prev => ({
      ...prev,
      currentAction: 'no-project-created'
    }))
  }

  function handleSelectProject(projectId) {
    setProjects(prev => ({
      ...prev,
      selectedProjectId: projectId,
      currentAction: 'project-selected'
    }))
  }

  function handleDeleteProject(projectId) {
    setProjects(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== projectId),
      currentAction: 'no-project-created',
      selectedProjectId: null
    }))
  }

  let content;
  if (projects.currentAction === 'no-project-created') {
    content = <FallbackProject onCreateNewProject={handleAddProject} />;
  } else if (projects.currentAction === 'creating-project') {
    content = <Project onSaveProject={handleSaveProject} onCancelProject={handleCancelAddProject} />;
  } else if (projects.currentAction === 'saving-project') {
    content = <FallbackProject onSaveProject={handleSaveProject} />;
  } else if (projects.currentAction === 'project-selected') {
    content = <SelectedProject
      project={projects.projects.find(project => project.id === projects.selectedProjectId)}
      onDeleteProject={handleDeleteProject} 
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projects.tasks}/>;
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onAddProject={handleAddProject} projects={projects.projects} onSelectProject={handleSelectProject} />
        {content}
      </main>
    </>
  );
}

export default App;
