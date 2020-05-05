import React from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ children, title, icon, iconColor, border, className }) => <Col sm={6} lg={3} className={'text-center text-secondary py-3 px-4 m-0 ' + className}>
    <div className={"text-" + iconColor}>
        <FontAwesomeIcon icon={icon} size="5x" />
    </div>

    <h4 className="text-700 mb-3 mt-5">{title}</h4>

    <div className="text-300 text-small">
        {children}
    </div>
</Col>;