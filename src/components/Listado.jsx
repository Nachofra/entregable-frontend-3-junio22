import dataRaw from './data.json';
import Item from './Item';

export default function Listado({agregar}) {
  return (
    <div className='container'>
      {
      dataRaw.map((productoRaw) =>{
        // Creo un objeto sin la propiedad id
        const productoInfo = {...productoRaw.producto, stock: productoRaw.stock}
        // Paso por props el nuevo objeto creado sin id
        return <Item productoInfo={productoInfo} key={productoRaw.id} agregar={agregar}/>
      })
      }
    </div>
  )
}
