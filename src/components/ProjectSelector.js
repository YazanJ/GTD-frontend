import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const ProjectSelector = ({ project, setProject, projects }) => {
    return (
        <DropdownButton
            className="mt-1"
            title={project.length ? project : "Standalone"}
            variant="secondary"
            onSelect={setProject}
        >
            {projects.map((project) => (
                <Dropdown.Item key={project.id} eventKey={project.name}>
                    {project.name}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
};

export default ProjectSelector;
