"use server"
import { menuAction } from './action'
import MenuPage from '@/template/MenuPage'

// export const revalidate = 60 * 60 * 24 //make page ISR


const Menu = async () => {
    const data = await menuAction()
    console.log(data);
    
 
  return (
        <MenuPage/>
  )
}

export default Menu