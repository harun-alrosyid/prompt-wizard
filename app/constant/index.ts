const allModrels = [
  {
    value: "APE",
    label: "APE",
    subLabel: "(Action, Purpose, Expectation)",
    input: [
      {
        label: "Action",
        description: "Action",
      },
      {
        label: "Purpose",
        description: "Purpose",
      },
      {
        label: "Expectation",
        description: "Expectation",
      },
    ],
  },
  {
    value: "AIDA",
    label: "AIDA",
    subLabel: "(Attention, Interest, Desire, Action)",
    input: [
      {
        label: "Attention",
        description: "Attention",
      },
      {
        label: "Interest",
        description: "Interest",
      },
      {
        label: "Desire",
        description: "Desire",
      },
      {
        label: "Action",
        description: "Action",
      },
    ],
  },
  {
    value: "BAB",
    label: "BAB",
    subLabel: "(Before, After, Bridge)",
    input: [
      {
        label: "Before",
        description: "Before",
      },
      {
        label: "After",
        description: "After",
      },
      {
        label: "Bridge",
        description: "Bridge",
      },
    ],
  },
  {
    value: "CRISPE",
    label: "CRISPE",
    subLabel: "(Capacity/Role, Insight, Statement, Personality, Experiment)",
    input: [
      {
        label: "Capacity/Role",
        description: "Capacity/Role",
      },
      {
        label: "Insight",
        description: "Insight",
      },
      {
        label: "Statement",
        description: "Statement",
      },
      {
        label: "Personality",
        description: "Personality",
      },
      {
        label: "Experiment",
        description: "Experiment",
      },
    ],
  },
  {
    value: "CoT",
    label: "CoT",
    subLabel: "(Chain-of-Thought)",
    input: [
      {
        label: "Chain-of-Thought",
        description: "Chain-of-Thought",
      },
    ],
  },
  {
    value: "CARE",
    label: "CARE",
    subLabel: "(Context, Action, Result, Example)",
    input: [
      {
        label: "Context",
        description: "Context",
      },
      {
        label: "Action",
        description: "Action",
      },
      {
        label: "Result",
        description: "Result",
      },
      {
        label: "Example",
        description: "Example",
      },
    ],
  },
  {
    value: "CIDI",
    label: "CIDI",
    subLabel: "(Context, Input Data, Desired Output, Intent)",
    input: [
      {
        label: "Context",
        description: "Context",
      },
      {
        label: "Input Data",
        description: "Input Data",
      },
      {
        label: "Desired Output",
        description: "Desired Output",
      },
      {
        label: "Intent",
        description: "Intent",
      },
    ],
  },
  {
    value: "CO-STAR",
    label: "CO-STAR",
    subLabel: "(Context, Objective, Style, Tone, Audience, Response)",
    input: [
      {
        label: "Context",
        description: "Context",
      },
      {
        label: "Objective",
        description: "Objective",
      },
      {
        label: "Style",
        description: "Style",
      },
      {
        label: "Tone",
        description: "Tone",
      },
      {
        label: "Audience",
        description: "Audience",
      },
      {
        label: "Response",
        description: "Response",
      },
    ],
  },
  {
    value: "CTF",
    label: "CTF",
    subLabel: "(Context, Task, Format)",
    input: [
      {
        label: "Context",
        description: "Context",
      },
      {
        label: "Task",
        description: "Task",
      },
      {
        label: "Format",
        description: "Format",
      },
    ],
  },
  {
    value: "FAB",
    label: "FAB",
    subLabel: "(Features, Advantages, Benefits)",
    input: [
      {
        label: "Features",
        description: "Features",
      },
      {
        label: "Advantages",
        description: "Advantages",
      },
      {
        label: "Benefits",
        description: "Benefits",
      },
    ],
  },
  {
    value: "GRADE",
    label: "GRADE",
    subLabel: "(Goal, Request, Action, Detail, Example)",
    input: [
      {
        label: "Goal",
        description: "Goal",
      },
      {
        label: "Request",
        description: "Request",
      },
      {
        label: "Action",
        description: "Action",
      },
      {
        label: "Detail",
        description: "Detail",
      },
      {
        label: "Example",
        description: "Example",
      },
    ],
  },
  {
    value: "Google Guide",
    label: "Google Guide",
    subLabel: "(Google's Prompting Guide Principles)",
    input: [
      {
        label: "Understand User Need & Define Task",
        description: "Understand User Need & Define Task",
      },
      {
        label: "Provide Clear Examples (Few-Shot)",
        description: "Provide Clear Examples (Few-Shot)",
      },
      {
        label: "Be Specific, Concise & Explicit",
        description: "Be Specific, Concise & Explicit",
      },
      {
        label: "Additional Context & Special Instructions",
        description: "Additional Context & Special Instructions",
      },
    ],
  },
  {
    value: "ICIO",
    label: "ICIO",
    subLabel: "(Instruction, Context, Input, Output Indicator)",
    input: [
      {
        label: "Instruction",
        description: "Instruction",
      },
      {
        label: "Context",
        description: "Context",
      },
      {
        label: "Input",
        description: "Input",
      },
      {
        label: "Output Indicator",
        description: "Output Indicator",
      },
    ],
  },
  {
    value: "PAS",
    label: "PAS",
    subLabel: "(Problem, Agitate, Solution)",
    input: [
      {
        label: "Problem",
        description: "Problem",
      },
      {
        label: "Agitate",
        description: "Agitate",
      },
      {
        label: "Solution",
        description: "Solution",
      },
    ],
  },
  {
    value: "PREPARE",
    label: "PREPARE",
    subLabel:
      "(Purpose, Requirements, Examples, Persona, Action, Refinements, Evaluation)",
    input: [
      {
        label: "Purpose",
        description: "Purpose",
      },
      {
        label: "Requirements",
        description: "Requirements",
      },
      {
        label: "Examples",
        description: "Examples",
      },
      {
        label: "Persona",
        description: "Persona",
      },
      {
        label: "Action",
        description: "Action",
      },
      {
        label: "Refinements",
        description: "Refinements",
      },
      {
        label: "Evaluation",
        description: "Evaluation",
      },
    ],
  },
  {
    value: "RACE",
    label: "RACE",
    subLabel: "(Role, Action, Context, Example)",
    input: [
      {
        label: "Role",
        description: "Role",
      },
      {
        label: "Action",
        description: "Action",
      },
      {
        label: "Context",
        description: "Context",
      },
      {
        label: "Example",
        description: "Example",
      },
    ],
  },
  {
    value: "RASCEF",
    label: "RASCEF",
    subLabel: "(Role, Action, Steps, Context, Examples, Format)",
    input: [
      {
        label: "Role",
        description: "Role",
      },
      {
        label: "Action",
        description: "Action",
      },
      {
        label: "Steps",
        description: "Steps",
      },
      {
        label: "Context",
        description: "Context",
      },
      {
        label: "Examples",
        description: "Examples",
      },
      {
        label: "Format",
        description: "Format",
      },
    ],
  },
  {
    value: "RISE",
    label: "RISE",
    subLabel: "(Role, Input, Steps, Expectation)",
    input: [
      {
        label: "Role",
        description: "Role",
      },
      {
        label: "Input",
        description: "Input",
      },
      {
        label: "Steps",
        description: "Steps",
      },
      {
        label: "Expectation",
        description: "Expectation",
      },
    ],
  },
  {
    value: "ROSES",
    label: "ROSES",
    subLabel: "(Role, Objective, Scenario, Expected Solution, Steps)",
    input: [
      {
        label: "Role",
        description: "Role",
      },
      {
        label: "Objective",
        description: "Objective",
      },
      {
        label: "Scenario",
        description: "Scenario",
      },
      {
        label: "Expected Solution",
        description: "Expected Solution",
      },
      {
        label: "Steps",
        description: "Steps",
      },
    ],
  },
  {
    value: "RTF",
    label: "RTF",
    subLabel: "(Role, Task, Format)",
    input: [
      {
        label: "Role",
        description: "Role",
      },
      {
        label: "Task",
        description: "Task",
      },
      {
        label: "Format",
        description: "Format",
      },
    ],
  },
  {
    value: "RTF-C",
    label: "RTF-C",
    subLabel: "(Role, Task, Format, Context)",
    input: [
      {
        label: "Role",
        description: "Role",
      },
      {
        label: "Task",
        description: "Task",
      },
      {
        label: "Format",
        description: "Format",
      },
      {
        label: "Context",
        description: "Context",
      },
    ],
  },
  {
    value: "SceneCraft",
    label: "SceneCraft",
    subLabel: "(SceneCraft Detailer)",
    input: [
      {
        label: "Scene Setting & Environment",
        description: "Scene Setting & Environment",
      },
      {
        label: "Characters Present & Appearance",
        description: "Characters Present & Appearance",
      },
      {
        label: "Key Actions & Events",
        description: "Key Actions & Events",
      },
      {
        label: "Camera Angle & Shot Type (Conceptual)",
        description: "Camera Angle & Shot Type (Conceptual)",
      },
      {
        label: "Mood & Lighting",
        description: "Mood & Lighting",
      },
      {
        label: "Additional Context & Special Instructions",
        description: "Additional Context & Special Instructions",
      },
    ],
  },
  {
    value: "STAR",
    label: "STAR",
    subLabel: "(Situation, Task, Action, Result)",
    input: [
      {
        label: "Situation",
        description: "Situation",
      },
      {
        label: "Task",
        description: "Task",
      },
      {
        label: "Action",
        description: "Action",
      },
      {
        label: "Result",
        description: "Result",
      },
    ],
  },
  {
    value: "TAG",
    label: "TAG",
    subLabel: "(Task, Action, Goal)",
    input: [
      {
        label: "Task",
        description: "Task",
      },
      {
        label: "Action",
        description: "Action",
      },
      {
        label: "Goal",
        description: "Goal",
      },
    ],
  },
  {
    value: "TRACE",
    label: "TRACE",
    subLabel: "(Task, Request, Action, Context, Example)",
    input: [
      {
        label: "Task",
        description: "Task",
      },
      {
        label: "Request",
        description: "Request",
      },
      {
        label: "Action",
        description: "Action",
      },
      {
        label: "Context",
        description: "Context",
      },
      {
        label: "Example",
        description: "Example",
      },
    ],
  },
  {
    value: "TREF",
    label: "TREF",
    subLabel: "(Task, Role, Example, Format)",
    input: [
      {
        label: "Task",
        description: "Task",
      },
      {
        label: "Role",
        description: "Role",
      },
      {
        label: "Example",
        description: "Example",
      },
      {
        label: "Format",
        description: "Format",
      },
    ],
  },
  {
    value: "Zero-shot CoT",
    label: "Zero-shot CoT",
    subLabel: "(Zero-shot Chain-of-Thought)",
    input: [
      {
        label: "Problem & Trigger Phrase",
        description: "Problem & Trigger Phrase",
      },
      {
        label: "Additional Context & Special Instructions",
        description: "Additional Context & Special Instructions",
      },
    ],
  },
];

