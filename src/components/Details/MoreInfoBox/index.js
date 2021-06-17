import InfoBox from '../../InfoBox'



const MoreInfoBox = ({ moreInfo }) => {
    return (
        moreInfo ?
            <InfoBox title="More Information">
                <p>{moreInfo}</p>
            </InfoBox> : null
    )
}

export default MoreInfoBox