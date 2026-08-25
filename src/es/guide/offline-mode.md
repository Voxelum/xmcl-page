# Jugar sin licencia (Modo offline y cuentas alternativas)

XMCL es un lanzador de código abierto diseñado para respetar la libertad de los jugadores. Si actualmente no posee una licencia de pago de Minecraft Java Edition, o si desea probar modpacks sin conexión a los servidores de Mojang, XMCL ofrece compatibilidad total con el **Modo Offline** y redes comunitarias de aspectos (skins).

---

## ⚙️ 1. Activar el Modo Desarrollador

Para desbloquear cuentas offline y servidores de skins de terceros, active el **Modo Desarrollador** en los ajustes:

1. Abra **Configuración** (icono de engranaje en la parte inferior izquierda).
2. Busque la opción **«Modo desarrollador»** y **actívela**:

   ![Activar Modo Desarrollador](/guidephoto/developer-mode.png)

Una vez activo, el Administrador de cuentas mostrará opciones adicionales de inicio de sesión.

---

## 👥 2. Tipos de cuentas disponibles

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Modo Offline (Cuenta local)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Juegue sin conexión a servidores de autenticación. Solo ingrese el nombre de usuario que prefiera. Ideal para un jugador, pruebas de modpacks en local, partidas en LAN y servidores comunitarios con <code>online-mode=false</code>.
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Servidor gratuito de autenticación y skins de la comunidad con soporte para capas personalizadas.  
      Sitio web: <a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Red global de autenticación y skins con biblioteca en la nube y capas HD.  
      Sitio web: <a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Servidor Authlib-Injector / Yggdrasil personalizado</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Conéctese a cualquier servidor privado de autenticación mediante la URL de la API Yggdrasil.
    </p>
  </div>

</div>

---

## 🎮 3. Añadir y cambiar cuentas

1. Haga clic en el icono de perfil arriba a la derecha para abrir el **Administrador de cuentas**.
2. Haga clic en **«Añadir cuenta»**.
3. Seleccione **Offline**, **LittleSkin**, **Ely.by** o **Servidor personalizado**.
4. Ingrese su nombre o credenciales.
5. Haga clic en la cuenta para marcarla como **Activa**.

---

## 💡 4. Comparativa de tipos de cuenta

| Característica | Cuenta de Microsoft (Oficial) | Cuenta Offline | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **Precio** | De pago (Licencia oficial) | Gratis | Gratis |
| **Servidores oficiales (Hypixel, etc.)** | ✅ Sí | ❌ No | ❌ No |
| **Servidores de comunidad / LAN / P2P** | ✅ Sí | ✅ Sí (`online-mode=false`) | ✅ Sí |
| **Un jugador y modpacks** | ✅ Sí | ✅ Sí | ✅ Sí |
| **Skins y capas personalizadas** | ✅ Skins oficiales | ⚠️ Skin por defecto | ✅ Skins y capas de la red |

---

## ❓ Preguntas frecuentes

### ¿Puedo entrar a Hypixel con una cuenta Offline?
No. Los servidores públicos oficiales comprueban la autenticidad del jugador con Mojang (`online-mode=true`), lo cual requiere una cuenta de Microsoft con Java Edition comprada.

### ¿Cómo juego con amigos sin licencia?
Puede usar la función integrada **P2P Multiplayer / Compartir en LAN** de XMCL o conectarse a un servidor comunitario con `online-mode=false`.

👉 **[¿Problemas con el inicio de sesión oficial? Consulte nuestra guía de soluciones Microsoft](./microsoft-login-issues)**
