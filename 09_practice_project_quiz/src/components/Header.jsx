import QuizLogo from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={QuizLogo} alt="A quiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
