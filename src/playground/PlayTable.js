import React, { useState } from 'react'
import {
    H5, Menu, MenuItem, Alignment, Button, Classes,
    Navbar, NavbarGroup, NavbarDivider, NavbarHeading, InputGroup
} from '@blueprintjs/core'
import {
    Cell, Column, Table, ColumnHeaderCell,
} from "@blueprintjs/table"

import numeral from 'numeral'
import moment from 'moment'

const PlayTable = (props) => {
    const originalValues = [
        {
            id: 'XDFATTA',
            name: 'John Viconst',
            birth: '20190202',
            age: 33,
            savings: 123.26
        },
        {
            id: 'GRER899',
            name: 'Mary Shelly',
            birth: '18920203',
            age: 87,
            savings: 2600.00
        },
        {
            id: 'KLS67YUS',
            name: 'Boris Acoont',
            birth: '19330506',
            age: 77,
            savings: 0.0
        },
        {
            id: '56GTH777',
            name: 'Lea Volker',
            birth: '19980101',
            age: 45,
            savings: 1203.07
        }
    ]
    const [tableData, setTableData] = useState(originalValues)

    const columns = [
        { name: 'ID', field: 'id', type: 'string', w: 'fill' },
        { name: 'NAME', field: 'name', type: 'string', w:'2000px' },
        { name: 'BIRTH', field: 'birth', type: 'date', w:'150px' },
        { name: 'AGE', field: 'age', type: 'int', w: '100px' },
        { name: 'SAVINGS', field: 'savings', type: 'amount', w:'100px' },
    ]

    const calcWidths = () => {
        let widths = []
        let i = 0
        let posfill = -1
        let size = document.getElementsByClassName("bp3-table-container")[0].clientWidth - 150
        let yetFilled = 0
        columns.forEach(c=> {
            if (c.w.includes('px')){
                let val = c.w.replace('px','')
                val = parseInt(val)
                widths.push(val)
                yetFilled += val
            }else if (c.w.includes('%')){
                let val = c.w.replace('%','')
                val = parseInt(val)
                val = (size / 100.00) * val
                widths.push(val)
                yetFilled += val
            }else if (c.w.includes('fill')){
                posfill = i
                widths.push(150) // Waiting to change it eventually
            }else {
                widths.push(150) // Default with column
                yetFilled += 150
            }
            i++
        })
        widths.push(150) // Actions column
        // Fill column
        if (size - yetFilled > 150) {
            widths[posfill] = size -yetFilled
        }
        return widths
    }

    const [colsW, setColsW] = useState([150,150,100,100,100,150])


    const cellRenderer = (rowIndex, columnIndex) => {
        //console.log('[1] ROW %s COLUMN %s', rowIndex, columnIndex)
        let cellText = tableData[rowIndex][columns[columnIndex]['field']]
        const type = columns[columnIndex]['type']
        let cellClass = ''
        switch (type) {
            case 'int':
                cellClass = 'play-right'
                cellText = numeral(cellText).format('0,0')
                break
            case 'date':
                cellClass = 'play-center'
                cellText = moment(cellText).format('DD/MM/YYYY')
                break
            case 'amount':
                cellClass = 'play-right'
                cellText = numeral(cellText).format('0,0.00 $')
                break
        }
        return <Cell className={cellClass}>{cellText}</Cell>
    };
    const columnRender = (columnIndex) => {
        //console.log('[TEST] COLUMN %s', columnIndex)
        let cellText = columns[columnIndex]['name']
        const type = columns[columnIndex]['type']
        let cellClass = ''
        switch (type) {
            case 'int':
                cellClass = 'play-right'
                break
            case 'date':
                cellClass = 'play-center'
                break
            case 'amount':
                cellClass = 'play-right'
                break
        }
        return <ColumnHeaderCell className={cellClass} name={cellText} menuRenderer={MenuRenderer}/>
    }
    const sortAsc = () => {
        console.log("Sort ASC")
    }
    const sortDesc = () => {
        console.log("Sort DESC")
    }
    const MenuRenderer = () => {
        return (
            <Menu>
                <MenuItem icon="sort-asc" onClick={sortAsc} text="Sort Asc" />
                <MenuItem icon="sort-desc" onClick={sortDesc} text="Sort Desc" />
            </Menu>
        )
    }
    const columnsReordered = () => {
        console.log('Columns reordered')
    }
    const changeValues = () => {
        const newValues = [
            {
                id: 'XDFATTA',
                name: 'John Viconst John Viconst John Viconst John Viconst  John Viconst John Viconst John Viconst John Viconst',
                birth: '20190202',
                age: 33,
                savings: 123.26
            },
            {
                id: 'GRER899',
                name: 'Mary Shelly',
                birth: '18920203',
                age: 87,
                savings: 2600.00
            }
        ]
        setTableData(newValues)
    }
    const changeOriginal = () => {
        setTableData(originalValues)
    }
    const useHistory = () => {
        props.history.push('/menu')
    }
    const filtraDatos = (e) => {
        //console.log(e.target.value)
        const toSearch = e.target.value
        const toFilterData = originalValues
        const filteredData = toFilterData.filter(row => {
            let found = false
            columns.forEach(c => {
                let value = row[c.field]
                const type = c.type
                switch (type) {
                    case 'string':
                        value = value.toUpperCase()
                    case 'int':
                        value = numeral(value).format('0,0')
                        break
                    case 'date':
                        value = moment(value).format('DD/MM/YYYY')
                        break
                    case 'amount':
                        value = numeral(value).format('0,0.00 $')
                        break
                }
                const search = toSearch.toUpperCase()
                console.log('Text: %s Search: %s', value, search)
                if (value.includes(search)) {
                    found = true;
                }
            })
            return found
        })
        //console.log('FILTERED: ', filteredData)
        setTableData(filteredData)
    }

    const changeWidths = () => {
        console.log('Change width')
        setColsW(calcWidths())
    }

    const containerSize = () => {
        let size = document.getElementsByClassName("bp3-table-container")[0].clientWidth
        console.log("size", size)
    }
    return (
        <>
            <H5>This will be a table</H5>
            <Navbar>
                <NavbarGroup align={Alignment.RIGHT}>
                    <InputGroup leftIcon="filter" placeholder="Introduzca texto a buscar..." onChange={filtraDatos} />
                    <Button className={Classes.MINIMAL} icon="plus" text="Nuevo" />
                </NavbarGroup>
            </Navbar>
            <div style={{ height: "500px" }}>
                <Table numRows={tableData.length}
                    enableColumnReordering={true}
                    onColumnsReordered={columnsReordered}
                    columnWidths={colsW}
                    enableFocusedCell={true}
                >
                    {
                        columns.map((c) => {
                            return <Column columnHeaderCellRenderer={columnRender} cellRenderer={cellRenderer} />
                        })
                    }
                    <Column name="ACCIONES"/>
                    {/* <Column name="Dollars" cellRenderer={cellRenderer} columnHeaderCellRenderer={columnRender} />
                    <Column name="Names" cellRenderer={cellRenderer2} /> */}
                </Table>
            </div>
            <button onClick={changeValues}>Change values</button>
            <button onClick={changeOriginal}>Original values</button>
            <button onClick={useHistory}>TO MENU</button>
            <button onClick={changeWidths}>Change Widths</button>
            <button onClick={containerSize}>Container size</button>

        </>
    )
}

export { PlayTable as default }