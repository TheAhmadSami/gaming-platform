import React from 'react';

import './SousTitle.scss';

function SousTitle(props) {
    return (
        <div id="_soustitle">
            <i class={props.icon}></i>
            {props.sousTitle}
        </div>
    )
}

export default SousTitle;