import React from 'react'
import PartnershipCardGrid from '../../Componets/PartnershipComponent/PartnershipCardGrid'
import PartnershipHeading from '../../Componets/PartnershipComponent/PartnershipHeading'
import PartnershipWorks from '../../Componets/PartnershipComponent/PartnershipWorks'
import PartnershipStep from '../../Componets/PartnershipComponent/PartnershipStep'

const Partnership = () => {
    return (
        <div>
            <PartnershipHeading />
            <PartnershipCardGrid />
            <PartnershipStep />
            <PartnershipWorks />

        </div>
    )
}

export default Partnership