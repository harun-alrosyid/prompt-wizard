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
          "Specify exactly what action you want me to take.",
        placeholder:
          "Create a draft marketing plan for a new healthy beverage product.",
      },
      {
        label: "Purpose",
        description:
          "Explain why this action is important or what you want to achieve.",
        placeholder:
          "This plan will be used for a presentation to the management team to obtain approval for budget and resources.",
      },
      {
        label: "Expectation",
        description:
          "Provide clear examples or criteria of the outcome you expect.",
        placeholder:
          "The draft should include competitor analysis, target audience, promotional strategies (including social media and digital ads), and an implementation timeline.",
      },
      {
        label: "Additional Context & Special Instructions",
        description: "Additional Context & Special Instructions",
        placeholder: "Additional Context & Special Instructions",
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
          "Questions, surprising facts, or relevant statements work well here.",
        placeholder:
          "Do you often struggle with managing your personal finances? Most people don’t know how to budget effectively, which can lead to financial stress.",
      },
      {
        label: "Interest",
        description: "Explain why this topic matters to the audience.",
        placeholder:
          "Our free webinar, Smart Ways to Manage Your Finances, will teach you practical techniques for budgeting, saving, and investing—even on a tight salary.",
      },
      {
        label: "Desire",
        description:
          "Create desire by highlighting the benefits and value.",
        placeholder:
          "Imagine—within 60 minutes, you’ll get a complete guide to taking full control of your money, becoming debt-free, and starting to plan your dream future.",
      },
      {
        label: "Action",
        description:
          "Provide a clear and easy-to-follow call-to-action.",
        placeholder:
          "Register now through the link below. Spots are limited, so don’t miss out!",
      },
      {
        label: "Additional Context & Special Instructions",
        description: "Additional Context & Special Instructions",
        placeholder: "Additional Context & Special Instructions",
      },
    ],
  },
];


const expectResults = [{ label: "Text", subLabel: "Text", value: "Text" }];

export { expectResults, modelPrompts, allModrels };
