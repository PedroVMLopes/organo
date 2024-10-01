import "./Time.css";

const Time = (props) => {
  const estilo = { backgroundColor: props.corSecundaria };
  // É possível criar o objeto acima diretamente dentro do style do JSX;
  // <section style={{ backgroundColor: props.corSecundaria }} />

  return (
    <section className="time" style={estilo}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
    </section>
  );
};

export default Time;
