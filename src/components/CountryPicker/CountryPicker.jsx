import React, { useState, useEffect } from 'react'
import { fetchCountryData } from '../../api'

export default function CountryPicker() {
    const [ countries, setCountries ] = useState([])
    useEffect(() => {
        const fetchCountriesApi = async () => {
            const fetchCountries = await fetchCountryData();
            setCountries(fetchCountries)
        }

        fetchCountriesApi();
    })

    return (
        <form>
            <select>
                {countries.map(country => (<option key={country}>{country}</option>))}
            </select>
        </form>
    )
}
