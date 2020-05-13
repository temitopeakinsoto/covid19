import React, { useState, useEffect } from 'react'
import { fetchCountryData } from '../../api'
import { FormControl, NativeSelect } from '@material-ui/core'
import  styles from './CountryPicker.module.css'


export default function CountryPicker(props) {
    const { handleCountryChange } = props
    const [ countries, setCountries ] = useState([])

    useEffect(() => {
        const fetchCountriesApi = async () => {
            const fetchCountries = await fetchCountryData();
            setCountries(fetchCountries)
        }

        fetchCountriesApi();
    }, [setCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, index) => (<option value={country} key={index}>{country}</option>))}
            </NativeSelect>
        </FormControl>
    )
}
