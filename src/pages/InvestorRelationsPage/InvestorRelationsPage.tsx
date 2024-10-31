// TODO:
// add blend mode to bg image
// add text to second section
// make layout as in netflix page
const InvestorRelationsPage = () => {
	return (
		<div>
			<section className="min-h-[400px] flex flex-col lg:flex-row justify-between">
				<div
					className={`bg-cafe bg-blend-soft-hue bg-black-default bg-cover bg-center min-h-[400px] lg:min-h-full basis-full lg:max-w-[60%]`}
				>
					<div className="w-full h-full bg-black-warm-60">
						<div className="flex flex-col justify-center gap-10 px-5 max-w-[690px] mx-auto h-full">
							<h1 className="text-5xl">Company Profile</h1>
							<p>
								Netflix is one of the world's leading entertainment services with
								283 million paid memberships in over 190 countries enjoying TV
								series, films and games across a wide variety of genres and
								languages. Members can play, pause and resume watching as much as
								they want, anytime, anywhere, and can change their plans at any
								time.
							</p>
						</div>
					</div>
				</div>
				<div className="bg-red-default min-h-[350px] grow lg:min-h-full min-w-[500px]">
					<div className="bg-black-warm-default h-full w-full ml-10 text-center"></div>
				</div>
			</section>
		</div>
	);
};

export default InvestorRelationsPage;
