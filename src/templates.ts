/**
 * Example templates for the editor: each has id, name, and Mermaid code.
 * getCategory maps template id to a category for filtering and grouping.
 */
export interface Template {
  id: string;
  name: string;
  code: string;
}

export const CATEGORY_ORDER = [
  'Flowchart',
  'Processes',
  'Sequence',
  'Class',
  'State',
  'ER',
  'Gantt',
  'Pie',
  'Chart',
  'Journey',
  'Block',
  'Quadrant',
  'Mindmap',
  'Timeline',
  'Git',
  'Starter',
  'Others',
] as const;

/** Category for a template */
export function getCategory(t: Template): string {
  const id = t.id;
  if (id.startsWith('flow-')) return 'Flowchart';
  if (id.startsWith('process-')) return 'Processes';
  if (id.startsWith('sequence-')) return 'Sequence';
  if (id.startsWith('class-')) return 'Class';
  if (id.startsWith('state-')) return 'State';
  if (id.startsWith('er-')) return 'ER';
  if (id.startsWith('gantt-')) return 'Gantt';
  if (id.startsWith('pie-')) return 'Pie';
  if (id.startsWith('journey-')) return 'Journey';
  if (id.startsWith('block-')) return 'Block';
  if (id === 'quadrant' || id.startsWith('quadrant-')) return 'Quadrant';
  if (id.startsWith('chart-') || id.startsWith('xy-')) return 'Chart';
  if (id.startsWith('mindmap')) return 'Mindmap';
  if (id.startsWith('timeline')) return 'Timeline';
  if (id.startsWith('git')) return 'Git';
  if (id === 'blank') return 'Starter';
  return 'Others';
}

