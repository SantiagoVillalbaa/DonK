import './Contacto.css'

const Contacto = () => {
    return (
        <>
            <h2 className='titulo-contacto'>CONTACTO</h2>
            <div className='contact_form'>
                <div className='formulario'>
                    {/* <h2 className='titulo-contacto'>Contacto</h2> */}
                    <h3 className='subtitulo-contacto'>Escríbenos y en breve los pondremos en contacto contigo</h3>
                    <form action="submeter-formulario.php" method="post">
                        <p>
                            <label for="nombre" className='colocar-nombre'>Nombre
                                <span className='obligatorio'>*</span>
                            </label>
                            <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"/>
                        </p>
                        <p>
                            <label for="email" className='colocar_email'>Email
                                <span className='obligatorio'>*</span>
                            </label>
                            <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email"/>
                        </p>
                    {/*  <p>
                            <label for="telefone" className='colocar_telefono'>Teléfono
                            </label>
                            <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono"/>
                        </p>  */}  
                        {/* <p>
                            <label for="asunto" className='colocar_asunto'>Asunto
                                <span className='obligatorio'>*</span>
                            </label>
                            <input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto"/>
                        </p>   */}   
                        <p>
                            <label for="mensaje" className="colocar_mensaje">Mensaje
                                <span className="obligatorio">*</span>
                            </label>                     
                            <textarea name="introducir_mensaje" className="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                        </p> 
                        <button className='boton-contacto' type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
                        <p className="aviso">
                            <span className="obligatorio"> * </span>Los campos son obligatorios.
                        </p>        
                    </form>
                </div>
            </div>
        </>
    
    )
}

export default Contacto