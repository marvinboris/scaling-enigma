import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { Col } from 'reactstrap';

import Stars from '../../../components/UI/Stars/Stars';
import BetweenButton from '../../../components/UI/Button/BetweenButton/BetweenButton';

const customerBlock = ({ children, animation = "fade-up", title, src, name, mark, link = '/', flag = 'cm', active }) =>
    <Col data-aos={animation} lg={4} className="mb-5 pb-5 mb-lg-0 pb-lg-0">
        <div className="rounded-4 shadow-sm bg-white px-3 px-lg-5 pb-4 text-left position-relative" style={{ paddingTop: 82 }}>
            <div className="position-absolute w-100" style={{ top: -82, left: 0 }}>
                <div className="border border-5 border-blue rounded-circle position-relative mx-auto embed-responsive embed-responsive-1by1 bg-white" style={{ width: 164 }}>
                    <div className="w-100 h-100 rounded-circle shadow-sm position-absolute" style={{ background: "url('" + src + "') no-repeat center", backgroundSize: 'cover', top: 0 }} />
                </div>
            </div>

            <div className="mb-3 d-flex w-80 mx-auto mt-3">
                <div className="border-right border-black-20 pr-3 mr-3 position-relative">
                    <span className="language-flag shadow-sm overflow-hidden d-inline-flex justify-content-center align-items-center p-0 border-0 position-relative">
                        <span className={"flag-icon position-absolute text-x-large flag-icon-" + flag}></span>
                    </span>

                    <FontAwesomeIcon icon={faCircle} className="text-orange position-absolute text-xx-small" style={{ top: '50%', right: 0, transform: 'translate(50%, -50%)' }} />
                </div>

                <div>
                    <h5 className="text-700">{name}</h5>
                    <Stars mark={mark} readOnly />
                </div>
            </div>

            <h5 className="text-600 position-relative pb-2 mb-2">
                {title}

                <div className="bg-blue position-absolute" style={{ width: 50, height: 5, bottom: 0, left: 0 }} />
            </h5>

            <div className="pb-4 mb-4 border-bottom border-black-20">{children}</div>
        </div>
    </Col>;

export default customerBlock;