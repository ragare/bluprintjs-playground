import React, { useState, useEffect } from 'react'
import {
    FormGroup,
    InputGroup
} from '@blueprintjs/core'

import numeral from 'numeral'

const PlayCompInput = (props) => {
    const [intValue, setIntValue] = useState('')
    useEffect(()=>{
        console.log('A la entrada')
        if (props.value) {
            console.log("Entrada con valor")
            setIntValue(numeral(props.value.replace('.',',')).format('0,0.00 $'))
        }
    }, [])
    
    const setValue = (e) => {
        //props.setValue(numeral(e.target.value).value())
        let val = e.target.value
        val = val.replace('.',',')
        console.log("num", numeral(val).value())
        setIntValue(val)
        //props.setValue(val)
    }
    const onBlur = (e) => {
        console.log("onblur", e.target.value)
        const formatValue = numeral(intValue).format('0,0.00 $')
        setIntValue(formatValue)
        let nVal = e.target.value.replace(' €', '')
        props.setValue(numeral(nVal).value())
    }

    const onFocus = (e) => {
        console.log("onfocus", e.target.value)
        let nVal = e.target.value.replace(' €', '')
        if (intValue) {
            console.log('nval', numeral(nVal).value())
            setIntValue(numeral(nVal).value())
            console.log("intValue", intValue)
        }
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
                <InputGroup id={props.id} placeholder={props.placeholder} value={intValue} onChange={setValue} onBlur={onBlur} onFocus={onFocus} />
            </FormGroup>
        </>
    )
}

export { PlayCompInput as default }