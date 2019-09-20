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
import { identifier } from '@babel/types'

const PlayTable = (props) => {
    const [currentWidth, setCurrentWith] = useState(0)
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
        { name: 'ID', field: 'id', type: 'string', w: '150' },
        { name: 'NAME', field: 'name', type: 'string', w: 'fill' },
        { name: 'BIRTH', field: 'birth', type: 'date', w: '150px' },
        { name: 'AGE', field: 'age', type: 'int', w: '100px' },
        { name: 'SAVINGS', field: 'savings', type: 'amount', w: '100px' },
    ]

    const calcWidths = () => {
        let widths = []
        let i = 0
        let posfill = -1
        let size = document.getElementsByClassName("bp3-table-container")[0].clientWidth - 120
        let yetFilled = 0
        columns.forEach(c => {
            if (c.w.includes('px')) {
                let val = c.w.replace('px', '')
                val = parseInt(val)
                widths.push(val)
                yetFilled += val
            } else if (c.w.includes('%')) {
                let val = c.w.replace('%', '')
                val = parseInt(val)
                val = (size / 100.00) * val
                widths.push(val)
                yetFilled += val
            } else if (c.w.includes('fill')) {
                posfill = i
                widths.push(150) // Waiting to change it eventually
            } else {
                widths.push(150) // Default with column
                yetFilled += 150
            }
            i++
        })
        widths.push(100) // Actions column
        // Fill column
        if (size - yetFilled > 150) {
            widths[posfill] = size - yetFilled
        }
        return widths
    }

    const [colsW, setColsW] = useState(null)


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
        return <ColumnHeaderCell className={cellClass} name={cellText} menuRenderer={MenuRenderer} />
    }

    const sortColumn = (column, direction) => {
        console.log("Column %s Direction %s", column, direction)
        const dataToSort = tableData
        const sortedTableData = dataToSort.sort((ao, bo) => {
            const a = ao[columns[column]['field']]
            const b = bo[columns[column]['field']]
            const type = columns[column]['type']
            if (direction === 'DESC') {
                if (type === 'string' || type === 'date') {
                    return b.toString().localeCompare(a)
                } else {
                    return compareNumber(b, a)
                }
            } else {
                // ASC
                if (type === 'string' || type === 'date') {
                    return a.toString().localeCompare(b)
                } else {
                    return compareNumber(a, b)
                }
            }
        })
        setTableData(sortedTableData)
    }

    const compareNumber = (a, b) => {
        if (a < b) {
            return -1
        }
        if (a > b) {
            return 1
        }
        return 0
    }

    const MenuRenderer = (index) => {
        const sortAsc = () => sortColumn(index, 'ASC')
        const sortDesc = () => sortColumn(index, 'DESC')
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
        console.log('changeValues')
        let newValues = []
        for (let i = 0; i < 10000; i++) {
            newValues.push({
                id: 'STR' + i,
                name: 'NAME' + i,
                birth: '20190123',
                age: i * 2,
                savings: i * 30
            })
        }
        console.log('new', newValues)
        setTableData(newValues)
    }
    const changeOriginal = () => {
        setTableData(originalValues)
    }
    const useHistory = () => {
        props.history.push('/menu')
    }
    const filtraDatos = (e) => {
        const toSearch = e.target.value
        const toFilterData = originalValues
        const filteredData = toFilterData.filter(row => {
            let found = false
            columns.forEach(c => {
                let value = row[c.field]
                const type = c.type
                switch (type) {
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
                if (value.toUpperCase().includes(search)) {
                    found = true;
                }
            })
            return found
        })
        setTableData(filteredData)
    }


    const changeWidths = () => {
        if (document.getElementsByClassName("bp3-table-container")[0].clientWidth != currentWidth) {
            console.log('Change width')
            setCurrentWith(document.getElementsByClassName("bp3-table-container")[0].clientWidth)
            setColsW(calcWidths)
        }
    }

    const containerSize = () => {
        let size = document.getElementsByClassName("bp3-table-container")[0].clientWidth
        console.log("size", size)
    }

    const handleCellActionsRender = (row, action) => {
        console.log("row %s action %s", row, action)
    }

    const cellActionsRender = (rowIndex, columnIndex) => {
        const editAction = () => handleCellActionsRender(rowIndex, 'EDIT')
        const deleteAction = () => handleCellActionsRender(rowIndex, 'DELETE')
        return (
            <Cell className={'play-actions-cell'}>
                <Button icon="edit" small={true} className={'bp3-minimal play-button-grid'} onClick={editAction}></Button>
                <Button icon="trash" small={true} className={'bp3-minimal play-button-grid'} onClick={deleteAction}></Button>
            </Cell>
        )
    }
    return (
        <>
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>
                        <span className="flaticon-wallet play-big"></span>
                        This is the title of the table
                    </NavbarHeading>
                    <NavbarDivider />
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT}>
                    <InputGroup leftIcon="filter" placeholder="Introduzca texto a buscar..." onChange={filtraDatos} />
                    <Button className={Classes.MINIMAL} icon="add" text="Nuevo" />
                </NavbarGroup>
            </Navbar>
            <Table numRows={tableData.length}
                // enableColumnReordering={true}
                // onColumnsReordered={columnsReordered}
                columnWidths={colsW}
                enableFocusedCell={true}
                onCompleteRender={() => changeWidths()}
            >
                {
                    columns.map((c) => {
                        return <Column key={c.name} columnHeaderCellRenderer={columnRender} cellRenderer={cellRenderer} />
                    })
                }
                <Column key="actions" name="ACCIONES" cellRenderer={cellActionsRender} />
            </Table>
            <button onClick={changeValues}>Change values</button>
            <button onClick={changeOriginal}>Original values</button>
            <button onClick={useHistory}>TO MENU</button>
            <button onClick={changeWidths}>Change Widths</button>
            <button onClick={containerSize}>Container size</button>

        </>
    )
}

export { PlayTable as default }