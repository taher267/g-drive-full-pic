import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const TextField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div>
        <input className={`input ${className}`} ref={ref} {...props} />
      </div>
    );
  }
);
TextField.displayName = "TextField";

export default TextField;
