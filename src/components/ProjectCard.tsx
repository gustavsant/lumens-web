import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = { project: Project };

const ProjectCard = ({ project }: Props) => {
  const Icon = project.icon;
  const hasMedia = Boolean(project.image || Icon);
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {hasMedia && (
        <div
          className="w-full h-40 bg-muted flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: project.bgColor || undefined }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : Icon ? (
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
          ) : null}
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">{project.category}</Badge>
        </div>
        <CardTitle className="font-manrope text-xl font-bold">
          {project.title}
        </CardTitle>
        <p className="font-inter text-sm text-muted-foreground">{project.subtitle}</p>
      </CardHeader>
      <CardContent className="pt-0 flex-1 flex flex-col">
        <p className="font-inter text-sm text-muted-foreground mb-4">
          {project.description}
        </p>

        {project.features && project.features.length > 0 && (
          <div className="space-y-2 mb-4">
            {project.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="font-inter text-xs text-muted-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {project.url && (
            <Button asChild className="w-full">
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir projeto ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" /> Abrir projeto
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
