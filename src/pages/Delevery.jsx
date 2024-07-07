import React from 'react'
import Footer from '../components/home/Footer'
import Information from '../components/home/Information'
import DelMap from '../components/delevery/DelMap'
import Kontak from '../components/delevery/Kontak'

const Delevery = () => {
  return (
    <div>

        <DelMap/>
        <Information/>
        <Kontak/>
    </div>
  )
}

export default Delevery