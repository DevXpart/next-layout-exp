import { Project } from "@/types/project";
import { createContext } from "react";

const ProjectContext = createContext<Project | null>(null);

export default ProjectContext;
