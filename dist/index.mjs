import { jsx } from 'react/jsx-runtime';
import { useRef } from 'react';

// src/components/slot/index.tsx
var Slot = ({
  children,
  className,
  style,
  ...props
}) => {
  return /* @__PURE__ */ jsx("div", { className, style, ...props, children });
};
var SlotMachine = ({
  children,
  className,
  style,
  ...props
}) => {
  const containerStyle = {
    display: "flex",
    gap: "8px",
    ...style
  };
  return /* @__PURE__ */ jsx("div", { className, style: containerStyle, ...props, children });
};
var useSlotMachine = () => {
  const containerRef = useRef(null);
  return {
    containerRef
  };
};

export { Slot, SlotMachine, useSlotMachine };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map