import React, { type ComponentPropsWithoutRef } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@helpers';

const AvatarImage = React.forwardRef<
   React.ElementRef<typeof AvatarPrimitive.Image>,
   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
   <AvatarPrimitive.Image ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
   React.ElementRef<typeof AvatarPrimitive.Fallback>,
   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
   <AvatarPrimitive.Fallback
      ref={ref}
      className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
      {...props}
   />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
   ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> &
   ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & {
      disabled?: boolean;
      alt?: string;
      children?: React.ReactNode;
   };

const Avatar = ({ className, src, alt = '', children, ...props }: AvatarProps) => (
   <AvatarPrimitive.Root
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
   >
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="uppercase">{children}</AvatarFallback>
   </AvatarPrimitive.Root>
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

export { Avatar, AvatarImage, AvatarFallback };
