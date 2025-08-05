import React from "react";

export interface SlotMachineProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export const SlotMachine: React.FC<SlotMachineProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: "8px",
    ...style,
  };

  return (
    <div className={className} style={containerStyle} {...props}>
      {children}
    </div>
  );
};
