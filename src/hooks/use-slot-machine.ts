import { useRef } from "react";

export interface SlotItem {
  id: string;
  [key: string]: any;
}

export interface SelectedItemType {
  item: SlotItem;
  index: number;
}

export interface UseSlotMachineProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const useSlotMachine = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return {
    containerRef,
  };
};
