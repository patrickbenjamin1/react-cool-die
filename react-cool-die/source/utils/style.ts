export namespace StyleUtils {
    export const get3dRotation = (x: number, y: number, z: number) =>
        `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg) translate3d(0, 0, 0)`;
}
