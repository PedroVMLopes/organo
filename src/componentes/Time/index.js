import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const estilo = { backgroundColor: props.corSecundaria };
  // É possível criar o objeto acima diretamente dentro do style do JSX;
  // <section style={{ backgroundColor: props.corSecundaria }} />

  return (
    // O operador && funciona como um if dentro do JSX
    // Ao invés dele também poderia ser utilizado um operador ternário, porém ele teria que devolver um else com valor vazio
    props.colaboradores.length > 0 && (
      <section className="time" style={estilo}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
