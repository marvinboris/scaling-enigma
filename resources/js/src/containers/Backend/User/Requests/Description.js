import React from 'react';
import { convertDate } from '../../../../shared/utility';

export default ({ request }) => {
    let comments;
    const colors = ['orange', 'myprimary', 'red', 'green'];
    const texts = ['Pending', 'Processing', 'Cancelled', 'Solved'];

    comments = request.status > 0 && <div className={'rounded p-4 mt-3 text-' + colors[request.status] + ' bg-' + colors[request.status] + '-25'}>
        <div>
            {texts[request.status]} by: <span className="text-700">{request.edited_by}</span> on {convertDate(request.created_at)}
        </div>
        {request.comments && <div className="mt-2" dangerouslySetInnerHTML={{ __html: request.comments }} />}
    </div>;

    return <div className="text-justify">
        {request.description}

        {comments}
    </div>;
};