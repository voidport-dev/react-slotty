import { jsx } from 'react/jsx-runtime';
import { forwardRef, useState, useImperativeHandle, useRef } from 'react';

// src/components/slot/index.tsx
var Slot = ({
  children,
  className,
  style,
  ...props
}) => {
  return /* @__PURE__ */ jsx("div", { className, style, ...props, children });
};
var SlotMachineRef = ({ onSpinStateChange, className, children, style, ...props }, ref) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const containerStyle = {
    display: "flex",
    gap: "8px",
    ...style
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
      }
    }),
    [isSpinning]
  );
  return /* @__PURE__ */ jsx("div", { className, style: containerStyle, ...props, children });
};
var SlotMachine = forwardRef(SlotMachineRef);
var useSlotMachine = () => {
  const containerRef = useRef(null);
  return {
    containerRef
  };
};

export { Slot, SlotMachine, useSlotMachine };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map