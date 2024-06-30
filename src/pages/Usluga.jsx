import React from 'react'
import Footer from '../components/home/Footer'
import Map from '../components/home/Map'
import Sertification from '../components/catalog/Sertification'
import Fact from '../components/Compony/Fact'
import FactSec from '../components/Usluga/FactSec'
import UslugaMain from '../components/Usluga/UslugaMain'

const Usluga = () => {
  return (
    <div>
        <UslugaMain/>
        <FactSec/>
        <Sertification/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default Usluga