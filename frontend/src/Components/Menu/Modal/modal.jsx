import React, { useState } from "react"
import { getMenuImageUrl } from "../../../helper"

import * as S from "./modal.styles"

const Modal = ({ data, closeModal }) => {
	const [loaded, setLoaded] = useState(false)
	const lowRes = data.url ? getMenuImageUrl(data.url, "160x160") : "https://placehold.co/320x320"
	const highRes = data.url ? getMenuImageUrl(data.url, "1040x1040") : "https://placehold.co/320x320"
	return(
		<S.ModalContainer
			$isLoaded={loaded}
		>
			<S.Overlay></S.Overlay>
			<S.Modal>
				<S.ExitButton onClick={() => closeModal()}>×</S.ExitButton>
				<S.ModalImageContainer>
					<S.BlurredImage
						src={lowRes}
						alt="Placeholder"
						$isBlurred={!loaded}
					/>
					<S.FullImage
						src={highRes}
						alt="Placeholder"
						onLoad={() => setLoaded(true)}
						$isLoaded={loaded}
					/>
				</S.ModalImageContainer>
				{/* <S.InfoContainer> */}
					<S.ModalName>{data.name}</S.ModalName>
					<S.ModalPrice>${data.price}</S.ModalPrice>
				{/* </S.InfoContainer> */}
			</S.Modal>
		</S.ModalContainer>
	)
}

export default Modal