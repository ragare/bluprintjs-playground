import React, { useState, useEffect } from 'react'
import { Position } from '@blueprintjs/core'
import { DateInput, IDateFormatProps } from "@blueprintjs/datetime";
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

    return (
        <>
            <DateInput
                formatDate={date => date.toLocaleString('es-ES', { year: "numeric", month: "2-digit", day: "numeric" })}
                placeholder={"DD/MM/YYYY"}
                dayPickerProps={{
                    locale: 'es',
                    months: DateFormatString.months,
                    weekdaysLong: DateFormatString.weekDaysLong,
                    weekdaysShort: DateFormatString.weekDaysShort,
                    firstDayOfWeek: 1,
                }}
            />

        </>
    )
}

export { PlayDate as default }