import InfoBox from '../../InfoBox'



const VideoBox = ({ videoUrl }) => {
    return (
        videoUrl ?
            <InfoBox title="Gameplay Video">
                <div className="video-player">
                    <iframe width="560" height="315" src={videoUrl.replace('watch?v=', 'embed/')} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                </div>
            </InfoBox> : null
    )
}

export default VideoBox