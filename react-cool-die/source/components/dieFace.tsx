import * as React from 'react';

import { MathsUtils } from '../utils/maths';

interface IDieFaceProps {
    /** The number to display on this face - clamped between 1 and 6 */
    faceNumber: number;
}

/** The face of a die, rendered using dimples */

export const DieFace: React.FunctionComponent<IDieFaceProps> = ({ faceNumber }) => {
    const points = React.useMemo(() => new Array(MathsUtils.clamp(faceNumber, 1, 6)).fill(0), [faceNumber]);

    return (
        <div className="die-face" data-face-number={faceNumber}>
            {points.map((_, index) => (
                <DieFacePoint key={index} />
            ))}
        </div>
    );
};

const DieFacePoint: React.FunctionComponent = () => (
    <div className="point-wrapper">
        <div className="point" />
    </div>
);
