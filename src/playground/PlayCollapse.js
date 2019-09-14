import React, { useState } from 'react'
import { Collapse, H5, Pre, Button, Label } from '@blueprintjs/core'

const PlayCollapse = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toogleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <H5>Play Collapse</H5>
            <Button onClick={toogleCollapse}>
                {isOpen ? "Hide" : "Show"} build logs
            </Button>
            <Collapse isOpen={isOpen}>
                <Label>
                    This is a label
                </Label>
                <Pre>
                    This is an area surrounded by Pre tag
                </Pre>
            </Collapse>
        </div>
    )
}

export { PlayCollapse as default }