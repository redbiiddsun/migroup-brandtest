import Image from "next/image";
import { Button } from "./Button";
import { cn } from "@dookdiks/utils";
import { useRouter } from "next/router";
import { TFunction } from "i18next";

export const Foorter = ({ t }: { t: TFunction<"common", undefined> }) => {
	const route = useRouter();
	return (
		<footer
			className={cn(
				"flex md:justify-between justify-normal md:flex-row flex-col items-center p-4 md:p-12"
			)}
		>
			<Button
				onClick={() =>
					route.push("https://mibrandtest.migroup.agency/?page_id=2055&lang=en")
				}
			>
				{t("FooterBtn")}
			</Button>
			<div
				className={cn(
					"text-xs flex flex-col lg:items-end md:items-end items-center md:mt-0 mt-16 scale-75 md:scale-90 lg:scale-100"
				)}
			>
				<p>Surfed to you by MI GROUP</p>
				<p>Powered by Generative AI</p>
				<Image
					src="/assets/icons/Migroup.png"
					alt="MiGroup"
					width={120}
					height={100}
				/>
			</div>
		</footer>
	);
};
