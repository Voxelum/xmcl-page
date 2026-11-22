---
title: Política de privacidad de XMCL Together
description: Cómo XMCL Together trata los datos de cuenta, facturación, inteligencia artificial y servicios multijugador conforme al RGPD, la LOPDGDD y la normativa internacional de protección de datos.
---

# Política de privacidad de XMCL Together

**Fecha de entrada en vigor: 22 de noviembre de 2026 · Versión: P4-2026-11-22**

Esta política explica cómo **CI010**, actuando como operador individual bajo las denominaciones Voxelum y XMCL («XMCL Together», «nosotros»), trata la información cuando usted utiliza una cuenta de XMCL Together, servicios de pago o funciones en línea relacionadas en [xmcl.app](https://xmcl.app). No rige los servicios independientes que usted decida conectar, como Microsoft, Mojang, servidores de autenticación de terceros, Modrinth o CurseForge.

---

## 1. Información que tratamos

### Sitio web Together y telemetría del servicio
Las páginas y servicios de Together utilizan Microsoft Azure Application Insights configurado en **modo sin cookies** (`disableCookiesUsage: true`), alojado en **Azure East Asia (Hong Kong)**, para registrar visitas anónimas a páginas, acciones del servicio, atributos aproximados de red/dispositivo y eventos de diagnóstico. El sitio web almacena únicamente una sola cookie local estrictamente necesaria (`nf_lang`) para su preferencia de idioma. La telemetría del lanzador gratuito de código abierto se rige por separado por el [Aviso de privacidad del proyecto de código abierto XMCL](../privacy).

### Cuentas y autenticación
Cuando crea o utiliza una cuenta de XMCL Together, tratamos identificadores de cuenta, identificadores de proveedores de autenticación, metadatos de sesión y de tokens de actualización (refresh tokens), permisos otorgados (scopes), marcas de tiempo y telemetría de seguridad utilizada para prevenir ataques de repetición o abuso de cuentas. **Nunca** recibimos ni almacenamos sus contraseñas de Microsoft ni de otras cuentas de terceros.

### Facturación y suscripciones
Tratamos saldos de cuenta, información de divisa y tipo de cambio, pedidos, estado de suscripciones, periodos de cuota, totales de uso, reembolsos, disputas, identificadores de idempotencia y registros de auditoría. **Waffo Pancake** procesa directamente la información de tarjetas de pago y del proceso de pago (checkout). XMCL recibe únicamente referencias de transacción, estado, importe, divisa y eventos webhook firmados, y nunca recibe ni almacena números completos de tarjeta ni códigos de seguridad (CVC/CVV).

### Funciones de inteligencia artificial (IA)
Si utiliza una función de IA, tratamos la instrucción (prompt), el contenido de la conversación, el modelo seleccionado y el contexto del lanzador que decida proporcionar (como el nombre de la instancia, versiones del juego y del cargador, página seleccionada o ruta local de la instancia). Las solicitudes se transmiten a nuestros proveedores de IA configurados, actualmente **Agnes** y, cuando resulta necesario, **DeepSeek**. Medimos el recuento de tokens y el uso ponderado de cuotas para fines de facturación y prevención de abusos. No utilizamos sus prompts ni los resultados para entrenar un modelo propio de XMCL.

> **Aviso sobre proveedores de IA de terceros:** Los proveedores externos de IA (Agnes, DeepSeek) tratan el contenido de las solicitudes conforme a sus propias políticas de privacidad y condiciones. Configuramos las integraciones para solicitar modos de «no entrenamiento» (no-training) cuando están disponibles, pero no podemos garantizar las prácticas internas de tratamiento de datos de los proveedores de API externos. No envíe datos personales sensibles, contraseñas ni información confidencial en los prompts de IA.

### Multijugador, señalización y TURN (conectividad P2P)
Las funciones de Together y RTC tratan identificadores de cuenta y de sesión, metadatos de enrutamiento de salas/pares, direcciones IP, marcas de tiempo, identificadores de credenciales TURN y uso agregado de tráfico entrante/saliente. **Cloudflare** proporciona la infraestructura perimetral (edge), de señalización, de retransmisión TURN y de analítica de tráfico.

> **Consentimiento para la exposición de la IP en P2P:** La conectividad entre pares (peer-to-peer / P2P) revela intrínsecamente su dirección IP pública al otro participante en la sesión multijugador. Al utilizar funciones P2P, usted reconoce y consiente expresamente esta comunicación técnica de datos necesaria para establecer conectividad directa. La señalización de XMCL enruta únicamente metadatos de conexión y no graba voz, vídeo ni contenido de juego de Minecraft.

### Soporte y comunicaciones comunitarias
Si se pone en contacto con nosotros, tratamos los datos de contacto, referencias de cuenta o transacción, diagnósticos y el contenido de los mensajes que nos envíe. No envíe contraseñas, tokens de acceso, datos completos de tarjetas de pago ni información personal sensible no relacionada.

---

## 2. Finalidades y bases jurídicas

Tratamos la información para:
- proporcionar, autenticar, asegurar y solucionar incidencias de los servicios de XMCL Together;
- gestionar suscripciones, saldos, cuotas, pagos, reembolsos y atención al cliente;
- enrutar conexiones multijugador y medir el consumo de ancho de banda TURN;
- generar las respuestas de IA solicitadas y contabilizar las cuotas de IA;
- prevenir fraudes, ataques de repetición, abusos e incidentes de seguridad;
- cumplir obligaciones contables, fiscales, legales, de redes de pago y de resolución de disputas.

**Bases jurídicas (RGPD / LOPDGDD / UK GDPR / LGPD / Internacional):**
- **Ejecución de un contrato (art. 6.1.b RGPD):** prestación de cuentas, suscripciones, IA y servicios multijugador solicitados por usted;
- **Obligación legal (art. 6.1.c RGPD):** conservación de registros financieros, fiscales y de auditoría de pagos;
- **Interés legítimo (art. 6.1.f RGPD):** seguridad de la infraestructura, prevención del fraude/abuso y diagnósticos operativos sin cookies;
- **Consentimiento explícito (art. 6.1.a RGPD):** prompts opcionales de IA, exposición de IP en P2P y transferencias transfronterizas cuando la ley exija consentimiento.

---

## 3. Encargados del tratamiento y transferencias internacionales de datos

Compartimos únicamente lo razonablemente necesario con los siguientes proveedores de infraestructura y servicios:

| Destinatario | Finalidad y categorías de datos | Regiones de tratamiento | Política de privacidad |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Pago en línea (checkout), revisión antifraude, reembolsos, eventos webhook (metadatos de transacción y pago) | Global / Estados Unidos / Singapur | Proporcionada en el pago |
| **Cloudflare** | Workers, CDN, protección DDoS, señalización WebRTC, retransmisión TURN (metadatos de IP, sesión y tráfico) | Red Edge global / Estados Unidos | [Privacidad de Cloudflare](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Alojamiento, almacenamiento en bases de datos, Application Insights sin cookies (datos de cuenta, facturación y diagnóstico) | Hong Kong (Asia Oriental), Estados Unidos, UE | [Privacidad de Microsoft](https://privacy.microsoft.com/privacystatement) |
| **Vercel & GitHub** | Distribución del sitio web, lanzamientos, soporte de incidencias y seguridad | Estados Unidos / Red Edge global | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes & DeepSeek** | Generación de respuestas de IA (prompts, contexto de conversación, parámetros del modelo) | Global / China (RPC) / Estados Unidos | Políticas de los proveedores |

- **Garantías de transferencia:** Las transferencias transfronterizas fuera del EEE, el Reino Unido o Suiza se basan en las Cláusulas Contractuales Tipo de la UE (SCC conforme al art. 46 del RGPD), el UK IDTA/Addendum, cifrado TLS en tránsito y minimización estricta de datos.
- **Consecuencias de la negativa:** Proporcionar datos de cuenta, pago y enrutamiento transfronterizo es necesario para operar XMCL Together. Si rechaza dicho tratamiento o transferencia transfronteriza, podrá seguir utilizando el lanzador gratuito de código abierto XMCL sin conexión, pero las funciones alojadas de XMCL Together no estarán disponibles.
- **Sin venta de datos:** **No** vendemos información personal ni la compartimos para publicidad conductual en contextos cruzados.

---

## 4. Plazos de conservación

Aplicamos plazos estrictos de conservación:
- **Telemetría operativa, métricas de uso de IA y mediciones TURN:** se conservan durante un **máximo de 90 días** y posteriormente se eliminan de forma permanente o se anonimizan irreversiblemente.
- **Datos de cuenta y de sesión:** se conservan mientras la cuenta esté activa, más **30 días** tras la eliminación de la cuenta para recuperación y resolución de disputas.
- **Asientos contables financieros, eventos de pago, reembolsos y registros de auditoría:** se conservan durante **5 a 7 años** (o durante los plazos legales imperativos aplicables) para cumplir obligaciones legales contables, fiscales y de redes de pago, incluso tras el cierre de la cuenta.
- Las copias de seguridad cifradas se purgan mediante ciclos normales de rotación.

---

## 5. Sus opciones y derechos legales

### Derechos generales, RGPD, LOPDGDD, UK GDPR e internacionales
Usted puede:
- desactivar funciones en línea opcionales o desconectar servicios de terceros;
- gestionar la cookie `nf_lang` a través de su navegador;
- cancelar la renovación de Together Home en cualquier momento desde la interfaz de su cuenta (con efecto al finalizar el periodo pagado en curso);
- solicitar acceso, rectificación, supresión («derecho al olvido»), limitación del tratamiento, portabilidad de datos u oponerse al tratamiento;
- retirar su consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo;
- presentar una reclamación ante su autoridad nacional de protección de datos, en particular en España ante la **Agencia Española de Protección de Datos (AEPD)** en [https://www.aepd.es](https://www.aepd.es), ante la ICO del Reino Unido en [ico.org.uk](https://ico.org.uk) o ante su autoridad reguladora local.

### Derechos de privacidad en California y estados de EE. UU. (CCPA / CPRA)
XMCL **no** vende información personal ni la comparte para publicidad conductual en contextos cruzados. Los residentes de California y de estados estadounidenses con normativa aplicable (VA, CO, CT, UT, TX, OR, etc.) tienen derecho a conocer, acceder, eliminar, corregir datos inexactos y ejercer estos derechos sin discriminación.

---

## 6. Seguridad

Implementamos sesiones con alcance limitado, controles de acceso de mínimo privilegio, cifrado TLS en tránsito, webhooks de pago firmados, protección contra ataques de repetición, aislamiento de secretos y monitorización continua. Ningún sistema en línea es 100 % inmune a riesgos; usted es responsable de proteger su dispositivo, sus sesiones y sus credenciales de terceros.

---

## 7. Menores y requisitos de edad

- **Servicios de pago y cuentas:** Las cuentas de XMCL Together y las funciones de pago requieren tener al menos **18 años** (o la mayoría de edad legal en su jurisdicción), o contar con el consentimiento verificable de un padre, madre o tutor legal.
- **Consentimiento digital (LOPDGDD) y COPPA:** En España, la edad de consentimiento digital es de **14 años** (art. 7 LOPDGDD). No recopilamos conscientemente datos personales de menores de **14 años** en España (ni de menores de 13 años en EE. UU./Reino Unido, ni por debajo de la edad digital aplicable de 14–16 años en otros Estados miembros de la UE) sin el consentimiento verificable de sus progenitores o tutores. Los padres o tutores pueden contactar con [cijhn@hotmail.com](mailto:cijhn@hotmail.com) para solicitar su pronta eliminación.

---

## 8. Cambios, idioma prevalente y descargo de responsabilidad

- **Cambios:** Publicaremos las actualizaciones aquí con una nueva fecha de entrada en vigor y versión, y notificaremos con antelación los cambios sustanciales cuando la ley lo exija.
- **Idioma prevalente:** En caso de discrepancia entre una versión traducida y la versión en inglés, prevalecerá la versión en inglés en la medida permitida por la legislación local imperativa.
- **Aviso sobre Minecraft:** XMCL es un proyecto independiente y no está afiliado, patrocinado ni respaldado por Microsoft Corporation ni por Mojang Studios.

---

## 9. Contacto

**Operador / Contacto de privacidad (CI010):**
- Consultas generales, facturación, reembolsos, asuntos legales y privacidad: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Notificación de vulnerabilidades de seguridad: [GitHub private vulnerability reporting](https://github.com/voxelum/x-minecraft-launcher/security)
- Soporte comunitario: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Incluya únicamente la referencia mínima de cuenta o transacción necesaria para localizar su registro. Podremos solicitarle que verifique la titularidad de la cuenta antes de atender su solicitud.
