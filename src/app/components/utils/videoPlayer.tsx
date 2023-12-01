"use client"
import Youtube from "react-youtube"
import { IoIosClose } from "react-icons/io";
import React, { useState, FC } from "react"

export default function VideoPlayer({videoId}: {videoId: string}) {
    const [showVideo, setShowVideo] = useState<boolean>(true)

    const handleVideo = () => {
        setShowVideo((prev) => !prev)
    }

    const Video: FC = () => {
        return (<div className="fixed bottom-3 right-10">
        <button className="text-red-500 rounded-full bg-black float-right" onClick={handleVideo}><IoIosClose size={30} /></button>
        <Youtube videoId={videoId} 
        onReady={(event) => event?.target.pauseVideo()}
         opts={{height: '260', width: '350'}} 
         className="rounded"  />
    </div>)
    }

    const ButtonVideo: FC = () => {
        return (
            <button className="fixed bottom-3 right-10 p-3 bg-red-600 rounded-md hover:text-white" onClick={handleVideo}> show Trailer</button>
        )
    }
    return showVideo ? <Video/> : <ButtonVideo/>
}