import Dev from '../../../Common/Dev/Dev'


function TopFiveDevs({
    devs,
}) {
    return (
        <div className="top-five-devs">

            <h2>Our top 5 most loved game developers</h2>

            <div className="devs-container">
                {devs.map(x =>
                    <Dev key={x._id} orgName={x.orgName} imageUrl={x.imageUrl} />
                )}
            </div>
        </div>
    )
}

export default TopFiveDevs