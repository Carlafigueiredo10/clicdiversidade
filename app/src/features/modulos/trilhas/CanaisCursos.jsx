// Canais externos que publicam cursos gratuitos com regularidade.
// A lista cresce: para incluir outro canal, acrescente um objeto aqui.
// `entrega` diz o que o canal faz com a atencao de quem segue — e o que
// diferencia um do outro para quem esta decidindo qual acompanhar.
import { tr } from '../../../i18n'

const CANAIS_PT = [
  {
    nome: 'Governatech',
    plataforma: 'Canal no WhatsApp',
    icon: '💬',
    entrega: 'Os cursos chegam no seu celular, junto com as outras mensagens.',
    url: 'https://www.whatsapp.com/channel/0029Vb6DD2AAu3aXBFT6So0R',
  },
  {
    nome: 'Governatech',
    plataforma: 'LinkedIn',
    icon: '💼',
    entrega: 'Posts públicos, sem entrar no seu telefone.',
    url: 'https://www.linkedin.com/company/governatech-brasil/',
  },
]

// Catalogos em espanhol verificados (pesquisa de 2026-10-19) + o canal da
// Carla, que publica em portugues.
const CANAIS_ES = [
  {
    nome: 'Plataforma Educativa de AGESIC',
    plataforma: 'Uruguay · requiere ID Uruguay',
    icon: '🇺🇾',
    entrega: 'Cursos autoasistidos y gratuitos del gobierno uruguayo: protección de datos, acceso a la información, ciudadanía digital.',
    url: 'https://capacitacion.agesic.gub.uy/course/index.php',
  },
  {
    nome: 'ONSC · Escuela Nacional de Administración Pública',
    plataforma: 'Uruguay · por convocatoria',
    icon: '🏛️',
    entrega: 'Trayectos para funcionarias y funcionarios públicos, con cursos de transformación digital, datos e IA.',
    url: 'https://www.gub.uy/oficina-nacional-servicio-civil/formacion-capacitacion',
  },
  {
    nome: 'Catálogo de cursos del BID',
    plataforma: 'Regional',
    icon: '🌎',
    entrega: 'Cursos en línea sobre gestión pública, datos y gobierno digital, con credencial digital del BID.',
    url: 'https://knowledge.iadb.org/es/catalogo-de-cursos',
  },
  {
    nome: 'Escuela de Datos',
    plataforma: 'Regional',
    icon: '📊',
    entrega: 'Comunidad hispanohablante con cursos abiertos de planillas, datos e IA generativa.',
    url: 'https://escueladedatos.online/cursos/',
  },
  {
    nome: 'Governatech',
    plataforma: 'Canal de WhatsApp · en portugués',
    icon: '💬',
    entrega: 'El canal brasileño que difunde cursos gratuitos de IA para el sector público.',
    url: 'https://www.whatsapp.com/channel/0029Vb6DD2AAu3aXBFT6So0R',
  },
]

const CANAIS = tr({ pt: CANAIS_PT, es: CANAIS_ES })

const T = tr({
  pt: {
    eyebrow: 'A curadoria não para aqui', titulo: 'As trilhas acima são uma foto',
    texto: 'São os cursos que estavam de pé quando esta página foi montada. Curso sai do ar, link muda, coisa nova aparece. Estes canais publicam cursos gratuitos com regularidade — vale acompanhar enquanto você faz a sua trilha.',
    acompanhar: 'Acompanhar →', externos: 'Canais externos. Abrem fora do CLIC.',
  },
  es: {
    eyebrow: 'La curaduría no termina aquí', titulo: 'Las rutas de arriba son una foto',
    texto: 'Son los cursos que estaban disponibles cuando se armó esta página. Los cursos salen de línea, los enlaces cambian, aparecen cosas nuevas. Estos catálogos y canales publican cursos gratuitos con regularidad — vale la pena seguirlos mientras haces tu ruta.',
    acompanhar: 'Ver →', externos: 'Sitios externos. Se abren fuera de CLIC.',
  },
})

export default function CanaisCursos() {
  const canais = CANAIS.filter((c) => c.url)
  if (canais.length === 0) return null

  return (
    <section className="mt-20 pt-12 border-t border-line">
      <div className="mx-auto max-w-3xl bg-card border border-line rounded-3xl p-7 md:p-10">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
          {T.eyebrow}
        </p>
        <h2 className="mt-3 font-display font-semibold text-2xl md:text-3xl text-ink leading-tight">
          {T.titulo}
        </h2>
        <p className="mt-4 text-ink-soft text-sm md:text-base leading-relaxed max-w-xl">
          {T.texto}
        </p>

        <div
          className={
            'mt-7 grid gap-3 ' + (canais.length > 1 ? 'sm:grid-cols-2' : 'max-w-sm')
          }
        >
          {canais.map((c) => (
            <a
              key={c.plataforma + c.nome}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-page border border-line rounded-2xl p-5 hover:border-accent/40 transition"
            >
              <div className="flex items-baseline gap-2.5">
                <span aria-hidden className="text-lg">
                  {c.icon}
                </span>
                <div>
                  <p className="font-semibold text-ink text-sm leading-tight">
                    {c.nome}
                  </p>
                  <p className="text-xs text-muted mt-0.5">{c.plataforma}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                {c.entrega}
              </p>
              <p className="mt-4 text-sm font-medium text-accent-fg">
                {T.acompanhar}
              </p>
            </a>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted">
          {T.externos}
        </p>
      </div>
    </section>
  )
}
