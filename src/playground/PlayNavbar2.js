import React from 'react'
import { H5, Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Alignment, Classes, Button, Popover, Position, Menu, MenuItem } from '@blueprintjs/core'
import TreeIcon from './icons/TreeIcon'
import PlayTable from './PlayTable'

const menuOptions = [
    {
        icon: "home",
        text: "Menu Op1",
        subs: [
            {
                icon: "home",
                text: "Subs 1",
                subs: [
                    {
                        icon: "home",
                        text: "Subs 1.1",
                        subs: [
                            {
                                icon: "home",
                                text: "Subs 1.2"
                            }
                        ]
                    }
                ]
            },
            {
                icon: "home",
                text: "Subs 2"
            }
        ]
    }
]

const renderMenuItems = (options) => {
    if (options) {
        let ren = options.map((option) => {
            let r = (
                <MenuItem icon={option.icon} text={option.text}>
                    {
                        renderMenuItems(option.subs)
                    }
                </MenuItem>
            )
            return r
        })
        return ren
    }
}

const PlayNavbar2 = () => {
    return (
        <div>
            <Navbar className="bp3-dark play-zadelante">
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>
                        Grupo 1
                    </NavbarHeading>
                    <NavbarDivider />
                    <Menu>
                        <MenuItem icon="home" text="Only menu">
                        </MenuItem>
                    </Menu>   
                    <Menu>
                        {renderMenuItems(menuOptions)}
                    </Menu>  
                </NavbarGroup>
            </Navbar>
        </div>
    )
}

export { PlayNavbar2 as default }