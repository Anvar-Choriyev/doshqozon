const PanIcon = ({ mode }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<mask
				id="mask0_262_746"
				style={{ maskType: "alpha" }}
				width="24"
				height="24"
				x="0"
				y="0"
				maskUnits="userSpaceOnUse"
			>
				<path fill="url(#pattern0)" d="M0 0H24V24H0z"></path>
			</mask>
			<g mask="url(#mask0_262_746)">
				<path fill={mode || "#FEBB1B"} d="M0 0H24V24H0z"></path>
			</g>
			<defs>
				<pattern
					id="pattern0"
					width="1"
					height="1"
					patternContentUnits="objectBoundingBox"
				>
					<use transform="scale(.00195)" xlinkHref="#image0_262_746"></use>
				</pattern>
				<image
					id="image0_262_746"
					width="512"
					height="512"
					xlinkHref="data:image/png;base64,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"
				></image>
			</defs>
		</svg>

	)
}

export default PanIcon;