let getBtnStyle = (btnIsRow, i, mainBtnIndex) => {
	let btnStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: btnIsRow ? 237 * 0.5 : 498 * 0.5,
		height: 36,
		marginTop: !btnIsRow && i !== 0 ? 12 : 0,
		borderRadius: 4,
	};
	let textStyle = {
		fontSize: 15,
		color: '#0086F6',
	};
	if (mainBtnIndex === i) {
		btnStyle['backgroundColor'] = '#0086F6';
		textStyle['color'] = '#ffffff';
	} else {
		btnStyle['borderColor'] = '#2698f7';
		btnStyle['borderWidth'] = 1;
		btnStyle['borderStyle'] = 'solid'
	}

	return [btnStyle, textStyle];
};
function COM(props) {
	const {
		btnOK,
		title,
		content,
		tips = '',
		imgUrl = null,
		mainBtnIndex,
		onSure,
	} = props;
	let btnIsRow = btnOK.length === 2 && !tips;
	return (
		<div
			style={{
				display: 'flex',
				height: '100%',
				width: '100%',
				backgroundColor: '#00000033',
				position: 'absolute',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div style={{
				// display: 'flex',
				// flexDirection: 'column',
			}}>
				{/* 弹窗头 */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: 562 * 0.5,
						minHeight: 16,
						backgroundColor: '#ffffff',
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
					}}
				>
					{imgUrl ? (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								borderTopLeftRadius: 8,
								borderTopRightRadius: 8,
								height: 140,
								marginBottom: 16,
								backgroundColor: '#123123',
							}}
							src={imgUrl}
						/>
					) : null}
				</div>
				{/* 弹窗主体 */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: 562 * 0.5 - 32,
						backgroundColor: '#ffffff',
						paddingLeft: 16,
						paddingRight: 16,
						alignItems: 'center',
					}}
				>
					{/* 弹窗title */}
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							marginBottom: content ? 8 : 26,
						}}
					>
						<span
							style={{
								fontSize: 17,
								"text-align": 'center',
								spanAlign: 'center',
								fontWeight: 500,
								color: '#333333',
							}}
						>
							{title}
						</span>
					</div>
					{/* 弹窗conspan */}
					{content ? (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								marginBottom: 24,
							}}
						>
							<span
								style={{
									fontSize: 14,
									"text-align": 'center',
									spanAlign: 'center',
									color: '#333333',
								}}
							>
								{content}
							</span>
						</div>
					) : null}
					{/* 弹窗btn */}
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: 498 * 0.5,
							minHeight: 72 * 0.5,
							flexDirection: btnIsRow ? 'row' : 'column',
							justifyContent: 'space-between',
						}}
					>
						{btnOK.map((v, i, a) => {
							let [btnStyle, spanStyle] = getBtnStyle(
								btnIsRow,
								i,
								mainBtnIndex
							);
							return (
								<div
									style={btnStyle}
									onClick={() => onSure(i)}
									key={i}
								>
									<span style={spanStyle}>{v}</span>
								</div>
							);
						})}
					</div>
				</div>
				{/* 弹窗底 */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: 562 * 0.5,
						minHeight: 16,
						backgroundColor: '#ffffff',
						borderBottomLeftRadius: 8,
						borderBottomRightRadius: 8,
					}}
				>
					{tips ? (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								height: 36,
								borderBottomLeftRadius: 8,
								borderBottomRightRadius: 8,
								marginTop: 12,
							}}
						>
							<span
								style={{
									fontSize: 14,
									"text-align": 'center',
									spanAlign: 'center',
									color: '#999999',
								}}
							>
								{tips}
							</span>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
export default COM