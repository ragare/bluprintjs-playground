/*
============================================
BlpTest: A simple control for a text field
============================================
Parameters in props:
id = Unique identifier of this control
label = The label we'll show on top of the control
labelInfo = Information to show next to the label (vrg. a shortcut)
placeholder = Placeholder for the control
value = Initial value for the control
setValue = Function to call when value changes
*/
import React, {useState, useEffect} from 'react'
import {FormGroup, InputGroup} from '@blueprintjs/core'
import numeral from numeral

const BlpText = ({id, label, labelInfo, placeholder, value, setValue}) => {
    const [compValue, setCompValue] = useState('') // State value owed by the component
    const handleValueChange = (e) => {
        setCompValue(e.target.value)
        setValue(e.target.value)
    }
    const handleOnBlur = (e) => {
        
    }
}

export {BlpText as default}