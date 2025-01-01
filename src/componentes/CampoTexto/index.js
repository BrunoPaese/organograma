import "./CampoTexto.css";

const CampoTexto = (label, valor, obrigatorio, placeholder, aoAlterado) => {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        required={obrigatorio}
        placeholder={placeholder}
        onChange={aoDigitado}
      ></input>
    </div>
  );
};

export default CampoTexto;
