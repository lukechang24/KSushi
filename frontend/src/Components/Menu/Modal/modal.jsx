import React from "react"
import * as S from "./modal.styles"

const Modal = ({ data, closeModal }) => {
	return(
		<S.ModalContainer>
			<S.Overlay></S.Overlay>
			<S.Modal>
				<S.ExitButton onClick={() => closeModal()}>×</S.ExitButton>
				<S.ModalImg src={data.url ?? "https://firebasestorage.googleapis.com/v0/b/sushi-gallery.appspot.com/o/Rolls%2FAlbacoreLoversRoll.webp?alt=media&token=d5d02af9-d626-4105-a24c-d4f681336965"}></S.ModalImg>
			</S.Modal>
		</S.ModalContainer>
	)
}

export default Modal