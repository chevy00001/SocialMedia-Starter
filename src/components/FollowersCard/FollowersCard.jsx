import React from 'react'
import { Followers } from '../../Data/FollowersData'
import './FollowersCard.css'

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h3>Who is following you</h3>

        {Followers.map((follower,id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img}className="followerImg" alt="" />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>{follower.username}</span>
                        </div>
                    </div>
                    <button>Follow</button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard