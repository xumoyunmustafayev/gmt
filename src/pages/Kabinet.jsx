import React from 'react'
import KabinetMain from '../components/Kabinet/KabinetMain'
import Footer from '../components/home/Footer'
import Map from '../components/home/Map'
import Information from '../components/home/Information'

const Kabinet = () => {
  return (
    <div>
        <KabinetMain/>
        <Information/>
        <Map/>
    </div>
  )
}

export default Kabinet