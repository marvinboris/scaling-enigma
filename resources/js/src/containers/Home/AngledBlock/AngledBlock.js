import React from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './AngledBlock.css';

const angledBlock = ({ children, animation = "fade-up", iconColor, stackColor, color, bgColor, className, inverse, title, number }) => (
    <Col md={6} data-aos={animation} className={"AngledBlock d-flex justify-content-center align-items-center p-4 embed-responsive embed-responsive-1by1 position-relative " + className} style={{ overflow: 'visible' }}>
        <div className={"embed-responsive w-100 embed-responsive-1by1 position-absolute rounded-lg shadow-lg bg-" + bgColor} style={{ top: 0, overflow: 'visible', transformOrigin: "center", transform: "scale(.7)" }}>
            <div className={"hover embed-responsive w-100 embed-responsive-1by1 position-absolute d-flex justify-content-center align-items-center " + (inverse ? 'inverse' : '') + " rounded-lg shadow-lg bg-" + bgColor}>
                <div className={"position-absolute " + (inverse ? 'inverse' : '') + " px-5 w-100"}>
                    <div className={"mb-4 text-" + iconColor}>
                        <div className={"embed-responsive embed-responsive-1by1 rounded-circle border border-8 mr-2 border-" + iconColor + " bg-" + stackColor + " d-flex justify-content-center align-items-center"} style={{ width: 90 }}>
                            <FontAwesomeIcon icon="desktop" size="lg" />
                        </div>
                    </div>
                    <span className="position-absolute text-black-20 display-3 text-700 pr-5" style={{ top: 0, right: 0 }}>
                        {number}
                    </span>
                    <div className={"text-" + color}>
                        <h2 className="text-700">
                            {title}
                        </h2>
                        <div className="text-300 text-large">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Col>
);

export default angledBlock;
