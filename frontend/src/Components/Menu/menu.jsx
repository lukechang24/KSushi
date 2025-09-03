import React, { useEffect, useState } from "react"
import CategoryList from "./CategoryList/categoryList"

import * as S from "./menu.styles"

const Menu = ({ data, loading }) => {
	return(
		<S.MenuContainer id="menu">
			{loading 
				?
					"loading" 
				:
					<S.Menu>
						<S.MenuTitle>MENU</S.MenuTitle>
						<S.CategoryIconContainer>
							
						</S.CategoryIconContainer>
						<CategoryList data={data}/>
					</S.Menu>
			}

		</S.MenuContainer>
	)
}

export default Menu