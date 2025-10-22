
import CartCard from '@/components/CartCard'
import CartInfo from '@/components/CartInfo'
import { ICartItem } from '@/types/types'

const CartPage = ({ data, cart_id }: { data: Array<ICartItem>, cart_id: string }) => {

  const calcTotal = () => {
    const result = data.reduce((sum,datum)=>{
      console.log(sum +=(+datum.price*datum.quantity));
      
      return  sum += datum.quantity
    },0) 
    return result.toFixed(2)
  }

  return (
    <div className='flex relative'>
      <ul className='flex list-none flex-wrap gap-4 p-20 w-full justify-center'>
        {data.map((datum) => (
          <li key={datum.id} className='w-full flex justify-center'>
            <CartCard data={datum} cart_id={cart_id} />
          </li>
        ))}
      </ul>
      <CartInfo total={+calcTotal()}/>
    </div>
  )
}

export default CartPage