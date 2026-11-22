---
title: Aviso de privacidad del proyecto de código abierto XMCL
description: Aviso de privacidad para el sitio web de XMCL y el lanzador de código abierto, conforme al RGPD de la UE, la LOPDGDD, el UK GDPR, COPPA/CCPA de EE. UU. y los estándares internacionales de protección de datos.
---

# Aviso de privacidad del proyecto de código abierto XMCL

**Fecha de entrada en vigor: 22 de noviembre de 2026 · Versión: OP3-2026-11-22**

Este aviso cubre el sitio web público de XMCL ([xmcl.app](https://xmcl.app)) y el lanzador gratuito y de código abierto XMCL. No cubre las funciones de pago, cuentas, facturación, inteligencia artificial ni servicios de señalización/TURN multijugador proporcionados por XMCL Together, que se rigen por separado mediante la [Política de privacidad de XMCL Together](./together/privacy).

---

## 1. Responsable del tratamiento y contacto

XMCL es un proyecto independiente de código abierto operado por **CI010** y la comunidad de colaboradores de Voxelum.
- **Consultas legales y de privacidad:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Repositorio de código fuente:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Notificación de vulnerabilidades de seguridad:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Soporte comunitario:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Información tratada y minimización de datos

XMCL aplica estrictos principios de minimización de datos (art. 5.1.c del RGPD):

### Sitio web público (xmcl.app)
- **Analítica agregada sin cookies:** Utilizamos Microsoft Azure Application Insights configurado en **modo sin cookies** (`disableCookiesUsage: true`), con ingesta alojada en **Microsoft Azure East Asia (Hong Kong)**, para registrar visitas anónimas a páginas, selecciones de descarga, atributos generales de red/dispositivo y agentes de usuario (User-Agent) del navegador. No se instalan cookies analíticas ni cookies de seguimiento entre sitios en su dispositivo.
- **Cookie estrictamente necesaria:** Almacenamos únicamente una sola cookie funcional local (`nf_lang`), estrictamente necesaria para recordar su preferencia de idioma de la interfaz. No utilizamos cookies de terceros de marketing, publicidad ni seguimiento conductual.

### Lanzador de código abierto
- **Telemetría y diagnósticos opcionales (Opt-in):** La telemetría de diagnóstico está **desactivada de forma predeterminada**. Solo si usted habilita explícitamente la telemetría en la configuración del lanzador (consentimiento previo), el lanzador podrá tratar:
  - un identificador seudónimo de instalación/dispositivo generado aleatoriamente;
  - eventos del ciclo de vida de la aplicación (inicio del juego, códigos de salida normales o de error, versión de la aplicación);
  - tipo de proveedor de autenticación (por ejemplo, identificador de autenticación de Microsoft o sin conexión);
  - especificaciones básicas del entorno de ejecución (sistema operativo, versión de Java, arquitectura de CPU);
  - registros de errores (crash logs) y trazas de pila (stack traces).
- **Depuración y credenciales:** Los diagnósticos de fallos se limpian, en la medida de lo posible, de rutas de archivos sensibles, nombres de usuario y tokens del sistema. **Nunca** tratamos ni almacenamos sus contraseñas, credenciales ni tokens de sesión de cuentas de Microsoft/Mojang.

---

## 3. Conservación de los datos

Evitamos plazos de conservación indefinidos:
- Todos los registros de telemetría, informes de errores de diagnóstico y métricas de rendimiento se conservan durante un **máximo de 90 días**, tras lo cual se eliminan permanentemente o se anonimizan de forma irreversible.
- Los informes públicos en el gestor de incidencias (issue tracker) de GitHub permanecen disponibles conforme a las políticas de la plataforma GitHub y la gobernanza del repositorio hasta que se resuelvan o eliminen.

---

## 4. Encargados del tratamiento y transferencias internacionales de datos

XMCL utiliza proveedores globales de infraestructura para ofrecer descargas, páginas web y diagnósticos opcionales:

| Proveedor | Función y datos tratados | Regiones de tratamiento | Política de privacidad |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Analítica web sin cookies, diagnósticos opcionales del lanzador | Hong Kong (Asia Oriental), Estados Unidos, UE | [Privacidad de Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, enrutamiento perimetral (edge), protección DDoS | Red Edge global / Estados Unidos | [Privacidad de Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Alojamiento de código fuente, lanzamientos, gestor de incidencias | Estados Unidos | [Privacidad de GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Alojamiento y distribución del sitio web | Estados Unidos / Red Edge global | [Privacidad de Vercel](https://vercel.com/legal/privacy-policy) |

- **Garantías de transferencia:** Cuando se transfieren datos técnicos fuera del EEE, el Reino Unido o Suiza, nos basamos en las Cláusulas Contractuales Tipo (SCC) aprobadas por la Comisión Europea (art. 46 del RGPD), el UK International Data Transfer Agreement (IDTA) / Addendum y garantías legales equivalentes.
- **Derecho de oposición/rechazo:** Puede rechazar la transferencia transfronteriza de diagnósticos del lanzador simplemente manteniendo desactivada la telemetría (su estado predeterminado).
- **Sin venta de datos:** Nunca vendemos datos personales ni los compartimos para publicidad conductual en contextos cruzados.

---

## 5. Disposiciones regionales y derechos legales

### Unión Europea, EEE y España (RGPD y LOPDGDD)
- **Bases jurídicas:** Consentimiento (art. 6.1.a RGPD) para la telemetría de diagnóstico opcional; interés legítimo (art. 6.1.f RGPD) para la seguridad de la infraestructura, la disponibilidad y la analítica agregada sin cookies.
- **Edad de consentimiento digital:** En España, la edad de consentimiento digital es de **14 años** conforme al art. 7 de la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (**LOPDGDD**) y el art. 8 del RGPD (13–16 años en otros Estados miembros de la UE). Los menores por debajo de dicha edad requieren el consentimiento de los titulares de la patria potestad o tutela.
- **Sus derechos:** Conforme a los artículos 15 a 22 del RGPD y la LOPDGDD, usted tiene derecho a acceder, rectificar, suprimir («derecho al olvido»), limitar el tratamiento, la portabilidad de los datos, oponerse al tratamiento, retirar su consentimiento en cualquier momento y presentar una reclamación ante la **Agencia Española de Protección de Datos (AEPD)** en [https://www.aepd.es](https://www.aepd.es) o ante su autoridad nacional de control.

### Reino Unido (UK GDPR y DPA 2018)
- Regulado conforme al UK GDPR y la Data Protection Act 2018. Edad de consentimiento digital: **13 años**. Autoridad de control: UK Information Commissioner's Office (ICO) en [ico.org.uk](https://ico.org.uk).

### Estados Unidos (COPPA, CCPA / CPRA y leyes estatales)
- **COPPA:** XMCL no está dirigido a menores de 13 años. No recopilamos deliberadamente datos personales de menores de 13 años. Los padres o tutores pueden contactar con [cijhn@hotmail.com](mailto:cijhn@hotmail.com) para solicitar su pronta eliminación.
- **CCPA / CPRA y leyes estatales de EE. UU.:** XMCL **no** vende ni comparte información personal para publicidad conductual en contextos cruzados. Los residentes de California, Virginia, Colorado, Connecticut, Utah, Texas, Oregón y otros estados con leyes de privacidad aplicables tienen derecho a conocer, acceder, corregir y eliminar sus datos, así como a ejercer estos derechos sin discriminación.

### Otras jurisdicciones
- Respetamos derechos equivalentes de los interesados conforme a las leyes locales aplicables en todo el mundo (incluidas Brasil LGPD, Japón APPI, Corea del Sur PIPA, China PIPL, Taiwán PDPA, Turquía KVKK, India DPDP Act, Indonesia UU PDP, Vietnam Decreto 13, Ucrania, Arabia Saudí/EAU PDPL).

---

## 6. Ejercicio de sus derechos

Para ejercer sus derechos de acceso, rectificación, supresión o retirada del consentimiento, póngase en contacto con **CI010** en **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Idioma prevalente y descargo de responsabilidad

- **Idioma prevalente:** Las traducciones de este aviso se ofrecen por conveniencia. En caso de discrepancia entre una versión traducida y la versión en inglés, prevalecerá la versión en inglés en la medida permitida por la legislación local imperativa.
- **Aviso sobre Minecraft y Mojang:** XMCL es un proyecto independiente de software de código abierto y no está afiliado, autorizado, patrocinado ni respaldado por Microsoft Corporation ni por Mojang Studios.
