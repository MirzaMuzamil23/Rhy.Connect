import React from 'react'
import FeatureHeading from '../../Componets/FeatureComponent/FeatureHeading'
import FeatureCardGrid from '../../Componets/FeatureComponent/FeatureCardGrid'

const FeatureBusiness = () => {
  return (
    <div className=' relative'  >
      <FeatureHeading />
      <div className='px-10 pb-20 '>
         <FeatureCardGrid />
      </div>
     
    </div>
  )
}

export default FeatureBusiness