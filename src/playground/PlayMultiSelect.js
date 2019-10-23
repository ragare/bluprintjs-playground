import React, { useState, useEffect } from 'react'
import { Button, MenuItem, Intent } from "@blueprintjs/core"
import { Select, MultiSelect } from "@blueprintjs/select";

const PlayMultiSelect = (props) => {
    const [options, setOptions] = useState( [
        { id: 1, year: 2018, season: 'season-1-2018' },
        { id: 2, year: 2019, season: 'season-2-2019' }
    ])
    
    const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];

    const getTagProps = (_value, index) => ({
        intent: Intent.NONE,
        minimal: false,
    });

    const [selectedOptions, setSelectedOptions] = useState([])
    let provSelectedOptions = []

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
    const myTagRender = (item) => {
        return item.season
    }
    const myfilter = (str, item) => {
        // return v2.toUpperCase().includes(val.toUpperCase())
        // console.log("(1) %s (2) %s (3) %s", val, v2.season, v3)
        return item.season.toUpperCase().includes(str.toUpperCase())
        //return true
    }
    const handleClick = (item) => {
        // setSelectedOptions(provSelectedOptions)
        console.log("selected", selectedOptions);
        setSelectedOptions([
            ...selectedOptions,
            {
                ...item
            }
        ])
        console.log("selected2", selectedOptions);
    }

    const removeOption = (value, index) => {
        console.log("REMOVE %s %s", value, index)
        let v = selectedOptions.filter(item => {
            return value !== item.season
        })
        console.log("VECTOR", v)
        setSelectedOptions(v)
    }

    return (
        <>
            <MultiSelect
                items={options}
                itemRenderer={myrender}
                itemPredicate={myfilter}
                onItemSelect={handleClick}
                selectedItems={selectedOptions}
                tagRenderer={myTagRender}
                tagInputProps={{tagProps: getTagProps, onRemove: removeOption}}
                filterable={true}
                noResults={<MenuItem disabled={true} text="No results." />}
            >
            </MultiSelect>
        </>
    )
}


export { PlayMultiSelect as default }