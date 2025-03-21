import React from 'react'

import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../Infocard/InfoCard'
import FollowersCard from '../FollowersCard/FollowersCard'

const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch />
        <InfoCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft