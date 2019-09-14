import React from 'react'
import { H5, Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Alignment, Classes, Button, Popover, Position, Menu, MenuItem } from '@blueprintjs/core'
import { hidden } from 'ansi-colors'

const PlayNavbar = () => {
    const menu1 = (
        <Menu>
            <MenuItem text="Child one" icon="home" />
            <MenuItem text="Child two" icon="document" />
            <MenuItem text="Child three" />
        </Menu>
    )

    return (
        <div>
            <H5>Play Navbar</H5>
            <Navbar className="bp3-dark">
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>Blueprint</NavbarHeading>
                    <NavbarDivider />
                    <Button className={Classes.MINIMAL} icon="home" text="Home" />
                    <Button className={Classes.MINIMAL} icon="document" text="Files" />
                    <Popover content={menu1} position={Position.RIGHT_TOP}>
                        <Button icon="share" text="Share" />
                    </Popover>
                    <Menu>
                        <MenuItem icon="document" text="Submenu">
                            <MenuItem icon="document" text="Child one" />
                            <MenuItem text="Child two" />
                            <MenuItem text="Child three" />
                            <MenuItem icon="home" text="My sub2">
                                <MenuItem text="Child two" />
                                <MenuItem text="Child three" />
                                <MenuItem icon="home" text="My sub2">
                                    <MenuItem text="Child two" />
                                    <MenuItem text="Child three" />
                                    <MenuItem icon="home" text="My sub2">
                                        <MenuItem text="Child two" />
                                        <MenuItem text="Child three" />
                                    </MenuItem>
                                </MenuItem>
                            </MenuItem>
                        </MenuItem>
                    </Menu>

                </NavbarGroup>
            </Navbar>
        </div>
    )
}

export { PlayNavbar as default }