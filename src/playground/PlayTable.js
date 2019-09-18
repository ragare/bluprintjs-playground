import React from 'react'
import { H5, Menu, MenuItem } from '@blueprintjs/core'
import { Cell, Column, Table, ColumnHeaderCell } from "@blueprintjs/table"

const PlayTable = () => {
    const cellRenderer = (rowIndex, columnIndex) => {
        //console.log('[1] ROW %s COLUMN %s', rowIndex, columnIndex)
        return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    };
    const cellRenderer2 = (rowIndex, columnIndex) => {
        //console.log('[2] ROW %s COLUMN %s', rowIndex, columnIndex)
        return <Cell tooltip={`Yo soy ${rowIndex}`}>{`NAME ${rowIndex}`}</Cell>
    };
    const TestRender = () => {
        console.log("test render")
        return <ColumnHeaderCell name={'Yo que se'} menuRenderer={MenuRenderer} />
    }
    const MenuRenderer = () => {
        return (
            <Menu>
                <MenuItem text="Child one" />
                <MenuItem text="Child two" />
                <MenuItem text="Child three" />
            </Menu>
        )
    }
    return (
        <>
            <H5>This will be a table</H5>
            <div style={{ height: "500px" }}>
                <Table numRows={10}>
                    <Column name="Dollars" cellRenderer={cellRenderer} columnHeaderCellRenderer={TestRender} />
                    <Column name="Names" cellRenderer={cellRenderer2} />
                </Table>
            </div>
        </>
    )
}

export { PlayTable as default }