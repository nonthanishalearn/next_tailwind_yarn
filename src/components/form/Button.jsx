'use client';
import React from 'react'
import Image from 'next/image'
const RabbitButton = ({ label, color, variant, disabled, icon, size, onClick }) => {
  const _label = label ?? 'Submit'
  const _disabled = disabled
  const _size = size ?? 'SMALL'
  // SMALL = 'SMALL',
  // MEDIUM = 'MEDIUM',
  // LARGE = 'LARGE',
  // FULLSCREEN = 'FULLSCREEN',
  const _icon = icon ?? ''
  const _color = color ?? 'primary'
  // PRIMARY = 'primary', orange
  // WARNING = 'warning', yellow
  // DANGER = 'danger', red
  // INFO = 'info', 
  const _varaint = variant ?? 'CONTAINED'
  // LABEL = 'LABEL',
  // TEXT = 'TEXT',
  // OUTLINED = 'OUTLINED',
  // OUTLINEDWHITE = 'OUTLINEDWHITE',
  // CONTAINED = 'CONTAINED',
  // CONTAINEDWHITE = 'CONTAINEDWHITE',
  const classButton = () => {
    console.log(color)
    return [
      ' md:whitespace-nowrap m-2 '
      , ' inline-flex gap-2 items-center '
      , ' rounded-3xl '
      , _icon ? ' flex-row ' : ''
      , _size == 'SMALL' ? ' py-1 px-2 text-sm ' : ''
      , _size == 'MEDIUM' ? ' py-2 px-4 text-base ' : ''
      , _size == 'SMALL' && _icon && !label ? ' !p-[6px] ' : ''
      , _size == 'MEDIUM' && _icon && !label ? ' !p-[12px] ' : ''
      , _size == 'LARGE' && _icon && !label ? ' !p-[20px] ' : ''
      , _size == 'LARGE' ? ' py-4 px-6 text-base ' : ''
      , _disabled && _varaint == 'TEXT' ? ' text-rabbit-gray-light bg-rabbit-gray-so-light disabled:text-rabbit-gray-light ' : ''
      , _disabled && _varaint == 'LABEL' ? ' text-rabbit-gray-light bg-rabbit-gray-so-light disabled:text-rabbit-gray-light  ' : ''
      , !_disabled && _varaint == 'TEXT'
        ? ` text-${_color} hover:underline focus:bg-${_color} focus:drop-shadow-lg focus:bg-opacity-30 `
        : ''
      , !_disabled && _varaint == 'LABEL'
        ? ` text-${_color}  hover:bg-${_color} cursor-default focus:bg-${_color} hover:text-white focus:drop-shadow-lg focus:bg-opacity-30 `
        : ''
      , _disabled && _varaint == 'OUTLINED' ? ' text-rabbit-gray-light bg-rabbit-gray-so-light disabled:text-rabbit-gray-light disabled:border-rabbit-gray-light disabled:border disabled:bg-rabbit-gray-light ' : ''
      , !_disabled && _varaint == 'OUTLINED'
        ? ` border border-${_color} bg-white text-${_color} hover:border-white hover:bg-${_color} hover:text-white hover:shadow-lg `
        : ''
      , _disabled && _varaint == 'OUTLINEDWHITE' ? ' text-rabbit-gray-light bg-rabbit-gray-so-light disabled:text-rabbit-gray-light disabled:border-rabbit-gray-light disabled:border ' : ''
      , !_disabled && _varaint == 'OUTLINEDWHITE'
        ? ` border border-white text-white hover:border-white hover:bg-${_color} hover:text-white hover:shadow-lg `
        : ''
      , _disabled && _varaint == 'CONTAINED' ? ' text-rabbit-gray-light bg-rabbit-gray-so-light disabled:text-rabbit-gray-light disabled:border-rabbit-gray-light disabled:border disabled:bg-rabbit-gray-light ' : ''
      , !_disabled && _varaint == 'CONTAINED'
        ? ` border border-${_color} bg-${_color} text-white  hover:shadow-lg `
        : ''
      , _disabled && _varaint == 'CONTAINEDWHITE' ? ' text-rabbit-gray-light bg-rabbit-gray-so-light disabled:text-rabbit-gray-light disabled:border-rabbit-gray-light disabled:border ' : ''
      , !_disabled && _varaint == 'CONTAINEDWHITE'
        ? ` border border-${_color} bg-white text-${_color} hover:bg-${_color} hover:shadow-lg hover:text-white `
        : '']
  }
  const iconComputed = () => {
    return `/svg/${_icon}.svg`
  }
  return (
    <>
    {/* <pre>{classButton()}</pre> */}
      <button 
        type="button"
        className={classButton()}
        onClick={onClick}
        value={_label}
        >
          {
            _icon ?
            <>
          <Image
          className='fill-white'
          src={iconComputed()}
          alt={_icon}
          width={24} height={24}
          >
          </Image></> : <></>
            
          }
          {_label}
      </button>
      {/* <button className='inline-flex items-center gap-2 px-2 py-1 m-2 text-sm text-white border md:whitespace-nowrap rounded-3xl border-primary bg-primary hover:shadow-lg '> {label}</button> */}
    </>
  )
}

export default RabbitButton
