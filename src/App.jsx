import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProject from './components/NoProject';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject';

function App() {
  const [display, setDisplay] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleSelectProject = (id) => {
    setDisplay((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
        //we are adding a new project
      };
    });
  };

  const handleProject = () => {
    setDisplay((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        //we are adding a new project
      };
    });
  };

  const handleCancel = () => {
    setDisplay((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        //we are adding a new project
      };
    });
  };

  const handleAddProject = (projectData) => {
    setDisplay((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

const handleDelete = () => {
  setDisplay((prevState) => {
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((project)=>project.id !== prevState.selectedProjectId)
    };
  });
}

  const selectedProject = display.projects.find(
    (project) => project.id === display.selectedProjectId,
  );

  let content = <SelectedProject project={selectedProject} onDelete = {handleDelete} />;
  if (display.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} cancel={handleCancel} />;
  } else if (display.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleProject}
        projects={display.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
