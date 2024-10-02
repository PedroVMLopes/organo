import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="socials">
        <img src="./Imagens/fb.png" />
        <img src="./Imagens/tw.png" />
        <img src="./Imagens/ig.png" />
      </div>
      <div className="logo">
        <img src="./Imagens/logo.png" />
      </div>
	  <div className="frase">
		<h3>Desenvolvido por @pedrovmlopes</h3>
	  </div>
    </section>
  );
};

export default Footer;
