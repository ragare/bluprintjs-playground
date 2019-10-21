import React, {useState} from 'react'
import PlayCompInput from './PlayCompInput'
import PlayDate from './PlayDate'



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
            <PlayCompInput label="Etiqueta" value={inputValue} setValue={setValue} id="PP"/>
            <div>Date component</div>
            <PlayDate/>
        </>
    )
}

export { PlayForm as default }