import React from 'react';
import { Progress } from 'semantic-ui-react';

const ProgressBar = ({ uploadState, percentUploaded }) => (
    uploadState  && (
        <Progress
        className="progress__bar"
        percent={percentUploaded}
        progress
        indicating
        color="green"
        size="small"
        inverted


        />
    )

);

export default ProgressBar;