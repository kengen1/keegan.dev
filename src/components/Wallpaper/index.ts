import { IOptions, RecursivePartial } from "tsparticles";
import networkOptions from "./particle-networks-config";

export { default as ParticleWallpaper } from "./ParticleWallpaper";

export enum ParticleType {
    Networks,
    // can add new configs later
}

export const getParticleOptions = (
    particleType: ParticleType,
): RecursivePartial<IOptions> => {
        return networkOptions;

};
