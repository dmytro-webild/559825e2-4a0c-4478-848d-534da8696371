"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users, Facebook, Instagram, Linkedin, Rss } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Gallica Agency"
          navItems={[
            { name: "Servicios", id: "services" },
            { name: "Proyectos", id: "projects" },
            { name: "Nosotros", id: "about" },
            { name: "Contacto", id: "contact" },
          ]}
          button={{ text: "Agendar diagnóstico", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="Marketing digital para negocios que venden con claridad"
          description="Ordenamos tu presencia digital para que comuniques mejor. En Gallica Agency ayudamos a marcas a verse más profesionales, crear contenido estratégico y conectar con clientes que realmente importan."
          tag="Desde Costa Rica al mundo"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Agendar diagnóstico", href: "#contact" },
            { text: "Ver proyectos", href: "#projects" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/teamwork-developing-new-project-together_1098-21664.jpg", imageAlt: "Digital marketing strategy meeting" },
            { imageSrc: "http://img.b2bpic.net/free-photo/web-design-online-technology-content-concept_53876-123927.jpg", imageAlt: "Professional website showcasing services" },
            { imageSrc: "http://img.b2bpic.net/free-photo/promotion-product-strategy-marketing-concept_53876-133988.jpg", imageAlt: "Creative social media content" },
            { imageSrc: "http://img.b2bpic.net/free-photo/graph-growth-development-improvement-profit-success-concept_53876-123948.jpg", imageAlt: "Graph showing business growth" },
            { imageSrc: "http://img.b2bpic.net/free-psd/business-template-design_23-2150585815.jpg", imageAlt: "Clean and modern website design" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/white-grey-business-cards_23-2148500495.jpg", imageAlt: "Brand identity design elements" },
            { imageSrc: "http://img.b2bpic.net/free-photo/businessman-application-human-digital-business_1150-1729.jpg", imageAlt: "Customer service and connection" },
            { imageSrc: "http://img.b2bpic.net/free-photo/workaholics-businesspeople-brainstorming-financial-company-ideas-analyzing-strategy-paperwork-late-night-business-office-meeting-room_482257-2170.jpg", imageAlt: "Strategic planning session" },
            { imageSrc: "http://img.b2bpic.net/free-photo/discussing-mobile-app_1098-18640.jpg", imageAlt: "Online presence dashboard" }
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Nuestros Servicios"
          description="Soluciones estratégicas para potenciar tu marca y conectar con tu audiencia."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[{ text: "Todos los servicios", href: "#services" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "Posicionamiento SEO",              description: "Mejora tu visibilidad en buscadores y atrae tráfico orgánico de calidad.",              bentoComponent: "marquee",              centerIcon: Search,
              variant: "text",              texts: ["Palabras Clave", "Backlinks", "Tráfico Orgánico", "Visibilidad", "Análisis", "Rankings"],
            },
            {
              title: "Diseño Web Profesional",              description: "Creamos sitios web modernos, rápidos y funcionales, optimizados para la conversión.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/modern-office-desk-composition_23-2147915791.jpg", imageAlt: "Responsive web design on laptop" },
                { imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150104498.jpg", imageAlt: "Modern website UI UX design" },
                { imageSrc: "http://img.b2bpic.net/free-photo/black-it-developer-pc-coding-creating-app-software_482257-126989.jpg", imageAlt: "Coding on a desktop computer" },
              ],
            },
            {
              title: "Identidad de Marca",              description: "Construimos una marca coherente y atractiva que resuene con tus clientes ideales.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/pink-adhesive-notes-ruler-white-background_23-2147875633.jpg", imageAlt: "Branding guidelines and mood board" },
                { imageSrc: "http://img.b2bpic.net/free-photo/woman-makes-patriotic-gingerbread-support-ukraine_169016-20150.jpg", imageAlt: "Logo design and visual identity" },
                { imageSrc: "http://img.b2bpic.net/free-photo/template-badge-layout-mock-up-visual-blank-concept_53876-120337.jpg", imageAlt: "Brand stationery and packaging" },
              ],
            },
          ]}
        />
        <FeatureCardTwentySix
          title="Proyectos Destacados"
          description="Una muestra de cómo transformamos la presencia digital de nuestros clientes."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Ver todos los proyectos", href: "#projects" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            {
              title: "Restaurante Sabor Tico",              description: "Presencia digital completa y reservas en línea.",              imageSrc: "http://img.b2bpic.net/free-photo/food-menu-appetite-cuisine-concept_53876-122431.jpg",              imageAlt: "Website for a Costa Rican restaurant",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Boutique Artesanal Alma",              description: "Tienda online con identidad visual única.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-creating-vision-board_23-2150061913.jpg",              imageAlt: "E-commerce website for artisanal boutique",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Servicios Legales & Asesoría",              description: "Sitio web corporativo y estrategia de contenido.",              imageSrc: "http://img.b2bpic.net/free-photo/law-judgement-rights-weighing-legal-concept_53876-124060.jpg",              imageAlt: "Professional website for a legal firm",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Clínica Veterinaria "Huellas"",              description: "Gestión de citas y comunidad en redes.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-with-cute-dog_23-2149047314.jpg",              imageAlt: "Website for a veterinary clinic",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Fitness Studio Momentum",              description: "Plataforma de clases online y reservas.",              imageSrc: "http://img.b2bpic.net/free-photo/exercise-international-group-relaxation-fitness-concept_53876-31178.jpg",              imageAlt: "Website for a fitness studio",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
          ]}
        />
        <FeatureBento
          title="Nuestra Promesa"
          description="Resultados tangibles que impulsan tu negocio."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Optimización Multiplataforma",              description: "Experiencia impecable en cualquier dispositivo: móvil, tablet o escritorio.",              bentoComponent: "phone",              statusIcon: Lock,
              alertIcon: Monitor,
              alertTitle: "Revisión de adaptabilidad",              alertMessage: "Todos los puntos de ruptura aprobados",              apps: [
                { name: "Teléfono", icon: Phone },
                { name: "Mensajes", icon: MessageCircle },
                { name: "Libros", icon: BookOpen },
                { name: "TV", icon: Tv },
                { name: "Cámara", icon: Camera },
                { name: "Música", icon: Music },
                { name: "Ajustes", icon: Settings },
                { name: "Chat", icon: MessageCircle },
              ],
            },
            {
              title: "Seguridad y Confiabilidad",              description: "Hosting seguro de nivel empresarial con 99.9% de tiempo de actividad.",              bentoComponent: "reveal-icon",              icon: Shield,
            },
            {
              title: "Procesos Ágiles",              description: "Lanzamos tu proyecto rápidamente sin comprometer la calidad.",              bentoComponent: "timeline",              heading: "Lanzamiento de Proyecto",              subheading: "Semana 1",              items: [
                { label: "Descubrimiento y esquemas", detail: "Días 1-3" },
                { label: "Diseño y desarrollo", detail: "Días 4-10" },
                { label: "Pruebas y despliegue", detail: "Días 11-14" },
              ],
              completedLabel: "Listo"},
            {
              title: "Integraciones Clave",              description: "Conectamos tu sitio con herramientas esenciales: CRMs, analíticas, pagos y más.",              bentoComponent: "orbiting-icons",              centerIcon: Puzzle,
              items: [
                { icon: Shield },
                { icon: Monitor },
                { icon: Zap },
                { icon: TrendingUp },
              ],
            },
            {
              title: "Estrategias de Crecimiento",              description: "Análisis de datos para optimizar tu presencia y atraer más clientes.",              bentoComponent: "line-chart"},
          ]}
        />
        <TestimonialCardFifteen
          testimonial="Gallica Agency entendió nuestra visión desde el primer día. Su estrategia de marketing digital transformó nuestra marca y nos ayudó a conectar con más clientes. ¡Profesionales y eficientes!"
          rating={5}
          author="— Sofía Vargas, Dueña de Cafetería 'El Grano Dorado'"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/young-barista-work-looking-camera-smiling-using-tamper-prepare-espresso-shot-hipster-work-concept_197531-22373.jpg", alt: "Sofía Vargas" },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="Resultados que Impulsan tu Éxito"
          description="Transformamos negocios con estrategias digitales comprobadas."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "projects", value: "50+", title: "Proyectos Exitosos", description: "Entregados en diversas industrias", icon: Award },
            { id: "satisfaction", value: "98%", title: "Satisfacción de Clientes", description: "Relaciones duraderas y de confianza", icon: Users },
            { id: "years", value: "5+", title: "Años de Experiencia", description: "Construyendo presencias digitales impactantes", icon: TrendingUp },
          ]}
        />
        <FeatureCardSixteen
          title="¿Por qué elegir Gallica Agency?"
          description="La diferencia entre una presencia digital desorganizada y un socio estratégico."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Contenido desorganizado y poco profesional",              "Redes sociales sin estrategia de conversión",              "Falta de identidad visual coherente",              "Poca visibilidad en línea y baja interacción",              "No hay un plan claro para crecer"],
          }}
          positiveCard={{
            items: [
              "Estrategia digital clara y profesional",              "Contenido que convierte y atrae clientes",              "Marca sólida y visualmente atractiva",              "Mayor alcance y presencia digital",              "Asesoría continua para tu crecimiento"],
          }}
        />
        <TeamCardFive
          title="Nuestro Equipo"
          description="Apasionados por el marketing digital y el éxito de tu negocio."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "Carlos Ruiz", role: "Director de Estrategia Digital", imageSrc: "http://img.b2bpic.net/free-photo/public-speaker-ceo-hosting-business-presentation-share-vision_482257-126544.jpg", imageAlt: "Carlos Ruiz" },
            { id: "2", name: "Ana Lucía Morales", role: "Diseñadora UX/UI", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-tablet_23-2149442310.jpg", imageAlt: "Ana Lucía Morales" },
            { id: "3", name: "Javier Solís", role: "Especialista en Contenidos", imageSrc: "http://img.b2bpic.net/free-photo/person-indian-origin-having-fun_23-2150285308.jpg", imageAlt: "Javier Solís" },
          ]}
        />
        <FaqBase
          title="Preguntas Frecuentes"
          description="Resolvemos tus dudas sobre cómo trabajamos y qué puedes esperar."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "¿Cuánto tiempo toma un proyecto típico?", content: "La duración varía según la complejidad, pero la mayoría de los proyectos se completan en 4-8 semanas. Te daremos un cronograma detallado en la consulta inicial." },
            { id: "2", title: "¿Cuál es su estructura de precios?", content: "Ofrecemos presupuestos personalizados basados en el alcance y tus objetivos. Cada propuesta incluye diseño, desarrollo, optimización SEO y soporte post-lanzamiento." },
            { id: "3", title: "¿Ofrecen soporte y mantenimiento continuo?", content: "¡Sí! Proporcionamos paquetes de soporte para asegurar que tu sitio esté siempre actualizado, seguro y funcionando a su máximo potencial." },
            { id: "4", title: "¿Pueden rediseñar mi sitio web actual?", content: "Absolutamente. Nos especializamos en rediseños que modernizan tu marca y mejoran la experiencia de usuario, manteniendo tu SEO actual." },
            { id: "5", title: "¿Qué tecnologías utilizan?", content: "Trabajamos con tecnologías modernas y eficientes como Next.js, React y Tailwind CSS para sitios web rápidos, escalables y fáciles de mantener." },
          ]}
        />
        <ContactCTA
          tag="Conversemos"
          title="¿Listo para potenciar tu presencia digital?"
          description="Agenda una consulta gratuita y descubramos cómo Gallica Agency puede transformar tu negocio."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Agendar Consulta", href: "#contact" },
            { text: "Ver Proyectos", href: "#projects" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Gallica Agency"
          copyrightText="© 2024 | Gallica Agency"
          columns={[
            {
              title: "Empresa",              items: [
                { label: "Nosotros", href: "#about" },
                { label: "Servicios", href: "#services" },
                { label: "Proyectos", href: "#projects" },
                { label: "Contacto", href: "#contact" },
              ],
            },
            {
              title: "Servicios",              items: [
                { label: "Diseño Web", href: "#" },
                { label: "SEO", href: "#" },
                { label: "Branding", href: "#" },
                { label: "Contenido y RRSS", href: "#" },
              ],
            },
            {
              title: "Conectar",              items: [
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "Blog", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
