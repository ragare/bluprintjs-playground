import React from 'react'
import { Button, Intent, Spinner } from '@blueprintjs/core'



const MyComponent = () => {
    return (
        <div>
            <p>This is mycomponent</p>
            <Spinner intent={Intent.PRIMARY} />
            <div className="play1">
                More than a decade ago, we set out to create products that would transform
                the way organizations use their data. Today, our products are deployed at
                the most critical government, commercial, and non-profit institutions in
                the world to solve problems we hadn’t even dreamed of back then.
            </div>
        </div>

    )
}

export { MyComponent as default }