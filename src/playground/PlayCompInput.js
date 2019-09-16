import React, { useState } from 'react'
import {
    FormGroup,
    InputGroup
} from '@blueprintjs/core'

import numeral from 'numeral'

// load a locale
numeral.register('locale', 'es', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '€'
    }
});

// switch between locales
numeral.locale('es');

const PlayCompInput = (props) => {
    const [validationText, setValidationText] = useState('')
    const setValue = (e) => {
        //props.setValue(numeral(e.target.value).value())
        let val = e.target.value
        val = val.replace('.',',')
        console.log("num", numeral(val).value())
        props.setValue(val)
    }
    const onBlur = (e) => {
        console.log("onblur", e.target.value)
    }

    const onFocus = (e) => {
        console.log("onfocus", e)
    }

    return (
        <>
            <div>Input component</div>
            <FormGroup
                helperText={props.helperText || ''}
                label={props.label || ''}
                labelFor={props.id || ''}
                labelInfo={props.labelInfo || ''}
            >
                <InputGroup id={props.id} placeholder={props.placeholder} value={props.value} onChange={setValue} onBlur={onBlur} onFocus={onFocus} />
                <span className="play1">{validationText}</span>
            </FormGroup>
        </>
    )
}

export { PlayCompInput as default }