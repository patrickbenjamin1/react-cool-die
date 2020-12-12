import * as React from 'react';

interface IDieProps {
    currentValue: number;

    spinning: boolean;
    spinTime?: number;
}

const faces = new Array(6).fill(0).map((_, index) => index + 1);

export const Die: React.FunctionComponent<IDieProps> = ({ currentValue, spinning, spinTime }) => {
    const [spinValue, setSpinValue] = React.useState<string>(null);

    const timeout = React.useRef<number>(null);
    const onSpin = React.useCallback(() => {
        const x = Math.floor(Math.random() * 360) - 180;
        const y = Math.floor(Math.random() * 360) - 180;
        const z = Math.floor(Math.random() * 360) - 180;

        setSpinValue(`rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`);
    }, [spinValue]);

    // eslint-disable-next-line consistent-return
    React.useEffect(() => {
        if (spinning) {
            timeout.current = window.setTimeout(onSpin, spinTime);

            return () => window.clearTimeout(timeout.current);
        }
    }, [spinning, onSpin]);

    return (
        <div className="die-wrapper" data-spinning={spinning}>
            <div className="die" data-value={currentValue} style={spinning ? { transform: spinValue } : {}}>
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

interface IDieFaceProps {
    faceNumber: number;
}

export const DieFace: React.FunctionComponent<IDieFaceProps> = ({ faceNumber }) => {
    const points = React.useMemo(() => new Array(Math.min(faceNumber, 6)).fill(0), [faceNumber]);

    return (
        <div className="die-face" data-face-number={faceNumber}>
            {points.map((_, index) => (
                <div className="point-wrapper" key={index}>
                    <div className="point" />
                </div>
            ))}
        </div>
    );
};
