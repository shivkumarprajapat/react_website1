import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";

const VideoPop = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UxPkK8gW0hs" onClose={() => setOpen(false)} />

            {/* <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button> */}

            {/* <button class="btn-1 video-play-btn"> <FaPlay /></button> */}
            <button class="btn-1 video-play-btn" onClick={() => setOpen(true)}> <FaPlay /></button>
        </>
    )
}

export default VideoPop
