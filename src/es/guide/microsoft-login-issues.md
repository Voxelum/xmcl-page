# Inicio de sesión de Microsoft, Bedrock vs Java y problemas de licencia

Esta guía detalla el funcionamiento de la autenticación de Microsoft en XMCL, por qué ocurren errores de inicio de sesión (como **«failed to exchange Xbox token»** o no comprado), por qué el juego puede iniciarse en **Modo Demo (Demo Mode)**, la diferencia fundamental entre **Bedrock Edition (móvil/consolas)** y **Java Edition (PC)**, y cómo solucionar problemas de cuenta.

---

## 🔑 1. Iniciar sesión con una cuenta de Microsoft

Para iniciar sesión con su licencia oficial de Minecraft, siga estos pasos:

1. Haga clic en su avatar (o **«Administrar cuenta»**) en la esquina superior derecha para abrir el Administrador de cuentas:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Haga clic en **«Añadir cuenta»**, elija **Microsoft** y continúe con el inicio de sesión:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Iniciar sesión mediante código de dispositivo (Device Code):**  
> Si no desea introducir su contraseña en el lanzador, marque **«Iniciar sesión con código de dispositivo»**. XMCL generará un código de 8 dígitos; visite [microsoft.com/link](https://microsoft.com/link) en su navegador para confirmar.

---

## 🔍 2. Proceso de verificación en 3 pasos de Microsoft

Al iniciar sesión, el lanzador se comunica a través de tres etapas independientes de validación:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Las 3 etapas de verificación:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">PASO 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">OAuth de Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica correo y contraseña</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">PASO 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Servicios Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Obtiene el Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Fallo común</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">PASO 3 (Intercambio)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Licencia Mojang Java</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica compra en PC</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Si el paso 3 falla, el inicio devolverá <strong>«failed to exchange Xbox token»</strong> o el juego se iniciará en <strong>Modo Demo</strong>. Esto significa que los servidores de Mojang no encontraron una licencia activa de <strong>Minecraft: Java Edition</strong> en esta cuenta de Microsoft.
  </p>
</div>

---

## 🛑 3. La confusión más común: Bedrock Edition vs. Java Edition

**XMCL es un lanzador exclusivo para Minecraft: Java Edition (PC con Windows, macOS y Linux).**

Muchos usuarios compran el juego en móviles o consolas e intentan iniciar sesión en XMCL:

| Plataforma de compra | Edición adquirida | ¿Compatible con XMCL? | Explicación |
| :--- | :--- | :--- | :--- |
| 📱 **Móvil (iOS / Android / Google Play)** | Bedrock Edition | ❌ No | La compra móvil no otorga licencia de Java en PC. |
| 🎮 **Consola PlayStation 4 / 5** | Bedrock Edition | ❌ No | La compra en PSN solo es válida en consola. |
| 🎮 **Consola Xbox One / Series X\|S** | Bedrock Edition | ❌ No | La compra de consola no se transfiere a Java en PC. |
| 🕹️ **Nintendo Switch** | Bedrock Edition | ❌ No | Las compras en Nintendo eShop son exclusivas de Switch. |
| 💻 **PC (Paquete Minecraft: Java & Bedrock)** | Java & Bedrock | ✅ **Sí** | ¡Totalmente compatible! |
| 🟢 **Suscripción PC Game Pass / Ultimate** | Java & Bedrock | ✅ **Sí** | Compatible mientras la suscripción esté activa. |

> ⚠️ **Importante:**  
> Si solo compró Minecraft en su **teléfono**, **PlayStation**, **consola Xbox** o **Nintendo Switch**, los servidores de Mojang indicarán que la cuenta **no posee Java Edition**.  
> Para jugar a la edición oficial de Java en PC, debe poseer el paquete **«Minecraft: Java & Bedrock Edition for PC»** en [Minecraft.net](https://www.minecraft.net/) o contar con una suscripción activa a **PC Game Pass**.

---

## 🛠 4. Solución de problemas comunes de inicio de sesión

### Causa A: Sin licencia de Java Edition en esta cuenta

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang no detecta licencia de PC</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">La cuenta de Microsoft se autenticó correctamente, pero Mojang no encuentra ninguna compra de Java Edition registrada.</p>
  </div>
</div>

#### Solución:
* **Comprobar en Minecraft.net:** Inicie sesión en [Minecraft.net](https://www.minecraft.net/). Si el sitio muestra «Comprar ahora» en lugar del nombre de su perfil Java, la cuenta no posee el juego.
* **Historial de pedidos:** Visite [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) para comprobar qué edición compró.
* **Verificar el correo:** Asegúrese de no estar utilizando un correo escolar o secundario en lugar de la cuenta personal con la compra.
* **Estado de Game Pass:** Verifique que su suscripción esté activa e incluya PC.

---

### Causa B: Perfil de Xbox Live ausente o no configurado

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">La cuenta no tiene Gamertag de Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Las cuentas nuevas a menudo carecen de un perfil de Xbox Live inicializado, lo que impide generar el token de acceso.</p>
  </div>
</div>

#### Solución:
1. Abra [Xbox.com](https://www.xbox.com/) en su navegador.
2. Haga clic en **Iniciar sesión** arriba a la derecha.
3. Acepte los términos y cree un **Gamertag**.
4. Espere 1–2 minutos e intente iniciar sesión de nuevo en XMCL.

---

### Causa C: Restricciones de red y bloqueos DNS

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Conexión bloqueada con servidores Mojang / Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Un cortafuegos o problemas de DNS impiden conectar con <code>api.minecraftservices.com</code>.</p>
  </div>
</div>

#### Solución:
* **Usar una VPN:** Active una VPN estable antes de iniciar sesión.
* **Configurar proxy en XMCL:** En **Configuración** -> **Ajustes de red**, ingrese su proxy (HTTP/HTTPS/SOCKS5).
* **Comprobar archivo hosts:** Asegúrese de que no haya redirecciones antiguas de `mojang.com` en su archivo hosts del sistema.

---

## 🎮 ¿No tiene licencia de pago?

Si no posee una licencia oficial, puede jugar utilizando el **Modo Offline** o servidores de skins comunitarios.

👉 **[Guía completa: Jugar sin licencia (Modo offline y cuentas alternativas)](./offline-mode)**
