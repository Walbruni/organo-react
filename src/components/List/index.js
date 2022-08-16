import "./List.css";

const List = (props) => {
  return (
    <div className="list">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterar(evento.target.value)}
        required={props.obrigatorio}
        valor={props.valor}
      >
        <option valor=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default List;
