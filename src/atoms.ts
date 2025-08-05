import { atom } from "jotai";

export const ipAddressValueAtom = atom("");
export const ipAddressCoordsAtom = atom<[number, number]>([0, 0]);
