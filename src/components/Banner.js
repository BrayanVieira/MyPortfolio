import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); // Controla o índice da string atual no array `toRotate`
  const [isDeleting, setIsDeleting] = useState(false); // Define se o texto está sendo apagado ou digitado
  const toRotate = [
    "Web Developer",
    "Automations Developer",
    "App Developer",
    "UI/UX designer",
  ]; // Lista de strings que serão exibidas na animação
  const [text, setText] = useState(""); // Armazena o texto atualmente exibido na tela
  const [delta, setDelta] = useState(Math.max(50, 300 - Math.random() * 100)); // Intervalo entre as alterações de texto (em ms)
  const period = 2000; // Tempo de pausa após completar a digitação de uma string

  useEffect(() => {
    let ticker = setInterval(() => {
      tick(); // Chama a função `tick` a cada `delta` milissegundos
    }, delta);

    return () => {
      clearInterval(ticker); // Limpa o intervalo quando o componente é desmontado
    };
  }, [text, delta]); // O intervalo é recalculado sempre que `text` ou `delta` mudarem

  const tick = () => {
    let i = loopNum % toRotate.length; // Calcula o índice da string atual no array `toRotate`
    let fullText = toRotate[i]; // Obtém a string completa correspondente ao índice
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) // Remove o último caractere se estiver apagando
      : fullText.substring(0, text.length + 1); // Adiciona o próximo caractere se estiver digitando

    setText(updatedText); // Atualiza o estado do texto exibido

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2); // Acelera o intervalo enquanto estiver apagando
    }

    // !isDeleting && updatedText === fullText verifica se O texto não está sendo apagado e se O texto foi completamente digitado .
    // "Se o texto NÃO está sendo apagado (!isDeleting) E o texto atual (updatedText) é IGUAL ao texto completo (fullText), então comece a apagar o texto."

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true); // Alterna para o modo de apagar
      setDelta(period); // Redefine o intervalo para o valor inicial (`period`)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false); // Alterna para o modo de digitar
      setLoopNum(loopNum + 1); // Avança para a próxima string no array `toRotate`
      setDelta(500); // Redefine o intervalo para um valor padrão
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hello I'm a Fullstack Developer`}
              <span className="wrap">{text}</span> {/* Exibe o texto animado */}
            </h1>
            <p>
              I am Brayan Gonçalves Vieira, a software developer with three
              years of professional experience in building robust and innovative
              solutions. Over the years, I have honed my skills in programming,
              problem-solving, and creating efficient, scalable software
              applications that meet real-world needs. My focus has been on
              applying my expertise to practical scenarios, delivering
              high-quality results in challenging and dynamic projects. I thrive
              in collaborative environments, contributing meaningfully to teams
              dedicated to developing impactful software solutions that align
              with current market demands. I am actively seeking new
              opportunities to grow as a developer, working alongside
              forward-thinking teams that prioritise innovation, precision, and
              continuous improvement in the field of software development.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} /> {/* Ícone de seta */}
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" /> {/* Imagem do banner */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
