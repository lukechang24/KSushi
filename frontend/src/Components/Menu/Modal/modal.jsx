import React, { useState } from "react"
import { getMenuImageUrl } from "../../../helper"

import * as S from "./modal.styles"

const Modal = ({ data, closeModal }) => {
	const [loaded, setLoaded] = useState(false)
	const lowRes = data.url ? getMenuImageUrl(data.url, "160x160") : "https://placehold.co/320x320"
	const highRes = data.url ? getMenuImageUrl(data.url, "1040x1040") : "https://placehold.co/320x320"
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
				<S.ModalInfoContainer>
					{data.pcs && <S.ModalPieceCount>{data.pcs}pc</S.ModalPieceCount>}
					{data.spicy && <S.SpiceLevel></S.SpiceLevel>}
				</S.ModalInfoContainer>
			</S.Modal>
		</S.ModalContainer>
	)
}

export default Modal