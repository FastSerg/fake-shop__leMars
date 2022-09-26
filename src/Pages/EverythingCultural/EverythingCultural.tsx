import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import CulturalContent from './CulturalContent'

type Props = {}

const EverythingCultural = () => {
    return (
        <>
            <div className="container-pages">
                <div className="container">
                    <CulturalContent />

                    <div className="container bottom">
                        <GridContainerBottom />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EverythingCultural
