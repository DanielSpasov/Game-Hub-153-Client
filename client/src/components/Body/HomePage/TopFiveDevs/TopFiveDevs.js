import Dev from '../../../Common/Dev/Dev'


function TopFiveDevs({
    devs,
}) {
    return (
        <div>

            <h2>Our top 5 most followed game developers</h2>

            <div>
                {devs?.map(x =>
                    <Dev key={x._id} orgName={x.orgName} imageUrl={x.imageUrl} />
                )}
            </div>
        </div>
    )
}

export default TopFiveDevs