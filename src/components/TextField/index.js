import "./TextField.css";

const TextField = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  const aoDigitar = (evento) => {
    props.aoAlterar(evento.target.value);
  };

  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default TextField;
