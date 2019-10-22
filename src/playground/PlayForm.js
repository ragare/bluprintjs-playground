import React, { useState } from 'react'
import PlayCompInput from './PlayCompInput'
import PlayDate from './PlayDate'
import ErrorBoundary from './ErrorBoundary'
import PlaySelect from './PlaySelect'



const PlayForm = () => {
    const [inputValue, setInputValue] = useState('667,25')

    const setValue = (val) => {
        setInputValue(val)
    }

    const options = {
        helperText: '',
        label: "Label input",
        labelFor: "id1",
        labelInfo: "(Some info)",
        placeholder: "Placeholder",
        value: inputValue,
        setValue: setInputValue
    }
    return (
        <>
            <div>My form</div>
            <PlayCompInput label="Amount label" labelInfo="(Info)" value={inputValue} setValue={setValue} id="PP" />
            <ErrorBoundary>
                <PlayDate label="Date label" id="P2" />
            </ErrorBoundary>
            <PlaySelect />

        </>
    )
}

export { PlayForm as default }