import React, {useState} from 'react'
import { Button, MenuItem } from "@blueprintjs/core"
import { Select, Suggest } from "@blueprintjs/select";

const PlaySuggest = (props) => {
    const myops = ['op1', 'op2', 'op3']
    const [val, setVal] = useState('          ')
    const semesters = [
        { id: 1, year: 2018, season: 'Morgen time' },
        { id: 2, year: 2019, season: 'Easy pice' },
        { id: 2, year: 2019, season: 'Learn things' },
        { id: 2, year: 2019, season: 'Cool Love' },
        { id: 2, year: 2019, season: 'The beast and the beauty' },
        { id: 2, year: 2019, season: 'Three hours to heaven' },
        { id: 2, year: 2019, season: 'Dam Daemina' },
        { id: 2, year: 2019, season: 'The guitar' },
        { id: 2, year: 2019, season: 'In fall all fall' },
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

    const showItem = (item) => {
        console.log("ShowItem", item)
        return item.season
    }   

    return (
        <>
            <Suggest
                items={semesters}
                itemRenderer={myrender}
                itemPredicate={myfilter}
                onItemSelect={handleClick}
                inputValueRenderer={showItem}
                filterable={true}
                noResults={<MenuItem disabled={true} text="No results." />}
            >
            </Suggest>
        </>
    )
}


export { PlaySuggest as default }