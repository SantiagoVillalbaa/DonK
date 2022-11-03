import './Complemento.css';

const Complemento = () => {
    return (
        <>
            <div className='veganas'>
                <p>
                    Podes elegir cualquiera de nuestras hamburguesas con medallón vegetariano, vegano y sin sal.
                </p>
            </div>
            <div className='aderezos'>
                <h2 className='titulo-aderezos'>NUESTROS ADEREZOS</h2>
                {/* <img className='foto-aderezos' alt='foto aderezos' src='https://www.denirohamburgueseria.com.ar/img/aderezos_titulo.png'/> */}
                <div className='contenedor-aderezos'>
                    <div className='aderezo'>
                        <h3>ALIOLI</h3>
                        <img className='img-salsas' src='https://as1.ftcdn.net/v2/jpg/03/66/50/84/1000_F_366508416_N6gt0ACzgJvkQYFgd5Yr7TuvjJB045pI.jpg'/>
                        <p>Mayo, ajo y aceite de oliva</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>SIGNATURE</h3>
                        <img className='img-salsas' src='https://as2.ftcdn.net/v2/jpg/03/66/50/83/1000_F_366508321_fxFitElBllwaY6U1bw9kebEjVRVBS3yx.jpg'/> 
                        <p>Mayo, ajo y aceite de oliva</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>SPICY</h3>
                        <img className='img-salsas' src='https://as2.ftcdn.net/v2/jpg/03/66/50/83/1000_F_366508316_Zb5K7510bM6BYArrrFar3WFBKQeWsH2I.jpg'/> 
                        <p>Pimienta, sal y mantequilla</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>RANCH</h3>
                        <img className='img-salsas' src='https://as1.ftcdn.net/v2/jpg/03/66/50/84/1000_F_366508409_k3tOiwMGT1oy9I9JvXH8VPaHZq7eOTgy.jpg'/> 
                        <p>Cebolla y ajo</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>HABANERO</h3>
                        <img className='img-salsas' src='https://as2.ftcdn.net/v2/jpg/03/66/50/83/1000_F_366508316_Zb5K7510bM6BYArrrFar3WFBKQeWsH2I.jpg'/> 
                        <p>Buttermilk ranch</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>MIEL</h3>
                        <img className='img-salsas' src='https://as2.ftcdn.net/v2/jpg/03/66/50/83/1000_F_366508321_fxFitElBllwaY6U1bw9kebEjVRVBS3yx.jpg'/> 
                        <p>Pura, grado A</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>BARBECUE</h3>
                        <img className='img-salsas' src='https://as1.ftcdn.net/v2/jpg/03/66/50/84/1000_F_366508416_N6gt0ACzgJvkQYFgd5Yr7TuvjJB045pI.jpg'/> 
                        <p>Tomate con sabor ahumado</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>NEWMANS</h3>
                        <img className='img-salsas' src='https://as2.ftcdn.net/v2/jpg/03/66/50/83/1000_F_366508316_Zb5K7510bM6BYArrrFar3WFBKQeWsH2I.jpg'/> 
                        <p>Buttermilk, ajo y cebolla.</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>FRENCH</h3>
                        <img className='img-salsas' src='https://as1.ftcdn.net/v2/jpg/03/66/50/84/1000_F_366508409_k3tOiwMGT1oy9I9JvXH8VPaHZq7eOTgy.jpg'/> 
                        <p>Aderezo frances</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>ITALIANO</h3>
                        <img className='img-salsas' src='https://as1.ftcdn.net/v2/jpg/03/66/50/84/1000_F_366508416_N6gt0ACzgJvkQYFgd5Yr7TuvjJB045pI.jpg'/> 
                        <p>Aceite, vinagre y queso</p>
                        <h5>INTENSA</h5>
                    </div>
{/*                     <div className='aderezo'>
                        <h3>BALSAMIC</h3>
                        <img className='img-salsas' src='https://s7d1.scene7.com/is/image/mcdonalds/sauces_publication_3-column_760x508-n-bals:3-column-desktop'/> 
                        <p>Vinagre balsámico y aceites</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>CREAMY</h3>
                        <img className='img-salsas' src='https://s7d1.scene7.com/is/image/mcdonalds/sauces_publication_3-column_760x508-n-sout:3-column-desktop'/> 
                        <p>Pimienta, comino y ajo</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>KETCHUP</h3>
                        <img className='img-salsas' src='https://s7d1.scene7.com/is/image/mcdonalds/sauces_publication_3-column_760x508-ketc:3-column-desktop'/> 
                        <p>Salsa de Tomate</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>MOSTAZA</h3>
                        <img className='img-salsas' src='https://s7d1.scene7.com/is/image/mcdonalds/sauces_publication_3-column_760x508-must:3-column-desktop'/> 
                        <p>Semillas, vinagre, especias</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>TARTARA</h3>
                        <img className='img-salsas' src='https://s7d1.scene7.com/is/image/mcdonalds/sauces_publication_3-column_760x508-tart:3-column-desktop'/> 
                        <p>Pepinillos, cebolla y perejil</p>
                        <h5>INTENSA</h5>
                    </div> */}
                    <div className='aderezo'>
                        <h3>MOSTAZA</h3>
                        {/* <img className='img-salsas' src='https://s7d1.scene7.com/is/image/mcdonalds/sauces_publication_3-column_760x508-crea:3-column-desktop'/>  */}
                        <h4 className='proximo'>¡¡PROXIMAMENTE!!</h4>
                        <p>Semillas, vinagre, especias</p>
                        <h5>INTENSA</h5>
                    </div>
                    <div className='aderezo'>
                        <h3>TARTARA</h3>
                        {/* <img className='img-salsas' src='https://s7d1.scene7.com/is/image/mcdonalds/sauces_publication_3-column_760x508-sign:3-column-desktop'/>  */}
                        <h4 className='proximo'>¡¡PROXIMAMENTE!!</h4>
                        <p>Pepinillos, cebolla y perejil</p>
                        <h5>INTENSA</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Complemento