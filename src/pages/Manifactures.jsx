import React from 'react'
import Footer from '../components/home/Footer'
import Map from '../components/home/Map'
import Brend from '../components/home/Brend'
import Information from '../components/home/Information'
import Pagination from '../components/Manifacture/Pagination'

const Manifactures = () => {
  return (
    <div>
      <Pagination/>
      <Brend/>
      <Information/>
      <Map />
    </div>
  );
}

export default Manifactures