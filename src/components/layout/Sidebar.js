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

const Sidebar = () => {
    return (
        <ProSidebar className="100-vh">
            <Menu>
                <SubMenu title="CAPTURE">
                    <MenuItem>
                        Inbox
                        <Link to="/actions/inbox/" />
                    </MenuItem>
                </SubMenu>
                <SubMenu title="ACTIONS">
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
                <MenuItem>
                    Focus
                    <Link to="actions/focused/" />
                </MenuItem>
                <SubMenu as={Link} title="PROJECTS">
                    <Link to="projects/" />
                    <MenuItem>
                        Project_name
                        <Link to="/projects/:project_id/" />
                    </MenuItem>
                </SubMenu>
                <SubMenu title="TAGS">
                    <MenuItem>
                        tag_name
                        <Link to="/tag/:tag_id/" />
                    </MenuItem>
                </SubMenu>
            </Menu>
            {/* <SidebarFooter>Footer</SidebarFooter> */}
        </ProSidebar>
    );
};

export default Sidebar;
