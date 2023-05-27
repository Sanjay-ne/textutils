import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height : '60px'}}>
   {props.msg && <div class={`alert alert-${props.msg.type}`} role="alert">
  {props.msg.msg}
</div>}
</div>
  )
}
