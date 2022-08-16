import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="collaborators">
          {props.colaboradores.map((colaborador) => (
            <Collaborator
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
