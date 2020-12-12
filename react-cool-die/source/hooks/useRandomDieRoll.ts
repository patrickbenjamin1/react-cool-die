import * as React from 'react';

import { AsyncUtils } from '../utils/async';
import { MathsUtils } from '../utils/maths';

interface IUseRandomDieRollReturn {
    /** Perform a die roll */
    roll: () => Promise<number>;

    /** The last value returned from a die roll */
    value: number;

    /** Whether the die is currently rolling */
    rolling: boolean;
}

/** Hook for interacting with the Die component - will perform a roll that lasts a defined amount of time */

export const useRandomDieRoll = (rollTime = 1000): IUseRandomDieRollReturn => {
    const [value, setValue] = React.useState<number>(null);
    const [rolling, setRolling] = React.useState(false);

    const roll = React.useCallback(async () => {
        setRolling(true);
        await AsyncUtils.wait(rollTime);
        setRolling(false);
        const rollValue = MathsUtils.getRandomInRange(1, 6);
        setValue(rollValue);
        return rollValue;
    }, [rollTime]);

    return { roll, value, rolling };
};
