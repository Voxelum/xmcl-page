# Guía de Inicio de Sesión de Cuenta Microsoft y Modo Demo

Esta guía te explicará cómo añadir tu cuenta de Microsoft a XMCL, cómo funciona el proceso de autenticación oficial y cómo solucionar los errores comunes al iniciar sesión, como **"failed to exchange Xbox token"** o el problema al quedar bloqueado en el **Modo Demo (Demostración)**.

---

## 🔑 1. Cómo añadir una Cuenta Microsoft

Para jugar a Minecraft con tu cuenta oficial oficial, debes iniciar sesión:

1. Haz clic en tu perfil/avatar (o en **"Gestionar cuenta"**) en la parte superior derecha para abrir el gestor de cuentas:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Haz clic en **"Añadir cuenta"**, selecciona **Microsoft** y procede a iniciar sesión:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Iniciar sesión mediante código de dispositivo (Device Code):**  
> Si no quieres escribir tu contraseña directamente en el lanzador, puedes marcar la casilla **"Login by Device Code"** (Iniciar sesión por código de dispositivo). XMCL te mostrará un código de letras. Entra en `microsoft.com/link` desde tu navegador, introduce el código y confirma el inicio de sesión.

---

## 🔍 2. Cómo funciona el proceso de autenticación

Para poder arrancar una copia con licencia oficial de Minecraft, el lanzador debe validar tu identidad en tres pasos de seguridad consecutivos:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Negociación de autenticación (Handshake):</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">PASO 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Inicio de sesión Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Comprueba contraseña</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">PASO 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Servicios Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Obtiene Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Fallo aquí</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">PASO 3 (Intercambio)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Token de Minecraft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifica la licencia</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    El error <strong>"failed to exchange Xbox token"</strong> significa que el Paso 1 y el Paso 2 se completaron con éxito, pero los servidores de autenticación de Mojang rechazaron el intercambio de token en el Paso 3.
  </p>
</div>

---

## 🛠 3. Tres causas principales y sus soluciones

### 1. No hay licencia de Minecraft en esta cuenta

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Causa: Los servidores de Mojang no encontraron el juego comprado</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Esta es la razón más común. Iniciaste sesión correctamente en tu cuenta de Microsoft, pero Mojang indica al lanzador que esa cuenta específica no tiene una licencia adquirida para Minecraft Java Edition.</p>
  </div>
</div>

#### Cómo solucionarlo:
* **Verificar la compra:** Inicia sesión con tu cuenta de Microsoft en [Minecraft.net](https://www.minecraft.net/). Comprueba si aparece el botón de descargar el juego en tu perfil en lugar de invitarte a comprarlo.
* **Comprobar suscripción de Game Pass:** Si juegas mediante **Xbox Game Pass**, asegúrate de que tu suscripción esté activa y de iniciar sesión exactamente con la misma cuenta de Microsoft asociada al servicio.
* **Comprobar la dirección de correo:** Asegúrate de no haber iniciado sesión con otra cuenta de correo de Microsoft (como la de la escuela o trabajo) en lugar de la cuenta personal en la que compraste el juego.

---

### 2. La cuenta de Microsoft no tiene un perfil de Xbox (Falta el Gamertag)

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👾
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Causa: La cuenta de Microsoft no está configurada para videojuegos</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Tu cuenta de Microsoft necesita tener creado un perfil de Xbox Live asociado para poder generar los tokens del juego. Si acabas de comprar Minecraft o nunca has abierto el juego oficial antes, es posible que el perfil aún no exista, dejándote atrapado en el **Modo Demo**.</p>
  </div>
</div>

#### Cómo solucionarlo:
1. Entra al sitio web oficial de [Xbox.com](https://www.xbox.com/).
2. Inicia sesión con tus credenciales de Microsoft.
3. Si el sistema te lo solicita, crea un perfil de Xbox Live gratuito (elige un nombre de jugador o Gamertag y un avatar).
4. Una vez creado el perfil, reinicia XMCL e intenta iniciar sesión nuevamente.

---

### 3. Errores de red o bloqueos de conexión regionales

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #3b82f6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Causa: Inconvenientes de DNS o bloqueos regionales de red</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">En ciertas regiones o con ciertos proveedores de internet estrictos, la conexión a los servidores de autenticación de Xbox Live o de Mojang puede estar interrumpida o bloqueada por cortafuegos.</p>
  </div>
</div>

#### Cómo solucionarlo:
* **Usa una VPN:** Si estás en un país con bloqueos de internet, utiliza una VPN para completar el inicio de sesión de Microsoft.
* **Cambia de DNS:** Modifica los DNS de tu sistema por unos públicos y rápidos (por ejemplo, Google DNS: `8.8.8.8` y `8.8.4.4` o Cloudflare DNS: `1.1.1.1`).
* **Inténtalo de nuevo más tarde:** Los servidores de Microsoft pueden estar saturados temporalmente. Espera unos minutos e inténtalo de nuevo.

---

## 🚪 4. Modo sin conexión y alternativas de inicio (Jugar sin cuenta Microsoft)

Si no dispones de una cuenta de Microsoft oficial, deseas jugar sin conexión a internet, o juegas en un servidor local cerrado, XMCL te ofrece opciones de inicio de sesión alternativas.

### Opción A: Modo local / Juego sin conexión (Modo Desarrollador)

El **Modo Desarrollador** (Developer Mode) te permite jugar de manera local sin conexión y sin necesidad de usar ninguna contraseña, pudiendo elegir cualquier nombre de usuario.

1. Abre el gestor de cuentas en la esquina superior derecha de XMCL.
2. Haz clic en **"Añadir cuenta"** (Add Account).
3. Selecciona la opción de **Desarrollador** (Developer):

   <img src="/guidephoto/developer-mode.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Escribe el nombre de usuario que desees y pulsa aceptar.
5. Ya puedes abrir el juego. **Nota:** Las cuentas sin conexión solo pueden entrar en servidores no protegidos (es decir, configurados con `online-mode=false` en las propiedades del servidor) y tu personaje mostrará la apariencia por defecto de Steve o Alex.

---

### Opción B: Servidores de Skins personalizados (API Yggdrasil)

Si deseas jugar mostrando tu propio avatar personalizado (skin) dentro de servidores privados, XMCL tiene soporte nativo para plataformas de autenticación externas como **LittleSkin**, **Ely.by** o cualquier servidor Yggdrasil personalizado.

1. En el gestor de cuentas, haz clic en **Añadir cuenta**.
2. Elige el servicio correspondiente (por ejemplo, **LittleSkin** o la opción **Yggdrasil** para escribir la URL de la API personalizada).
3. Introduce los datos de acceso que registraste en dicha plataforma externa:

   <img src="/guidephoto/reg-account.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. El lanzador obtendrá tu avatar, skins y credenciales de forma automática directamente desde el servidor indicado.
