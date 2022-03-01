import { routes, socials } from 'lib/constants';
import Logo from 'components/logo';
import SEO from 'components/seo';

export default function Index() {
	return (
		<div className="flex h-screen px-10">
			<SEO />
			<div className="block text-center items-center m-auto md:flex md:space-x-2">
				<Logo />
				<div className="block text-center items-center max-w-sm md:max-w-lg md:text-left">
					<h1 className="font-bold text-5xl">melike2d</h1>
					<p className="my-8 prose-sm text-white sm:my-4">
						16 y/o high-school junior and full-stack developer from the United States
					</p>
					<div className="hidden items-center content-center md:flex md:space-x-4">
						<div className="flex items-center md:space-x-2">
							{routes.slice(1).map((route, i) => (
								<a
									title={route.name}
									href={route.href}
									className="text-primary-light px-3 py-2 transition-all ml-[-.8rem] rounded-lg hover:bg-opacity-25 hover:bg-gray-800"
									key={i}
								>
									{route.name}
								</a>
							))}
						</div>
						<div className="hidden items-center md:flex md:grid-row-1 md:gap-y-0 md:gap-x-4">
							{socials.map(({ Icon, ...social }, i) => (
								<a
									key={i}
									rel="noreferrer noopener"
									target="_blank"
									title={social.title}
									href={social.url}
								>
									<Icon />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
