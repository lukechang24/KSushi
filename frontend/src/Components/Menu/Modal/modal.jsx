import { useState } from "react"
import { getMenuImageUrl } from "../../../helper"

import * as S from "./modal.styles"

const Modal = ({ data, closeModal }) => {
	const [loaded, setLoaded] = useState(false)

	const lowRes = data.url ? getMenuImageUrl(data.url, "160x160") : "https://placehold.co/320x320"
	const highRes = data.url ? getMenuImageUrl(data.url, "1040x1040") : "https://placehold.co/320x320"

	const hasDescription = Boolean(data.description)
	const hasExtra = Boolean(data.pcs || data.spicy)

	const spiceLevel = []
	if (data.spicy) {
		for (let i = 0; i < data.spicy; i++) {
			spiceLevel.push(<S.SpiceLevel></S.SpiceLevel>)
		}
	}
	const formatInOut = (desc) => {
		if (!desc) return null

		// Split by "In:" and "Out:", keeping the labels
		const parts = desc.split(/(In: |Out: )/).filter(Boolean)

		return parts.map((part, i) => {
			// Wrap the labels in <S.Bold>
			if (part === "In: " || part === "Out: ") {
				return (
					<S.Bold key={i}>
						{part}
					</S.Bold>
				)
			}
    // The rest is regular text
    	return <span key={i}>{part}</span>
		})
	}

	return(
		<S.ModalContainer
			// $isLoaded={loaded}
		>
			<S.Overlay></S.Overlay>
			<S.Modal>
				<S.ExitButton onClick={() => closeModal()}>×</S.ExitButton>
				<S.ModalImageContainer>
					{!loaded &&	
						<S.BlurredImage
							src={lowRes}
							alt="Placeholder"
						/>
					}
					<S.FullImage
						src={highRes}
						alt="Placeholder"
						onLoad={() => setLoaded(true)}
						$isLoaded={loaded}
					/>
				</S.ModalImageContainer>
				<S.ModalName>{data.name}</S.ModalName>
				<S.ModalPrice>${data.price}</S.ModalPrice>
				{(hasDescription || hasExtra) && (
					<S.ModalInfoContainer>
						{hasDescription && <S.ModalDescription>{formatInOut(data.description)}</S.ModalDescription>}
						{hasExtra && (
							<S.ModalExtraContainer>
								{data.pcs && (
									<S.ModalPieceCount>
										{data.pcs}{data.pcs === 1 ? "pc" : "pcs"}
									</S.ModalPieceCount>
								)}
								{data.spicy && spiceLevel}
							</S.ModalExtraContainer>
						)}
					</S.ModalInfoContainer>
				)}
			</S.Modal>
		</S.ModalContainer>
	)
}

export default Modal