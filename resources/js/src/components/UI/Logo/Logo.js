import React from 'react';

import './Logo.css';

import Image from '../../../assets/images/Group 1@2x.png';
import Dark from '../../../assets/images/Group 1@2x.png';

export default ({ big, dark }) => (
    <div className="Logo mb-0 text-white" >
        {dark ?
            <img src={Dark} style={big ? { height: 46 } : { height: 46 }} />
            :
            <img src={Image} style={big ? { height: 46 } : { height: 46 }} />
        }
    </div>
);