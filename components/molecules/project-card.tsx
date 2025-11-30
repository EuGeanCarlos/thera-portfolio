import type { Project } from "../../data/projects";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

function getStatusLabel(status: Project["status"]) {
  switch (status) {
    case "em-andamento":
      return "Em andamento";
    case "concluido":
      return "Concluído";
    case "prototipo":
      return "Protótipo";
    default:
      return status;
  }
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline">{project.area}</Badge>
          <Badge>{getStatusLabel(project.status)}</Badge>
        </div>
        <CardTitle className="text-lg">{project.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {project.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
