import React from 'react'
import AgreementType from '../components/filters/AgreementType'
import City from '../components/filters/City'
import Locality from '../components/filters/Locality'
import SearchButton from '../components/filters/SearchButton'
import FinalAllHouses from '../components/filters/FinalAllHouses'
import Navbar from '../components/navbar/Navbar';

import './Search.css'
const Search = () => {
    return (
        <div>

        <center className='searchpage'>
            
            <div className='filters'>
<u>Filters</u>
<hr className="dropdown-divider"></hr>
<AgreementType/>
<hr class="dropdown-divider"></hr>
<City />
<hr class="dropdown-divider"></hr>
<Locality />
<hr class="dropdown-divider"></hr>
<SearchButton />
            </div>

            <div className='result'>

<FinalAllHouses />
            </div>
        </center>
        </div>
    )
}
export default Search;