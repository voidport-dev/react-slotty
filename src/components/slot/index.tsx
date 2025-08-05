import React from "react";

export interface SlotProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export const Slot: React.FC<SlotProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <div className={className} style={style} {...props}>
      {children}
    </div>
  );
};
