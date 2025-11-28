export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#2b00a1ff",
        color: "#fff",
        padding: "1rem",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      &copy; {year} Garcia Diego. Todos los derechos reservados.
    </footer>
  );
};
