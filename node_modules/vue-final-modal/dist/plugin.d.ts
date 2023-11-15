import type { Vfm } from './Modal';
export declare let activeVfm: Vfm | undefined;
export declare const setActiveVfm: (vfm: Vfm | undefined) => Vfm | undefined;
export declare const getActiveVfm: () => Vfm | undefined;
export declare function createVfm(): Vfm;
