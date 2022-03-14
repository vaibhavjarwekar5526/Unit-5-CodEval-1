import React from 'react'
import {Carrots} from './Carrots';
import { Onions } from './Onions';
import { Potatoes } from './Potatoes';
import { Tomatoes } from './Tomatoes';

const Vegetables = () => {
  return (
    <>
        <Tomatoes />
        <br />
        <Potatoes />
        <br />
        <Carrots />
        <br />
        <Onions />
    </>
  )
}

export { Vegetables };