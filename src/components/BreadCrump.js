import React from 'react'
import ChevronRight from 'react-feather/dist/icons/chevron-right'
import _kebabCase from 'lodash/kebabCase'

/* eslint-disable */

export default class BreadCrump extends React.Component {

  
  handleClick = event => event.target.classList.toggle('active')

  render() {
    const location = 
    return (
      <div className={`BreadCrump ${className}`}>
        {!!items &&
          items.map((item, index) => (
            <div
              className={`BreadCrump--item `}
              key={`accordion-item-${_kebabCase(item.title) + '-' + index}`}
              onClick={this.handleClick}
            >
              <h2 className="flex">
                <span>{item.title}</span>
                <ChevronRight />
              </h2>
              <div className={'description'}>
                {item.description} <br />
                {item.link && (
                  <div href={item.link} className="button">
                    {item.linkTitle}
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    )
  }
}
