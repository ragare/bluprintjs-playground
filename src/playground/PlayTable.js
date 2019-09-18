import React, { useState } from 'react'
import { H5, Menu, MenuItem } from '@blueprintjs/core'
import { Cell, Column, Table, ColumnHeaderCell } from "@blueprintjs/table"

const PlayTable = () => {
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
        { name: 'ID', field: 'id', type: 'string' },
        { name: 'NAME', field: 'name', type: 'string' },
        { name: 'BIRTH', field: 'birth', type: 'date' },
        { name: 'AGE', field: 'age', type: 'int' },
        { name: 'SAVINGS', field: 'savings', type: 'amount' },
    ]


    const cellRenderer = (rowIndex, columnIndex) => {
        //console.log('[1] ROW %s COLUMN %s', rowIndex, columnIndex)
        return <Cell>{tableData[rowIndex][columns[columnIndex]['field']]}</Cell>
    };
    const columnRender = (columnIndex) => {
        //console.log('[TEST] COLUMN %s', columnIndex)
        return <ColumnHeaderCell name={columns[columnIndex]['name']} menuRenderer={MenuRenderer} />
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
            }
        ]
        setTableData(newValues)
    }
    const changeOriginal = () => {
        setTableData(originalValues)
    }
    return (
        <>
            <H5>This will be a table</H5>
            <div style={{ height: "500px" }}>
                <Table numRows={tableData.length}
                    enableColumnReordering={true}
                    onColumnsReordered={columnsReordered}
                    enableFocusedCell={true}
                >
                    {
                        columns.map((c) => {
                            return <Column columnHeaderCellRenderer={columnRender} cellRenderer={cellRenderer} />
                        })
                    }
                    {/* <Column name="Dollars" cellRenderer={cellRenderer} columnHeaderCellRenderer={columnRender} />
                    <Column name="Names" cellRenderer={cellRenderer2} /> */}
                </Table>
            </div>
            <button onClick={changeValues}>Change values</button>
            <button onClick={changeOriginal}>Original values</button>
        </>
    )
}

export { PlayTable as default }