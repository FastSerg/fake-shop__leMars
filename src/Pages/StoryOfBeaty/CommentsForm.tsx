import React from 'react'
import Form from './Form'
import './StoryOfBeauty.scss'

type Props = {}

const CommentsForm = (props: Props) => {
    return (
        <>
            <div className="comments">
                <div className="coments-container">
                    <div className="coments-profileImg">
                        <img
                            src="/img/commentsProfile.jpg"
                            width={140}
                            height={140}
                        />
                    </div>

                    <div className="comments-content">
                        <div className="coments-author">
                            <div>Mercer Owen</div>
                        </div>
                        <div className="coments-text">
                            <p>
                                Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quisma bibendum
                                auctor nisi elit consequat ipsum, nec sagittis
                                sem amet nibh vulputate cursus itaet mauris.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Form />
        </>
    )
}

export default CommentsForm
