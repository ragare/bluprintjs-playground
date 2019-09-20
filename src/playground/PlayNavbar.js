import React from 'react'
import { H5, Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Alignment, Classes, Button, Popover, Position, Menu, MenuItem } from '@blueprintjs/core'
import TreeIcon from './icons/TreeIcon'
import PlayTable from './PlayTable'

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
            <Navbar className="bp3-dark">
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>
                        <span className="flaticon-wallet play-big"></span>
                        Blueprint
                    </NavbarHeading>
                    <NavbarDivider />
                    <Button className={Classes.MINIMAL} icon="home" text="Home" />
                    <Button className={Classes.MINIMAL} icon="document" text="Files" />
                    <Button className={Classes.MINIMAL} text="Files" />
                    <Popover content={menu1} position={Position.RIGHT_TOP}>
                        <Button icon="share" text="Share" />
                    </Popover>
                    <Menu>
                        <MenuItem icon={<TreeIcon />} text="Submenu">
                            <MenuItem icon="document" text="Child one" label="Aqui bien" />
                            <MenuItem text="Child two" />
                            <MenuItem text="Child three" />
                            <MenuItem className="flaticon-farmer" text="My sub2">
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
            <div className={'play-higth'}>
                <PlayTable/>
            </div>
        </div>
    )
}

export { PlayNavbar as default }