# Guía de XMCL Together: Multijugador en la Nube, Alojamiento y Solución de Pagos

**XMCL Together** es una plataforma de servicios en la nube creada específicamente para XMCL. Resuelve los mayores problemas al jugar Minecraft con mods: **jugar con amigos a través de cortafuegos y CGNAT, alojar servidores en la nube sin pagar por tiempo inactivo y contar con asistencia de IA para solucionar errores.**

---

## 🌟 1. ¿Qué es XMCL Together?

![Resumen de XMCL Together](/guidephoto/xmcl%20together.png)

Jugar a Minecraft modificado con amigos suele ser complicado debido a redes con CGNAT, la apertura manual de puertos y los costosos servidores tradicionales (20–40 \$ mensuales) que se pagan aunque no se usen.

XMCL Together ofrece tres pilares fundamentales:

### 1. Red global de retransmisión rápida (300+ nodos Cloudflare)
En partidas P2P LAN, si la conexión directa se bloquea por el enrutador, Together redirige el tráfico automáticamente mediante **retransmisores de Cloudflare**, con bajo ping y sin tocar el router.

### 2. Servidores en la nube «Pay-As-You-Play» (Pago por uso)
No pague mensualidades completas por servidores apagados:
* **Baja cuota base**: Conserva su mundo, IP del servidor y configuración de mods indefinidamente.
* **Cobro de cómputo solo en línea**: Pague únicamente por las horas reales de juego (0,06 \$ – 0,12 \$ / hora).
* **Pausa instantánea**: Pause el servidor al terminar y los cargos cesarán de inmediato.

### 3. Copiloto de diagnóstico con IA integrado
Todos los planes incluyen un asistente de IA para analizar registros de fallos (crashes), resolver dependencias de mods y optimizar la memoria JVM.

---

## 📊 2. Planes de servicio

| Plan | Precio | Ideal para | Especificaciones |
| :--- | :--- | :--- | :--- |
| 🏠 **Together Home** | **\$2.99** / mes | Hospedar en su propio PC | 20 GB de tráfico de retransmisión + Asistente IA |
| 🏕️ **Together Camp** | **\$4** / mes + **\$0.06** / h | 2–4 Amigos (Vanilla+ / mods ligeros) | 4 GiB RAM, 2/4 vCPU, 32 GiB NVMe |
| 🏡 **Together Lodge** *(Recomendado)* | **\$6** / mes + **\$0.09** / h | 4–6 Amigos (Modpacks pesados) | 6 GiB RAM, 3/6 vCPU, 48 GiB NVMe |
| 🏰 **Together Village** | **\$8** / mes + **\$0.12** / h | 6–10 Amigos (Grandes modpacks técnicos) | 8 GiB RAM, 4/8 vCPU, 64 GiB NVMe |

👉 **[Ver planes en el portal Together](/en/together/)**

---

## 💳 3. Solución de errores de pago y restricciones regionales

Al intentar comprar un plan o recargar saldo, puede aparecer un error de pasarela:

![Solución de error de pago](/guidephoto/errortoghether1.png)

### ¿Por qué falla el pago?
1. **Restricciones regionales del procesador de pagos**: Nuestro proveedor internacional (Creem) aplica filtros estrictos antifraude. Si su IP proviene de una región no admitida, la transacción será bloqueada.
2. **Bloqueo bancario de pagos internacionales**: Su banco puede rechazar cobros internacionales o conversiones automáticas de moneda.
3. **Bloqueo de scripts 3D Secure**: Algunos proveedores de internet bloquean ventanas de validación bancaria.

---

### 🛠️ Cómo solucionar el error de pago:

#### Paso 1: Conectarse mediante una VPN estable
Si la pasarela no carga o rechaza la compra por ubicación:
1. Active una **VPN** estable y conéctese a una región compatible (**Alemania, Reino Unido, Estados Unidos o país de la UE**).
2. Recargue la [página de pago de XMCL Together](/en/together/) con la VPN activa.
3. Complete el pago con tarjeta.

#### Paso 2: Verificar pagos internacionales y 3D Secure
* En su app bancaria, confirme que tiene activadas las **«Compras internacionales por internet»** y verifique los límites.
* Asegúrese de poder recibir el código de verificación 3D Secure.

#### Paso 3: Usar modo incógnito
Borre la caché o abra una ventana privada con la VPN encendida.

---

## 🛡️ 4. Seguridad, privacidad y reembolsos

* **Certificación PCI-DSS**: XMCL nunca guarda números de tarjeta ni datos bancarios.
* **Garantía de reembolso de saldo en 7 días**: Según nuestros [Términos de servicio](/en/together/terms), el saldo no utilizado puede ser reembolsado dentro de los 7 días posteriores a la recarga.
* **Cumplimiento de privacidad**: Cumplimiento estricto con el [RGPD europeo](/en/together/privacy). Los registros técnicos se conservan un máximo de 90 días.

---

## 💬 5. ¿Necesita ayuda?

Si persisten las dudas con su pago:
* 💬 **Discord oficial**: [discord.gg/W5XVwYY7GQ](https://discord.gg/W5XVwYY7GQ)
* 📧 **Correo de soporte**: `cijhn@hotmail.com`
