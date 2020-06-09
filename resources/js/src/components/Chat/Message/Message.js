import React from 'react';

export default ({ created_at, right, content }) => {
    return <div className="pb-3">
        <div className={"shadow-sm w-70 p-3 rounded text-dark " + (right && "ml-auto bg-darkblue text-light")}>
            {content}
        </div>
        <div className={"text-300 text-small text-border " + (right && "text-right")}>
            {created_at}
        </div>
    </div>;
};