import { projects } from "@/data/links.json";
import { Button } from "./button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProjectTable() {
  const [selectedProject, setSelectedProject] = useState(projects[0]); // default to first project
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1020) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelect = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
  };

  const renderContent = (content: string) => {
    // Split content by newlines and map over each line, adding a <p> for each
    return content.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mt-4 text-justify text-[14px]">
        {paragraph}
      </p>
    ));
  };

  return (
    <div>
      {/* main container */}
      <div className="xl:max-w-[1300px]">
        <div className="bg-edpgreen flex flex-wrap items-center justify-center xl:px-[100px]">
          {projects.map((project, index) => {
            const isSelected = selectedProject.title === project.title;
            return (
              <div key={index} className="px-2 py-2">
                <Button
                  variant={"projectEDP"}
                  onClick={() => handleSelect(project)}
                  className={isSelected ? "bg-edpyellow" : ""}
                >
                  {project.title}
                </Button>
              </div>
            );
          })}
        </div>

        {/* display project */}
        <div className="border-[1px] border-edpgreen bg-white h-[560px] w-full flex justify-center items-center p-4 overflow-hidden">
          <div className="h-full w-full overflow-y-auto p-4">
            {selectedProject ? (
              <div
                className={`${
                  isMobile
                    ? "flex flex-col items-center" // Mobile view: Stack header, image, and content
                    : "flex flex-row items-start space-x-4" // Desktop view: Image and content side by side
                }`}
              >
                {/* Image */}
                {isMobile ? null : (
                  <div>
                    {selectedProject.imageUrl && (
                      <Image
                        src={selectedProject.imageUrl}
                        alt={selectedProject.title}
                        width={250}
                        height={350}
                        className="object-contain"
                      />
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  <h2
                    className={`text-2xl font-bold ${
                      isMobile ? "text-center" : ""
                    }`}
                  >
                    {selectedProject.header}
                  </h2>
                  {isMobile ? (
                    <div className="flex items-center justify-center p-4">
                      {selectedProject.imageUrl && (
                        <Image
                          src={selectedProject.imageUrl}
                          alt={selectedProject.title}
                          width={250}
                          height={350}
                          className="object-contain"
                        />
                      )}
                    </div>
                  ) : null}
                  {renderContent(selectedProject.content)}
                </div>
              </div>
            ) : (
              <p>Select a project</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
