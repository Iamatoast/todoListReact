import React from 'react'
import ElementControl from './elementControl'

export default function insert() {
  return (
    <>
        <ElementControl />
        <button id="delete" type="button" class="btn btn-danger btn-lg" onclick="">Delete</button>
        <button id="tareaRapida" type="button" class="btn btn-primary btn-lg" onclick="">Show Fastest</button>
    </>
  )
}