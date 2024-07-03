export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  const ButtonsConainer = buttonsContainer;

  return (
    <>
      <ButtonsConainer>{buttons}</ButtonsConainer>
      {children}
    </>
  );
}
