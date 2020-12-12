import * as React from 'react';

import { MathsUtils } from '../utils/maths';
import { StyleUtils } from '../utils/style';
import { DieFace } from './dieFace';

interface IDieProps {
    /** the current value to show on the die - clamped between 1 and 6 */
    currentValue: number;

    /** is currently spinning */
    rolling: boolean;

    /** spin time in ms */
    spinTime?: number;
}

const faces = new Array(6).fill(0).map((_, index) => index + 1);

/** A D6 die rendered using DOM elements with 3d transforms */

export const Die: React.FunctionComponent<IDieProps> = ({ currentValue, rolling, spinTime }) => {
    const [spinValue, setSpinValue] = React.useState<string>(null);

    const timeout = React.useRef<number>(null);
    const onSpin = React.useCallback(() => {
        const x = MathsUtils.getRandomInRange(-180, 180);
        const y = MathsUtils.getRandomInRange(-180, 180);
        const z = MathsUtils.getRandomInRange(-180, 180);

        setSpinValue(StyleUtils.get3dRotation(x, y, z));
    }, [spinValue]);

    // eslint-disable-next-line consistent-return
    React.useEffect(() => {
        if (rolling) {
            timeout.current = window.setTimeout(onSpin, spinTime);

            return () => window.clearTimeout(timeout.current);
        }
    }, [rolling, onSpin]);

    const style = React.useMemo<React.CSSProperties>(
        () => ({
            ...(rolling ? { transform: spinValue } : {}),
            transitionDuration: `${spinTime}ms`,
        }),
        [spinValue, spinTime, rolling],
    );

    return (
        <div className="die-wrapper" data-rolling={rolling} style={{ transitionDuration: `${spinTime}ms` }}>
            <div className="die" data-value={MathsUtils.clamp(currentValue, 1, 6) || null} style={style}>
                {faces.map(face => (
                    <DieFace key={face} faceNumber={face} />
                ))}
            </div>
        </div>
    );
};

Die.defaultProps = {
    spinTime: 500,
};
