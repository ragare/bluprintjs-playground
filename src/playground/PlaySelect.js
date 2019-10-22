import React from 'react'
import { Button, MenuItem } from "@blueprintjs/core"
import { Select } from "@blueprintjs/select";

const PlaySelect = (props) => {
    const myops = ['op1', 'op2', 'op3']
    const semesters = [
        { id: 1, year: 2018, season: 'season-1-2018' },
        { id: 2, year: 2019, season: 'season-2-2019' }
    ]
    const myrender = (item, {handleClick}) => {
        return (
            <MenuItem
                key={item.id}
                label={item.year}
                text={item.season}
                onClick={handleClick}
            />
        )
    }
    const myfilter = (val, v2, v3) => {
        // return v2.toUpperCase().includes(val.toUpperCase())
        console.log("(1) %s (2) %s (3) %s", val, v2.year, v3)
        return true
    }
    const handleClick = (item) => {
        console.log(item)
    }

    return (
        <>
            <Select
                items={semesters}
                itemRenderer={myrender}
                itemPredicate={myfilter}
                onItemSelect={handleClick}
                filterable={true}
                noResults={<MenuItem disabled={true} text="No results." />}
            >
                <Button text={myops[0]} rightIcon="double-caret-vertical" />
            </Select>
        </>
    )
}


export { PlaySelect as default }