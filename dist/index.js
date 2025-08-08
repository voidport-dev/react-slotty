'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

// src/components/slot/index.tsx
var Slot = ({
  children,
  className,
  style,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className, style, ...props, children });
};
var SlotMachineRef = ({ onSpinStateChange, className, children, style, ...props }, ref) => {
  const [isSpinning, setIsSpinning] = react.useState(false);
  const containerStyle = {
    display: "flex",
    gap: "8px",
    ...style
  };
  react.useImperativeHandle(
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
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className, style: containerStyle, ...props, children });
};
var SlotMachine = react.forwardRef(SlotMachineRef);
var useSlotMachine = () => {
  const containerRef = react.useRef(null);
  return {
    containerRef
  };
};

exports.Slot = Slot;
exports.SlotMachine = SlotMachine;
exports.useSlotMachine = useSlotMachine;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map