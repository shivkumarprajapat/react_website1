import React from 'react'

function WorkBox(props) {
    return (
        <div class="how-it-works-item line-right">
            <div class="step">{props.counter}</div>
            <h3>{props.ttl}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default WorkBox
