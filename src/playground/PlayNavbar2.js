import React from 'react'
import { H5, Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Alignment, Classes, Button, Popover, Position, Menu, MenuItem } from '@blueprintjs/core'
import TreeIcon from './icons/TreeIcon'
import PlayTable from './PlayTable'

const menuOptions = [
    {
        icon: "home",
        text: "Pruebas",
        nav: "",
        subs: [
            {
                icon: "home",
                text: "Formulario",
                nav: '/form'
            },
            {
                icon: "home",
                text: "Select",
                nav: '/select'
            },
            {
                icon: "home",
                text: "Multi Select",
                nav: '/multiselect'
            }
        ]
    }
]


const PlayNavbar2 = (props) => {
    const renderMenuBase = (options) => {
        if (options) {
            let ren = options.map((option) => {
                let r = (
                    <Menu>
                        <MenuItem icon={option.icon} text={option.text} onClick={menuClick(option.nav)}>
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
                    <MenuItem icon={option.icon} text={option.text} onClick={menuClick(option.nav)}>
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
    const menuClick = (nav) => {
        return () => {
            if (nav) props.history.push(nav)
        }
    }

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