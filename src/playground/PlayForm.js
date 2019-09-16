import React, {useState} from 'react'
import PlayCompInput from './PlayCompInput'

const PlayForm = () => {
    const [inputValue, setInputValue] = useState('')
    let i = 0

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
            <PlayCompInput label="Etiqueta" value={inputValue} setValue={setInputValue} id="PP"/>
        </>
    )
}

export { PlayForm as default }