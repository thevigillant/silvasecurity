export default function Hero() {
  return (
    <section className="hero" id="inicio">
        <div className="hero-bg-watermark"></div>
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
        <div className="container">
            <div className="row hero-content">
                <div className="col-lg-8 col-xl-7">
                    <div className="hero-badge-wrap fade-up" style={{ transitionDelay: "100ms" }}>
                        <div className="pulse-dot"></div>
                        <span className="hero-kicker-pro">Monitoramento Operacional 24h</span>
                    </div>
                    
                    <h1 className="fade-up" style={{ transitionDelay: "200ms" }}>
                        SEGURANÇA <br /> DE <span>ALTO NÍVEL</span>
                    </h1>
                    
                    <div className="hero-divider fade-up" style={{ transitionDelay: "300ms" }}></div>
                    
                    <p className="lead fade-up" style={{ transitionDelay: "400ms" }}>
                        Soluções táticas integradas para preservação do seu negócio e patrimônio. 
                        Profissionalismo cirúrgico, inteligência em vigilância e força de pronto-resposta.
                    </p>
                    
                    <div className="fade-up" style={{ transitionDelay: "500ms" }}>
                        <a href="https://wa.me/5534992664338?text=Olá! Desejo consultar soluções de segurança empresarial." className="btn-main" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            Falar com Especialista
                        </a>
                    </div>

                    <div className="hero-stats fade-up" style={{ transitionDelay: "600ms" }}>
                        <div className="stat-item">
                            <h3>24/7</h3>
                            <p>Prontidão Tática</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Comprometimento</p>
                        </div>
                        <div className="stat-item">
                            <h3>Elite</h3>
                            <p>Controle Técnico</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
