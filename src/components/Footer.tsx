import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Trilochanprasad B Hilli</span>
        <SocialIcons className="footer-socials" />
      </div>
    </footer>
  );
}
