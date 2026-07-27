# Problema de Compatibilidad con Ely.by Authlib

Esta guía explica por qué aparece la advertencia **"Problema de compatibilidad con Ely.by Authlib"** en XMCL al iniciar versiones recientes de Minecraft y cómo solucionarlo en los ajustes de la instancia o del lanzador.

---

## ⚠️ ¿Por qué aparece esta advertencia?

Al iniciar sesión con una **cuenta de Ely.by**, XMCL reemplaza el archivo Authlib predeterminado para cargar aspectos (skins) desde los servidores de Ely.by.

En versiones recientes de Minecraft (**1.20.5+** o **1.21.x**), este inyector puede presentar incompatibilidades con el código actualizado de Mojang.

---

## 🛠 Cómo solucionar el problema

### Método 1: Desactivar Ely.by Authlib en la Instancia (Recomendado)

1. Abre XMCL y selecciona tu instancia de juego.
2. Ve a las **Opciones de la instancia** (icono de engranaje de la instancia).
3. Busca la opción **"Desactivar Ely.by Authlib"** (*Disable Ely.by Authlib*).
4. Activa el interruptor (**ON**).
5. Inicia el juego normalmente.

### Método 2: Desactivar Ely.by Authlib Globalmente

1. Ve a los **Ajustes del Lanzador** (icono de engranaje en el menú lateral).
2. Activa la opción **"Desactivar Ely.by Authlib"**.
