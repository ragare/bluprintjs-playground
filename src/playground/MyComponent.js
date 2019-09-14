import React from 'react'
import { Button, Intent, Spinner } from '@blueprintjs/core'



const MyComponent = () => {
    return (
        <div>
            <h1>This is mycomponent</h1>
            <h2>Subtitle</h2>
            <Spinner intent={Intent.PRIMARY} />
            <div>
                More than a decade ago, we set out to create products that would transform
                the way organizations use their data. Today, our products are deployed at
                the most critical government, commercial, and non-profit institutions in
                the world to solve problems we hadn’t even dreamed of back then.
            </div>
            <div className="bp3-blockquote">This is a block that I want to see</div>
            <ol className=".modifier">
                <li>Item the first</li>
                <li>Item the second</li>
                <li>
                    Item the third
                    <ul className=".modifier">
                        <li>Item the fourth</li>
                        <li>Item the fifth</li>
                    </ul>
                </li>
            </ol>
            <Button text="I'm a button" />
        </div>


    )
}

export { MyComponent as default }