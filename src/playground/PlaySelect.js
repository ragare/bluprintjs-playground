import React, {useState} from 'react'
import { Button, MenuItem } from "@blueprintjs/core"
import { Select } from "@blueprintjs/select";

const PlaySelect = (props) => {
    const myops = ['op1', 'op2', 'op3']
    const [val, setVal] = useState('          ')
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
    const myfilter = (str, item) => {
        // return v2.toUpperCase().includes(val.toUpperCase())
        // console.log("(1) %s (2) %s (3) %s", val, v2.season, v3)
        return item.season.toUpperCase().includes(str.toUpperCase())
        //return true
    }
    const handleClick = (item) => {
        console.log(item)
        setVal(item.season)
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
                <Button text={val} rightIcon="double-caret-vertical" />
            </Select>
        </>
    )
}


export { PlaySelect as default }