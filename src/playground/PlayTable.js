import React from 'react'
import { H5 } from '@blueprintjs/core'
import { Cell, Column, Table } from "@blueprintjs/table"

const PlayTable = () => {
    const cellRenderer = (rowIndex) => {
        return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    };
    return (
        <>
            <H5>This will be a table</H5>
            <Table numRows={10}>
                <Column name="Dollars" cellRenderer={cellRenderer} />
            </Table>
        </>
    )
}

export { PlayTable as default }