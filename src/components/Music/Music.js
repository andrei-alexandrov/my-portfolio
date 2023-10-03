import React, { useState } from "react";
import lunarDreamsTrack from "../../tracks/lunarDreams.mp3"
import flowOfTime from "../../tracks/flowOfTime.m4a"
import AudioPlayer from 'react-h5-audio-player'

import "react-h5-audio-player/lib/styles.css"
import "./Music.scss"

const tracks = [
    {
        //title: "Lunar Dreams",
        url: lunarDreamsTrack,
    },
    {
        url: flowOfTime,
    }
];

export default function Music() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    const handleNextTrack = () => {
        const nextIndex = (currentTrackIndex + 1) % tracks.length;
        setCurrentTrackIndex(nextIndex);
    };

    const handlePreviousTrack = () => {
        const previousIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackIndex(previousIndex);
    };

    const currentTrack = tracks[currentTrackIndex];

    return (
        <div>
            <AudioPlayer
                src={currentTrack.url}
                autoPlay
                autoPlayAfterSrcChange={true}
                onClickNext={handleNextTrack}
                onClickPrevious={handlePreviousTrack}
                showSkipControls={true}
                showJumpControls={false}
                showFilledVolume={false}
                volume={0.7}
                loop={true}
            />
        </div>
    )
}