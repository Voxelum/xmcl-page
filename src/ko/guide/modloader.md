# 모드 로더(Mod Loader)가 무엇이고, 왜 필요한가요?

Minecraft 모드 로더(Mod Loader)는 플레이어와 모드 개발자가 게임을 확장하고 풍부하게 만들 수 있도록 돕는 필수 도구입니다.

현실적인 셰이더 효과를 추가하여 게임 세계의 모습을 완전히 바꾸거나, TikTok과 YouTube에서 인기 있는 영상처럼 멋진 원경을 구현하고 싶다면, 모드 로더가 이러한 창의적 확장의 관문이 됩니다.

예를 들어, 사실적인 조명 효과를 위해 Sildur's Shaders와 같은 셰이더 모드를 설치하거나, "Distant Horizons" 모드를 추가하여 마인크래프트 월드에서 확장된 시야를 보고 싶다면 Fabric 또는 Forge와 같은 모드 로더가 필요합니다.

**사실 모드 선택에 따라 모드 로더 선택은 자연스럽게 정해집니다.**

이 문서에서는 네 가지 인기 있는 모드 로더를 살펴봅니다: **Minecraft Forge**, **Fabric**, **NeoForge**, **Quilt**. 각 로더는 서로 다른 기능과 장점을 제공하여 다양한 모딩 요구와 성능 선호에 맞춰 사용할 수 있습니다.


## Minecraft Forge

<AppForgePicture />

**개요:**

- 마인크래프트를 위한 원조 및 검증된 모드 로더
- 다양한 커뮤니티 지원과 안정된 생태계를 제공
- 강력한 API를 통해 깊이 있는 게임 통합 모드에 적합

**주요 기능:**

- **안정된 생태계:** 다년간 개발된 문서, 튜토리얼, 커뮤니티 자료 풍부
- **깊은 API 통합:** Forge의 포괄적 API를 활용해 게임 핵심 기능을 변경하는 모드 지원
- **광범위한 호환성:** 많은 인기 모드와 모드팩이 Forge 기반

**유의할 점:**

- **업데이트 지연:** 최신 마인크래프트 버전으로 업데이트가 느릴 수 있음
- **자원 사용량:** 풍부한 기능으로 인해 로딩 시간이 길어질 수 있음

## Fabric

<AppFabricPicture />

**개요:**

- 최신 마인크래프트 버전을 위한 가벼운 모드 로더
- 빠른 성능과 빠른 업데이트를 선호하는 개발자와 플레이어에게 적합
- 그래픽 성능 향상 모드나 시야 거리 확장 모드에 특히 적합

**주요 기능:**

- **성능 최적화:** 간결한 설계로 오버헤드 최소화, 시각 효과 모드에 적합
- **빠른 업데이트:** 모듈 구조로 신속한 최신 버전 대응 가능
- **개발자 친화적:** 단순하지만 강력한 API로 빠른 실험과 개발 가능

**사용 예시:**

- **넓은 시야:** "Distant Horizons"와 같은 모드를 설치하여 원경 확장
- **향상된 비주얼:** 사실적인 조명과 그림자 효과를 위한 셰이더 모드 설치

**유의할 점:**

- **모드 라이브러리 성장 중:** 커뮤니티는 확장 중이며, Forge만큼의 모드 수는 아님
- **구버전 지원 제한:** 주로 최신 버전용으로 설계되어 구버전 모드 지원 제한

## NeoForge

<AppNeoForgePicture />

**개요:**

- Forge의 호환성을 유지하면서 최신 성능 최적화를 적용한 신규 모드 로더
- 전통적인 기능과 최적화된 성능을 균형 있게 원하는 플레이어에게 적합

**주요 기능:**

- **하이브리드 접근:** Forge의 기능과 최신 성능 개선 기능 결합
- **최신 코드 기반:** 현대 모딩 방식에 맞춰 설계, 구버전 지원 포함
- **커뮤니티 중심:** 사용자 및 개발자 피드백에 따라 지속적으로 개선

**유의할 점:**

- **초기 단계:** 아직 지원 모드 수와 문서가 기존 로더만큼 풍부하지 않을 수 있음
- **생태계 성장 중:** 커뮤니티와 모드 라이브러리가 점진적으로 성장

## Quilt

**개요:**

- Fabric의 가벼운 기반을 확장하여 향상된 기능과 추가 개선 제공
- 커뮤니티 요구에 대응하여 개발, 모드 로딩 경험 개선

**주요 기능:**

- **기능 확장:** 추가 API와 도구 제공으로 모더의 창의성 확대
- **커뮤니티 중심 혁신:** 빠른 업데이트와 혁신적 기능 제공
- **무결점 통합:** 초기에는 Fabric 모드를 지원하며 점차 독립적 생태계 구축

**유의할 점:**

- **활발한 개발 중:** 초기 단계로 일부 불안정 가능
- **전환기:** Fabric 기반 장점 활용, 점차 독자적 플랫폼으로 발전 중

## 비교

## OptiFine

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppOptifinePicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">OptiFine</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">전설적인 마인크래프트 최적화 모드입니다. 프레임률(FPS) 대폭 향상, HD 텍스처 지원, 셰이더 지원 및 다양한 세부 그래픽 설정을 제공합니다.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">FPS Boost</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Shaders Support</span>
      <span style="background: rgba(30, 58, 138, 0.15); color: #60a5fa; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Fine-Tuning</span>
    </div>
  </div>
