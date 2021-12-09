import React from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const Sidebar = ({ projects, tags }) => {
    return (
        <ProSidebar className="100-vh">
            <Menu>
                <MenuItem>
                    Focused
                    <Link to="actions/focused/" />
                </MenuItem>
                <MenuItem>
                    Inbox
                    <Link to="/actions/inbox/" />
                </MenuItem>
                <SubMenu title="ACTIONS" defaultOpen={true}>
                    <MenuItem>
                        Next
                        <Link to="/actions/next/" />
                    </MenuItem>
                    <MenuItem>
                        Waiting
                        <Link to="/actions/waiting/" />
                    </MenuItem>
                    <MenuItem>
                        Scheduled
                        <Link to="/actions/scheduled/" />
                    </MenuItem>
                    <MenuItem>
                        Someday
                        <Link to="/actions/someday/" />
                    </MenuItem>
                </SubMenu>
                <SubMenu as={Link} title="PROJECTS" defaultOpen={true}>
                    <Link to="projects/" />
                    {projects.map((project) => (
                        <MenuItem key={project.id}>
                            {project.name}
                            <Link to={`/projects/${project.id}/`} />
                        </MenuItem>
                    ))}
                </SubMenu>
                <SubMenu title="TAGS" defaultOpen={true}>
                    {tags.map((tag) => (
                        <MenuItem key={tag.id}>
                            {tag.name}
                            <Link to={`/tags/${tag.id}/`} />
                        </MenuItem>
                    ))}
                </SubMenu>
            </Menu>
            {/* <SidebarFooter>Footer</SidebarFooter> */}
        </ProSidebar>
    );
};

export default Sidebar;
