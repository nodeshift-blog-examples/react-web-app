import React, { Component } from 'react';
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from 'carbon-components-react';

/**
 * Display SideNav page
 *
 * @visibleName SideNav
 */
class MenuSideNav extends Component {

    render() {
        return (
            <SideNav
                className="menu-side-nav"
                isFixedNav
                expanded={true}
                isChildOfHeader={false}
                aria-label="Side navigation">
                <SideNavItems>
                    <SideNavMenu title="Community Topics LOUISE" defaultExpanded={true}>
                        <SideNavMenuItem href="/devops">
                            DevOps
                        </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="Service Management" defaultExpanded={true} className="side-nav-indent">
                        <SideNavMenuItem href="/csmo">
                            CSMO
                        </SideNavMenuItem>
                        <SideNavMenuItem href="/tradit">
                            Traditional IT
                        </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="IBM Cloud Paks" defaultExpanded={true} className="side-nav-indent">
                        <SideNavMenuItem href="https://www.ibm.com/cloud/cloud-pak-for-applications">
                            Applications
                        </SideNavMenuItem>
                        <SideNavMenuItem href="/mcm" >
                            Multicloud Management
                        </SideNavMenuItem>
                        <SideNavMenuItem href="/system">
                            System
                        </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="Other IBM Cloud Paks" defaultExpanded={false}>
                        <SideNavMenuItem href="https://www.ibm.com/cloud/cloud-pak-for-automation">
                            Automation
                        </SideNavMenuItem>
                        <SideNavMenuItem href="https://www.ibm.com/cloud/cloud-pak-for-integration">
                            Integration
                        </SideNavMenuItem>
                        <SideNavMenuItem href="https://www.ibm.com/products/cloud-pak-for-data">
                            Data
                        </SideNavMenuItem>
                        <SideNavMenuItem href="https://www.ibm.com/products/cloud-pak-for-security">
                            Security
                        </SideNavMenuItem>
                    </SideNavMenu>
                </SideNavItems>
            </SideNav>

        );
    }
}




export default MenuSideNav;
