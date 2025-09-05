import React, { useState } from "react"
import { getMenuImageUrl } from "../../../helper"

import * as S from "./modal.styles"

const Modal = ({ data, closeModal }) => {
	const [loaded, setLoaded] = useState(false)
	const lowRes = data.url ? getMenuImageUrl(data.url, "160x160") : "https://placehold.co/320x320"
	const highRes = data.url ? getMenuImageUrl(data.url, "1040x1040") : "https://placehold.co/320x320"
	const spiceLevel = []
	if (data.spicy) {
		for (let i = 0; i < data.spicy; i++) {
			spiceLevel.push(<S.SpiceLevel></S.SpiceLevel>)
		}
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
				{data.description &&
					<S.ModalDescription>{data.description}</S.ModalDescription>
				}
				
				{(data.pcs || data.spicy) &&
					<S.ModalInfoContainer>
						{data.pcs && <S.ModalPieceCount>{data.pcs}{data.pcs == 1 ? "pc" : "pcs"}</S.ModalPieceCount>}
						{data.spicy && spiceLevel}
					</S.ModalInfoContainer>
				}
			</S.Modal>
		</S.ModalContainer>
	)
}

export default Modal