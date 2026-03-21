export default function Features() {
  const diffs = [
    {
      title: "PRONTIDÃO 24 HORAS",
      icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
      text: "Nossa central nunca para. Resposta imediata para qualquer emergência, a qualquer hora."
    },
    {
      title: "EQUIPE TREINADA E UNIFORMIZADA",
      icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
      text: "Profissionais rigorosamente selecionados, com treinamento contínuo e apresentação impecável."
    },
    {
      title: "EXPERIÊNCIA COMPROVADA",
      icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
      text: "Histórico sólido de proteção de empresas, condomínios e patrimônios de alto valor."
    },
    {
      title: "ATENDIMENTO RÁPIDO E CONFIÁVEL",
      icon: <><polyline points="20 6 9 17 4 12"/></>,
      text: "Comprometimento total com nossos clientes — segurança com responsabilidade real."
    }
  ];

  return (
    <section id="diferenciais" className="section-pad diff-bg">
        <div className="container">
            <div className="row align-items-center g-5">
                <div className="col-lg-6 order-2 order-lg-1 fade-up">
                    <span className="section-label">Por Que Nos Escolher</span>
                    <h2 className="section-title mb-2">DIFERENCIAIS QUE<br /><span className="c-red">GERAM CONFIANÇA</span></h2>
                    <div className="divider-red" style={{ marginBottom: "40px" }}></div>

                    {diffs.map((d, index) => (
                      <div className="diff-item fade-up" key={index}>
                          <h5>
                              <svg width="18" height="18" fill="none" stroke="#e01a1a" strokeWidth="2.2" viewBox="0 0 24 24" style={{ marginRight: "10px", verticalAlign: "middle" }}>
                                {d.icon}
                              </svg>
                              {d.title}
                          </h5>
                          <p>{d.text}</p>
                      </div>
                    ))}
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center fade-up">
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <div style={{ position: "absolute", top: "-12px", right: "-12px", width: "100%", height: "100%", border: "2px solid rgba(224,26,26,0.3)", borderRadius: "12px", zIndex: "0" }}></div>
                        <img src="/images/WhatsApp Image 2026-03-11 at 19.29.36 (2).jpeg"
                             alt="Tecnologia Silva Security"
                             style={{ position: "relative", zIndex: "1", maxHeight: "480px", width: "100%", objectFit: "cover", borderRadius: "12px", boxShadow: "0 20px 60px rgba(0,0,0,0.7),0 0 40px rgba(224,26,26,0.12)" }} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