const modelPrompts = [
  {
    value: "APE",
    label: "APE",
    subLabel: "(Action, Purpose, Expectation)",
    input: [
      {
        label: "Action",
        description:
          "Tentukan secara spesifik tindakan yang Anda ingin saya lakukan.",
        placeholder:
          "Buatlah draf rencana pemasaran untuk produk minuman sehat baru.",
      },
      {
        label: "Purpose",
        description:
          "Jelaskan mengapa tindakan ini penting atau apa yang ingin Anda capai.",
        placeholder:
          "Rencana ini akan digunakan untuk presentasi kepada tim manajemen, untuk mendapatkan persetujuan anggaran dan sumber daya.",
      },
      {
        label: "Expectation",
        description:
          "Berikan contoh atau kriteria yang jelas tentang hasil yang Anda harapkan.",
        placeholder:
          "Draf harus mencakup analisis pesaing, target audiens, strategi promosi (termasuk media sosial dan iklan digital), serta jadwal pelaksanaan.",
      },
      {
        label: "Additional Context & Special Instructions",
        description: "Additional Context & Special Instructions",
        placeholder: "",
      },
    ],
  },
  {
    value: "AIDA",
    label: "AIDA",
    subLabel: "(Attention, Interest, Desire, Action)",
    input: [
      {
        label: "Attention",
        description:
          "Pertanyaan, fakta mengejutkan, atau pernyataan yang relevan sangat efektif di sini",
        placeholder:
          "Apakah Anda sering merasa kesulitan mengelola keuangan pribadi? Sebagian besar orang tidak tahu cara mengatur gaji mereka secara efektif, yang bisa berujung pada stres finansial.",
      },
      {
        label: "Interest",
        description: "Jelaskan mengapa topik ini penting bagi audiens",
        placeholder:
          "Webinar gratis kami, Jurus Jitu Mengelola Keuangan, akan mengajarkan Anda teknik-teknik praktis untuk menyusun anggaran, menabung, dan berinvestasi meskipun dengan gaji pas-pasan.",
      },
      {
        label: "Desire",
        description:
          "Ciptakan keinginan dalam diri audiens dengan menyoroti manfaat dan nilai.",
        placeholder:
          "Bayangkan, dalam 60 menit, Anda akan mendapatkan panduan lengkap untuk memiliki kendali penuh atas uang Anda, bebas dari kekhawatiran utang, dan bisa mulai merencanakan masa depan impian.",
      },
      {
        label: "Action",
        description:
          "Berikan seruan tindakan (call-to-action) yang jelas dan mudah diikuti",
        placeholder:
          "Daftar sekarang melalui tautan di bawah ini. Tempat terbatas, jadi jangan sampai ketinggalan!",
      },
      {
        label: "Additional Context & Special Instructions",
        description: "Additional Context & Special Instructions",
        placeholder: "",
      },
    ],
  },
];

const expectResults = [{ label: "Text", subLabel: "Text", value: "Text" }];

export { expectResults, modelPrompts, allModrels };
