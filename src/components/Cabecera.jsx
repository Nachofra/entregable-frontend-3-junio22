export default function Cabecera({elementosComprados}) {
  return (
    <header>
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos <span>{elementosComprados}</span></p>
    </header>
  )
}
