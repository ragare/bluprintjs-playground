import React from 'react'
import { H5, Menu, MenuItem, Popover, Button, Position } from '@blueprintjs/core'

const PlayMenu = () => {
    const clickMenu = (item) => {
        console.log(item.target)
    }

    const menu1 = (
        <Menu>
            <MenuItem text="Child one" onClick={clickMenu} />
            <MenuItem text="Child two" onClick={clickMenu} />
            <MenuItem text="Child three" onClick={clickMenu} />
        </Menu>
    )
    const menu2 = (
        <Menu>
            <MenuItem text="Child one" onClick={clickMenu} />
            <MenuItem text="Child two" onClick={clickMenu} />
            <MenuItem text="Child three" onClick={clickMenu} />
        </Menu>
    )



    return (
        <div>
            <H5>Play Menu</H5>
            <Popover content={menu1} position={Position.RIGHT_TOP}>
                <Button icon="share" text="Open in (1)..." />
            </Popover>
            <Popover content={menu2} position={Position.RIGHT_TOP}>
                <Button icon="share" text="Open in (2)..." />
            </Popover>
        </div>
    )
}

export { PlayMenu as default }