import React, {useState} from 'react'
import {
    FormGroup,
    InputGroup
} from '@blueprintjs/core'

const PlayCompInput = (props) => {
    const [validationText, setValidationText] = useState('')
    const setValue = (e) => {
        const value = parseInt(e.target.value)
        if (typeof value !== 'number'){
            setValidationText('Debe ser un número')
        }else {
            props.setValue(e.target.value)
        }
    }

    return (
        <>
            <div>Input component</div>
            <FormGroup
                helperText = {props.helperText || ''}
                label= {props.label || ''}
                labelFor= {props.id || ''}
                labelInfo= {props.labelInfo || ''}
            >
                <InputGroup id={props.id} placeholder={props.placeholder} value={props.value} onChange={setValue} />
                <span className="play1">{validationText}</span>
            </FormGroup>
        </>
    )
}

export { PlayCompInput as default }