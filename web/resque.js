const max = 12;

const meta = {
    title: "Meta",
    elements: [
        {
            id: "P1",
            type: "text",
            title: "Last name"
        }
    ]
}

const pub = {
    title: "Publication",
    elements: [
        {
            id: "P2",
            type: "number",
            title: "Paper number (1, 2, 3, ...)"
        },
        {
            id: "P3",
            type: "text",
            title: "Paper title (do not provide journal name)"
        },
        {
            id: "P4",
            type: "number",
            title: "Year of publication"
        },
        {
            id: "P5",
            type: "text",
            title: "DOI"
        },
        {
            type: "separator"
        },
        {
            id: "P6",
            type: "checkbox",
            title: "Publication type (check all that apply)",
            options: [
                "Empirical paper",
                "Meta-Analysis",
                "(Mainly) Theoretical contribution / Review",
                "Simulation",
                "Other (please specify)"
            ]
        },
        {
            id: "P6_other",
            type: "text",
            title: "Publication type: Other",
            condition: "$P6e === true"
        },
        {
            id: "P7",
            type: "dropdown",
            title: "Publication type",
            options: [
                "Published paper / Paper in press",
                "Preprint",
                "Conference proceeding",
                "Stage 1 registered report with IPA",
                "Monograph",
                "Book chapter",
                "Test or instrument",
                "Other (please specify)"
            ]
        },
        {
            id: "P7_other",
            type: "text",
            title: "Publication type: Other",
            condition: "$P7 === 7"
        },
        {
            id: "P8",
            type: "boolean",
            title: "Opt-out: Does this contribution fit well into the assessment scheme? (If 'no': Skip all other indicators; the paper will not be included in the scoring but processed manually)",
            options: ["Yes", "No, it should be processed manually (provide explanation)"],
        },
        {
            id: "P8_explanation",
            type: "text",
            title: "Opt-out: Explanation",
            condition: "!($P8)"
        },
        {
            type: "separator"
        },
        {
            type: "info",
            text: "<h3>CRediT roles</h3>" ,
            condition: "$P8"
        },
        {
            id: "P9a",
            type: "radio",
            title: "Conceptualization",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9b",
            type: "radio",
            title: "Data curation",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9c",
            type: "radio",
            title: "Formal analysis",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9d",
            type: "radio",
            title: "Funding acquisition",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9e",
            type: "radio",
            title: "Investigation",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9f",
            type: "radio",
            title: "Methodology",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9g",
            type: "radio",
            title: "Project administration",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9h",
            type: "radio",
            title: "Resources",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9i",
            type: "radio",
            title: "Software",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9j",
            type: "radio",
            title: "Supervision",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9k",
            type: "radio",
            title: "Validation",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9l",
            type: "radio",
            title: "Visualization",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9m",
            type: "radio",
            title: "Writing - original draft",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            id: "P9n",
            type: "radio",
            title: "Writing - review & editing",
            options: ["Lead", "Equal", "Support", "No Role"],
            alignment: "horizontal",
            condition: "$P8"
        },
        {
            type: "separator",
            condition: "$P8"
        },
        {
            id: "P10",
            type: "checkbox",
            title: "Own data or data reuse (check all that apply)",
            options: [
                "Own data collection",
                "Reuse of existinig data set",
                "Simulated data",
                "No data"
            ],
            condition: "$P8"
        },
        {
            id: "P11",
            type: "radio",
            title: "⤷ Is the raw data available in a repository that also controls data access (not upon request)",
            options: [
                "Not applicable [provide explanation]",
                "Not available",
                "Yes, parts of data [provide doi or URL]",
                "Yes, entire data [provide doi or URL]"
            ],
            condition: "$P8 && $P10a"
        },
        {
            id: "P11_explanation",
            type: "text",
            title: "⤷ Not Applicable: Explanation",
            condition: "$P8 && $P11 === 0"
        },
        {
            id: "P11_extra",
            type: "text",
            title: "⤷ DOI or URL",
            condition: "$P8 && ($P11 === 3 || $P11 === 2)"
        },
        {
            id: "P12",
            type: "radio",
            title: "⤷ Access level",
            options: [
                "ZK0 (open data)",
                "ZK1 (scientific use file)",
                "ZK2 (restricted access) [provide explanation]"
            ],
            condition: "$P8 && $P11 === 3"
        },
        {
            id: "P12_explanation",
            type: "text",
            title: "⤷ Access level ZK2: Explanation",
            condition: "$P8 && $P12 === 2"
        },
        {
            id: "P13",
            type: "checkbox",
            title: "⤷ FAIR format",
            options: [
                "The data set has a globally unique, citable and persistent identifier (e.g., DOI, PURL, ARK)",
                "All variables are comprehensively described in a codebook with a structured format",
                "The data set is stored in a structured, open format\n(e.g., .csv, .tsv, .tab, .txt, .json; not .sav, .xlsx, .pdf)"
            ],
            condition: "$P8 && ($P12 === 0 || $P12 === 1 || $P12 === 2 && $P12_explanation)"
        },
        {
            type: "separator"
        },
        {
            id: "P14",
            type: "radio",
            title: "Correctness of computational results has been independently verified",
            options: [
                "Not applicable",
                "No",
                "Yes [provide doi or URL to verification report]"
            ],
            condition: "$P8"
        },
        {
            id: "P14_extra",
            type: "text",
            title: "DOI or URL to the verification report",
            condition: "$P8 && $P14 === 2"
        },
        {
            id: "P15",
            type: "radio",
            title: "Open reproducible scripts",
            options: [
                "Not applicable [provide explanation]",
                "Not available",
                "Yes, parts of scripts [provide doi or URL]",
                "Yes, entire scripts [provide doi or URL]"
            ],
            condition: "$P8"
        },
        {
            id: "P15_explanation",
            type: "text",
            title: "Not applicable: Explanation",
            condition: "$P8 && $P15 === 0"
        },
        {
            id: "P15_extra",
            type: "text",
            title: "DOI or URL to the script",
            condition: "$P8 && ($P15 === 2 || $P15 === 3)"
        },
        {
            id: "P16",
            type: "checkbox",
            title: "⤷ FAIR format",
            options: [
                "Timestamped repository",
                "Version control",
                "Reproducible manuscripts (e.g. with R Markdown)",
                "Proper documentation of code",
                "Reproducible software environments (e.g. conda environment, renv environment in R)"
            ],
            condition: "$P8 && ($P12 === 0 || $P12 === 1 || $P12 === 2 && $P12_explanation)"
        },
        {
            id: "P17",
            type: "radio",
            title: "Open materials",
            options: [
                "Not applicable [provide explanation]",
                "Not available",
                "Yes, parts of material [provide doi or URL]",
                "Yes, entire material [provide doi or URL]"
            ],
            condition: "$P8"
        },
        {
            id: "P17_explanation",
            type: "text",
            title: "Not applicable: Explanation",
            condition: "$P8 && $P17 === 0"
        },
        {
            id: "P17_extra",
            type: "text",
            title: "DOI or URL to the open materials",
            condition: "$P8 && ($P17 === 2 || $P17 === 3)"
        },
        {
            type: "separator",
            condition: "$P8"
        },
        {
            id: "P18",
            type: "radio",
            title: "Preregistration",
            options: [
                "Not applicable [provide explanation]",
                "No",
                "Yes (but not RR) [provide doi or URL]",
                "Registered Report  [provide doi or URL]"
            ],
            condition: "$P8"
        },
        {
            id: "P18_explanation",
            type: "text",
            title: "Not applicable: Explanation",
            condition: "$P8 && ($P18 === 0)"
        },
        {
            id: "P18_extra",
            type: "text",
            title: "DOI or URL to the preregistration",
            condition: "$P8 && ($P18 === 2 || $P18 === 3)"
        },
        {
            id: "P19",
            type: "checkbox",
            title: "⤷ What has been preregistered? (check all that apply)",
            options: [
                "Sample size planning (typically: an a priori power analysis)",
                "Hypotheses",
                "Operationalizations",
                "Analysis Plan"
            ],
            condition: "$P8"
        },
        {
            type: "separator",
            condition: "$P8"
        },
        {
            id: "P20",
            type: "dropdown",
            title: "Formal modeling of a theory",
            options: [
                "Not applicable [provide explanation]",
                "No",
                "Yes"
            ],
            condition: "$P8"
        },
        {
            id: "P20_explanation",
            type: "text",
            title: "Not applicable: Explanation",
            condition: "$P8 && $P20 === 0"
        },
        {
            id: "P21",
            type: "dropdown",
            title: "The paper contains a preregistered replication attempt (either direct/close or conceptual)",
            options: [
                "Not applicable [provide explanation]",
                "No",
                "Yes"
            ],
            condition: "$P8"
        },
        {
            id: "P21_explanation",
            type: "text",
            title: "Not applicable: Explanation",
            condition: "$P8 && $P21 === 0"
        },
        {
            type: "separator",
            condition: "$P8"
        },
        {
            id: "P22",
            type: "textbox",
            title: "Please report all considerations regarding statistical power (assumed effect size, power, N, ...)",
            condition: "$P8"
        },
        {
            id: "P23",
            type: "checkbox",
            title: "Official open science badges awarded by journal? (check all that apply)",
            options: [
                "Open Data",
                "Open Material",
                "Preregistration"
            ],
            condition: "$P8"
        },
        {
            id: "P24",
            type: "textbox",
            title: "Sample size (if applicable, differentiate by levels / items / ...)",
            condition: "$P8"
        },
        {
            id: "P25",
            type: "textbox",
            maxwords: 150,
            title: "Merit / impact statement (narrative, max. 150 words)",
            condition: "$P8"
        }
    ]
}

const software =  {
    title: "Software Project",
    elements: [
        {
            type: "info",
            text: "👋🏻 Hello World!"
        },
        {
            id: "S2",
            type: "text",
            title: "Name of the software project"
        }
    ]
}


const data = {
    title: "Data Set",
    elements: [
        {
            type: "info",
            text: "👋🏻 Hi!"
        }
    ]
}
