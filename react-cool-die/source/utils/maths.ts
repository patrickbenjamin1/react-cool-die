export namespace MathsUtils {
    export const getRandomInRange = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    export const clamp = (value: number, min: number, max: number) => {
        return Math.max(min, Math.min(value, max));
    };
}