export const TEMPLATES: Template[] = [
  // Flowcharts
  {
    id: 'flow-lr',
    name: 'Flowchart LR',
    code: `flowchart LR
  S[Open Diagramium] --> T[Choose template]
  T --> E[Edit Mermaid code]
  E --> P[Preview diagram]
  P --> X{Happy?}
  X -->|No| E
  X -->|Yes| D[Download / share]
`,
  },
  {
    id: 'flow-tb',
    name: 'Flowchart TB',
    code: `flowchart TB
  Idea --> Draft --> Review --> Publish
  Publish --> Learn[Collect feedback]
  Learn --> Idea
`,
  },
  {
    id: 'flow-shapes',
    name: 'Flowchart shapes',
    code: `flowchart LR
  T1[Task] --> N1(Rounded note)
  N1 --> S1([Sub-process])
  S1 --> DB[(Config store)]
  DB --> E1((Event))
`,
  },
  {
    id: 'flow-subgraph',
    name: 'Flowchart subgraphs',
    code: `flowchart TB
  subgraph Cloud
    API
    Workers
  end
  subgraph On-Prem
    DB[(Database)]
  end
  API --> Workers
  Workers --> DB
`,
  },
  {
    id: 'flow-process-area',
    name: 'Process areas',
    code: `flowchart TB
  subgraph "Area 1: Input"
    A[Receive] --> B[Validate]
  end
  subgraph "Area 2: Process"
    B --> C[Transform]
    C --> D[Enrich]
  end
  subgraph "Area 3: Output"
    D --> E[Send]
    E --> F[Confirm]
  end
`,
  },
  {
    id: 'flow-approval',
    name: 'Approval process',
    code: `flowchart TB
  A[Submit] --> B{Valid?}
  B -->|No| C[Reject]
  B -->|Yes| D[Review]
  D --> E{Approved?}
  E -->|No| F[Return to author]
  E -->|Yes| G[Approve]
  G --> H[Notify]
  F --> A
`,
  },
  {
    id: 'flow-bpmn',
    name: 'BPMN-style process',
    code: `flowchart LR
  subgraph "Pool: Customer"
    A((Start)) --> B[Place order]
    B --> C{Wait}
  end
  subgraph "Pool: System"
    C --> D[Process payment]
    D --> E[Reserve stock]
    E --> F[Ship]
  end
  F --> C
  C --> G((End))
`,
  },
  {
    id: 'flow-crossfunctional',
    name: 'Cross-functional',
    code: `flowchart TB
  subgraph Sales
    S1[Lead] --> S2[Quote]
  end
  subgraph Operations
    S2 --> O1[Order]
    O1 --> O2[Fulfill]
  end
  subgraph Finance
    O2 --> F1[Invoice]
    F1 --> F2[Payment]
  end
  F2 --> S1
`,
  },
  {
    id: 'flow-operations',
    name: 'Operations process',
    code: `flowchart TB
  subgraph "Request"
    R1[Receive] --> R2[Log]
    R2 --> R3[Assign]
  end
  subgraph "Execute"
    R3 --> E1[Work]
    E1 --> E2{OK?}
    E2 -->|Yes| E3[Close]
    E2 -->|No| E1
  end
  subgraph "Complete"
    E3 --> C1[Notify]
    C1 --> C2[Archive]
  end
`,
  },
  {
    id: 'flow-minimal',
    name: 'Flowchart minimal',
    code: `flowchart LR
  A --> B
`,
  },
  // Sequence
  {
    id: 'sequence-basic',
    name: 'Sequence basic',
    code: `sequenceDiagram
  participant V as Visitor
  participant W as WebApp
  participant S as AuthService
  V->>W: open /signup
  W->>S: create user
  S-->>W: ok / error
  W-->>V: show result
`,
  },
  {
    id: 'sequence-opt',
    name: 'Sequence with opt',
    code: `sequenceDiagram
  participant User
  participant System
  User->>+System: login
  alt success
    System-->>User: token
  else failure
    System-->>User: error
  end
`,
  },
  {
    id: 'sequence-loop',
    name: 'Sequence with loop',
    code: `sequenceDiagram
  participant C as Client
  participant S as Server
  loop Polling
    C->>S: get status
    S-->>C: status
  end
`,
  },
  // Class
  {
    id: 'class-basic',
    name: 'Class diagram',
    code: `classDiagram
  class ApiClient {
    +get(path)
    +post(path, body)
  }
  class AuthClient {
    +login()
    +logout()
  }
  ApiClient <|-- AuthClient
`,
  },
  {
    id: 'class-relations',
    name: 'Class relations',
    code: `classDiagram
  class Service {
    +name: string
    +start()
    +stop()
  }
  class HttpService {
    +port: int
  }
  class WorkerService {
    +queue: string
  }
  class EventBus {
    +publish()
    +subscribe()
  }
  Service <|-- HttpService
  Service <|-- WorkerService
  HttpService --> EventBus : emits
  WorkerService --> EventBus : consumes
`,
  },
  // State
  {
    id: 'state-basic',
    name: 'State diagram',
    code: `stateDiagram-v2
  [*] --> Draft
  Draft --> InReview: submit
  InReview --> Draft: changes requested
  InReview --> Published: approve
  Published --> Archived: archive
`,
  },
  {
    id: 'state-choice',
    name: 'State with choice',
    code: `stateDiagram-v2
  [*] --> Evaluate
  Evaluate --> Small: score < 5
  Evaluate --> Large: score >= 5
  Small --> [*]
  Large --> [*]
`,
  },
  // ER
  {
    id: 'er-basic',
    name: 'ER diagram',
    code: `erDiagram
  TEAM ||--o{ PROJECT : owns
  PROJECT ||--o{ TASK : contains
  USER ||--o{ TASK : assigned
  TEAM {
    string id
    string name
  }
  USER {
    string id
    string email
  }
  PROJECT {
    string id
    string key
  }
  TASK {
    string id
    string status
  }
`,
  },
  {
    id: 'er-simple',
    name: 'ER simple',
    code: `erDiagram
  SPACE ||--o{ EVENT : hosts
  SPACE {
    string id
    string name
  }
  EVENT {
    string id
    string title
  }
`,
  },
  // Gantt
  {
    id: 'gantt-basic',
    name: 'Gantt chart',
    code: `gantt
  title Release 1.0
  dateFormat YYYY-MM-DD
  section Planning
  Scope :a1, 2025-03-01, 5d
  section Implementation
  Features :a2, after a1, 10d
  section WrapUp
  Hardening :a3, after a2, 4d
`,
  },
  {
    id: 'gantt-milestone',
    name: 'Gantt with milestone',
    code: `gantt
  title Sprint plan
  dateFormat X
  axisFormat %s
  section Dev
  Task A :a, 0, 5
  Task B :b, 5, 5
  section Release
  Milestone :milestone, 10, 0
`,
  },
  // Pie
  {
    id: 'pie-basic',
    name: 'Pie chart',
    code: `pie title Breakdown by channel
  "Email" : 35
  "Search" : 30
  "Social" : 20
  "Other" : 15
`,
  },
  {
    id: 'pie-simple',
    name: 'Pie simple',
    code: `pie showData
  title Revenue
  "Product A" : 40
  "Product B" : 60
`,
  },
  // Charts (XY)
  {
    id: 'chart-xy-line',
    name: 'XY line chart',
    code: `xychart-beta
  title "Monthly trend"
  x-axis [Jan, Feb, Mar, Apr, May, Jun]
  y-axis "Value" 0 --> 100
  line [30, 45, 55, 60, 70, 85]
`,
  },
  {
    id: 'chart-xy-bar',
    name: 'XY bar chart',
    code: `xychart-beta
  title "Sales by region"
  x-axis [North, South, East, West]
  y-axis "Sales" 0 --> 50
  bar [35, 42, 28, 45]
`,
  },
  {
    id: 'xy-multi-line',
    name: 'XY multi-line',
    code: `xychart-beta
  title "Comparison"
  x-axis [Q1, Q2, Q3, Q4]
  y-axis 0 --> 80
  line [20, 35, 50, 65]
  line [15, 30, 45, 55]
`,
  },
  {
    id: 'chart-xy-bars-horizontal',
    name: 'Chart bars horizontal',
    code: `xychart-beta horizontal
  title "Scores by team"
  x-axis [Team A, Team B, Team C, Team D]
  y-axis 0 --> 100
  bar [72, 85, 68, 90]
`,
  },
  {
    id: 'chart-xy-line-smooth',
    name: 'Chart line trend',
    code: `xychart-beta
  title "Weekly metric"
  x-axis [W1, W2, W3, W4, W5, W6]
  y-axis 0 --> 50
  line [12, 18, 22, 28, 35, 42]
`,
  },
  {
    id: 'chart-xy-stacked',
    name: 'Chart two series',
    code: `xychart-beta
  title "A vs B"
  x-axis [Jan, Feb, Mar, Apr]
  y-axis 0 --> 60
  bar [25, 30, 28, 35]
  line [20, 32, 30, 40]
`,
  },
  {
    id: 'chart-xy-negative',
    name: 'Chart with negatives',
    code: `xychart-beta
  title "P&L"
  x-axis [Q1, Q2, Q3, Q4]
  y-axis -20 --> 30
  bar [10, -5, 15, 25]
`,
  },
  {
    id: 'chart-xy-many-bars',
    name: 'Chart many bars',
    code: `xychart-beta
  title "Monthly"
  x-axis [J, F, M, A, M, J, J, A, S, O, N, D]
  y-axis 0 --> 100
  bar [40, 55, 60, 72, 68, 80, 85, 78, 88, 82, 75, 90]
`,
  },
  {
    id: 'chart-xy-double-line',
    name: 'Chart two lines',
    code: `xychart-beta
  title "Series A & B"
  x-axis [1, 2, 3, 4, 5, 6]
  y-axis 0 --> 100
  line [10, 25, 40, 55, 70, 85]
  line [20, 30, 35, 50, 60, 75]
`,
  },
  // Journey
  {
    id: 'journey-basic',
    name: 'User journey',
    code: `journey
  title New user onboarding
  section Sign up
    Visit site: 4: User
    Create account: 5: User
  section First session
    Explore UI: 3: User
    Run first diagram: 5: User
`,
  },
  {
    id: 'journey-simple',
    name: 'Journey simple',
    code: `journey
  title Shopping
  section Buy
    Go to shop: 5: User
    Choose items: 4: User
  section Pay
    Pay: 3: User
`,
  },
  // Block (Mermaid)
  {
    id: 'block-basic',
    name: 'Block (quadrant)',
    code: `block-beta
  columns 2
  block:col1:1
    backlog
    in-progress
  block:col2:1
    review
    done
`,
  },
  // Quadrant / Matrix
  {
    id: 'quadrant',
    name: 'Quadrant chart',
    code: `quadrantChart
  title Product strategy
  x-axis Low cost --> High cost
  y-axis Low quality --> High quality
  quadrant-1 Revisit
  quadrant-2 Invest
  quadrant-3 Avoid
  quadrant-4 Consider
  "Legacy": [0.2, 0.8]
  "New": [0.8, 0.6]
`,
  },
  {
    id: 'quadrant-foda',
    name: 'FODA / SWOT matrix',
    code: `quadrantChart
  title FODA (SWOT) Analysis
  x-axis Internal --> External
  y-axis Negative --> Positive
  quadrant-1 Fortalezas
  quadrant-2 Oportunidades
  quadrant-3 Debilidades
  quadrant-4 Amenazas
  "F1": [0.2, 0.8]
  "F2": [0.3, 0.75]
  "O1": [0.8, 0.8]
  "D1": [0.2, 0.2]
  "A1": [0.8, 0.2]
`,
  },
  {
    id: 'quadrant-matrix',
    name: '2x2 Priority matrix',
    code: `quadrantChart
  title Priority matrix
  x-axis Low impact --> High impact
  y-axis Low effort --> High effort
  quadrant-1 Do first
  quadrant-2 Schedule
  quadrant-3 Delegate
  quadrant-4 Eliminate
  "P1": [0.85, 0.85]
  "P2": [0.8, 0.3]
  "P3": [0.25, 0.8]
  "P4": [0.2, 0.2]
`,
  },
  {
    id: 'quadrant-risks',
    name: 'Risk matrix',
    code: `quadrantChart
  title Risk matrix
  x-axis Low probability --> High probability
  y-axis Low impact --> High impact
  quadrant-1 Critical
  quadrant-2 High
  quadrant-3 Medium
  quadrant-4 Low
  "R1": [0.9, 0.9]
  "R2": [0.3, 0.85]
  "R3": [0.85, 0.25]
`,
  },
  // Mindmap
  {
    id: 'mindmap',
    name: 'Mindmap',
    code: `mindmap
  root((Ideas))
    Tech
      Frontend
      Backend
    Product
      MVP
      Roadmap
`,
  },
  // Timeline
  {
    id: 'timeline',
    name: 'Timeline',
    code: `timeline
  title History
  2020 : Event A
  2021 : Event B
  2022 : Event C
  2023 : Event D
`,
  },
  // Git graph
  {
    id: 'git',
    name: 'Git graph',
    code: `gitGraph
  commit
  branch feature
  checkout feature
  commit
  checkout main
  merge feature
  commit
`,
  },
  // More Flowcharts
  {
    id: 'flow-links',
    name: 'Flowchart with link',
    code: `flowchart LR
  A --> B
  B --> C
  click B "https://example.com" "Link"
`,
  },
  {
    id: 'flow-parallel',
    name: 'Flowchart parallel',
    code: `flowchart TB
  A --> B & C
  B & C --> D
`,
  },
  {
    id: 'flow-multi-subgraph',
    name: 'Flowchart multi subgraph',
    code: `flowchart TB
  subgraph one
    a1 --> a2
  end
  subgraph two
    b1 --> b2
  end
  a2 --> b1
`,
  },
  {
    id: 'flow-diamond',
    name: 'Flowchart diamonds',
    code: `flowchart LR
  A{Start} --> B{Check}
  B -->|Yes| C[OK]
  B -->|No| D[Retry]
  D --> B
`,
  },
  {
    id: 'flow-cylinder',
    name: 'Flowchart cylinder',
    code: `flowchart LR
  A[(DB)] --> B[App]
  B --> C[(Cache)]
`,
  },
  {
    id: 'flow-rect',
    name: 'Flowchart rectangles',
    code: `flowchart TB
  A[Input] --> B[Process]
  B --> C[Output]
  C --> D[Review]
`,
  },
  {
    id: 'flow-cycle',
    name: 'Flowchart cycle',
    code: `flowchart LR
  A --> B --> C --> D --> A
`,
  },
  {
    id: 'flow-branch',
    name: 'Flowchart branch',
    code: `flowchart TB
  Start --> A
  Start --> B
  Start --> C
  A --> End
  B --> End
  C --> End
`,
  },
  // More Sequence
  {
    id: 'sequence-par',
    name: 'Sequence par',
    code: `sequenceDiagram
  participant A
  participant B
  participant C
  par A to B
    A->>B: msg1
  and A to C
    A->>C: msg2
  end
`,
  },
  {
    id: 'sequence-note',
    name: 'Sequence with note',
    code: `sequenceDiagram
  participant User
  participant API
  Note over User,API: Request flow
  User->>+API: GET /data
  API-->>-User: 200 OK
`,
  },
  {
    id: 'sequence-critical',
    name: 'Sequence critical',
    code: `sequenceDiagram
  participant Client
  participant Server
  critical Payment
    Client->>Server: pay
    Server-->>Client: ok
  end
`,
  },
  {
    id: 'sequence-activation',
    name: 'Sequence activation',
    code: `sequenceDiagram
  Alice->>+Bob: request
  Bob->>+Carol: forward
  Carol-->>-Bob: reply
  Bob-->>-Alice: reply
`,
  },
  {
    id: 'sequence-multiple',
    name: 'Sequence multiple',
    code: `sequenceDiagram
  A->>B: 1
  A->>B: 2
  B-->>A: 3
`,
  },
  // More Class
  {
    id: 'class-interface',
    name: 'Class interface',
    code: `classDiagram
  class IRepository {
    <<interface>>
    +save()
    +find()
  }
  class UserRepo {
    +save()
    +find()
  }
  IRepository <|.. UserRepo
`,
  },
  {
    id: 'class-composition',
    name: 'Class composition',
    code: `classDiagram
  class Car {
    +Engine engine
    +drive()
  }
  class Engine {
    +start()
  }
  Car *-- Engine
`,
  },
  {
    id: 'class-aggregation',
    name: 'Class aggregation',
    code: `classDiagram
  class Team {
    +members
  }
  class Person {
    +name
  }
  Team o-- Person
`,
  },
  {
    id: 'class-deps',
    name: 'Class dependencies',
    code: `classDiagram
  class Service {
    +handle()
  }
  class Logger {
    +log()
  }
  Service ..> Logger : uses
`,
  },
  // More State
  {
    id: 'state-fork',
    name: 'State fork',
    code: `stateDiagram-v2
  [*] --> Fork
  state Fork {
    [*] --> State1
    [*] --> State2
  }
  Fork --> Join
  state Join {
    State3 --> [*]
    State4 --> [*]
  }
  Join --> [*]
`,
  },
  {
    id: 'state-composite',
    name: 'State composite',
    code: `stateDiagram-v2
  [*] --> Running
  state Running {
    [*] --> Active
    Active --> Paused
    Paused --> Active
  }
  Running --> [*]
`,
  },
  {
    id: 'state-concurrent',
    name: 'State concurrent',
    code: `stateDiagram-v2
  [*] --> Init
  state Init {
    [*] --> A
    [*] --> B
  }
  Init --> Done
`,
  },
  // More ER
  {
    id: 'er-many',
    name: 'ER many entities',
    code: `erDiagram
  USER ||--o{ POST : writes
  USER {
    string id
    string name
  }
  POST ||--o{ COMMENT : has
  POST {
    string id
    string title
  }
  COMMENT {
    string id
    string body
  }
`,
  },
  {
    id: 'er-cards',
    name: 'ER cardinality',
    code: `erDiagram
  A ||--o{ B : one-to-many
  A {
    int id
  }
  B {
    int id
    int a_id
  }
`,
  },
  // More Gantt
  {
    id: 'gantt-crit',
    name: 'Gantt critical',
    code: `gantt
  title With critical
  dateFormat X
  section S1
  Task 1 :crit, a, 0, 5
  Task 2 :b, 5, 5
  section S2
  Task 3 :c, after a, 4
`,
  },
  {
    id: 'gantt-done',
    name: 'Gantt done',
    code: `gantt
  dateFormat X
  section Done
  Completed :done, 0, 3
  Next :active, 3, 5
`,
  },
  {
    id: 'gantt-sections',
    name: 'Gantt many sections',
    code: `gantt
  title Multi section
  dateFormat YYYY-MM-DD
  section Design
  D1 : 2024-01-01, 7d
  section Dev
  Dev1 : after D1, 14d
  section Test
  T1 : after Dev1, 5d
`,
  },
  // More Pie
  {
    id: 'pie-three',
    name: 'Pie three slices',
    code: `pie title Budget
  "Dev" : 50
  "Design" : 30
  "Ops" : 20
`,
  },
  {
    id: 'pie-five',
    name: 'Pie five slices',
    code: `pie title Traffic
  "Direct" : 35
  "Search" : 25
  "Social" : 20
  "Email" : 12
  "Other" : 8
`,
  },
  // More Journey
  {
    id: 'journey-task',
    name: 'Journey with task',
    code: `journey
  title Sign up
  section Visit
    Open site: 5: User
    Click sign up: 4: User
  section Register
    Fill form: 3: User
    Submit: 5: User
`,
  },
  {
    id: 'journey-multi',
    name: 'Journey multi actor',
    code: `journey
  title Support flow
  section Customer
    Open ticket: 5: Customer
  section Agent
    Pick ticket: 4: Agent
    Reply: 5: Agent
  section Customer
    Close: 5: Customer
`,
  },
  // More Git
  {
    id: 'git-branches',
    name: 'Git multiple branches',
    code: `gitGraph
  commit
  branch dev
  checkout dev
  commit
  commit
  checkout main
  branch hotfix
  checkout hotfix
  commit
  checkout main
  merge hotfix
  merge dev
`,
  },
  {
    id: 'git-tag',
    name: 'Git with tag',
    code: `gitGraph
  commit id: "v1"
  commit
  commit id: "v2"
`,
  },
  // More Mindmap
  {
    id: 'mindmap-deep',
    name: 'Mindmap deep',
    code: `mindmap
  root((Product))
    Frontend
      React
      Vue
    Backend
      API
      DB
    DevOps
      CI
      Deploy
`,
  },
  {
    id: 'mindmap-simple',
    name: 'Mindmap simple',
    code: `mindmap
  root((Topic))
    A
    B
    C
`,
  },
  // More Timeline
  {
    id: 'timeline-detail',
    name: 'Timeline detailed',
    code: `timeline
  title 2024
  Q1 : Launch
  Q2 : Growth
  Q3 : Scale
  Q4 : Optimize
`,
  },
  // More flowcharts
  {
    id: 'flow-multi-end',
    name: 'Flowchart multi end',
    code: `flowchart TB
  A --> B
  A --> C
  B --> D
  C --> D
`,
  },
  {
    id: 'flow-nodes',
    name: 'Flowchart node shapes',
    code: `flowchart LR
  A[Rect] --> B(Round)
  B --> C([Stadium])
  C --> D[[Subroutine]]
  D --> E[(DB)]
  E --> F((Circle))
  F --> G>Async]
`,
  },
  {
    id: 'flow-decision',
    name: 'Flowchart decision',
    code: `flowchart LR
  Start --> Input
  Input --> Decision{OK?}
  Decision -->|Yes| Process
  Decision -->|No| End
  Process --> End
`,
  },
  {
    id: 'sequence-group',
    name: 'Sequence group',
    code: `sequenceDiagram
  participant A
  participant B
  Note over A,B: Group
  A->>B: msg
  B-->>A: ack
`,
  },
  {
    id: 'class-multi',
    name: 'Class multiple',
    code: `classDiagram
  class A { +foo() }
  class B { +bar() }
  class C { +baz() }
  A --> B : uses
  B --> C : uses
`,
  },
  {
    id: 'state-simple',
    name: 'State simple',
    code: `stateDiagram-v2
  [*] --> A
  A --> B
  B --> [*]
`,
  },
  {
    id: 'pie-four',
    name: 'Pie four',
    code: `pie title Split
  "A" : 25
  "B" : 25
  "C" : 25
  "D" : 25
`,
  },
  {
    id: 'gantt-short',
    name: 'Gantt short',
    code: `gantt
  dateFormat X
  section One
  Task :a, 0, 3
  section Two
  Task2 :b, 3, 2
`,
  },
  {
    id: 'journey-four',
    name: 'Journey four steps',
    code: `journey
  title Quick
  section S1
    A: 5: X
  section S2
    B: 4: X
`,
  },
  {
    id: 'er-three',
    name: 'ER three',
    code: `erDiagram
  A ||--o{ B : has
  B ||--o{ C : has
  A { string id }
  B { string id }
  C { string id }
`,
  },
  {
    id: 'timeline-short',
    name: 'Timeline short',
    code: `timeline
  title Years
  2022 : A
  2023 : B
  2024 : C
`,
  },
  {
    id: 'mindmap-four',
    name: 'Mindmap four',
    code: `mindmap
  root((R))
    A
    B
    C
    D
`,
  },
  {
    id: 'git-simple',
    name: 'Git simple',
    code: `gitGraph
  commit
  commit
  branch b
  checkout b
  commit
  checkout main
  merge b
`,
  },
  // More per category
  {
    id: 'flow-styles',
    name: 'Flowchart link style',
    code: `flowchart LR
  A --- B
  B === C
  C -.-> D
  D ==> E
`,
  },
  {
    id: 'flow-long',
    name: 'Flowchart pipeline',
    code: `flowchart LR
  A --> B --> C --> D --> E --> F
`,
  },
  {
    id: 'sequence-error',
    name: 'Sequence error path',
    code: `sequenceDiagram
  participant U as User
  participant S as Server
  U->>S: request
  alt success
    S-->>U: 200
  else error
    S-->>U: 500
  end
`,
  },
  {
    id: 'sequence-fragment',
    name: 'Sequence opt',
    code: `sequenceDiagram
  participant A
  participant B
  opt optional
    A->>B: msg
  end
`,
  },
  {
    id: 'class-abstract',
    name: 'Class abstract',
    code: `classDiagram
  class Shape {
    <<abstract>>
    +area()
    +perimeter()
  }
  class Circle {
    +radius
    +area()
    +perimeter()
  }
  Shape <|-- Circle
`,
  },
  {
    id: 'state-nested',
    name: 'State nested',
    code: `stateDiagram-v2
  [*] --> Active
  state Active {
    [*] --> Idle
    Idle --> Running: start
    Running --> Idle: stop
  }
`,
  },
  {
    id: 'er-four',
    name: 'ER four entities',
    code: `erDiagram
  USER ||--o{ ORDER : places
  ORDER ||--|{ ITEM : contains
  PRODUCT ||--o{ ITEM : "product"
  USER { string name }
  ORDER { int total }
  PRODUCT { string sku }
  ITEM { int qty }
`,
  },
  {
    id: 'gantt-deps',
    name: 'Gantt dependencies',
    code: `gantt
  dateFormat X
  section A
  A1 :a1, 0, 2
  A2 :a2, after a1, 2
  section B
  B1 :b1, after a1, 3
`,
  },
  {
    id: 'pie-six',
    name: 'Pie six',
    code: `pie title Regions
  "North" : 20
  "South" : 25
  "East" : 15
  "West" : 18
  "Central" : 12
  "Other" : 10
`,
  },
  {
    id: 'journey-long',
    name: 'Journey long',
    code: `journey
  title Checkout
  section Cart
    View cart: 5: User
    Add item: 4: User
  section Checkout
    Login: 3: User
    Pay: 5: User
  section Done
    Confirm: 5: User
`,
  },
  {
    id: 'timeline-events',
    name: 'Timeline events',
    code: `timeline
  title Roadmap
  Q1 2024 : Planning
  Q2 2024 : Build
  Q3 2024 : Launch
  Q4 2024 : Scale
`,
  },
  {
    id: 'mindmap-five',
    name: 'Mindmap five',
    code: `mindmap
  root((Center))
    One
    Two
    Three
    Four
    Five
`,
  },
  // Advanced examples
  {
    id: 'flow-advanced-cicd',
    name: 'Flowchart CI/CD pipeline',
    code: `flowchart TB
  subgraph Sources
    G[Git] --> W[Webhook]
  end
  subgraph Build
    W --> C[Clone]
    C --> I[Install]
    I --> T[Test]
    T --> B[Build]
  end
  subgraph Deploy
    B --> R[Registry]
    R --> K[Kubernetes]
    K --> M[Monitor]
  end
  M -.->|alert| W
`,
  },
  {
    id: 'flow-advanced-multi',
    name: 'Flowchart multi-path',
    code: `flowchart TB
  A[Start] --> B{Type?}
  B -->|A| C[Path A]
  B -->|B| D[Path B]
  B -->|C| E[Path C]
  C --> F[Process A]
  D --> G[Process B]
  E --> H[Process C]
  F --> I[Join]
  G --> I
  H --> I
  I --> J[End]
`,
  },
  {
    id: 'sequence-advanced-auth',
    name: 'Sequence OAuth flow',
    code: `sequenceDiagram
  participant U as User
  participant C as Client
  participant A as Auth Server
  participant R as Resource
  U->>C: Login
  C->>A: Auth request
  A-->>U: Login page
  U->>A: Credentials
  A-->>C: Code
  C->>A: Code + secret
  A-->>C: Token
  C->>R: API + Token
  R-->>C: Data
  C-->>U: Display
`,
  },
  {
    id: 'sequence-advanced-retry',
    name: 'Sequence retry loop',
    code: `sequenceDiagram
  participant C as Client
  participant S as Service
  loop Retry up to 3x
    C->>S: request
    alt success
      S-->>C: 200 OK
    else failure
      S-->>C: 5xx
      Note over C: backoff then retry
    end
  end
`,
  },
  {
    id: 'class-advanced-service',
    name: 'Class service layer',
    code: `classDiagram
  class Service {
    <<interface>>
    +execute()
  }
  class UserService {
    -repo: UserRepo
    +execute()
    +findById()
    +save()
  }
  class OrderService {
    -repo: OrderRepo
    -payment: Payment
    +execute()
    +create()
  }
  class UserRepo {
    <<interface>>
    +find()
    +save()
  }
  Service <|.. UserService
  Service <|.. OrderService
  UserService --> UserRepo : uses
  OrderService --> UserRepo : uses
`,
  },
  {
    id: 'state-advanced-machine',
    name: 'State vending machine',
    code: `stateDiagram-v2
  [*] --> Idle
  Idle --> Collecting: insert_coin
  Collecting --> Collecting: insert_coin
  Collecting --> Selecting: enough
  Selecting --> Dispensing: select_item
  Dispensing --> Idle: dispense_done
  Selecting --> Idle: cancel
  Collecting --> Idle: cancel
`,
  },
  {
    id: 'state-advanced-parallel',
    name: 'State parallel regions',
    code: `stateDiagram-v2
  [*] --> Composite
  state Composite {
    [*] --> Region1
    state Region1 {
      [*] --> R1_S1
      R1_S1 --> R1_S2
    }
    [*] --> Region2
    state Region2 {
      [*] --> R2_S1
      R2_S1 --> R2_S2
    }
  }
`,
  },
  {
    id: 'er-advanced-ecommerce',
    name: 'ER e-commerce',
    code: `erDiagram
  USER ||--o{ ORDER : places
  USER {
    uuid id
    string email
    string name
  }
  ORDER ||--|{ ORDER_ITEM : contains
  ORDER {
    uuid id
    timestamp created
    string status
  }
  PRODUCT ||--o{ ORDER_ITEM : "ordered as"
  PRODUCT {
    uuid id
    string sku
    decimal price
  }
  ORDER_ITEM {
    int quantity
    decimal unit_price
  }
  CATEGORY ||--o{ PRODUCT : has
  CATEGORY {
    uuid id
    string name
  }
`,
  },
  {
    id: 'gantt-advanced-project',
    name: 'Gantt project phases',
    code: `gantt
  title Project roadmap
  dateFormat YYYY-MM-DD
  section Discovery
  Research    :a1, 2024-01-01, 14d
  Requirements :a2, after a1, 7d
  section Design
  UX design   :b1, after a2, 14d
  UI design   :b2, after b1, 10d
  section Build
  Backend     :c1, after a2, 30d
  Frontend    :c2, after b1, 25d
  section Launch
  QA          :d1, after c1, 14d
  Deploy      :milestone, after d1, 0d
`,
  },
  {
    id: 'pie-advanced-breakdown',
    name: 'Pie budget breakdown',
    code: `pie title Annual budget
  "Engineering" : 45
  "Product" : 20
  "Design" : 12
  "Marketing" : 10
  "Operations" : 8
  "Other" : 5
`,
  },
  {
    id: 'journey-advanced-onboarding',
    name: 'Journey onboarding',
    code: `journey
  title New user onboarding
  section Sign up
    Visit landing: 5: User
    Create account: 4: User
    Verify email: 3: User
  section Setup
    Complete profile: 5: User
    Select plan: 4: User
    Add payment: 3: User
  section First use
    Tutorial: 5: User
    First action: 5: User
  section Retention
    Day 1 email: 4: User
    Day 7 check-in: 5: User
`,
  },
  {
    id: 'timeline-advanced-roadmap',
    name: 'Timeline product roadmap',
    code: `timeline
  title Product roadmap
  section 2024
    Q1 : Discovery & MVP
    Q2 : Beta launch
    Q3 : GA release
    Q4 : Enterprise features
  section 2025
    Q1 : Scale & optimize
    Q2 : Integrations
    Q3 : AI features
    Q4 : Global rollout
`,
  },
  {
    id: 'mindmap-advanced-arch',
    name: 'Mindmap architecture',
    code: `mindmap
  root((System))
    Frontend
      Web
      Mobile
      Desktop
    Backend
      API
      Workers
      Jobs
    Data
      DB
      Cache
      Search
    Infra
      K8s
      CI/CD
      Monitor
`,
  },
  {
    id: 'git-advanced-flow',
    name: 'Git flow',
    code: `gitGraph
  commit id: "init"
  branch develop
  checkout develop
  commit
  branch feature/auth
  checkout feature/auth
  commit
  commit
  checkout develop
  merge feature/auth
  branch release/v1
  checkout release/v1
  commit
  checkout main
  merge release/v1 tag: "v1.0"
  checkout develop
  merge release/v1
`,
  },
  {
    id: 'flow-advanced-swimlane',
    name: 'Flowchart swimlane',
    code: `flowchart TB
  subgraph Client
    A[Request] --> B[Validate]
  end
  subgraph API
    B --> C[Process]
    C --> D[Response]
  end
  subgraph DB
    C --> E[(Query)]
    E --> F[(Result)]
    F --> D
  end
`,
  },
  {
    id: 'flow-advanced-rma',
    name: 'Process RMA / returns',
    code: `flowchart TB
  subgraph "Receive"
    A[Return received] --> B[Inspect]
    B --> C{Accept?}
  end
  subgraph "Process"
    C -->|Yes| D[Refund/Replace]
    C -->|No| E[Reject]
    D --> F[Update inventory]
    F --> G[Notify customer]
  end
  subgraph "Close"
    E --> H[Document]
    G --> H
    H --> I((End))
  end
`,
  },
  {
    id: 'flow-advanced-hr',
    name: 'Process HR hiring',
    code: `flowchart TB
  subgraph "Recruit"
    R1[Post job] --> R2[Screen]
    R2 --> R3[Interview]
    R3 --> R4{Offer?}
  end
  subgraph "Onboard"
    R4 -->|Yes| O1[Accept]
    R4 -->|No| R1
    O1 --> O2[Background check]
    O2 --> O3[Contract]
    O3 --> O4[Start]
  end
`,
  },
  {
    id: 'quadrant-advanced-bcg',
    name: 'Matrix BCG (portfolio)',
    code: `quadrantChart
  title BCG matrix
  x-axis Low share --> High share
  y-axis Low growth --> High growth
  quadrant-1 Stars
  quadrant-2 Question marks
  quadrant-3 Cash cows
  quadrant-4 Dogs
  "Product A": [0.8, 0.85]
  "Product B": [0.25, 0.8]
  "Product C": [0.8, 0.2]
  "Product D": [0.2, 0.25]
`,
  },
  {
    id: 'quadrant-advanced-ie',
    name: 'Matrix IE (internal-external)',
    code: `quadrantChart
  title IE matrix
  x-axis Weak --> Strong
  y-axis Conservative --> Aggressive
  quadrant-1 Grow
  quadrant-2 Build
  quadrant-3 Hold
  quadrant-4 Harvest
  "Unit 1": [0.75, 0.8]
  "Unit 2": [0.3, 0.7]
  "Unit 3": [0.7, 0.3]
`,
  },
  {
    id: 'chart-xy-quarterly',
    name: 'Chart quarterly bars',
    code: `xychart-beta
  title "Revenue by quarter"
  x-axis [Q1, Q2, Q3, Q4]
  y-axis "K EUR" 0 --> 120
  bar [80, 95, 88, 110]
`,
  },
  {
    id: 'chart-xy-trend',
    name: 'Chart trend line',
    code: `xychart-beta
  title "Growth trend"
  x-axis [2021, 2022, 2023, 2024]
  y-axis 0 --> 150
  line [60, 85, 105, 130]
`,
  },
  {
    id: 'sequence-advanced-saga',
    name: 'Sequence saga',
    code: `sequenceDiagram
  participant O as Order
  participant P as Payment
  participant S as Stock
  O->>P: reserve
  P-->>O: ok
  O->>S: reserve
  alt stock ok
    S-->>O: ok
    O->>P: confirm
    O->>S: confirm
  else stock fail
    S-->>O: fail
    O->>P: compensate
  end
`,
  },
  // Real-world examples
  {
    id: 'flow-real-api-gateway',
    name: 'API Gateway & microservices',
    code: `flowchart TB
  subgraph Clients
    W[Web]
    M[Mobile]
  end
  subgraph "API Gateway"
    GW[Gateway]
    AUTH[Auth]
    RATE[Rate limit]
    GW --> AUTH --> RATE
  end
  subgraph "Microservices"
    USR[User service]
    ORD[Order service]
    INV[Inventory service]
    PAY[Payment service]
  end
  subgraph Data
    DB1[(Users DB)]
    DB2[(Orders DB)]
    CACHE[(Redis)]
  end
  W --> GW
  M --> GW
  RATE --> USR
  RATE --> ORD
  USR --> DB1
  ORD --> DB2
  ORD --> INV
  ORD --> PAY
  INV --> CACHE
`,
  },
  {
    id: 'flow-real-incident-response',
    name: 'Incident response workflow',
    code: `flowchart TB
  A[Alert triggered] --> B{Severity?}
  B -->|P1/P2| C[Page on-call]
  B -->|P3/P4| D[Create ticket]
  C --> E[Acknowledge]
  E --> F[Triage]
  F --> G{Root cause known?}
  G -->|No| H[Debug / Gather logs]
  H --> F
  G -->|Yes| I[Implement fix]
  I --> J[Deploy]
  J --> K[Verify]
  K --> L[Post-mortem]
  L --> M[Close]
  D --> N[Queue for next sprint]
`,
  },
  {
    id: 'flow-real-data-pipeline',
    name: 'ETL data pipeline',
    code: `flowchart LR
  subgraph Sources
    S1[(Postgres)]
    S2[(API)]
    S3[Files S3]
  end
  subgraph Ingest
    K[Kafka]
    S1 --> K
    S2 --> K
    S3 --> K
  end
  subgraph Process
    SPARK[Spark jobs]
    K --> SPARK
    SPARK --> VALID[Validate]
    VALID --> TRANSFORM[Transform]
    TRANSFORM --> ENRICH[Enrich]
  end
  subgraph Sink
    DW[(Data warehouse)]
    LAKE[(Data lake)]
    ENRICH --> DW
    ENRICH --> LAKE
  end
`,
  },
  {
    id: 'sequence-real-checkout',
    name: 'E-commerce checkout flow',
    code: `sequenceDiagram
  participant U as User
  participant C as Cart
  participant O as Order
  participant P as Payment
  participant I as Inventory
  participant N as Notification
  U->>C: View cart
  C-->>U: Cart contents
  U->>O: Create order
  O->>I: Reserve items
  alt Items available
    I-->>O: Reserved
    O->>P: Charge
    P-->>O: Paid
    O->>I: Confirm
    O->>N: Send confirmation
    N->>U: Email + SMS
  else Out of stock
    I-->>O: Failed
    O-->>U: Error: try again
  end
`,
  },
  {
    id: 'sequence-real-oauth',
    name: 'OAuth 2.0 authorization code',
    code: `sequenceDiagram
  participant U as User
  participant C as Client app
  participant A as Auth server
  participant R as Resource API
  U->>C: Login
  C->>C: Redirect to /authorize
  C->>U: Redirect to Auth
  U->>A: Enter credentials
  A->>A: Validate
  A->>U: Consent screen
  U->>A: Approve
  A->>C: Redirect with code
  C->>A: Exchange code + client_secret
  A-->>C: Access token + refresh token
  C->>R: Request resource (Bearer token)
  R-->>C: Data
  Note over C,R: Later: use refresh_token to get new access_token
`,
  },
  {
    id: 'class-real-domain',
    name: 'Domain model: e-commerce',
    code: `classDiagram
  class Customer {
    +id: UUID
    +email: string
    +addresses: Address[]
    +placeOrder(cart)
    +addAddress(addr)
  }
  class Order {
    +id: UUID
    +status: OrderStatus
    +lineItems: LineItem[]
    +total: Money
    +submit()
    +cancel()
  }
  class LineItem {
    +productId: UUID
    +quantity: int
    +unitPrice: Money
  }
  class Product {
    +id: UUID
    +name: string
    +price: Money
    +stock: int
  }
  class Payment {
    +orderId: UUID
    +amount: Money
    +process()
  }
  Customer "1" --> "*" Order : places
  Order "1" --> "*" LineItem : contains
  LineItem "*" --> "1" Product : references
  Order "1" --> "0..1" Payment : has
`,
  },
  {
    id: 'state-real-order',
    name: 'Order state machine',
    code: `stateDiagram-v2
  [*] --> Draft
  Draft --> PendingPayment: submit
  PendingPayment --> Paid: payment received
  PendingPayment --> Cancelled: timeout / cancel
  Paid --> Fulfilling: start fulfillment
  Fulfilling --> Shipped: ship
  Fulfilling --> PartiallyShipped: partial ship
  PartiallyShipped --> Shipped: remaining shipped
  Shipped --> Delivered: deliver
  Shipped --> Returned: customer return
  Delivered --> [*]
  Returned --> Refunded: refund
  Refunded --> [*]
  Cancelled --> [*]
`,
  },
  {
    id: 'er-real-saas',
    name: 'ER: SaaS multi-tenant',
    code: `erDiagram
  TENANT ||--o{ USER : has
  TENANT ||--o{ PROJECT : has
  PROJECT ||--o{ TASK : contains
  PROJECT ||--o{ MILESTONE : has
  USER ||--o{ TASK : assigned
  USER ||--o{ COMMENT : writes
  TASK ||--o{ COMMENT : has
  TENANT {
    uuid id PK
    string name
    string slug
  }
  USER {
    uuid id PK
    uuid tenant_id FK
    string email
  }
  PROJECT {
    uuid id PK
    uuid tenant_id FK
    string title
  }
  TASK {
    uuid id PK
    uuid project_id FK
    uuid assignee_id FK
    string title
    string status
  }
`,
  },
  {
    id: 'mindmap-real-product',
    name: 'Mindmap: product strategy',
    code: `mindmap
  root((Product 2025))
    Vision
      Global reach
      Sustainability
    Discovery
      User research
      Competitors
      Metrics
    Build
      Backlog
      Design
      Engineering
      QA
    Launch
      Beta
      GA
      Marketing
    Growth
      Retention
      Monetization
      Partnerships
`,
  },
  {
    id: 'timeline-real-release',
    name: 'Timeline: product release',
    code: `timeline
  title Product release 2025
  Q1 2025 : Discovery : Research & specs
  Q1 2025 : Design : UX & UI
  Q2 2025 : Alpha : Internal only
  Q2 2025 : Beta : Selected customers
  Q3 2025 : GA : Public launch
  Q3 2025 : Marketing : Campaigns
  Q4 2025 : Iterate : Feedback & v2
`,
  },
  // Tech / software / app development
  {
    id: 'flow-dev-cicd-full',
    name: 'CI/CD pipeline (full)',
    code: `flowchart TB
  subgraph "Developer"
    COMMIT[git push]
    PR[Open PR]
    COMMIT --> PR
  end
  subgraph "CI"
    LINT[Lint]
    TEST[Unit tests]
    BUILD[Build]
    E2E[E2E tests]
    PR --> LINT --> TEST --> BUILD --> E2E
  end
  subgraph "Review"
    REVIEW[Code review]
    E2E --> REVIEW
    REVIEW --> MERGE[Merge to main]
  end
  subgraph "CD"
    MERGE --> BUILD_IMG[Build image]
    BUILD_IMG --> PUSH_REG[Push to registry]
    PUSH_REG --> DEPLOY[Deploy staging]
    DEPLOY --> SMOKE[Smoke tests]
    SMOKE --> PROD[Deploy production]
  end
`,
  },
  {
    id: 'flow-dev-feature-branch',
    name: 'Git feature branch workflow',
    code: `flowchart LR
  subgraph "Main"
    M[main]
  end
  subgraph "Feature"
    F[feature/xyz]
    M --> F
    F --> PR[PR]
    PR --> M
  end
  subgraph "Release"
    R[release/v1.2]
    M --> R
    R --> M
  end
  subgraph "Hotfix"
    H[hotfix/critical]
    M --> H
    H --> M
  end
`,
  },
  {
    id: 'flow-dev-code-review',
    name: 'Code review process',
    code: `flowchart TB
  A[Author opens PR] --> B[CI runs]
  B --> C{CI green?}
  C -->|No| D[Author fixes]
  D --> B
  C -->|Yes| E[Reviewer assigned]
  E --> F[Review]
  F --> G{Approved?}
  G -->|Request changes| H[Author updates]
  H --> B
  G -->|Yes| I[Merge]
  I --> J[Delete branch]
  J --> K[Deploy]
`,
  },
  {
    id: 'flow-dev-app-lifecycle',
    name: 'App development lifecycle',
    code: `flowchart TB
  subgraph "Plan"
    SPEC[Spec / tickets]
    DESIGN[Design]
    SPEC --> DESIGN
  end
  subgraph "Build"
    DEV[Develop]
    REVIEW[Code review]
    DESIGN --> DEV --> REVIEW
  end
  subgraph "Test"
    QA[QA / manual]
    AUTOMATION[Automated tests]
    REVIEW --> QA
    REVIEW --> AUTOMATION
  end
  subgraph "Ship"
    STAGING[Staging]
    PROD[Production]
    QA --> STAGING
    AUTOMATION --> STAGING
    STAGING --> PROD
  end
  PROD --> MONITOR[Monitor]
  MONITOR -.->|bugs| SPEC
`,
  },
  {
    id: 'flow-dev-deployment',
    name: 'Blue-green deployment',
    code: `flowchart TB
  subgraph "Traffic"
    LB[Load balancer]
  end
  subgraph "Blue"
    B1[App v1]
    B2[App v1]
  end
  subgraph "Green"
    G1[App v2]
    G2[App v2]
  end
  LB --> B1
  LB --> B2
  DEPLOY[Deploy v2 to Green] --> TEST[Smoke test Green]
  TEST --> SWITCH[Switch LB to Green]
  SWITCH --> LB
  LB -.->|after switch| G1
  LB -.->|after switch| G2
`,
  },
  {
    id: 'sequence-dev-request-response',
    name: 'API request-response flow',
    code: `sequenceDiagram
  participant C as Client
  participant GW as API Gateway
  participant A as Auth
  participant S as Service
  participant DB as Database
  C->>GW: GET /api/resource
  GW->>A: Validate token
  A-->>GW: OK
  GW->>S: Forward request
  S->>DB: Query
  DB-->>S: Rows
  S->>S: Serialize
  S-->>GW: JSON
  GW-->>C: 200 + body
  Note over C,DB: Error path: 4xx/5xx returned
`,
  },
  {
    id: 'sequence-dev-websocket',
    name: 'WebSocket handshake & message',
    code: `sequenceDiagram
  participant C as Client
  participant S as Server
  C->>S: HTTP GET /ws (Upgrade)
  S-->>C: 101 Switching Protocols
  Note over C,S: Connection upgraded
  loop Messages
    C->>S: Frame (e.g. JSON)
    S->>S: Process
    S->>C: Frame (response / broadcast)
  end
  C->>S: Close frame
  S-->>C: Close ack
`,
  },
  {
    id: 'sequence-dev-saga-compensate',
    name: 'Saga: order with compensation',
    code: `sequenceDiagram
  participant O as Order
  participant P as Payment
  participant S as Stock
  participant N as Notify
  O->>P: Reserve
  P-->>O: OK
  O->>S: Reserve
  alt Stock OK
    S-->>O: OK
    O->>P: Confirm
    O->>S: Confirm
    O->>N: Send receipt
  else Stock fail
    S-->>O: Fail
    O->>P: Compensate refund
    O->>N: Send failure
  end
`,
  },
  {
    id: 'class-dev-microservice',
    name: 'Class: microservice boundaries',
    code: `classDiagram
  class OrderService {
    +createOrder()
    +getOrder()
    +cancelOrder()
    -orderRepo
    -eventBus
  }
  class PaymentService {
    +charge()
    +refund()
    -paymentGateway
  }
  class InventoryService {
    +reserve()
    +release()
    +confirm()
    -stockRepo
  }
  class EventBus {
    +publish()
    +subscribe()
  }
  OrderService --> PaymentService : charge
  OrderService --> InventoryService : reserve
  OrderService --> EventBus : publish
  InventoryService --> EventBus : subscribe
`,
  },
  {
    id: 'state-dev-release',
    name: 'State: release pipeline stage',
    code: `stateDiagram-v2
  [*] --> Building
  Building --> Testing: build success
  Building --> Failed: build fail
  Failed --> Building: retry
  Testing --> Staging: tests pass
  Testing --> Failed: tests fail
  Staging --> Production: approve
  Staging --> Failed: rollback
  Production --> [*]
  Production --> Failed: incident
  Failed --> Building: fix & re-run
`,
  },
  {
    id: 'flow-dev-testing-pyramid',
    name: 'Testing pyramid',
    code: `flowchart TB
  subgraph "E2E (few)"
    E2E[E2E tests]
  end
  subgraph "Integration (some)"
    INT[API tests]
    INT2[DB integration]
  end
  subgraph "Unit (many)"
    U1[Unit tests]
    U2[Unit tests]
    U3[Unit tests]
  end
  E2E --> INT
  E2E --> INT2
  INT --> U1
  INT2 --> U2
  U1 --> U3
`,
  },
  {
    id: 'flow-dev-monitoring',
    name: 'Observability stack',
    code: `flowchart LR
  subgraph App
    APP[Application]
  end
  subgraph "Collect"
    LOGS[Logs]
    METRICS[Metrics]
    TRACES[Traces]
    APP --> LOGS
    APP --> METRICS
    APP --> TRACES
  end
  subgraph "Store & query"
    LOGS --> LOKI[Loki / ELK]
    METRICS --> PROM[Prometheus]
    TRACES --> JAEGER[Jaeger]
  end
  subgraph "Visualize & alert"
    LOKI --> DASH[Dashboards]
    PROM --> DASH
    JAEGER --> DASH
    PROM --> ALERT[Alerts]
  end
`,
  },
  // Processes (workflows: content, presentation, documents)
  {
    id: 'process-powerpoint-art-word',
    name: 'Presentation workflow (Word, Art, PowerPoint)',
    code: `flowchart LR
  subgraph Draft
    W[Word draft]
    O[Outline]
    W --> O
  end
  subgraph Design
    A[Art / graphics]
    L[Layout]
    O --> A
    A --> L
  end
  subgraph Deliver
    P[PowerPoint deck]
    L --> P
    P --> R[Review]
    R --> P
  end
`,
  },
  {
    id: 'process-content-pipeline',
    name: 'Content creation pipeline',
    code: `flowchart TB
  I[Idea / brief] --> R[Research]
  R --> D[Draft]
  D --> E[Edit]
  E --> V{Approved?}
  V -->|No| D
  V -->|Yes| A[Art / media]
  A --> L[Layout]
  L --> P[Publish]
  P --> M[Monitor]
`,
  },
  {
    id: 'process-document-lifecycle',
    name: 'Document lifecycle',
    code: `flowchart LR
  A[Create] --> B[Review]
  B --> C{OK?}
  C -->|No| A
  C -->|Yes| D[Approve]
  D --> E[Distribute]
  E --> F[Archive]
`,
  },
  {
    id: 'process-creative-workflow',
    name: 'Creative workflow',
    code: `flowchart TB
  subgraph Input
    B[Brief]
    REF[References]
  end
  subgraph Create
    S[Sketch]
    D[Design]
    REV[Review]
    B --> S
    S --> D
    D --> REV
  end
  subgraph Output
    REV --> EX[Export]
    EX --> W[Web]
    EX --> P[Print]
  end
`,
  },
  {
    id: 'process-slide-deck',
    name: 'Slide deck workflow',
    code: `flowchart LR
  C[Content] --> O[Outline]
  O --> S[Slides]
  S --> I[Images]
  I --> R[Review]
  R --> F[Final deck]
  F --> PRES[Present]
`,
  },
  {
    id: 'process-publish',
    name: 'Publish workflow',
    code: `flowchart TB
  W[Write] --> E[Edit]
  E --> D[Design]
  D --> R{Ready?}
  R -->|No| W
  R -->|Yes| PUB[Publish]
  PUB --> SHARE[Share]
  SHARE --> FEED[Feedback]
  FEED -.-> W
`,
  },
  // Software docs / infra processes
  {
    id: 'process-api-docs',
    name: 'API documentation lifecycle',
    code: `flowchart TB
  subgraph Design
    D1[Define endpoints]
    D2[Agree on contracts]
    D1 --> D2
  end
  subgraph Spec
    S1[Write OpenAPI]
    S2[Example requests]
    D2 --> S1
    S1 --> S2
  end
  subgraph Docs
    G1[Generate docs site]
    H1[Host on docs URL]
    S2 --> G1
    G1 --> H1
  end
  H1 --> DEV[Developers use docs]
`,
  },
  {
    id: 'process-cloud-db-api',
    name: 'Cloud app with API, DB, cache',
    code: `flowchart LR
  U[User] --> B[Browser]
  B --> GW[API gateway]
  GW --> SVC[App service]
  SVC --> DB[(Database)]
  SVC --> CACHE[(Cache)]
  SVC --> Q[(Queue)]
  Q --> WORKER[Worker]
  WORKER --> STORAGE[(Blob storage)]
  STORAGE --> CDN[CDN]
  CDN --> U
`,
  },
  {
    id: 'process-oncall-debug',
    name: 'On-call incident debug flow',
    code: `flowchart TB
  U[User report] --> I[Issue created]
  I --> L[Check logs]
  L --> R[Reproduce]
  R --> DBQ[Inspect DB]
  DBQ --> CAUSE[Find cause]
  CAUSE --> FIX[Patch]
  FIX --> DEPLOY[Deploy]
  DEPLOY --> VERIFY[Verify]
  VERIFY --> CLOSE[Close issue]
`,
  },
  {
    id: 'process-docs-maintenance',
    name: 'Software docs maintenance',
    code: `flowchart TB
  CODE[Code change] --> NOTE[Changelog note]
  NOTE --> DOCS[Update docs]
  DOCS --> REVIEW[Review]
  REVIEW --> OK{OK?}
  OK -->|No| DOCS
  OK -->|Yes| MERGE[Merge docs]
  MERGE --> PUBLISH[Publish site]
  PUBLISH --> ANNOUNCE[Announce]
`,
  },
  // Blank / starter
  {
    id: 'blank',
    name: 'Blank',
    code: `flowchart LR
  A --> B
`,
  },
];
