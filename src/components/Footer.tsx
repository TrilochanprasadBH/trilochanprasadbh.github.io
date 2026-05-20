export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <span>© {new Date().getFullYear()} Trilochanprasad B Hilli</span>
        <span>Designed & built with care.</span>
      </div>
    </footer>
  );
}
