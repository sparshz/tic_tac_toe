import { View, Text ,   ImageSourcePropType,Image} from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import cir from './assest/circle.png'
import cros from './assest/cross.png'
import pen from './assest/pencil.png'

type shapeProp = PropsWithChildren<{
    name:string
    imageUrl: ImageSourcePropType
  }>

const Icons = ({ name }:shapeProp) => {
    switch (name) {
        case 'circle':
            return <Image source={require(cir)}/>
            
            break;
        case 'cross':
            return <Image source={require(cros)}/>
            break;

        default:
            return <Image source={require(pen)}/>
    }
}

export default Icons