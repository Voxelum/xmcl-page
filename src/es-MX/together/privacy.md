---
title: Aviso de Privacidad Integral de XMCL Together
description: Aviso de Privacidad Integral sobre cómo XMCL Together trata los datos de cuenta, facturación, inteligencia artificial y servicios multijugador conforme a la LFPDPPP en México y la normativa internacional de protección de datos.
---

# Aviso de Privacidad Integral de XMCL Together

**Fecha de entrada en vigor: 22 de noviembre de 2026 · Versión: P4-2026-11-22**

Este Aviso de Privacidad Integral se emite en cumplimiento de la **Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)**, su Reglamento y estándares internacionales aplicables. Explica cómo **CI010**, actuando como operador individual bajo las denominaciones Voxelum y XMCL («XMCL Together», «nosotros», el **«Responsable»**), trata la información cuando utilizas una cuenta de XMCL Together, servicios de pago o funciones en línea relacionadas en [xmcl.app](https://xmcl.app). No rige los servicios independientes que decidas conectar, como Microsoft, Mojang, servidores de autenticación de terceros, Modrinth o CurseForge.

---

## 1. Datos personales e información que tratamos

No recabamos datos personales sensibles. Según las funciones que utilices, tratamos las siguientes categorías de datos:

### Sitio web de Together y telemetría del servicio
Las páginas y servicios de Together utilizan Microsoft Azure Application Insights configurado en **modo sin cookies** (`disableCookiesUsage: true`), alojado en **Azure East Asia (Hong Kong)**, para registrar visitas anónimas a páginas, acciones del servicio, atributos aproximados de red/dispositivo y eventos de diagnóstico. El sitio web almacena únicamente una sola cookie local estrictamente necesaria (`nf_lang`) para tu preferencia de idioma. La telemetría del lanzador gratuito de código abierto se rige por separado por el [Aviso de Privacidad Integral del Proyecto de Código Abierto XMCL](../privacy).

### Cuentas y autenticación
Cuando creas o utilizas una cuenta de XMCL Together, tratamos identificadores de cuenta, identificadores de proveedores de autenticación, metadatos de sesión y tokens de actualización (refresh tokens), permisos otorgados (scopes), marcas de tiempo y telemetría de seguridad para prevenir ataques de repetición o abuso de cuentas. **Nunca** recibimos ni almacenamos tus contraseñas de Microsoft ni de otras cuentas de terceros.

### Facturación y suscripciones
Tratamos saldos de cuenta, información de divisa y tipo de cambio, pedidos, estado de suscripciones, periodos de cuota, totales de uso, reembolsos, disputas, identificadores de idempotencia y registros de auditoría. **Waffo Pancake** procesa directamente la información de tarjetas de pago y del proceso de pago (checkout). XMCL recibe únicamente referencias de transacción, estado, monto, divisa y eventos webhook firmados, y nunca recibe ni almacena números completos de tarjeta ni códigos de seguridad (CVC/CVV).

### Funciones de inteligencia artificial (IA)
Si utilizas una función de IA, tratamos el prompt, el contenido de la conversación, el modelo seleccionado y el contexto del lanzador que decidas proporcionar (como nombre de la instancia, versiones del juego y del loader, página seleccionada o ruta local de la instancia). Las solicitudes se transmiten a nuestros proveedores de IA configurados, actualmente **Agnes** y, cuando resulta necesario, **DeepSeek**. Medimos el conteo de tokens y el consumo ponderado de cuotas para facturación y prevención de abusos. No utilizamos tus prompts ni resultados para entrenar un modelo propio de XMCL.

> **Aviso sobre proveedores de IA de terceros:** Los proveedores externos de IA (Agnes, DeepSeek) procesan el contenido de las solicitudes conforme a sus propias políticas de privacidad y términos. Configuramos las integraciones para solicitar modos de «no entrenamiento» (no-training) cuando están disponibles, pero no podemos garantizar las prácticas internas de tratamiento de datos de los proveedores de API externos. No envíes datos personales sensibles, contraseñas ni información confidencial en los prompts de IA.

### Multijugador, señalización y TURN (conectividad P2P)
Las funciones de Together y RTC tratan identificadores de cuenta y de sesión, metadatos de enrutamiento de salas/pares, direcciones IP, marcas de tiempo, identificadores de credenciales TURN y consumo agregado de tráfico entrante/saliente. **Cloudflare** proporciona la infraestructura perimetral (edge), de señalización, retransmisión TURN y analítica de tráfico.

> **Consentimiento para la exposición de la IP en P2P:** La conectividad entre pares (peer-to-peer / P2P) revela intrínsecamente tu dirección IP pública al otro participante en la sesión multijugador. Al utilizar funciones P2P, reconoces y consientes expresamente esta comunicación técnica de datos necesaria para establecer la conexión directa. La señalización de XMCL enruta únicamente metadatos de conexión y no graba voz, video ni contenido de juego de Minecraft.

### Soporte y comunicaciones comunitarias
Si nos contactas, tratamos los datos de contacto, referencias de cuenta o transacción, diagnósticos y el contenido de los mensajes que nos envíes. No envíes contraseñas, tokens de acceso, datos completos de tarjetas de pago ni datos personales sensibles no relacionados.

---

## 2. Finalidades del tratamiento (primarias y secundarias) y bases jurídicas

### Finalidades primarias (necesarias para la relación jurídica)
Tratamos tus datos de manera indispensable para:
- proporcionar, autenticar, asegurar y resolver fallos de los servicios de XMCL Together que solicitas;
- administrar suscripciones, saldos, cuotas, pagos, reembolsos, aclaraciones y atención al usuario;
- enrutar conexiones multijugador y medir el consumo de ancho de banda TURN;
- prevenir fraudes, ataques de repetición, abusos e incidentes de seguridad;
- cumplir obligaciones contables, fiscales, legales, de redes de pago y de atención a disputas.

### Finalidades secundarias u opcionales
- generar respuestas de IA y contabilizar cuotas de IA **únicamente cuando invocas activamente una función opcional de IA**;
- recopilar diagnósticos operativos sin cookies para mejorar la confiabilidad del servicio.

**XMCL Together no utiliza tus datos personales para mercadotecnia, publicidad dirigida ni prospección comercial.** Si no deseas que tus datos se utilicen para funciones opcionales de IA, simplemente no actives ni envíes solicitudes a dichas herramientas.

### Bases jurídicas internacionales (RGPD / UK GDPR / LGPD / Internacional)
- **Ejecución de un contrato (art. 6(1)(b) RGPD):** prestación de cuentas, suscripciones, IA y servicios multijugador solicitados;
- **Obligación legal (art. 6(1)(c) RGPD):** conservación de registros financieros, fiscales y de auditoría de pagos;
- **Interés legítimo (art. 6(1)(f) RGPD):** seguridad de la infraestructura, prevención de fraude/abuso y diagnósticos operativos sin cookies;
- **Consentimiento expreso (art. 6(1)(a) RGPD):** prompts opcionales de IA, exposición de IP en P2P y transferencias internacionales cuando la ley lo requiera.

---

## 3. Encargados y transferencias internacionales de datos

Compartimos únicamente la información razonablemente necesaria con los siguientes proveedores de infraestructura y servicios, lo que implica transferencias internacionales necesarias para la prestación de XMCL Together conforme al artículo 37 de la LFPDPPP y normativa internacional equivalente:

| Destinatario | Finalidad y categorías de datos | Regiones de tratamiento | Política de privacidad |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Pago en línea (checkout), revisión antifraude, reembolsos, eventos webhook (metadatos de transacción y pago) | Global / Estados Unidos / Singapur | Proporcionada en el pago |
| **Cloudflare** | Workers, CDN, protección DDoS, señalización WebRTC, retransmisión TURN (metadatos de IP, sesión y tráfico) | Red Edge global / Estados Unidos | [Privacidad de Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Alojamiento, almacenamiento en bases de datos, Application Insights sin cookies (datos de cuenta, facturación y diagnóstico) | Hong Kong (Asia Oriental), Estados Unidos, UE | [Privacidad de Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Vercel & GitHub** | Distribución del sitio web, lanzamientos, soporte de problemas y seguridad | Estados Unidos / Red Edge global | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes & DeepSeek** | Generación de respuestas de IA (prompts, contexto de conversación, parámetros del modelo) | Global / China (RPC) / Estados Unidos | Políticas de los proveedores |

- **Garantías de transferencia:** Las transferencias internacionales se protegen mediante cifrado TLS en tránsito, minimización estricta de datos, cláusulas contractuales de protección de datos conforme a la LFPDPPP, Cláusulas Contractuales Tipo de la UE (SCC) y el UK IDTA/Addendum.
- **Consecuencias de la negativa:** Proporcionar datos de cuenta, pago y enrutamiento internacional es indispensable para operar XMCL Together. Si te opones a dicho tratamiento o transferencia, podrás seguir utilizando el lanzador gratuito y de código abierto XMCL sin conexión, pero las funciones alojadas de XMCL Together no estarán disponibles.
- **Sin venta de datos:** **No** vendemos datos personales ni los compartimos para publicidad conductual en contextos cruzados.

---

## 4. Plazos de conservación

Aplicamos plazos estrictos de conservación:
- **Telemetría operativa, métricas de uso de IA y mediciones TURN:** se conservan durante un **máximo de 90 días**, tras lo cual se eliminan de forma permanente o se anonimizan irreversiblemente.
- **Datos de cuenta y de sesión:** se conservan mientras la cuenta permanezca activa, más **30 días** posteriores a la eliminación de la cuenta para recuperación y atención de disputas.
- **Asientos contables financieros, eventos de pago, reembolsos y registros de auditoría:** se conservan durante **5 a 7 años** para cumplir con obligaciones legales contables, fiscales (incluido el artículo 30 del Código Fiscal de la Federación en México, en lo aplicable) y de redes de pago, incluso tras el cierre de la cuenta.
- Las copias de seguridad cifradas se purgan mediante ciclos regulares de rotación.

---

## 5. Tus opciones, Derechos ARCO y derechos internacionales

### Derechos ARCO y revocación del consentimiento en México (LFPDPPP)
Conforme a la **LFPDPPP**, tienes derecho en todo momento a ejercer tus **Derechos ARCO**:
- **Acceso** a los datos personales que poseemos sobre ti y al detalle de su tratamiento;
- **Rectificación** cuando tus datos resulten inexactos o incompletos;
- **Cancelación** cuando consideres que no se requieren para las finalidades señaladas o haya concluido la relación jurídica (sujeto a los plazos legales de conservación fiscal y contable);
- **Oposición** al tratamiento de tus datos para fines específicos.

También puedes **revocar tu consentimiento** en cualquier momento sin efectos retroactivos, limitar el uso o divulgación de tus datos, gestionar la cookie `nf_lang` desde tu navegador y cancelar la renovación de Together Home en cualquier momento desde la interfaz de tu cuenta (con efecto al concluir el periodo pagado en curso).

**Procedimiento:** Envía tu solicitud a **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)** indicando el identificador de cuenta o referencia mínima necesaria, el derecho ARCO o revocación que solicitas y un correo para recibir respuesta. Podremos verificar la titularidad de tu cuenta antes de procesar la solicitud. Comunicaremos la determinación en un plazo máximo de **20 días hábiles** y, de resultar procedente, la haremos efectiva dentro de los **15 días hábiles** siguientes conforme a la LFPDPPP. Si consideras vulnerado tu derecho a la protección de datos, puedes acudir ante la autoridad federal competente en materia de protección de datos personales en México.

### Derechos internacionales (RGPD, UK GDPR y CCPA / CPRA)
- **UE / EEE / Reino Unido / Internacional:** Tienes derecho de acceso, rectificación, supresión («derecho al olvido»), limitación, portabilidad, oposición, retiro del consentimiento y reclamación ante tu autoridad nacional de protección de datos (por ejemplo, DPA de la UE o UK ICO en [ico.org.uk](https://ico.org.uk)).
- **California y estados de EE. UU. (CCPA / CPRA):** XMCL **no** vende ni comparte información personal para publicidad conductual en contextos cruzados. Los residentes de California y estados con leyes de privacidad aplicables tienen derecho a conocer, acceder, corregir y eliminar sus datos sin discriminación.

---

## 6. Seguridad

Implementamos sesiones con alcance limitado, controles de acceso de mínimo privilegio, cifrado TLS en tránsito, webhooks de pago firmados, protección contra ataques de repetición, aislamiento de secretos y monitoreo continuo. Ningún sistema en línea es 100 % inmune a riesgos; eres responsable de proteger tu dispositivo, tus sesiones y tus credenciales de terceros.

---

## 7. Menores de edad y requisitos de edad

- **Servicios de pago y cuentas (México e internacional):** Para crear una cuenta de XMCL Together o utilizar servicios de pago debes tener al menos **18 años** (mayoría de edad legal en México conforme al Código Civil Federal y en la mayoría de las jurisdicciones), o contar con el **consentimiento verificable de tu padre, madre o tutor legal**.
- **Consentimiento digital y menores (COPPA / Internacional):** No recopilamos deliberadamente datos personales de menores de **13 años** (EE. UU./Reino Unido) ni por debajo de la edad de consentimiento digital aplicable en cada jurisdicción (14–16 en UE/Ucrania/Corea/China, 18 en México sin autorización parental o conforme a la India DPDP Act). Los padres o tutores pueden escribir a [cijhn@hotmail.com](mailto:cijhn@hotmail.com) para solicitar la eliminación inmediata de datos.

---

## 8. Cambios, idioma prevalente y descargo de responsabilidad

- **Cambios al Aviso de Privacidad:** Publicaremos cualquier actualización en esta página con una nueva fecha de entrada en vigor y versión, y notificaremos con antelación los cambios sustanciales cuando la ley lo exija.
- **Idioma prevalente:** En caso de discrepancia entre una versión traducida y la versión en inglés, prevalecerá la versión en inglés en la medida permitida por la legislación local imperativa.
- **Aviso sobre Minecraft:** XMCL es un proyecto independiente y no está afiliado, patrocinado ni respaldado por Microsoft Corporation ni por Mojang Studios.

---

## 9. Contacto

**Responsable / Operador / Contacto de Privacidad (CI010):**
- Solicitudes de Derechos ARCO, consultas generales, facturación, reembolsos, asuntos legales y privacidad: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Reporte de vulnerabilidades de seguridad: [GitHub private vulnerability reporting](https://github.com/voxelum/x-minecraft-launcher/security)
- Soporte comunitario: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Incluye únicamente la referencia mínima de cuenta o transacción necesaria para localizar tu registro. Podremos pedirte verificar la titularidad de la cuenta antes de atender tu solicitud.
