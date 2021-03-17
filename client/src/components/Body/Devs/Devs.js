import './Devs.css'

import Dev from '../../Common/Dev/Dev'
import SearchBox from '../../Common/SearchBox/SearchBox'

function Devs({
    devs
}) {
    return (
        <div className="devs-section">

            <h1 className="devs-section-title">Search Game Developers:</h1>
        
            <SearchBox />

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