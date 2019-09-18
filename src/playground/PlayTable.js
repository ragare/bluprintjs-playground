import React, { useState } from 'react'
import { H5, Menu, MenuItem } from '@blueprintjs/core'
import { Cell, Column, Table, ColumnHeaderCell } from "@blueprintjs/table"

const PlayTable = () => {
    const [tableData, setTableData] = useState([
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
    ])

    const columns = [
        { name: 'ID', field: 'id'},
        { name: 'NAME', field: 'name'},
        { name: 'BIRTH', field: 'birth'},
        { name: 'AGE', field: 'age'},
        { name: 'SAVINGS', field: 'savings'},
    ]


    const cellRenderer = (rowIndex, columnIndex) => {
        //console.log('[1] ROW %s COLUMN %s', rowIndex, columnIndex)
        console.log('celldata', tableData[rowIndex])
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
    return (
        <>
            <H5>This will be a table</H5>
            <div style={{ height: "500px" }}>
                <Table numRows={tableData.length}
                    enableColumnReordering={true}
                    onColumnsReordered={columnsReordered}
                >
                    {
                        columns.map((c) => {
                            return <Column columnHeaderCellRenderer={columnRender} cellRenderer={cellRenderer}  />
                        })
                    }
                    {/* <Column name="Dollars" cellRenderer={cellRenderer} columnHeaderCellRenderer={columnRender} />
                    <Column name="Names" cellRenderer={cellRenderer2} /> */}
                </Table>
            </div>
        </>
    )
}

export { PlayTable as default }