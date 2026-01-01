import React from 'react'
import vfdAccessories,{ VfdAccessoryType }  from '../vfdAccessories'



type Props = {
    params: {
        vfdAccessoryId: string
    }
}
const VfdAccessory = ({ params }: Props) => {
  const vfdAccessory: VfdAccessoryType | any = vfdAccessories.find((ele) => ele.id === params.vfdAccessoryId)

  return (
    <div>{vfdAccessory.name}</div>
  )
}

export default VfdAccessory