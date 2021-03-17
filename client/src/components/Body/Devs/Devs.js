import './Devs.css'

import Dev from '../../Common/Dev/Dev'

function Devs({
    devs
}) {
    return (
        <div className="devs-section">

            <h1 className="devs-section-title">Search Game Developers:</h1>

            <div className="devs-container">
                {devs?.map(x =>
                    <Dev
                        key={x._id}
                        orgName={x.orgName}
                        imageUrl={x.imageUrl}
                    />
                )}
            </div>

        </div>
    )
}

export default Devs