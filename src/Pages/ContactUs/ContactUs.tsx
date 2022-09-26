import React from 'react'
import GridContainerBottom from 'container/Main/GridContainerBottom/GridContainerBottom'
import ContactContent from './ContactContent'

type Props = {}

const ContactUs = () => {
    return (
        <>
            <div className="container-pages">
                <div className="container">
                    <ContactContent />
                    <div className="container bottom">
                        <GridContainerBottom />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
