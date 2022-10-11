import CommentsForm from 'Pages/CommentsForm/CommentsForm'
import React from 'react'

import './Creativity.scss'
type Props = {
    category: string
    titleCategory: string
    imageCategory: string
    imageContent: string
    classImg?: string
}

const Creativity = ({
    category,
    titleCategory,
    imageCategory,
    imageContent,
    classImg,
}: Props) => {
    return (
        <div className="container-pages">
            <div
                className="creativity-bg"
                style={{
                    backgroundImage: `URL(${imageCategory})`,
                }}
            >
                <div className="creativity-overlay"></div>
                <div className="category-info">
                    <div className="category-style">{category}</div>
                    <div className="category-title">{titleCategory}</div>
                </div>
            </div>
            <div className="container">
                <div className="container-content">
                    <h4 className="content-title">
                        Aenean hendrerit semin magna cursus lacinia. Vestibul
                        aliquam tempus fringilla. Nam id viverra quam, at
                        maximus ante. Nullam vel odio urna. Fusce lobortis
                        sapien nibh ultrices eget.
                    </h4>
                    <p>
                        Donec sed lacus eu massa commodo interdum non id mauris.
                        Etiam dignissim elit. Nulla cursus neque adictum quam
                        tristique ac. Pellentesque habitant morbi tristique
                        senectus netus lalesuada fames turpis egestas. Donec
                        ornare enim felis, non faucibus eros mattis vel.
                        Suspendisse sollicitudin, nisinon interdum pharetra,
                        libero lectus sollicitudin est, quis imperdiet nibh
                        nulla non metus. Fusce accumsan bibendum.
                    </p>
                    <ul className="creativity-list">
                        <li>
                            Nam eleifend lobortis nisi, sed sodales erat
                            malesuada egestas maximus tempus.
                        </li>
                        <li>
                            Vivamus et velit acnisi dictum auctor sit amet eu
                            nunc. Nunc tempus arculla efficitur.
                        </li>
                        <li>
                            Proin et nsectetur urna vitae vulputate tellus. Duis
                            volutpat esvitae aliquet dictum.
                        </li>
                        <li>
                            Praesent sed scelerisque ligula. Curabitur nec
                            ultricies ante. Nullam vel cursus velit.
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam imperdiet, orci lutpat tempor, nisl massa
                        ullamcorper tortor, vitae vestibulum neque lacsem. Donec
                        nisl purus, euismod vitae risus non, accumsan mollis
                        urna. In consectetur tincidunt elit. Pellentesque
                        ullamcorper risus ac mauris porttitor feugiat.
                    </p>
                    <p>
                        Vestibulum varius purus non laoreet euismod. Phasellus
                        tempor metus ullamcorper urna imperdiet effici tur. Nam
                        faucibus Praesent suscipit lectus id augue auctor
                        consectetur. Aliquam ultricies venenatis.
                    </p>
                    <div className={`content-image ${classImg}`}>
                        <img src={imageContent} alt="img" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam imperdiet, orci sed volutpat tempor, nisl massa
                        ullamcorper tortor, vitae vestibulum neque lacus a sem.
                        Donec nisl purus, euismod vitae risus non accumsan
                        mollis urna. In conse ctetur tincidunt elit. Pellen
                        tesque ullamcorper risus ac mauris porttitor feugiat.
                        Orci varius natoque penatibus idiculus mus. Vestibulum
                        varius purus laoreet euismod. Phasellus tempor metus
                        ullamcorper urna imperdiet efficitur. Nam faucibus
                        Praesent suscipit lectus venenatis.
                    </p>
                    <p>
                        Nulla nibh eros, malesuada non scelerisque et, laoreet
                        non sapien. Donec mollis tempus tortoritae rhon cus
                        metus estas ullamcorper. Maecenas eros tellus, volutpat
                        sed ante in, ullamcorper venenatis tortor. Suspendisse
                        tincidunt dapibus arcu et vulputate. Praesent tempus
                        pulvinar cursus. Praesent erat esuada varius dui ut,
                        ultricies laoreet dui. Sed gravida pulvinar urna, vel
                        tincidunt ante. Praesen interdum eros.
                    </p>
                    <p>
                        Nullam et congue nisi. Aliquam aliquam lorem urna, a
                        gravida enim varius in. Quisque non leo iaculis orci
                        nlaoreet libero. Donec non urna eu arcu convallis
                        hendrerit non vel neque. Vestibulum mollis venenatis.
                    </p>

                    <CommentsForm />
                </div>
            </div>
        </div>
    )
}

export default Creativity
