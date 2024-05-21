import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import { ProjectProvider } from "../Contexts/ProjectTypeContext";


export default function Root() {
  return (
    <div>
      <ProjectProvider>
        <Header />
      </ProjectProvider>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}