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
                <DiePoint key={index} />
            ))}
        </div>
    );
};

/** a point on a die, with a slight dimple effect */

const DiePoint: React.FunctionComponent = () => (
    <div className="die-point-wrapper">
        <div className="die-point" />
    </div>
);
