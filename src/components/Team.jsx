export default function Team() {
  return (
    <section id="equipe" className="section-pad">
        <div className="container">
            <div className="row align-items-center g-5">
                <div className="col-lg-5 fade-up">
                    <div className="team-img-wrap">
                        <img src="/images/WhatsApp Image 2026-03-11 at 19.29.36 (3).jpeg" alt="Equipe Silva Security" className="rounded-3" />
                    </div>
                </div>
                <div className="col-lg-7 team-text fade-up">
                    <span className="section-label">Nossa Equipe</span>
                    <h2 className="section-title">PREPARO, DISCIPLINA<br /><span className="c-red">E RESPONSABILIDADE</span></h2>
                    <div className="divider-red" style={{ marginBottom: "32px" }}></div>
                    <p>
                        Cada agente da nossa força tática é selecionado sob os mais rigorosos padrões de conduta, aptidão física e formação. A equipe age com discrição, eficiência e sem improvisos.
                    </p>
                    <p>
                        Uniformizados e identificados, nossos agentes transmitem autoridade e inspiram confiança em todos os ambientes onde atuam.
                    </p>
                    <ul className="check-list mt-4">
                        <li><span className="check-dot"></span> Treinamento tático e condicionamento físico contínuos</li>
                        <li><span className="check-dot"></span> Padronização e identificação em serviço</li>
                        <li><span className="check-dot"></span> Suporte e respaldo operacional 24h</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}
