---
title: Aviso de Privacidad Integral del Proyecto de Código Abierto XMCL
description: Aviso de Privacidad Integral para el sitio web de XMCL y el lanzador de código abierto, conforme a la LFPDPPP en México, RGPD de la UE, UK GDPR, COPPA/CCPA de EE. UU. y estándares internacionales de protección de datos.
---

# Aviso de Privacidad Integral del Proyecto de Código Abierto XMCL

**Fecha de entrada en vigor: 22 de noviembre de 2026 · Versión: OP3-2026-11-22**

Este Aviso de Privacidad Integral se emite en cumplimiento de la **Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)**, su Reglamento y estándares internacionales aplicables. Cubre el sitio web público de XMCL ([xmcl.app](https://xmcl.app)) y el lanzador gratuito y de código abierto XMCL. No cubre las funciones de pago, cuentas, facturación, inteligencia artificial ni los servicios de señalización/TURN multijugador proporcionados por XMCL Together, los cuales se rigen por separado mediante el [Aviso de Privacidad Integral de XMCL Together](./together/privacy).

---

## 1. Identidad del Responsable y contacto

XMCL es un proyecto independiente de código abierto operado por **CI010** y la comunidad de colaboradores de Voxelum (en adelante, el **«Responsable»**).
- **Contacto de privacidad, Derechos ARCO y asuntos legales:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Repositorio de código fuente:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Reporte de vulnerabilidades de seguridad:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Soporte comunitario:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Datos tratados, minimización y finalidades (primarias y secundarias)

XMCL aplica principios estrictos de licitud, consentimiento, proporcionalidad y minimización de datos, y **no** recaba datos personales sensibles.

### Sitio web público (xmcl.app) — Finalidades primarias
Las siguientes actividades son necesarias para entregar el sitio web, ofrecer descargas seguras y mantener la disponibilidad de la infraestructura:
- **Analítica agregada sin cookies:** Utilizamos Microsoft Azure Application Insights configurado en **modo sin cookies** (`disableCookiesUsage: true`), con ingesta alojada en **Microsoft Azure East Asia (Hong Kong)**, para registrar visitas anónimas a páginas, selecciones de descarga, atributos generales de red/dispositivo y el agente de usuario (User-Agent) del navegador. No se instalan cookies analíticas ni cookies de seguimiento entre sitios en tu dispositivo.
- **Cookie estrictamente necesaria:** Almacenamos únicamente una sola cookie funcional local (`nf_lang`), estrictamente necesaria para recordar tu preferencia de idioma de la interfaz. No utilizamos cookies de terceros de marketing, publicidad ni seguimiento conductual.

### Lanzador de código abierto — Finalidades secundarias (opcionales)
- **Telemetría y diagnósticos opcionales (Opt-in):** La telemetría de diagnóstico está **desactivada de forma predeterminada** y constituye una finalidad secundaria no indispensable para usar el lanzador. Únicamente si habilitas explícitamente la telemetría en los ajustes del lanzador (consentimiento expreso), el lanzador podrá tratar los siguientes datos técnicos para diagnosticar fallos y mejorar la estabilidad:
  - un identificador seudónimo de instalación/dispositivo generado aleatoriamente;
  - eventos del ciclo de vida de la aplicación (inicio del juego, códigos de salida normales o de error, versión de la aplicación);
  - tipo de proveedor de autenticación (por ejemplo, identificador de autenticación de Microsoft o sin conexión);
  - especificaciones básicas del entorno de ejecución (sistema operativo, versión de Java, arquitectura de CPU);
  - registros de errores (crash logs) y trazas de pila (stack traces).
- **Depuración y credenciales:** Los diagnósticos de fallos se limpian, en la medida de lo posible, de rutas de archivos sensibles, nombres de usuario y tokens del sistema. **Nunca** tratamos ni almacenamos tus contraseñas, credenciales ni tokens de sesión de cuentas de Microsoft/Mojang.
- **Sin mercadotecnia ni publicidad:** XMCL no trata tus datos para fines publicitarios, mercadotécnicos ni de prospección comercial.

---

## 3. Plazos de conservación

Evitamos la conservación indefinida de información:
- Todos los registros de telemetría, reportes de errores de diagnóstico y métricas de rendimiento se conservan por un **máximo de 90 días**, tras lo cual se eliminan de forma permanente o se anonimizan de manera irreversible.
- Los reportes públicos en el gestor de problemas (issue tracker) de GitHub permanecen disponibles conforme a las políticas de la plataforma GitHub y la gobernanza del repositorio hasta que se resuelvan o eliminen.

---

## 4. Encargados y transferencias internacionales de datos

Para entregar descargas, páginas web y diagnósticos opcionales, XMCL utiliza proveedores globales de infraestructura que actúan como encargados o destinatarios de transferencias internacionales de datos técnicos:

| Proveedor | Función y datos tratados | Regiones de tratamiento | Política de privacidad |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Analítica web sin cookies, diagnósticos opcionales del lanzador | Hong Kong (Asia Oriental), Estados Unidos, UE | [Privacidad de Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, enrutamiento perimetral (edge), protección DDoS | Red Edge global / Estados Unidos | [Privacidad de Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Alojamiento de código fuente, lanzamientos, gestor de problemas | Estados Unidos | [Privacidad de GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Alojamiento y distribución del sitio web | Estados Unidos / Red Edge global | [Privacidad de Vercel](https://vercel.com/legal/privacy-policy) |

- **Garantías de transferencia internacional:** Las transferencias internacionales de datos técnicos se realizan bajo principios de minimización, cifrado TLS en tránsito y cláusulas contractuales de protección de datos conforme a la **LFPDPPP**, así como Cláusulas Contractuales Tipo (SCC) aprobadas por la Comisión Europea, el UK International Data Transfer Agreement (IDTA) / Addendum y garantías legales equivalentes.
- **Derecho a oponerse a la transferencia:** Puedes negarte a la transferencia internacional de diagnósticos del lanzador simplemente manteniendo desactivada la telemetría (su estado predeterminado).
- **Sin venta de datos:** Nunca vendemos datos personales ni los compartimos para publicidad conductual en contextos cruzados.

---

## 5. Disposiciones regionales y derechos legales

### México (LFPDPPP) — Derechos ARCO y revocación del consentimiento
Conforme a la **Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)**, tienes derecho a ejercer en cualquier momento tus **Derechos ARCO**:
- **Acceso:** conocer qué datos personales tratamos sobre ti y las condiciones de su tratamiento;
- **Rectificación:** solicitar la corrección de tus datos si son inexactos o incompletos;
- **Cancelación:** pedir la eliminación de tus datos de nuestros registros cuando consideres que no están siendo tratados conforme a la ley o hayan dejado de ser necesarios;
- **Oposición:** oponerte al tratamiento de tus datos para fines específicos (por ejemplo, telemetría opcional).

Asimismo, tienes derecho a **revocar tu consentimiento** en cualquier momento sin efectos retroactivos y a limitar el uso o divulgación de tus datos (desactivando la telemetría en el lanzador o gestionando la cookie `nf_lang` desde tu navegador).
- **Edad de mayoría legal:** En México, la mayoría de edad es de **18 años** (Código Civil Federal). Las personas menores de 18 años requieren la autorización de quienes ejerzan la patria potestad o tutela para proporcionar datos personales o activar telemetría opcional.
- **Autoridad de protección de datos:** Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes acudir ante la autoridad federal competente en materia de protección de datos personales en México conforme a la LFPDPPP vigente.

### Unión Europea y EEE (RGPD)
- **Bases jurídicas:** Consentimiento (art. 6(1)(a) RGPD) para la telemetría de diagnóstico opcional; interés legítimo (art. 6(1)(f) RGPD) para la seguridad de la infraestructura, disponibilidad y analítica agregada sin cookies.
- **Edad de consentimiento:** 16 años (o la edad de consentimiento digital aplicable en cada Estado miembro, 13–15).
- **Tus derechos:** Conforme a los artículos 15–22 del RGPD, tienes derecho de acceso, rectificación, supresión, limitación, portabilidad, oposición, retiro del consentimiento y reclamación ante tu autoridad supervisora nacional.

### Reino Unido (UK GDPR y DPA 2018)
- Regulado por el UK GDPR y la Data Protection Act 2018. Edad de consentimiento digital: **13 años**. Autoridad supervisora: UK Information Commissioner's Office (ICO) en [ico.org.uk](https://ico.org.uk).

### Estados Unidos (COPPA, CCPA / CPRA y leyes estatales)
- **COPPA:** XMCL no está dirigido a menores de 13 años y no recaba intencionalmente datos personales de menores de 13 años. Padres o tutores pueden contactar a [cijhn@hotmail.com](mailto:cijhn@hotmail.com) para solicitar su pronta eliminación.
- **CCPA / CPRA y leyes estatales:** XMCL **no** vende ni comparte información personal para publicidad conductual en contextos cruzados. Los residentes de California y otros estados con leyes de privacidad aplicables tienen derecho a conocer, acceder, corregir y eliminar sus datos sin discriminación.

### Otras jurisdicciones
- Respetamos derechos equivalentes conforme a las leyes locales aplicables en todo el mundo (incluidas Brasil LGPD, Japón APPI, Corea del Sur PIPA, China PIPL, Taiwán PDPA, Turquía KVKK, India DPDP Act, Indonesia UU PDP, Vietnam Decreto 13, Ucrania, Arabia Saudita/EAU PDPL).

---

## 6. Medios y procedimiento para ejercer Derechos ARCO y revocar el consentimiento

Para ejercer tus **Derechos ARCO** (Acceso, Rectificación, Cancelación u Oposición), revocar tu consentimiento o limitar el uso de tus datos, envía una solicitud por correo electrónico a **CI010** en **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)** indicando:
1. Tu nombre o identificador relevante y el correo electrónico para recibir notificaciones;
2. La descripción clara y precisa de los datos y el derecho que deseas ejercer;
3. Cualquier elemento que facilite localizar la información técnica correspondiente.

Atenderemos tu solicitud dentro de los plazos establecidos por la LFPDPPP (comunicando la determinación adoptada en un plazo máximo de **20 días hábiles** y haciéndola efectiva dentro de los **15 días hábiles** siguientes en caso de resultar procedente).

---

## 7. Cambios, idioma prevalente y descargo de responsabilidad

- **Cambios al Aviso de Privacidad:** Publicaremos cualquier modificación en esta página indicando la nueva fecha de entrada en vigor y versión.
- **Idioma prevalente:** Las traducciones de este aviso se proporcionan por conveniencia. En caso de discrepancia entre una versión traducida y la versión en inglés, prevalecerá la versión en inglés en la medida permitida por la legislación local imperativa.
- **Aviso sobre Minecraft y Mojang:** XMCL es un proyecto independiente de software de código abierto y no está afiliado, autorizado, patrocinado ni respaldado por Microsoft Corporation ni por Mojang Studios.
