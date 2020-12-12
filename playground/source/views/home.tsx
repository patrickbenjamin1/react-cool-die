import * as React from 'react';

import { Die, useRandomDieRoll } from '../../../react-cool-die/source';

export const Home: React.FunctionComponent = () => {
    const [value, setValue] = React.useState(null);

    const { roll, rolling, value: rollValue } = useRandomDieRoll();

    return (
        <div className="playground">
            <div className="die-example">
                <Die currentValue={value} rolling={!value} />
                <input type="number" onChange={event => setValue(parseInt(event.currentTarget.value, 10))} />
            </div>

            <div className="die-example">
                <Die currentValue={rollValue} rolling={rolling} spinTime={250} />
                <button onClick={roll}>ROLL</button>
            </div>
        </div>
    );
};

export default Home;
