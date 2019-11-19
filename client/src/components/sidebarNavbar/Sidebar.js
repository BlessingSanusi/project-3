import React, { Component } from 'react'
import styled from "styled-components";

const SidebarContainer = styled.div`
height: 100vh;
width: 270px;
background-color: #252529;
color: #fff;
`;

const SidebarMenu = styled.ul`
        display: flex;
        align-items: center;
        flex-direction: column;
        list-style: none;
        width: 100%;
`;

const SidebarMenuItem = styled.li`
display: flex;
height: 40px;
width: 100%;
align-items: center;
padding-left: 30px;
&:hover {
background: rgba(255, 255, 255, 0.05);
box-shadow: inset 3px 0 0 0 #ffffff;
cursor: pointer;
`;

const SidebarMenuItemLabel = styled.p`
        margin-top: 0;
        font-family: 'Open Sans', sans-serif;
        color: #fff;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 500;
        color: #ffffff;
`

class Sidebar extends Component {
    render() {
        return (
            <SidebarContainer>
                        <SidebarMenu>
                              <SidebarMenuItem href="/dashboard">
                              <SidebarMenuItemLabel><i className="far fa-chart-bar fa-2x"></i> Dashboard</SidebarMenuItemLabel>
                              </SidebarMenuItem>
                              <SidebarMenuItem href="/transaction">
                              <SidebarMenuItemLabel> <i className="fab fa-cc-visa fa-2x"></i> Transaction</SidebarMenuItemLabel>
                              </SidebarMenuItem>
                              <SidebarMenuItem href="/payment">
                              <SidebarMenuItemLabel><i className="far fa-bell fa-2x"></i> Bills and Payment</SidebarMenuItemLabel>
                              </SidebarMenuItem>
                              <SidebarMenuItem href="/settings">
                              <SidebarMenuItemLabel> <i className="fas fa-cog fa-2x"></i> Settings</SidebarMenuItemLabel>
                              </SidebarMenuItem>
                            
                        </SidebarMenu>
                 </SidebarContainer>
        )
    }
}

export default Sidebar;