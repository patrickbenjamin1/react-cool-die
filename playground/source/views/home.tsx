import * as React from 'react';

import { Die } from '../../../react-cool-die/source/components/die';

export const Home: React.FunctionComponent = () => {
    const [value, setValue] = React.useState(null);

    return (
        <div>
            <Die currentValue={value} spinning={!value} />

            <input type="num" onChange={event => setValue(parseInt(event.currentTarget.value, 10))} />
        </div>
    );
};

export default Home;
