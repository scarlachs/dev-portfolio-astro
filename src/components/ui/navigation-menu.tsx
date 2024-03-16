import * as React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";

import { cn } from "@/ts/utils";

const NavigationMenu = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		className={cn(
			"relative z-10 flex max-w-max flex-1 items-center justify-center",
			className,
		)}
		{...props}
	>
		{children}
		<NavigationMenuViewport />
	</NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cn(
			"group flex flex-1 list-none items-center justify-center space-x-1",
			className,
		)}
		{...props}
	/>
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
	"group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50",
);

const NavigationMenuTrigger = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn(navigationMenuTriggerStyle(), "group", className)}
		{...props}
	>
		{children}
		{""}
		<ChevronDownIcon
			className="relative top-[1px] ml-1 size-3 duration-300 group-data-[state=open]:rotate-180 motion-safe:transition"
			aria-hidden="true"
		/>
	</NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(
			"left-0 top-0 w-full motion-safe:data-[motion^=from-]:animate-in motion-safe:data-[motion^=to-]:animate-out motion-safe:data-[motion^=from-]:fade-in motion-safe:data-[motion^=to-]:fade-out motion-safe:data-[motion=from-end]:slide-in-from-right-52 motion-safe:data-[motion=from-start]:slide-in-from-left-52 motion-safe:data-[motion=to-end]:slide-out-to-right-52 motion-safe:data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
			className,
		)}
		{...props}
	/>
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div className={cn("absolute left-0 top-full flex justify-center")}>
		<NavigationMenuPrimitive.Viewport
			className={cn(
				"origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-90 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 md:w-[var(--radix-navigation-menu-viewport-width)]",
				className,
			)}
			ref={ref}
			{...props}
		/>
	</div>
));
NavigationMenuViewport.displayName =
	NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cn(
			"top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden motion-safe:data-[state=visible]:animate-in motion-safe:data-[state=hidden]:animate-out motion-safe:data-[state=hidden]:fade-out motion-safe:data-[state=visible]:fade-in",
			className,
		)}
		{...props}
	>
		<div className="relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800" />
	</NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
	NavigationMenuPrimitive.Indicator.displayName;

export {
	navigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
};
