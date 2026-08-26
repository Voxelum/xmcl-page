# Microsoft 로그인, 베드락(Bedrock)과 Java 에디션 차이 및 라이선스 문제 해결

이 가이드에서는 XMCL의 Microsoft 계정 인증 메커니즘, 로그인 오류(**"failed to exchange Xbox token"** 또는 미구매 오류)가 발생하는 원인, 게임이 **데모 모드(Demo Mode)**로 실행되는 이유, **베드락 에디션(모바일/콘솔)**과 **Java 에디션(PC)**의 결정적 차이 및 계정 문제 해결 방법을 설명합니다.

---

## 🔑 1. Microsoft 계정으로 로그인하기

공식 Minecraft 정품 라이선스로 로그인하여 플레이하는 방법:

1. 오른쪽 상단의 프로필 아이콘(또는 **"계정 관리"**)을 클릭하여 계정 관리자를 엽니다:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. **"계정 추가"**를 클릭하고 **Microsoft**를 선택한 후 안내에 따라 로그인을 완료합니다:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **기기 코드로 로그인 (Device Code):**  
> 런처에 직접 비밀번호를 입력하지 않으려면 **"기기 코드로 로그인"**을 선택하세요. XMCL이 8자리 코드를 생성하면 웹 브라우저에서 [microsoft.com/link](https://microsoft.com/link)에 접속하여 코드를 입력하고 확인합니다.

---

## 🔍 2. Microsoft 3단계 인증 절차

로그인 시 런처는 다음 3단계 인증 서버와 순차적으로 통신합니다:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 3단계 인증 흐름:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">1단계</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft OAuth</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">이메일 및 비밀번호 확인</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">2단계</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live 서비스</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Xbox 게이머태그 확인</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ 주요 실패 지점</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">3단계 (토큰 교환)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Mojang Java 라이선스</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">PC Java 소유권 확인</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    3단계가 실패하면 <strong>"failed to exchange Xbox token"</strong>(또는 미구매) 오류가 발생하거나 게임이 <strong>데모 모드(Demo Mode)</strong>로 실행됩니다. 이는 Mojang 서버에서 해당 Microsoft 계정에 유효한 <strong>Minecraft: Java Edition</strong> 라이선스를 찾지 못했음을 의미합니다.
  </p>
</div>

---

## 🛑 3. 가장 흔한 오해: 베드락 에디션(Bedrock) vs Java 에디션

**XMCL은 Minecraft: Java Edition(PC / Windows, macOS, Linux) 전용 런처입니다.**

스마트폰이나 콘솔 기기에서 마인크래프트를 구매한 후 로그인하려는 경우 다음 사항을 확인해야 합니다:

| 구매한 플랫폼 및 경로 | 보유한 에디션 | XMCL 지원 여부 | 실패 원인 설명 |
| :--- | :--- | :--- | :--- |
| 📱 **모바일 (iOS / Android / Google Play)** | 베드락 에디션 (Bedrock) | ❌ 미지원 | 모바일 구매는 PC용 Java 에디션을 포함하지 않습니다. |
| 🎮 **PlayStation 4 / 5 콘솔** | 베드락 에디션 (Bedrock) | ❌ 미지원 | PSN 스토어 구매는 콘솔 전용입니다. |
| 🎮 **Xbox One / Series X\|S 콘솔** | 베드락 에디션 (Bedrock) | ❌ 미지원 | 콘솔 기기 구매는 PC Java로 이전되지 않습니다. |
| 🕹️ **Nintendo Switch** | 베드락 에디션 (Bedrock) | ❌ 미지원 | 닌텐도 eShop 구매는 스위치 전용입니다. |
| 💻 **PC (Minecraft: Java & Bedrock 번들)** | Java + 베드락 에디션 | ✅ **지원** | 공식 완벽 지원! |
| 🟢 **PC Game Pass / Ultimate 구독** | Java + 베드락 에디션 | ✅ **지원** | 구독 기간 중 이용 가능합니다. |

> ⚠️ **중요 안내:**  
> **스마트폰**, **PlayStation**, **Xbox 콘솔**, **닌텐도 스위치**에서만 마인크래프트를 구매하셨다면, Mojang 인증 시스템은 해당 계정이 **Java 에디션을 보유하고 있지 않다**고 판정합니다.  
> PC에서 공식 Java 에디션을 이용하려면 [Minecraft.net](https://www.minecraft.net/)에서 **"Minecraft: Java & Bedrock Edition for PC"** 번들을 구매하시거나 **PC Game Pass**를 구독하셔야 합니다.

---

## 🛠 4. 자주 발생하는 로그인 오류 해결 방법

### 원인 A: 해당 Microsoft 계정에 Java 에디션 라이선스가 없음

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang에서 PC 버전 구매 내역을 찾을 수 없음</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Microsoft 계정 자체는 유효하지만 Mojang 데이터베이스에 Java Edition 라이선스가 등록되어 있지 않습니다.</p>
  </div>
</div>

#### 해결 방법:
* **Minecraft.net에서 확인:** [Minecraft.net](https://www.minecraft.net/)에 로그인하여 프로필에 Java 닉네임이 표시되는지, 아니면 "지금 구매" 버튼이 뜨는지 확인합니다.
* **주문 내역 확인:** [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders)에서 구매 내역을 조회하여 구매한 항목이 PC 번들인지 콘솔/모바일 버전인지 확인합니다.
* **이메일 주소 확인:** 학교, 직장 또는 게임을 구매하지 않은 다른 계정으로 로그인했는지 확인합니다.
* **Game Pass 구독 상태:** PC 지원이 포함된 Game Pass 플랜이 유효한지 확인합니다.

---

### 원인 B: Xbox Live 프로필(게이머태그)이 생성되지 않음

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">계정에 Xbox Gamertag가 없음</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">새로 생성한 계정은 Xbox 프로필이 없을 수 있어 인증 토큰 발급이 거부됩니다.</p>
  </div>
</div>

#### 해결 방법:
1. 웹 브라우저에서 [Xbox.com](https://www.xbox.com/)에 접속합니다.
2. 오른쪽 상단에서 **로그인**합니다.
3. 약관에 동의하고 **게이머태그(Gamertag)**를 생성합니다.
4. 1~2분 후 XMCL에서 다시 로그인을 시도합니다.

---

### 원인 C: 네트워크 차단 및 DNS 문제

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang / Xbox 인증 서버와의 통신 차단</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">방화벽이나 DNS 장애로 인해 <code>api.minecraftservices.com</code> 연결이 실패합니다.</p>
  </div>
</div>

#### 해결 방법:
* **VPN 사용:** 신뢰할 수 있는 VPN에 연결한 후 로그인을 시도합니다.
* **XMCL 프록시 설정:** **설정** -> **네트워크 설정**에서 프록시(HTTP/HTTPS/SOCKS5)를 입력합니다.
* **hosts 파일 확인:** 시스템 hosts 파일에 `mojang.com` 관련 잘못된 리디렉션이 없는지 확인합니다.

---

## 🎮 정품 라이선스가 없으신가요?

현재 공식 라이선스가 없더라도 **오프라인 모드**나 서드파티 스킨 네트워크를 통해 게임을 즐기실 수 있습니다.

👉 **[전체 가이드: 라이선스 없이 플레이하기 (오프라인 모드 및 대체 계정)](./offline-mode)**
