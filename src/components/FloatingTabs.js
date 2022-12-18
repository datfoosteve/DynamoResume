import React from 'react'
import { Tab } from '@headlessui/react'

const FloatingTabs = () => {
  return (
    <div className="floatingTabs">
      <Tab.Group>
        <Tab.List className="tabList">
          <Tab className={({ selected }) => (selected ? 'text-blue' : '')}>
            <a className="tab" href="#home">
              Home
            </a>
          </Tab>
          <Tab className={({ selected }) => (selected ? 'text-blue' : '')}>
            <a className="tab" href="#about">
              About
            </a>
          </Tab>
          <Tab className={({ selected }) => (selected ? 'text-blue' : '')}>
            <a className="tab" href="#education">
              Education
            </a>
          </Tab><Tab className={({ selected }) => (selected ? 'text-blue' : '')}>
            <a className="tab" href="#experience">
              Experience
            </a>
          </Tab>
          <Tab className={({ selected }) => (selected ? 'text-blue' : '')}>
            <a className="tab" href="#skills">
              Skills
            </a>
          </Tab>
          <Tab className={({ selected }) => (selected ? 'text-blue' : '')}>
            <a className="tab" href="#projects">
              Projects
            </a>
          </Tab>
          <Tab className={({ selected }) => (selected ? 'text-blue' : '')}>
            <a className="tab" href="#contact">
              Contact
            </a>
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default FloatingTabs