import { cn } from "@dookdiks/utils";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export const Button = (props: ButtonProps) => {
	const { children, className, ...restProps } = props;
	return (
		<button
			className={cn(
				"bg-[#80BFD6] text-white rounded-md lg:text-sm text-xs px-6 py-2 font-semibold",
				"hover:bg-[#A3D1DF] hover:text-[#2C6085]",
				"[text-shadow:_0_2px_4px_rgb(0_0_0_/_10%)] shadow-md",
				"transition-all ease-in-out duration-200",
				className
			)}
			{...restProps}
		>
			{children}
		</button>
	);
};
