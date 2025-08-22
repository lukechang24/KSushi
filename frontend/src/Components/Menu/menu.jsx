import React, { useEffect, useState } from "react"
import CategoryList from "./CategoryList/categoryList"

import * as S from "./menu.styles"

const Menu = ({ data, loading }) => {
	return(
		<S.MenuContainer>
			{loading 
				?
					"loading" 
				:
					<S.MenuList>
						<CategoryList data={data}/>
					</S.MenuList>
			}

		</S.MenuContainer>
	)
}

export default Menu