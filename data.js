const majors = [
  "Aerospace Engineering",
  "Biochemical and Biomolecular Engineering",
  "Bioengineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Computer Science and Engineering",
  "Data Science and Analytics",
  "Electrical Engineering",
  "Environmental Engineering",
  "Materials Science and Engineering",
  "Mechanical Engineering"
];

const careers = [
  {
    id: "aerospace-engineer",
    title: "Aerospace Engineer",
    majors: ["Aerospace Engineering", "Mechanical Engineering", "Electrical Engineering"],
    interests: ["Flight systems", "Space technology", "Advanced simulation"],
    bls: {
      medianPay: "$130,720 / year",
      growth: "6% (faster than average)",
      outlookPeriod: "2023–2033"
    },
    onet: {
      tasks: [
        "Direct and coordinate design, manufacturing, and testing of aircraft and spacecraft.",
        "Evaluate proposals to ensure projects are technically and financially feasible.",
        "Assess products for quality and compliance with engineering principles."
      ],
      technologySkills: ["MATLAB", "ANSYS", "CATIA/SolidWorks"],
      workActivities: ["Systems analysis", "Design review", "Technical communication"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/architecture-and-engineering/aerospace-engineers.htm",
      onet: "https://www.onetonline.org/link/summary/17-2011.00"
    }
  },
  {
    id: "biomedical-engineer",
    title: "Biomedical Engineer",
    majors: ["Bioengineering", "Biochemical and Biomolecular Engineering", "Electrical Engineering", "Materials Science and Engineering"],
    interests: ["Medical devices", "Biomaterials", "Clinical technology"],
    bls: {
      medianPay: "$100,730 / year",
      growth: "7%",
      outlookPeriod: "2023–2033"
    },
    onet: {
      tasks: [
        "Design devices and software used in healthcare diagnostics and treatment.",
        "Train clinicians on proper use of biomedical equipment.",
        "Research engineering solutions for biological systems."
      ],
      technologySkills: ["LabVIEW", "Python", "Medical imaging software"],
      workActivities: ["Prototype testing", "Regulatory documentation", "Cross-functional collaboration"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/architecture-and-engineering/biomedical-engineers.htm",
      onet: "https://www.onetonline.org/link/summary/17-2031.00"
    }
  },
  {
    id: "chemical-engineer",
    title: "Chemical Engineer",
    majors: ["Chemical Engineering", "Biochemical and Biomolecular Engineering", "Environmental Engineering", "Materials Science and Engineering"],
    interests: ["Process design", "Energy systems", "Industrial chemistry"],
    bls: {
      medianPay: "$121,860 / year",
      growth: "10%",
      outlookPeriod: "2023–2033"
    },
    onet: {
      tasks: [
        "Develop safety procedures for chemical manufacturing processes.",
        "Design equipment for large-scale production.",
        "Troubleshoot process inefficiencies and quality issues."
      ],
      technologySkills: ["Aspen HYSYS", "AutoCAD", "Statistical analysis tools"],
      workActivities: ["Process optimization", "Hazard analysis", "Plant operations coordination"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/architecture-and-engineering/chemical-engineers.htm",
      onet: "https://www.onetonline.org/link/summary/17-2041.00"
    }
  },
  {
    id: "civil-engineer",
    title: "Civil Engineer",
    majors: ["Civil Engineering", "Environmental Engineering", "Mechanical Engineering", "Data Science and Analytics"],
    interests: ["Infrastructure", "Sustainability", "Urban systems"],
    bls: {
      medianPay: "$95,890 / year",
      growth: "6%",
      outlookPeriod: "2023–2033"
    },
    onet: {
      tasks: [
        "Plan and design transportation, water, and structural projects.",
        "Analyze survey reports, maps, and test data.",
        "Manage permits and regulatory requirements."
      ],
      technologySkills: ["Civil 3D", "GIS", "STAAD/structural analysis software"],
      workActivities: ["Project management", "Site inspections", "Stakeholder coordination"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm",
      onet: "https://www.onetonline.org/link/summary/17-2051.00"
    }
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    majors: ["Data Science and Analytics", "Computer Science and Engineering", "Electrical Engineering", "Mechanical Engineering"],
    interests: ["Machine learning", "Predictive modeling", "Decision intelligence"],
    bls: {
      medianPay: "$108,020 / year",
      growth: "36%",
      outlookPeriod: "2023–2033"
    },
    onet: {
      tasks: [
        "Develop and deploy statistical and machine learning models.",
        "Interpret trends from large and complex datasets.",
        "Communicate analytical insights to technical and non-technical audiences."
      ],
      technologySkills: ["Python", "R", "SQL / cloud analytics platforms"],
      workActivities: ["Data pipeline design", "Model validation", "Business collaboration"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/math/data-scientists.htm",
      onet: "https://www.onetonline.org/link/summary/15-2051.00"
    }
  },
  {
    id: "software-developer",
    title: "Software Developer",
    majors: ["Computer Science and Engineering", "Data Science and Analytics", "Electrical Engineering", "Bioengineering"],
    interests: ["Product engineering", "Embedded software", "Platform development"],
    bls: {
      medianPay: "$131,450 / year",
      growth: "17%",
      outlookPeriod: "2023–2033"
    },
    onet: {
      tasks: [
        "Design and build applications that meet user and business requirements.",
        "Test and maintain software to optimize performance.",
        "Collaborate with teams to implement new features and integrations."
      ],
      technologySkills: ["JavaScript/TypeScript", "Python", "Git and CI/CD tooling"],
      workActivities: ["Agile planning", "Code review", "Software testing"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
      onet: "https://www.onetonline.org/link/summary/15-1252.00"
    }
  },
  {
    id: "environmental-engineer",
    title: "Environmental Engineer",
    majors: ["Environmental Engineering", "Civil Engineering", "Chemical Engineering", "Biochemical and Biomolecular Engineering"],
    interests: ["Water quality", "Pollution prevention", "Climate resilience"],
    bls: {
      medianPay: "$100,090 / year",
      growth: "6%",
      outlookPeriod: "2023–2033"
    },
    onet: {
      tasks: [
        "Design systems for waste management and remediation.",
        "Investigate environmental incidents and propose mitigation solutions.",
        "Prepare reports and permits that meet environmental regulations."
      ],
      technologySkills: ["EPA compliance tools", "GIS", "Environmental modeling software"],
      workActivities: ["Field sampling", "Regulatory analysis", "Public reporting"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/architecture-and-engineering/environmental-engineers.htm",
      onet: "https://www.onetonline.org/link/summary/17-2081.00"
    }
  },
  {
    id: "materials-engineer",
    title: "Materials Engineer",
    majors: ["Materials Science and Engineering", "Mechanical Engineering", "Chemical Engineering", "Aerospace Engineering"],
    interests: ["Nanomaterials", "Failure analysis", "Manufacturing innovation"],
    bls: {
      medianPay: "$104,100 / year",
      growth: "8%",
      outlookPeriod: "2023–2033"
    },
    onet: {
      tasks: [
        "Develop and test materials to improve product performance.",
        "Analyze product failures and recommend design changes.",
        "Support scale-up from laboratory processes to manufacturing."
      ],
      technologySkills: ["Finite element tools", "Materials characterization software", "Python/Matlab"],
      workActivities: ["Lab experimentation", "Root cause analysis", "Manufacturing support"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/architecture-and-engineering/materials-engineers.htm",
      onet: "https://www.onetonline.org/link/summary/17-2131.00"
    }
  },
  {
    id: "industrial-engineer",
    title: "Industrial Engineer",
    majors: ["Mechanical Engineering", "Data Science and Analytics", "Chemical Engineering", "Civil Engineering"],
    interests: ["Operations research", "Supply chain", "Quality engineering"],
    bls: {
      medianPay: "$99,380 / year",
      growth: "12%",
      outlookPeriod: "2023–2033"
    },
    onet: {
      tasks: [
        "Improve production workflows to reduce waste and increase quality.",
        "Develop management control systems and procedures.",
        "Use simulation and data analysis to recommend operational changes."
      ],
      technologySkills: ["Minitab", "Tableau/Power BI", "Discrete-event simulation tools"],
      workActivities: ["Process mapping", "Cost analysis", "Continuous improvement"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/architecture-and-engineering/industrial-engineers.htm",
      onet: "https://www.onetonline.org/link/summary/17-2112.00"
    }
  },
  {
    id: "robotics-engineer",
    title: "Robotics Engineer",
    majors: ["Mechanical Engineering", "Electrical Engineering", "Computer Science and Engineering", "Aerospace Engineering"],
    interests: ["Automation", "Controls", "Human-machine systems"],
    bls: {
      medianPay: "See related role: Robotics engineers mapped to mechanical/electrical/software occupations",
      growth: "High demand across advanced manufacturing and autonomy",
      outlookPeriod: "Use related OOH profiles"
    },
    onet: {
      tasks: [
        "Design robotic systems and end-effectors for industrial or field use.",
        "Develop control algorithms and sensor integration.",
        "Test performance and safety in real-world conditions."
      ],
      technologySkills: ["ROS", "C++/Python", "PLC and controls software"],
      workActivities: ["Prototyping", "Systems integration", "Hardware-software testing"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/",
      onet: "https://www.onetonline.org/link/summary/17-2199.08"
    }
  },
  {
    id: "petroleum-engineer",
    title: "Petroleum Engineer",
    majors: ["Chemical Engineering", "Mechanical Engineering", "Environmental Engineering", "Data Science and Analytics"],
    interests: ["Energy systems", "Subsurface modeling", "Field operations"],
    bls: {
      medianPay: "$135,690 / year",
      growth: "2%",
      outlookPeriod: "2023–2033"
    },
    onet: {
      tasks: [
        "Develop plans to extract oil and gas from deposits.",
        "Collaborate with geoscientists on reservoir analysis.",
        "Monitor production and optimize recovery performance."
      ],
      technologySkills: ["Reservoir simulation software", "Drilling analytics tools", "Python"],
      workActivities: ["Production planning", "Risk management", "Field optimization"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/architecture-and-engineering/petroleum-engineers.htm",
      onet: "https://www.onetonline.org/link/summary/17-2171.00"
    }
  },
  {
    id: "nuclear-engineer",
    title: "Nuclear Engineer",
    majors: ["Mechanical Engineering", "Electrical Engineering", "Chemical Engineering", "Materials Science and Engineering"],
    interests: ["Energy generation", "Safety systems", "Reactor design"],
    bls: {
      medianPay: "$125,460 / year",
      growth: "1%",
      outlookPeriod: "2023–2033"
    },
    onet: {
      tasks: [
        "Design and monitor nuclear equipment and systems.",
        "Ensure operations meet strict safety and environmental standards.",
        "Analyze incidents and recommend process improvements."
      ],
      technologySkills: ["Reactor simulation tools", "Risk modeling software", "Data analysis tools"],
      workActivities: ["Safety analysis", "Regulatory compliance", "Plant performance monitoring"]
    },
    sources: {
      bls: "https://www.bls.gov/ooh/architecture-and-engineering/nuclear-engineers.htm",
      onet: "https://www.onetonline.org/link/summary/17-2161.00"
    }
  }
];
