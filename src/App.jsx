import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  CreditCard,
  MessageCircle,
  PawPrint,
  HeartHandshake,
  Home,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Utensils,
  Dumbbell,
  FileText,
  FolderUp,
  SearchCheck,
  Scissors,
  Send,
  Waves,
  Workflow,
} from 'lucide-react'
import { useState } from 'react'

const phoneDisplay = '0973819400'
const email = 'Marcelo_abud27@hotmail.com'
const whatsappNumber = '595973819400'
const whatsappText =
  'Hola Marcelo, vi tu página web y quiero automatizar las citas de mi negocio con IA.'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappText,
)}`

const sectors = [
  {
    icon: Stethoscope,
    title: 'Consultorios',
    text: 'Turnos, recordatorios, motivo de consulta e historial básico de pacientes.',
  },
  {
    icon: Utensils,
    title: 'Restaurantes',
    text: 'Reservas de mesas, horarios disponibles y confirmaciones automáticas.',
  },
  {
    icon: Waves,
    title: 'Spas',
    text: 'Tratamientos, duración por servicio y agenda ordenada para cada profesional.',
  },
  {
    icon: Scissors,
    title: 'Peluquerías',
    text: 'Cortes, color, barbería, uñas y reprogramaciones sin perder mensajes.',
  },
  {
    icon: Dumbbell,
    title: 'Gimnasios',
    text: 'Clases, evaluaciones, cupos y reservas sincronizadas con calendario.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Abogados',
    text: 'Consultas, seguimiento de casos, documentos y organización por cliente.',
  },
  {
    icon: HeartHandshake,
    title: 'Psicólogos',
    text: 'Sesiones, recordatorios, historial de pacientes y seguimiento ordenado.',
  },
  {
    icon: PawPrint,
    title: 'Veterinarias',
    text: 'Turnos, vacunas, controles, recordatorios y fichas de mascotas.',
  },
  {
    icon: Sparkles,
    title: 'Centros estéticos',
    text: 'Tratamientos, paquetes, promociones y agenda por profesional.',
  },
  {
    icon: Home,
    title: 'Inmobiliarias',
    text: 'Visitas a propiedades, consultas, documentos y seguimiento de interesados.',
  },
]

const sectorDetails = [
  {
    benefitTitle: 'Más orden en la atención de pacientes',
    benefits: [
      'Agenda turnos por WhatsApp sin depender de una secretaria todo el tiempo.',
      'Pide motivo de consulta antes de confirmar el horario.',
      'Envía recordatorios para reducir ausencias.',
      'Permite guardar historial, notas y seguimiento del paciente.',
    ],
    example:
      'Un paciente escribe para pedir consulta. La IA consulta horarios, confirma el turno en Google Calendar y guarda el motivo de consulta.',
  },
  {
    benefitTitle: 'Reservas más rápidas y menos mensajes perdidos',
    benefits: [
      'Toma reservas de mesas por WhatsApp incluso fuera del horario de atención.',
      'Pregunta fecha, hora, cantidad de personas y preferencias.',
      'Confirma o deriva a una persona si es un evento especial.',
      'Organiza las reservas en calendario o panel.',
    ],
    example:
      'Un cliente pide mesa para 6 personas. La IA valida disponibilidad, confirma la reserva y deja el registro listo para el equipo.',
  },
  {
    benefitTitle: 'Turnos organizados por tratamiento y duración',
    benefits: [
      'Ofrece horarios según el tratamiento elegido.',
      'Calcula duración del servicio para evitar choques de agenda.',
      'Envía recordatorios e indicaciones previas.',
      'Permite organizar turnos por profesional.',
    ],
    example:
      'Una persona pide masaje relajante. La IA ofrece horarios disponibles, confirma el turno y envía un recordatorio automático.',
  },
  {
    benefitTitle: 'Menos interrupciones y agenda más llena',
    benefits: [
      'Agenda cortes, color, barbería, uñas u otros servicios.',
      'Pregunta servicio, profesional preferido y horario disponible.',
      'Permite reagendar sin conversación manual larga.',
      'Reduce turnos olvidados con recordatorios.',
    ],
    example:
      'Un cliente pide corte y barba para el viernes. La IA propone horarios, confirma y lo sincroniza en el calendario.',
  },
  {
    benefitTitle: 'Clases y evaluaciones con cupos controlados',
    benefits: [
      'Reserva clases, evaluaciones físicas o sesiones personalizadas.',
      'Controla cupos disponibles por horario.',
      'Envía recordatorios antes de cada clase.',
      'Envía avisos de cuotas pendientes solo a quienes aún no pagaron.',
    ],
    example:
      'Un socio quiere reservar funcional a las 19:00. La IA revisa cupos, confirma y también puede recordarle la cuota mensual si figura pendiente.',
  },
  {
    benefitTitle: 'Consultas y documentos organizados por caso',
    benefits: [
      'Agenda consultas legales y reuniones con clientes.',
      'Permite subir documentos por cliente o expediente.',
      'La IA ayuda a resumir, buscar información y preparar tareas.',
      'Ordena seguimiento de cada caso en un panel.',
    ],
    example:
      'Un abogado sube contrato y antecedentes del cliente. Luego pregunta a la IA puntos clave o pide un resumen del caso.',
  },
  {
    benefitTitle: 'Sesiones organizadas y seguimiento más claro',
    benefits: [
      'Agenda sesiones y envía recordatorios automáticos.',
      'Permite registrar notas internas e historial por paciente.',
      'Ayuda a mantener ordenado el seguimiento de cada caso.',
      'Deriva a atención humana cuando el mensaje requiere cuidado.',
    ],
    example:
      'Un paciente pide cambiar su sesión. La IA ofrece horarios libres, actualiza la agenda y guarda el cambio.',
  },
  {
    benefitTitle: 'Turnos y controles de mascotas sin desorden',
    benefits: [
      'Agenda consultas, vacunas, baños o controles.',
      'Guarda datos de la mascota y del responsable.',
      'Envía recordatorios para vacunas o próximos controles.',
      'Ordena historial básico por mascota.',
    ],
    example:
      'Un cliente pide turno para vacuna. La IA confirma horario, registra mascota y programa recordatorio para el próximo control.',
  },
  {
    benefitTitle: 'Más reservas para tratamientos y paquetes',
    benefits: [
      'Agenda tratamientos por duración, profesional o cabina.',
      'Responde consultas sobre precios, promociones y cuidados.',
      'Envía recordatorios e indicaciones previas.',
      'Ayuda a vender paquetes y organizar clientes frecuentes.',
    ],
    example:
      'Una clienta consulta por limpieza facial. La IA responde disponibilidad, precio básico y confirma el turno.',
  },
  {
    benefitTitle: 'Más orden para visitas e interesados',
    benefits: [
      'Agenda visitas a propiedades con fecha y horario.',
      'Responde consultas frecuentes sobre ubicación, requisitos o precio.',
      'Organiza interesados por propiedad.',
      'Permite trabajar con documentos y datos de cada operación.',
    ],
    example:
      'Un interesado pide visitar un departamento. La IA coordina horario, registra sus datos y deja la visita en calendario.',
  },
]

const benefits = [
  'Menos horas administrativas respondiendo mensajes repetidos',
  'Menos dependencia de personal para tareas operativas simples',
  'Atención automática 24/7 desde WhatsApp',
  'Sincronización con Google Calendar',
  'Panel propio para ver citas, clientes y estados',
  'Recordatorios para reducir ausencias',
  'Recordatorios de pago y cuotas pendientes',
  'Flujos profesionales conectados con n8n Cloud',
  'Derivación a humano cuando el caso lo necesita',
]

const savings = [
  {
    icon: Clock3,
    title: 'Ahorro de tiempo diario',
    text: 'Responde consultas, toma datos, confirma citas y envía recordatorios sin intervención constante.',
  },
  {
    icon: MessageCircle,
    title: 'Menos carga para recepción',
    text: 'Menos horas respondiendo horarios, precios, disponibilidad, pagos o cambios de turno.',
  },
  {
    icon: BarChart3,
    title: 'Más control con menos esfuerzo',
    text: 'Citas, clientes, pagos y documentos quedan ordenados en un panel simple.',
  },
]

const features = [
  {
    icon: MessageCircle,
    title: 'WhatsApp como entrada principal',
    text: 'El cliente escribe como siempre y la IA guía la reserva.',
  },
  {
    icon: CalendarCheck,
    title: 'Calendario sincronizado',
    text: 'Cada cita confirmada queda en Google Calendar y en el panel.',
  },
  {
    icon: BarChart3,
    title: 'Panel para gestionar',
    text: 'Vista diaria de turnos, clientes, pagos y seguimientos.',
  },
  {
    icon: ShieldCheck,
    title: 'Implementación cuidada',
    text: 'Reglas, horarios, servicios y mensajes definidos antes de activar.',
  },
]

const documentServices = [
  {
    icon: FolderUp,
    title: 'Subida manual de documentos',
    text: 'El profesional carga archivos, notas, historiales, contratos o estudios.',
  },
  {
    icon: SearchCheck,
    title: 'Preguntas sobre lo cargado',
    text: 'La IA busca datos, resume casos y ayuda a preparar respuestas.',
  },
  {
    icon: FileText,
    title: 'Trabajo organizado por caso',
    text: 'Orden por cliente, paciente, expediente o caso profesional.',
  },
]

const paymentServices = [
  {
    icon: CreditCard,
    title: 'Estados de pago simples',
    text: 'El encargado marca cuotas pagadas, pendientes o vencidas.',
  },
  {
    icon: Send,
    title: 'Avisos automáticos por WhatsApp',
    text: 'Se avisa solo a quienes siguen pendientes, sin molestar a los que ya pagaron.',
  },
  {
    icon: FileText,
    title: 'QR y datos bancarios',
    text: 'El mensaje puede incluir QR, cuenta bancaria, monto y vencimiento.',
  },
]

const steps = [
  'Conectamos tu WhatsApp o formulario de contacto.',
  'Configuramos servicios, horarios, reglas y calendario.',
  'La IA atiende, agenda, confirma y avisa cuando debe intervenir una persona.',
]

const plans = [
  {
    name: 'Inicial',
    description: 'Para negocios que quieren empezar a tomar citas sin responder todo manualmente.',
    items: [
      'Agendamiento automático de citas',
      'Sincronización con Google Calendar',
      'Bot que responde consultas y reservas',
    ],
  },
  {
    name: 'Automatizado',
    description: 'El paquete más completo para automatizar reservas y mantener control manual cuando haga falta.',
    items: [
      'Todo lo del plan Inicial',
      'Página web para presentar el servicio',
      'Panel del cliente para revisar y editar citas',
      'Cambios manuales sincronizados con Google Calendar',
      'Mensajes recordatorios automáticos',
      'Recordatorios de pago y cuotas pendientes',
    ],
    highlighted: true,
  },
  {
    name: 'Profesional',
    description: 'Para empresas grandes, clínicas o negocios con mucho flujo de mensajes, reservas y seguimiento.',
    items: [
      'Todo lo del plan Automatizado',
      'Mayor capacidad para alto volumen de consultas',
      'Historial organizado de clientes o pacientes',
      'Carga manual de documentos, historiales, notas y casos',
      'Panel para consultar cada cliente y su seguimiento',
      'Control de pagos pendientes por cliente o paciente',
      'IA entrenada con información de tu negocio',
      'Asistente IA para consultar documentos y realizar trabajos específicos',
      'Soporte rápido y mejoras personalizadas según el requerimiento del cliente',
    ],
  },
  {
    name: 'IA Documental',
    description: 'Para profesionales que solo quieren trabajar con sus documentos usando IA, sin necesidad de agenda.',
    items: [
      'Web app privada para subir documentos',
      'Carga manual de archivos, notas, contratos o historiales',
      'Consultas inteligentes sobre la información cargada',
      'Resúmenes, análisis y trabajos específicos con documentos',
      'Organización por cliente, paciente, caso o expediente',
    ],
  },
]

function App() {
  const [selectedSectorIndex, setSelectedSectorIndex] = useState(null)

  const openSector = (index) => {
    setSelectedSectorIndex(index)
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  const closeSector = () => {
    setSelectedSectorIndex(null)
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  const goToSection = (event, sectionId) => {
    event.preventDefault()
    setSelectedSectorIndex(null)
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', `#${sectionId}`)
    }, 50)
  }

  return (
    <main className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-white/92 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            onClick={(event) => goToSection(event, 'inicio')}
            className="flex items-center gap-3"
            aria-label="Inicio"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white">
              <Sparkles size={21} />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">Abud Hnos. Gestión Digital</span>
              <span className="block text-xs text-muted">Agenda, pagos y documentos con IA</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
            <a className="hover:text-ink" href="#rubros" onClick={(event) => goToSection(event, 'rubros')}>
              Rubros
            </a>
            <a className="hover:text-ink" href="#funciona" onClick={(event) => goToSection(event, 'funciona')}>
              Cómo funciona
            </a>
            <a className="hover:text-ink" href="#pagos" onClick={(event) => goToSection(event, 'pagos')}>
              Pagos
            </a>
            <a className="hover:text-ink" href="#documentos" onClick={(event) => goToSection(event, 'documentos')}>
              IA documentos
            </a>
            <a className="hover:text-ink" href="#planes" onClick={(event) => goToSection(event, 'planes')}>
              Planes
            </a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Escribir directo por WhatsApp"
            title="Escribir directo por WhatsApp"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-100"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </nav>
        <div className="border-t border-line/70 px-4 pb-3 lg:hidden">
          <div className="flex gap-2 overflow-x-auto pt-3 text-sm font-semibold text-muted">
            {[
              ['Rubros', 'rubros'],
              ['Pagos', 'pagos'],
              ['Documentos', 'documentos'],
              ['Planes', 'planes'],
            ].map(([label, sectionId]) => (
              <a
                key={sectionId}
                href={`#${sectionId}`}
                onClick={(event) => goToSection(event, sectionId)}
                className="inline-flex min-h-11 shrink-0 items-center rounded-lg border border-line bg-white px-3 py-2 hover:border-brand hover:text-ink"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {selectedSectorIndex !== null ? (
        <SectorDetailView
          detail={sectorDetails[selectedSectorIndex]}
          onBack={closeSector}
          sector={sectors[selectedSectorIndex]}
        />
      ) : (
        <>
      <section id="inicio" className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-sm font-semibold text-brand">
              <Workflow size={17} />
              WhatsApp + IA + Google Calendar + panel
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Agenda citas automáticamente por WhatsApp con IA
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Automatizamos reservas, recordatorios, pagos pendientes y consultas
              por WhatsApp para que tu equipo ahorre tiempo, atienda mejor y deje
              de repetir las mismas tareas todos los días.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                Quiero automatizar mi agenda
                <ArrowRight size={19} />
              </a>
              <a
                href="#funciona"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 font-semibold text-ink transition hover:border-ink focus:outline-none focus:ring-4 focus:ring-slate-100"
              >
                Ver cómo funciona
                <ChevronRight size={19} />
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <Metric value="24/7" label="Atención automática" />
              <Metric value="- horas" label="Menos trabajo manual" />
              <Metric value="- costos" label="Menos carga operativa" />
            </div>
          </div>

          <HeroPreview />
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase text-brand">Servicios principales</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <ServiceShortcut
              icon={CalendarCheck}
              onNavigate={goToSection}
              sectionId="rubros"
              title="Agenda automática"
              text="Reservas y citas por WhatsApp, con Google Calendar, panel y recordatorios."
            />
            <ServiceShortcut
              icon={CreditCard}
              onNavigate={goToSection}
              sectionId="pagos"
              title="Pagos pendientes"
              text="Avisos automáticos a clientes con cuotas vencidas, QR y datos bancarios."
            />
            <ServiceShortcut
              icon={FileText}
              onNavigate={goToSection}
              sectionId="documentos"
              title="IA con documentos"
              text="Web app para subir archivos y consultar, resumir o trabajar con esa información."
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div>
            <SectionIntro
              eyebrow="Ahorro operativo"
              title="Menos tiempo en tareas repetitivas, más foco en atender y vender"
              text="La IA se ocupa de consultas repetidas, confirmaciones, recordatorios y avisos. Tu equipo queda para atender mejor, vender y resolver casos importantes."
            />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              Quiero ahorrar tiempo
              <ArrowRight size={19} />
            </a>
          </div>
          <div className="grid gap-4">
            {savings.map((saving) => (
              <article key={saving.title} className="flex gap-4 rounded-lg border border-line bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-mint text-brand">
                  <saving.icon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold">{saving.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{saving.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rubros" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Rubros"
            title="Una agenda inteligente para negocios que viven de reservas"
            text="El sistema se adapta al lenguaje, horarios, duración de citas y preguntas de cada negocio."
          />
          <p className="mt-5 max-w-2xl text-sm font-semibold text-muted">
            Tocá un rubro para abrir una vista con su ejemplo, beneficios y flujo de uso.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map((sector, index) => (
              <button
                key={sector.title}
                type="button"
                onClick={() => openSector(index)}
                className="rounded-lg border border-line bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-brand hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-teal-100"
              >
                <sector.icon className="text-ocean" size={24} />
                <h3 className="mt-4 text-lg font-semibold">{sector.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{sector.text}</p>
                <span className="mt-4 inline-flex text-xs font-bold uppercase text-brand">
                  Ver ejemplo
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionIntro
              eyebrow="Beneficios"
              title="Tu negocio responde mejor con menos trabajo manual"
              text="Automatizamos lo repetitivo para ahorrar tiempo, bajar carga operativa y mejorar la atención sin perder el trato humano."
            />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-100"
            >
              Hablar por WhatsApp
              <MessageCircle size={19} />
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-lg border border-line bg-white p-4">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-brand">
                  <Check size={16} />
                </span>
                <p className="text-sm font-medium leading-6">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="funciona" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Cómo funciona"
            title="Del mensaje del cliente al turno confirmado"
            text="El cliente escribe. La IA responde, toma datos, agenda, recuerda pagos y avisa cuando debe intervenir una persona."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-5 text-lg font-semibold leading-7">{step}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-lg border border-line bg-paper p-5">
                <feature.icon className="text-brand" size={24} />
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pagos" className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionIntro
              eyebrow="Pagos pendientes"
              title="Recordatorios automáticos para cuotas y pagos atrasados"
              text="Ideal para negocios con pagos mensuales: el sistema avisa automáticamente a quienes siguen pendientes."
            />
            <div className="mt-6 rounded-lg border border-line bg-white p-5">
              <p className="text-sm font-bold uppercase text-muted">Ejemplo de uso</p>
              <p className="mt-3 text-base leading-7 text-ink">
                El encargado marca quién pagó. En la fecha configurada, la IA
                escribe solo a los pendientes con QR, cuenta o instrucciones de pago.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {paymentServices.map((service) => (
              <article key={service.title} className="flex gap-4 rounded-lg border border-line bg-white p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-mint text-brand">
                  <service.icon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="documentos" className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionIntro
              eyebrow="IA con documentos"
              title="Un asistente que trabaja con la información del profesional"
              text="Una web app privada donde el profesional sube documentos y la IA ayuda a buscar, resumir y trabajar con esa información."
            />
          </div>
          <div className="grid gap-4">
            {documentServices.map((service) => (
              <article key={service.title} className="flex gap-4 rounded-lg border border-line bg-paper p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-ocean">
                  <service.icon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="planes" className="border-y border-line bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Opciones"
            title="Elegí entre agenda automática, panel completo o IA con documentos"
            text="Podés empezar con agenda automática, sumar panel y pagos, o crear una web app documental con IA."
          />
          <div className="mt-6 rounded-lg border border-line bg-white p-5">
            <p className="text-sm font-bold uppercase text-brand">Cotización personalizada</p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
              Empezamos con una reunión breve para entender tu negocio, detectar
              qué tareas conviene automatizar y recomendarte el plan adecuado con
              una cotización correcta.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-lg border p-6 ${
                  plan.highlighted
                    ? 'border-brand bg-white shadow-soft'
                    : 'border-line bg-white'
                }`}
              >
                {plan.highlighted && (
                  <span className="mb-4 inline-flex rounded-lg bg-mint px-3 py-1 text-xs font-bold uppercase text-brand">
                    Más recomendado
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-muted">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-medium">
                      <Check className="mt-0.5 shrink-0 text-brand" size={17} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-200">Abud Hnos. Gestión Digital</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              Mientras vos atendés tu negocio, la IA puede ahorrar horas de trabajo por vos.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Escribime al {phoneDisplay} y coordinamos una reunión breve para
              entender tu negocio, recomendarte el plan adecuado y darte una
              cotización correcta.
            </p>
            <p className="mt-2 max-w-2xl leading-7 text-slate-300">
              También podés escribirme a {email}.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-ink transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-white/20"
          >
            Escribime por WhatsApp
            <ArrowRight size={19} />
          </a>
        </div>
      </section>
        </>
      )}

      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Abud Hnos. Gestión Digital. Automatización de citas, pagos y documentos con IA.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <a className="font-semibold text-ink hover:text-brand" href={`mailto:${email}`}>
              {email}
            </a>
            <a className="font-semibold text-ink hover:text-brand" href={`tel:${phoneDisplay}`}>
              {phoneDisplay}
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function SectorDetailView({ detail, onBack, sector }) {
  const Icon = sector.icon

  return (
    <section className="min-h-[calc(100vh-69px)] bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink focus:outline-none focus:ring-4 focus:ring-slate-100"
        >
          <ArrowLeft size={18} />
          Volver a la página principal
        </button>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="rounded-lg border border-line bg-white p-6 shadow-soft sm:p-8">
            <span className="grid h-14 w-14 place-items-center rounded-lg bg-mint text-brand">
              <Icon size={28} />
            </span>
            <p className="mt-6 text-sm font-bold uppercase text-brand">Ejemplo para {sector.title}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              {detail.benefitTitle}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">{sector.text}</p>
            <div className="mt-6 rounded-lg border border-line bg-paper p-5">
              <p className="text-sm font-bold uppercase text-muted">Caso práctico</p>
              <p className="mt-3 text-base leading-7 text-ink">{detail.example}</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-100"
              >
                Quiero algo así
                <MessageCircle size={19} />
              </a>
              <button
                type="button"
                onClick={onBack}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 font-semibold text-ink transition hover:border-ink focus:outline-none focus:ring-4 focus:ring-slate-100"
              >
                Ver otros rubros
                <ChevronRight size={19} />
              </button>
            </div>
          </div>

          <div className="grid gap-5">
            <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Cómo se beneficiaría</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {detail.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 rounded-lg border border-line bg-paper p-4">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-brand">
                      <Check size={16} />
                    </span>
                    <p className="text-sm font-medium leading-6">{benefit}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Flujo simple</h2>
              <div className="mt-5 grid gap-3">
                {[
                  'El cliente escribe por WhatsApp o desde la página web.',
                  'La IA entiende el pedido y pide los datos necesarios.',
                  'El turno, consulta o caso queda organizado en calendario, panel o documentos.',
                ].map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-lg bg-paper p-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold leading-6">{step}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">
      <div className="absolute -right-2 top-7 z-20 hidden rounded-lg bg-white px-3 py-2 text-xs font-bold text-ink shadow-soft sm:block">
        Vista tipo panel real
      </div>
      <div className="absolute -left-3 bottom-20 z-20 hidden rounded-lg border border-line bg-white p-3 shadow-soft sm:block">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-mint text-brand">
            <CreditCard size={18} />
          </span>
          <div>
            <p className="text-xs font-bold uppercase text-muted">Cobros</p>
            <p className="text-sm font-bold">12 avisos enviados</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-line bg-slate-950 shadow-soft">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          </div>
          <p className="text-xs font-semibold text-slate-400">Abud Hnos. Gestión Digital</p>
        </div>

        <div className="grid bg-white sm:grid-cols-[76px_1fr]">
          <aside className="hidden border-r border-line bg-slate-950 p-3 sm:block">
            <div className="grid gap-3">
              {[MessageCircle, CalendarCheck, CreditCard, FileText].map((Icon, index) => (
                <span
                  key={index}
                  className={`grid h-11 w-11 place-items-center rounded-lg ${
                    index === 1 ? 'bg-brand text-white' : 'bg-white/8 text-slate-300'
                  }`}
                >
                  <Icon size={19} />
                </span>
              ))}
            </div>
          </aside>

          <div className="bg-paper p-3 sm:p-4">
            <div className="mb-4 flex flex-col gap-3 rounded-lg border border-line bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-brand">Panel del cliente</p>
                <p className="mt-1 text-lg font-bold">Agenda, pagos y documentos</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-lg bg-mint px-3 py-2 text-xs font-bold text-brand">
                <span className="h-2 w-2 rounded-full bg-brand"></span>
                IA activa
              </span>
            </div>

            <div className="grid gap-3 lg:grid-cols-[0.94fr_1.06fr]">
              <div className="rounded-lg border border-line bg-white p-4">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <div>
                    <p className="text-sm font-bold">WhatsApp IA</p>
                    <p className="text-xs text-muted">conversación automática</p>
                  </div>
                  <MessageCircle className="text-brand" size={22} />
                </div>
                <div className="mt-4 space-y-3">
                  <Bubble side="left">Quiero reservar para mañana.</Bubble>
                  <Bubble side="right">Tengo 10:00, 15:30 o 18:00. ¿Cuál preferís?</Bubble>
                  <Bubble side="left">15:30 está bien.</Bubble>
                  <Bubble side="right">Listo. Turno confirmado y recordatorio programado.</Bubble>
                </div>
              </div>

              <div className="hidden gap-3 sm:grid">
                <div className="rounded-lg border border-line bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold">Agenda de hoy</p>
                      <p className="text-xs text-muted">Google Calendar sincronizado</p>
                    </div>
                    <CalendarCheck className="text-ocean" size={22} />
                  </div>
                  <div className="mt-4 space-y-2">
                    <Appointment time="10:00" name="Consulta inicial" status="Confirmado" />
                    <Appointment time="15:30" name="Reserva nueva" status="IA" />
                    <Appointment time="18:00" name="Recordatorio enviado" status="WhatsApp" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <MiniPanelCard
                    icon={CreditCard}
                    label="Pagos"
                    title="Cuotas pendientes"
                    text="QR y cuenta enviados"
                    tone="brand"
                  />
                  <MiniPanelCard
                    icon={FileText}
                    label="Documentos"
                    title="Historiales cargados"
                    text="Listos para consultar"
                    tone="sun"
                  />
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:hidden">
              <HeroStat label="Citas" value="34" />
              <HeroStat label="Avisos" value="12" />
            </div>

            <div className="mt-3 hidden grid-cols-3 gap-3 md:grid">
              <HeroStat label="Citas confirmadas" value="34" />
              <HeroStat label="Mensajes ahorrados" value="+180" />
              <HeroStat label="Pagos avisados" value="12" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-5 w-[86%] rounded-b-[24px] border-x border-b border-line bg-slate-200/80 p-2">
        <div className="mx-auto h-1.5 w-24 rounded-full bg-slate-400/60"></div>
      </div>
    </div>
  )
}

function MiniPanelCard({ icon: Icon, label, title, text, tone }) {
  const toneClass = tone === 'sun' ? 'bg-amber-50 text-sun' : 'bg-mint text-brand'

  return (
    <div className="rounded-lg border border-line bg-white p-3">
      <span className={`grid h-9 w-9 place-items-center rounded-lg ${toneClass}`}>
        <Icon size={18} />
      </span>
      <p className="mt-3 text-[11px] font-bold uppercase text-muted">{label}</p>
      <p className="mt-1 text-sm font-bold">{title}</p>
      <p className="text-xs leading-5 text-muted">{text}</p>
    </div>
  )
}

function HeroStat({ label, value }) {
  return (
    <div className="rounded-lg border border-line bg-white px-4 py-3">
      <p className="text-xl font-bold text-ink">{value}</p>
      <p className="text-xs font-semibold text-muted">{label}</p>
    </div>
  )
}

function Bubble({ children, side }) {
  const align = side === 'right' ? 'ml-auto bg-brand text-white' : 'mr-auto bg-white text-ink'
  return (
    <p className={`max-w-[88%] rounded-lg px-3 py-2 text-sm leading-5 shadow-sm ${align}`}>
      {children}
    </p>
  )
}

function Appointment({ time, name, status }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs shadow-sm">
      <div>
        <p className="font-bold">{time}</p>
        <p className="text-muted">{name}</p>
      </div>
      <span className="rounded-full bg-slate-100 px-2 py-1 font-bold text-slate-600">{status}</span>
    </div>
  )
}

function Metric({ value, label }) {
  return (
    <div className="rounded-lg border border-line bg-white p-4">
      <p className="text-2xl font-bold text-ink">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  )
}

function ServiceShortcut({ icon: Icon, onNavigate, sectionId, title, text }) {
  return (
    <a
      href={`#${sectionId}`}
      onClick={(event) => onNavigate(event, sectionId)}
      className="flex gap-4 rounded-lg border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-teal-100"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-paper text-brand">
        <Icon size={22} />
      </span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
      </div>
    </a>
  )
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase text-brand">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted">{text}</p>
    </div>
  )
}

export default App
