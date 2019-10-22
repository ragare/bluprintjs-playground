import React from 'react'
import { Button, MenuItem } from "@blueprintjs/core"
import { Select, MultiSelect } from "@blueprintjs/select";

const PlayMultiSelect = (props) => {
    const myops = ['op1', 'op2', 'op3']
    const semesters = [
        { id: 1, year: 2018, season: 'season-1-2018' },
        { id: 2, year: 2019, season: 'season-2-2019' }
    ]
    const sem2 = [{}]
    const myrender = (item, {handleClick}) => {
        console.log("Rendering item")
        return (
            <MenuItem
                key={item.id}
                label={item.year}
                text={item.season}
                onClick={handleClick}
            />
        )
    }
    const myTagRender = (item) => {
        console.log("tag", item)
    }
    const myfilter = (str, item) => {
        // return v2.toUpperCase().includes(val.toUpperCase())
        // console.log("(1) %s (2) %s (3) %s", val, v2.season, v3)
        return item.season.toUpperCase().includes(str.toUpperCase())
        //return true
    }
    const handleClick = (item) => {
        console.log(item)
        sem2.push(item)
    }

    return (
        <>
            <MultiSelect
                items={semesters}
                itemRenderer={myrender}
                itemPredicate={myfilter}
                onItemSelect={handleClick}
                selectedItems={sem2}
                tagRenderer={myTagRender}
                filterable={true}
                noResults={<MenuItem disabled={true} text="No results." />}
            >
            </MultiSelect>
        </>
    )
}


export { PlayMultiSelect as default }