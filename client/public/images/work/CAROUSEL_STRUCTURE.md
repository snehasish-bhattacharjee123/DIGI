# Carousel Visual Structure

## Infinite Loop Mechanism

```
Visual Representation of Array Tripling:

Original Items:     [1][2][3][4][5][6][7]

Tripled Array:      [1][2][3][4][5][6][7][1][2][3][4][5][6][7][1][2][3][4][5][6][7]
                    ←---- Set 1 ----→←---- Set 2 ----→←---- Set 3 ----→

Starting Position:                   ↑ Start here (middle set)

Scrolling Right:    [1][2][3][4][5][6][7][1][2][3][4][5][6][7][1][2][3][4][5][6][7]
                                                        →→→→→→→→→→→→→→→

When reaching end:  [1][2][3][4][5][6][7][1][2][3][4][5][6][7][1][2][3][4][5][6][7]
                                                                        ↑
                    Jump back to: ↑ (invisible to user)
```

## Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                     WORK CAROUSEL SECTION                       │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Featured Work                                            │  │
│  │  Explore our portfolio of creative campaigns             │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │   [◄] ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  [►]  │  │
│  │       │ Reddit │ │Shopify │ │  Opa!  │ │GoHenry │       │  │
│  │       │        │ │        │ │        │ │        │       │  │
│  │       │ [img]  │ │ [img]  │ │ [img]  │ │ [img]  │       │  │
│  │       │        │ │        │ │        │ │        │       │  │
│  │       │  SAAS  │ │E-comm  │ │  F&B   │ │FinTech │       │  │
│  │       │ [tags] │ │ [tags] │ │ [tags] │ │ [tags] │       │  │
│  │       └────────┘ └────────┘ └────────┘ └────────┘       │  │
│  │                                                           │  │
│  │              ━━━━ ━━━━ ━━━━ ━━━━ ━━━━ ━━━━ ━━━━           │  │
│  │                    Progress Indicators                    │  │
│  │                                                           │  │
│  │              Auto-playing - Hover to pause               │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Card Structure

```
┌──────────────────────────────┐
│   Card (450px × 600px)       │
│ ┌──────────────────────────┐ │
│ │                          │ │
│ │    [Company Logo/Image]  │ │  ← Image Container
│ │                          │ │     (object-contain)
│ │                          │ │
│ ┌──────────────────────────┐ │
│ │ INDUSTRY (small text)    │ │  ← Industry Label
│ │ Company Name (large)     │ │  ← Company Name
│ │ [Tag1] [Tag2]            │ │  ← Service Tags
│ └──────────────────────────┘ │
└──────────────────────────────┘
        ↑
    Color Mood Background
```

## Responsive Breakpoints

```
Mobile (< 1024px):
┌─────┐ ┌─────┐ ┌─────┐
│ 260 │ │ 260 │ │ 260 │  ← Width: 260px
│  px │ │  px │ │  px │     Height: 380px
└─────┘ └─────┘ └─────┘     Gap: 16px

Desktop (≥ 1024px):
┌──────────┐ ┌──────────┐ ┌──────────┐
│   450    │ │   450    │ │   450    │  ← Width: 450px
│    px    │ │    px    │ │    px    │     Height: 600px
└──────────┘ └──────────┘ └──────────┘     Gap: 24px

XL (≥ 1280px):
┌──────────┐ ┌──────────┐ ┌──────────┐
│   450    │ │   450    │ │   450    │  ← Width: 450px
│    px    │ │    px    │ │    px    │     Height: 700px
└──────────┘ └──────────┘ └──────────┘     Gap: 24px
```

## Interaction Flow

```
User Action         →   Carousel State      →   Visual Effect
─────────────────────────────────────────────────────────────
Page Load          →   Auto-play ON         →   Smooth scroll
Hover Over         →   Auto-play PAUSED     →   Stop moving
Mouse Leave        →   Auto-play RESUME     →   Continue scroll
Click Left Arrow   →   Pause + Move Left    →   Slide left
Click Right Arrow  →   Pause + Move Right   →   Slide right
Drag Left          →   Pause + Drag         →   Follow cursor
Drag Right         →   Pause + Drag         →   Follow cursor
Release Drag       →   Resume after 500ms   →   Resume auto-play
```

## Animation Timeline

```
Time    Action
─────────────────────────────────────────────────────────
0ms     Card 1 visible
        ↓
3000ms  Animate to Card 2 (800ms duration)
        ↓
3800ms  Card 2 fully visible
        ↓
6800ms  Animate to Card 3 (800ms duration)
        ↓
7600ms  Card 3 fully visible
        ↓
        ... continues infinitely
        ↓
        When reaching Card 7×2:
        ↓
        Instantly jump to Card 7×1 (no animation)
        ↓
        Continue from Card 7×1 + 1
```

## Color Mood System

```
┌────────────┬───────────┬────────────┬──────────────────┐
│ Mood Name  │ Hex Code  │ Text Color │ Use Case         │
├────────────┼───────────┼────────────┼──────────────────┤
│ peach      │ #FFE5D9   │ #2D1B12    │ Warm/friendly    │
│ minty-leaf │ #D4F4DD   │ #0D3B1A    │ Growth/fresh     │
│ stone      │ #E8E4DF   │ #2C2822    │ Elegant/neutral  │
│ cloudy     │ #E5E9F0   │ #1A1F2E    │ Professional     │
│ sky        │ #D4E4F7   │ #0F2847    │ Trust/health     │
│ spark      │ #FFE8E8   │ #3D1616    │ Energy/passion   │
└────────────┴───────────┴────────────┴──────────────────┘
```

## State Management

```
Component State:
├── isPaused: boolean        (Controls auto-play)
├── isDragging: boolean      (Tracks drag state)
├── controls: AnimationControls  (Framer Motion)
└── x: MotionValue          (Current position)

Effects:
├── Auto-play Effect
│   ├── Watches: isPaused, isDragging
│   ├── Triggers: Every 3 seconds
│   └── Action: Advance one card
│
└── Position Reset Effect
    ├── Watches: x position
    ├── Triggers: When x < -totalWidth * 2
    └── Action: Jump to middle set
```
