import { useState } from 'react';

export default function Item({productoInfo, agregar}) {

  const [stock, setStock] = useState(productoInfo.stock);

  const clickHandler = (e) => {
    if (stock > 0) {
      setStock((prevState) => prevState -= 1);
      agregar();
    }
  }

  return (
    <div className='producto'>
      <h3>{productoInfo.nombre}</h3>
      <p>{productoInfo.descripcion}</p>
      {stock === 0
        ? <>
          <h5>En stock: <span className='sinStock'>agotado</span></h5>
          <button disabled>Sin stock</button>
        </>
        : <>
          <h5>En stock: <span>{stock}</span></h5>
          <button onClick={clickHandler}>Comprar</button>
        </>
      }
    </div>
  )
}
