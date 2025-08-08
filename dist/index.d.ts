import * as React$1 from 'react';
import React__default from 'react';

interface SlotProps {
    children?: React__default.ReactNode;
    className?: string;
    style?: React__default.CSSProperties;
    [key: string]: any;
}
declare const Slot: React__default.FC<SlotProps>;

interface SlotMachineProps {
    children?: React__default.ReactNode;
    className?: string;
    style?: React__default.CSSProperties;
    [key: string]: any;
}
interface SlotMachineRef {
    onSpinStateChange?: (isSpinning: boolean) => void;
    isSpinning: boolean;
    spin: () => void;
}
declare const SlotMachine: React__default.ForwardRefExoticComponent<Omit<SlotMachineProps, "ref"> & React__default.RefAttributes<SlotMachineRef>>;

interface SlotItem {
    id: string;
    [key: string]: any;
}
interface SelectedItemType {
    item: SlotItem;
    index: number;
}
interface UseSlotMachineProps {
    children?: React.ReactNode;
    [key: string]: any;
}
declare const useSlotMachine: () => {
    containerRef: React$1.RefObject<HTMLDivElement | null>;
};

export { type SelectedItemType, Slot, type SlotItem, SlotMachine, type SlotMachineProps, type SlotMachineRef, type SlotProps, type UseSlotMachineProps, useSlotMachine };
