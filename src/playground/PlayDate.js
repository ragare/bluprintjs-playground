import React, { useState, useEffect } from 'react'
import { Position } from '@blueprintjs/core'
import { DateInput, IDateFormatProps } from "@blueprintjs/datetime";
import { FormGroup } from '@blueprintjs/core'
import moment from "moment";


const PlayDate = (props) => {

    const DateFormatString = {
        months: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
        ],
        weekDaysLong: [
            'Domingo',
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sabado'
        ],
        weekDaysShort: [
            'Do',
            'Lu',
            'Ma',
            'Mi',
            'Ju',
            'Vi',
            'Sa'
        ]
    }
    try {
        return (
            <>
                <FormGroup
                    helperText={props.helperText || ''}
                    label={props.label || ''}
                    labelFor={props.id || ''}
                    labelInfo={props.labelInfo || ''}
                >
                    <DateInput
                        formatDate={date => {
                            console.log("date", date)
                            console.log("props", props)
                            return moment(date).format('DD/MM/YYYY')
                        }}
                        placeholder={"DD/MM/YYYY"}
                        parseDate={str => {
                            return moment(str, 'DD/MM/YYYY').toDate()
                        }}
                        minDate={moment('1900-01-01').toDate()}
                        maxDate={moment('2025-12-31').toDate()}
                        dayPickerProps={{
                            locale: 'es',
                            months: DateFormatString.months,
                            weekdaysLong: DateFormatString.weekDaysLong,
                            weekdaysShort: DateFormatString.weekDaysShort,
                            firstDayOfWeek: 1,
                        }}
                    />
                    <div class="bp3-form-helper-text">Valor de base</div>
                </FormGroup>
            </>
        )
    } catch (err) {
        console.log("Err: ", err.message)
    }

}

export { PlayDate as default }