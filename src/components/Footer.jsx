export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6 fade-up">
                    <a href="#" style={{ textDecoration: "none", display: "inline-block", marginBottom: "24px", overflow: "visible" }}>
                        <h4 className="logo-text" style={{ fontSize: "1.5rem" }}>SILVA<span>SECURITY</span></h4>
                    </a>
                    <p className="footer-text">
                        Especialistas em vigilância patrimonial, monitoramento 24h e escolta tática. Proteção e confiança para o seu patrimônio com uma equipe de elite pronta para servir.
                    </p>
                    <div className="d-flex gap-3 mt-4">
                        <a href="#" aria-label="Instagram" style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "background 0.3s, transform 0.3s" }}>
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" aria-label="LinkedIn" style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "background 0.3s, transform 0.3s" }}>
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 fade-up" style={{ transitionDelay: "100ms" }}>
                    <h5 className="footer-heading">Navegação Rápida</h5>
                    <ul className="footer-links">
                        <li><a href="#navbar">Página Inicial</a></li>
                        <li><a href="#servicos">Nossos Serviços</a></li>
                        <li><a href="#diferenciais">Diferenciais</a></li>
                        <li><a href="#equipe">Equipe Tática</a></li>
                    </ul>
                </div>

                <div className="col-lg-5 col-md-12 fade-up" style={{ transitionDelay: "200ms" }}>
                    <h5 className="footer-heading">Contato de Emergência</h5>
                    <div className="footer-contact-item">
                        <svg width="20" height="20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <div>
                            <strong>WhatsApp e Central 24h:</strong><br />
                            <a href="https://wa.me/5534992664338" target="_blank" rel="noopener noreferrer">(34) 99266-4338</a>
                        </div>
                    </div>

                    <div className="footer-contact-item">
                        <svg width="20" height="20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <div>
                            <strong>E-mail Corporativo:</strong><br />
                            <a href="mailto:contato@silvasecurity.com.br">contato@silvasecurity.com.br</a>
                        </div>
                    </div>

                    <div className="footer-contact-item">
                        <svg width="20" height="20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <div>
                            <strong>Atendimento Operacional:</strong><br />
                            Cobertura de segurança patrimonial para a sua região.
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom fade-up" style={{ transitionDelay: "300ms" }}>
                <p className="footer-copyright">&copy;  Silva Security. Todos os direitos reservados.</p>
                <p className="footer-copyright">Segurança · Confiança · Profissionalismo</p>
            </div>
        </div>
    </footer>
  );
}
