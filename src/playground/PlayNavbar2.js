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
    },
    {
        icon: "document",
        text: "Menu Op2",
        subs: [
            {
                icon: "document",
                text: "Subs 2",
                subs: [
                    {
                        icon: "document",
                        text: "Subs 2.1"
                    }
                ]
            }
        ]
    }
]

const renderMenuBase = (options) => {
    if (options) {
        let ren = options.map((option) => {
            let r = (
                <Menu>
                    <MenuItem icon={option.icon} text={option.text} onClick={menuClick(option.text)}>
                        {
                            renderMenuItems(option.subs)
                        }
                    </MenuItem>
                </Menu>
            )
            return r
        })
        return ren
    }
}

const renderMenuItems = (options) => {
    if (options) {
        let ren = options.map((option) => {
            let r = (
                <MenuItem icon={option.icon} text={option.text} onClick={menuClick(option.text)}>
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

const menuClick = (text) => {
    console.log("Building", text)
    return () => {
        console.log("Menu text", text)
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
                    {renderMenuBase(menuOptions)}
                </NavbarGroup>
            </Navbar>
        </div>
    )
}

export { PlayNavbar2 as default }