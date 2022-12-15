import React from 'react'
import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'

const FloatingPop = () => {
  return (
    <div className="floatingPop">
      <Popover>
        <Popover.Button className="popoverButton hover:shadow-orange">
          <MenuIcon className="menuIcon" />
        </Popover.Button>

        <Popover.Panel>
          <div className="popoverPanel bg-orange tracking-wider text-slate">
            <a className="hover" href="#home">
              Home
            </a>
            <a className="hover" href="#about">
              About
            </a>
            <a className="hover" href="#education">
              Resume
            </a>
            <a className="hover" href="#experiance">
              Works
            </a>
            <a className="hover" href="#skills">
              Skills
            </a>
            <a className="hover" href="#projects">
              Projects
            </a>
            <a className="hover" href="#contact">
              Contact
            </a>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  )
}

export default FloatingPop