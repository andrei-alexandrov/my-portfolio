import React, { useState } from "react";
import lunarDreamsTrack from "../../tracks/lunarDreams.mp3"
import impendentTrack from "../../tracks/Impendent.mp3"
import AudioPlayer from 'react-h5-audio-player'

import "react-h5-audio-player/lib/styles.css"
import "./Music.scss"

const tracks = [
    {
        //title: "Lunar Dreams",
        url: lunarDreamsTrack,
    },
    {
        url: impendentTrack,
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
                autoPlay={true}
                autoPlayAfterSrcChange={true}
                src={currentTrack.url}
                onClickNext={handleNextTrack}
                onClickPrevious={handlePreviousTrack}
                showSkipControls={true}
                showJumpControls={false}
                showFilledVolume={false}
                volume={0.8}
            />
        </div>
    )
}