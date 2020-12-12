export namespace AsyncUtils {
    export const wait = (time: number) => {
        return new Promise(resolve => window?.setTimeout(resolve, time));
    };
}