</div>

*   **장점:** 구버전 마인크래프트에서 독보적인 호환성을 가지며, 다른 모드 설치 없이 셰이더를 구동할 수 있는 가장 간단한 방법입니다.
*   **단점:** 소스코드가 비공개(closed-source)이므로 최신 Forge/Fabric 모드와 충돌이 잦습니다.

---

## LabyMod

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); margin: 20px 0;">
  <div style="flex-shrink: 0; background: var(--vp-c-bg-mute); padding: 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px;">
    <AppLabymodPicture />
  </div>
  <div>
    <h3 style="margin-top: 0 !important; font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1);">LabyMod</h3>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 12px;">다양한 기능을 탑재한 마인크래프트 클라이언트 수정 모드입니다. 사용자 인터페이스를 전면 개편하고 실용적인 위젯, 애니메이션, 내장 코스메틱을 제공합니다.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Custom HUD</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Client Mod</span>
      <span style="background: rgba(15, 23, 42, 0.15); color: #22d3ee; padding: 4px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Cosmetics</span>
    </div>
  </div>
</div>

*   **장점:** 모듈식 디자인, 다양한 PvP 위젯 제공, 매끄러운 인게임 통합 및 자유도 높은 HUD 설정이 가능합니다.
*   **단점:** 멀티플레이어와 PvP 위주로 구성되어 있어, 대규모 월드 생성 관련 모드들과 호환성 충돌이 일어날 수 있습니다.

---

## 비교

| 기능 | Minecraft Forge | Fabric | NeoForge | Quilt | OptiFine | LabyMod |
| --- | --- | --- | --- | --- | --- | --- |
| **성능** | 로딩 시간이 다소 길 수 있음 | 빠른 속도 | 안정성과 성능 | 빠른 속도와 추가 기능 제공 | 구버전에서 탁월한 FPS 상승 효과 | 매우 부드러움, HUD 최적화 |
| **커뮤니티 & 지원** | 방대한 커뮤니티와 지원 | 빠르게 성장 중 | 초기 단계, 커뮤니티 발전 중 | Fabric 커뮤니티 활용 | 널리 알려졌으나 최신 버전 지원 감소 | 멀티플레이어 전용 커뮤니티 |
| **모드 호환성** | 광범위하고 검증됨 | 최신 모드에 최적화 | 구버전 및 신규 모드 지원 | Fabric 모드 호환 | 충돌 많음 (비공개 소스) | 모듈식 베이스, PvP 중심 애드온 |
| **업데이트 주기** | 새로운 버전 채택 느림 | 빠르고 민첩함 | 피드백을 통한 점진적 개선 | 빠른 업데이트 | 업데이트가 느림 (비공개 소스) | PvP 주력 버전에 빠른 업데이트 |

---

## XMCL에서의 모드로дер 및 모드 관리

X Minecraft Launcher (XMCL)는 모드로더 설치 및 모드 관리를 위한 네이티브 통합 시스템을 제공합니다. 별도의 `.jar` 또는 `.exe` 설치 파일을 수동으로 다운로드하거나 복잡한 설치 단계를 거칠 필요가 없습니다.

### 1. 모드로더 원클릭 설치
새로운 인스턴스를 생성하거나 기존 인스턴스의 버전을 수정할 때:
1. 인스턴스 설정에서 버전 선택 패널을 엽니다.
2. 원하는 마인크래프트 버전을 선택합니다.
3. 사용할 모드로더(**Forge**, **Fabric**, **NeoForge**, **Quilt**)와 최적화 추가 기능이나 클라이언트 수정 모드(**OptiFine**, **LabyMod**)를 체크합니다.
4. 게임을 시작할 때 XMCL이 필요한 모든 실행 라이브러리와 종속성을 자동으로 감지하고 다운로드합니다.

### 2. 통합 모드 다운로더
인스턴스의 **모드** 탭에서 웹 브라우저를 열지 않고도 **Modrinth** 및 **CurseForge**의 모드를 직접 검색하고 다운로드할 수 있습니다:
* **자동 필터링:** XMCL은 인스턴스의 마인크래프트 버전 및 모드로더에 맞춰 검색 결과를 자동으로 필터링합니다. 호환 가능한 모드만 표시됩니다.
* **자동 종속성 해결:** 모드가 추가 라이브러리(*Fabric API* 또는 *Architectury* 등)를 요구하는 경우, XMCL이 이를 식별하여 필수 종속성을 자동으로 다운로드하도록 제공합니다.

### 3. 모드 활성화/비활성화 및 업데이트
* **모드 활성화/비활성화:** 모드 목록의 토글 스위치를 통해 개별 모드를 일시적으로 활성화하거나 비활성화할 수 있습니다. `mods` 폴더에서 파일을 번거롭게 옮길 필요가 없습니다.
* **간편한 업데이트:** 설치된 모드를 검사하여 업데이트가 가능한 모드를 직관적으로 알려주며, 클릭 한 번으로 최신 버전으로 업데이트할 수 있습니다.

