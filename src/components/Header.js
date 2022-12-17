import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const Header = ({ data }) => {
  if (data) {
    var name = data.name
    var occupation = data.occupation
    var description = data.description
    var city = data.address.city
    var state = data.address.state
    var networks = data.social.map(function (network) {
      var pic = '/images/networks/' + network.pic
      return (
        <div key={network.network} className="">
          <a href={network.link} network={network.network}>
            <img
              alt={network.network}
              src={pic}
              className="socialIcon hover:text-orange"
            />
          </a>
        </div>
      )
    })
  }

  return (
    <header id="home" className="header">
      <div className="description"> {description}</div>
      <h3 className="city text-orange">
        Based in {city}, {state}.
        <span className="occupation"> {occupation}</span>.
      </h3>
      <div className="socialGroup">{networks}</div>

      <button className="pagedownButton hover:shadow-orange">
        <a href="#about">
          <ChevronDownIcon className="chevronDownIcon" />
        </a>
      </button>
    </header>
  )
}

export default Header