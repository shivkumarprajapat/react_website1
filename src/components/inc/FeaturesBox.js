import React from 'react'

function FeaturesBox(props) {
    return (
        <>
            <div className="icon">{props.feature_icon}</div>
            <h3>{props.feature_ttl}</h3>
            <p>{props.feature_desc}</p>
            <>
                <h3>{props.number}</h3>
                <span>{props.number_desc}</span>
            </>
        </>
    )
}

export default FeaturesBox
