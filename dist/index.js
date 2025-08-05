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
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className, style: containerStyle, ...props, children });
};
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