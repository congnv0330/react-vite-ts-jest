import { forwardRef } from 'react';

export const Button = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>((props, ref) => {
  return <button ref={ref} {...props} />;
});
