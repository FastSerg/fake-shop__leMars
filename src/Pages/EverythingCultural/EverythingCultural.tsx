import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import CulturalContent from './CulturalContent'

type Props = {
    active: { [id: number]: boolean }
    changeState: (id: number) => void
}

const EverythingCultural = ({ active, changeState }: Props) => {
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
