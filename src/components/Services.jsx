export default function Services() {
  const services = [
    {
      title: "Vigilância Patrimonial",
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
      text: "Proteção rigorosa de empresas, condomínios e propriedades com rondas e vigilância ostensiva."
    },
    {
      title: "Vigia Patrimonial",
      icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
      text: "Profissionais altamente treinados focados na prevenção e na segurança do seu ambiente."
    },
    {
      title: "Equipe de Portaria",
      icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h6M3 15h6"/></>,
      text: "Controle de acesso profissional para garantir que apenas pessoas autorizadas entrem no local."
    },
    {
      title: "Escolta",
      icon: <><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
      text: "Proteção móvel especializada para transporte seguro de bens de alto valor e pessoas."
    },
    {
      title: "Vídeo Monitoramento",
      icon: <><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></>,
      text: "Central de vigilância 24h com câmeras inteligentes e monitoramento remoto em tempo real."
    },
    {
      title: "Serviços Gerais",
      icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
      text: "Equipe de manutenção e limpeza para manter seu ambiente seguro e bem apresentado."
    }
  ];

  return (
    <section id="servicos" className="section-pad">
      <div className="container">
        <div className="text-center mb-5 fade-up">
          <span className="section-label">O Que Oferecemos</span>
          <h2 className="section-title">NOSSOS SERVIÇOS</h2>
          <div className="divider-red center"></div>
          <p className="c-gray" style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1rem", lineHeight: "1.9" }}>
            Soluções completas de segurança para empresas, condomínios e patrimônios privados em todo Brasil.
          </p>
        </div>
        <div className="svc-grid">
          {services.map((svc, idx) => (
            <div className="svc-card fade-up" key={idx}>
              <div className="svc-icon">
                <svg width="26" height="26" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                    {svc.icon}
                </svg>
              </div>
              <h4>{svc.title}</h4>
              <p>{svc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
