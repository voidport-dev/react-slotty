import React, {
  ForwardedRef,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from "react";

export interface SlotMachineProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export interface SlotMachineRef {
  onSpinStateChange?: (isSpinning: boolean) => void;
  isSpinning: boolean;
  spin: () => void;
}

const SlotMachineRef: ForwardRefRenderFunction<
  SlotMachineRef,
  SlotMachineProps
> = (
  { onSpinStateChange, className, children, style, ...props }: SlotMachineProps,
  ref: ForwardedRef<SlotMachineRef>
) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: "8px",
    ...style,
  };

  useImperativeHandle(
    ref,
    () => ({
      spin: () => {
        console.log("Spinning the slot machine...");
        setIsSpinning(true);
        onSpinStateChange?.(true);

        setTimeout(() => {
          console.log("Spin completed!");
          setIsSpinning(false);

          onSpinStateChange?.(false);
        }, 500);
      },
      get isSpinning() {
        return isSpinning;
      },
    }),
    [isSpinning]
  );

  return (
    <div className={className} style={containerStyle} {...props}>
      {children}
    </div>
  );
};

export const SlotMachine = forwardRef(SlotMachineRef);
