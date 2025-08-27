import React from "react"
import { getMenuImageUrl } from "../../../helper"

import * as S from "./modal.styles"

const Modal = ({ data, closeModal }) => {
	return(
		<S.ModalContainer>
			<S.Overlay></S.Overlay>
			<S.Modal>
				<S.ExitButton onClick={() => closeModal()}>×</S.ExitButton>
				<S.ModalImg src={getMenuImageUrl(data.url, "1040x1040")}></S.ModalImg>
			</S.Modal>
		</S.ModalContainer>
	)
}

export default Modal