/**
 * ============================================================================
 * GSA GOOGLE AI WORKSHOP SERIES — EDITABLE WEBSITE CONTENT (site-content.js)
 * ============================================================================
 * Edit any text, date, room number, description, or agenda item below!
 * Changes saved to this file will automatically update the entire website.
 * ============================================================================
 */

window.SITE_CONTENT = {
    // ------------------------------------------------------------------------
    // 1. SITE BRANDING, ORGANIZER & HEADER NAVIGATION
    // ------------------------------------------------------------------------
    brand: {
        siteTitle: "Google AI Workshop Series",
        navbarTitle: "Google AI Series",
        navbarBadge: "4-Part Series",
        navbarSubtitle: "Google Student Ambassadors",
        organizerName: "Simmon Priady Sasmita",
        organizerRole: "Google Student Ambassador",
        organizerGsaId: "GSAID26B20269",
        universityName: "University of Jakarta International",
        campusBuilding: "Jakarta International Tower"
    },

    nav: {
        eventsLabel: "Workshops",
        roadmapLabel: "About",
        qnaLabel: "Q&A",
        adminLoginLabel: "Admin",
        adminStudioLabel: "Studio"
    },

    // ------------------------------------------------------------------------
    // 2. HERO BANNER SECTION (CONCISE & PUNCHY)
    // ------------------------------------------------------------------------
    hero: {
        badgePrimary: "Google Student Ambassadors • Nov 17–27, 2026",
        headlinePrefix: "Google AI",
        headlineHighlight: "Workshop Series",
        description:
            "4 hands-on, 60-minute Google AI sessions at University of Jakarta International. Practical workflows you can apply immediately-100% standalone, no prior experience required.",
        primaryCtaText: "View 4 Workshops",
        secondaryCtaText: "Ask a Question"
    },

    // ------------------------------------------------------------------------
    // 3. SERIES OVERVIEW & COMPLETED OCTOBER SESSIONS
    // ------------------------------------------------------------------------
    seriesOverview: {
        sectionBadge: "About the Series",
        sectionTitle: "Practical AI Skills, Zero Fluff",
        sectionDescription:
            "Every 60-minute workshop is self-contained. You can join any session without having attended the previous ones.",
        hostCard: {
            title: "Hosted By",
            name: "Simmon Priady Sasmita",
            role: "Google Student Ambassador (GSAID26B20269) • UNIJI",
            quote:
                "\"Focusing purely on how to use these tools to make everyday academic and project tasks easier, without getting bogged down in complex theory.\""
        }
    },

    foundationSection: {
        title: "Completed October Primers (Events 1 & 2)",
        events: [
            {
                eventNumber: "Event 1",
                status: "Completed",
                title: "Welcome to the Future: Navigating the Google AI Ecosystem",
                date: "Oct 20, 2026",
                time: "15:30–16:30 WIB",
                location: "Room 10.07",
                summary:
                    "Foundational overview of the Google AI ecosystem, multimodal reasoning, and everyday student workflows."
            },
            {
                eventNumber: "Event 2",
                status: "Completed",
                title: "Mastering the Ask: Effective Prompting & Gemini Gem",
                date: "Oct 22, 2026",
                time: "15:30–16:30 WIB",
                location: "Room 10.05",
                summary:
                    "Hands-on practice with the PTCF prompting framework and custom Gemini Gems for repetitive tasks."
            }
        ]
    },

    // ------------------------------------------------------------------------
    // 4. THE 4 FEATURED WORKSHOPS (EVENTS 3, 4, 5, 6)
    // Note: `qnaCategory` maps to database categories ("Event 1".."Event 4")
    // ------------------------------------------------------------------------
    featuredSection: {
        title: "Upcoming Workshops",
        subtitle: "Tap any workshop for the full syllabus & details, or jump straight to its Q&A."
    },

    events: [
        {
            id: "event-3",
            defaultLocked: false,
            qnaCategory: "Event 1",
            eventNumber: "Event 3",
            badgeText: "Source-Grounded AI",
            colorTheme: "red",
            stickerImage: "assets/gsa/books-red.png",
            title: "Your Personal Research Assistant: Hands-on with NotebookLM",
            shortDropdownLabel: "🔵 Event 3: NotebookLM",
            toolName: "NotebookLM",
            toolUrl: "https://notebooklm.google.com/",
            date: "Tue, Nov 17, 2026",
            time: "15:30–16:30 WIB",
            duration: "60 Mins",
            room: "Room 10.08",
            venue: "UNIJI, Jakarta International Tower",
            format: "Offline Hands-on",
            capacity: "20 Students",
            targetAudience:
                "Active UNIJI students across all majors looking for an efficient, citation-backed AI assistant for academic research and coursework.",
            summary:
                "Turn thick PDFs, journals, and lecture slides into an interactive, hallucination-free knowledge base with instant study guides and Audio Overviews.",
            overview:
                "Learn how to upload your own documents, synthesize large amounts of information, and interactively query your localized datasets using Google NotebookLM.",
            background:
                "Students frequently face mountains of research papers, journals, and dense course modules. General chat AI carries the risk of hallucinations. This hands-on workshop introduces source-grounded AI through Google NotebookLM, training you to upload reference documents, auto-generate study guides and Audio Overviews, and query your sources with inline citations.",
            whatToDiscuss: [
                "Source-grounded AI vs. general chat models",
                "Creating and organizing a NotebookLM workspace",
                "Uploading PDFs, text files, and web links",
                "Generating automatic study guides, summaries & Audio Overviews",
                "Querying your notebook interactively with inline citations"
            ],
            benefits: [
                "Manage source-grounded workspaces in NotebookLM without hallucinations",
                "Synthesize PDFs and lecture notes into study guides and Audio Overviews",
                "Run citation-backed queries across your personal academic documents"
            ],
            prerequisites: "Bring your laptop and a Google account. No prior session attendance required!"
        },
        {
            id: "event-4",
            defaultLocked: true,
            qnaCategory: "Event 2",
            eventNumber: "Event 4",
            badgeText: "AI Prototyping",
            colorTheme: "blue",
            stickerImage: "assets/gsa/laptop-silver.png",
            title: "Prototyping Made Easy: Exploring Google AI Studio",
            shortDropdownLabel: "🔴 Event 4: Google AI Studio",
            toolName: "Google AI Studio",
            toolUrl: "https://aistudio.google.com/",
            date: "Fri, Nov 20, 2026",
            time: "15:30–16:30 WIB",
            duration: "60 Mins",
            room: "Room 10.05",
            venue: "UNIJI, Jakarta International Tower",
            format: "Offline Hands-on",
            capacity: "20 Students",
            targetAudience:
                "Active UNIJI students, especially IT students and builders interested in testing and prototyping with Gemini models (open to all majors).",
            summary:
                "Step beyond standard chat windows to compare Gemini models, tune temperature & safety settings, and craft custom System Instructions.",
            overview:
                "Navigate Google's developer-centric sandbox to test Gemini models, adjust generation parameters, and experiment with structured prompts.",
            background:
                "Standard chat interfaces often aren't enough when building dynamic prototypes. Drawing on practical insights from Google for Startups, this workshop demystifies Google AI Studio, guiding you through model selection, generation parameters (temperature, output length, safety settings), and system instructions.",
            whatToDiscuss: [
                "Navigating the Google AI Studio playground",
                "Selecting and comparing Gemini models",
                "Adjusting temperature, output length, and safety settings",
                "System Instructions vs. User Prompts",
                "Testing prompts in a structured environment"
            ],
            benefits: [
                "Confidently navigate the Google AI Studio interface",
                "Choose the right Gemini model variant for speed vs. reasoning",
                "Control AI behavior precisely with System Instructions and parameters"
            ],
            prerequisites: "Bring your laptop and a Google account. Beginner-friendly, no deep coding required!"
        },
        {
            id: "event-5",
            defaultLocked: true,
            qnaCategory: "Event 3",
            eventNumber: "Event 5",
            badgeText: "Prompt-to-UI",
            colorTheme: "purple",
            stickerImage: "assets/gsa/flag-hologram.png",
            title: "Weaving Workflows: Practical Applications of Stitch",
            shortDropdownLabel: "🟡 Event 5: Google Stitch",
            toolName: "Google Stitch",
            toolUrl: "https://stitch.withgoogle.com/",
            date: "Tue, Nov 24, 2026",
            time: "15:30–16:30 WIB",
            duration: "60 Mins",
            room: "Room 11.07",
            venue: "UNIJI, Jakarta International Tower",
            format: "Offline Hands-on",
            capacity: "20–25 Students",
            targetAudience:
                "Active UNIJI students interested in AI-powered UI/UX design, rapid wireframing, and frontend prototyping.",
            summary:
                "Generate complete app UI layouts, wireframes, and frontend code straight from text prompts or reference sketches using Google Stitch.",
            overview:
                "Use Google Stitch's Gemini-powered prompt-to-UI and multimodal capabilities to design app interfaces and connect multi-step workflows.",
            background:
                "Students often spend hours manually wireframing before writing code. Google Stitch uses Gemini AI's multimodal and prompt-to-UI capabilities to generate UI components, digital wireframes, and frontend layouts from text descriptions or reference sketches, accelerating early-stage UI/UX design.",
            whatToDiscuss: [
                "Prompt-to-UI generation and AI workflow chaining",
                "Navigating the Google Stitch workspace",
                "Structuring UI prompts (elements, themes, actions) & reference sketches",
                "Connecting and refining multi-screen app flows",
                "Exporting designs to design tools or frontend code"
            ],
            benefits: [
                "Generate complete application UI drafts in minutes with prompt-to-UI",
                "Turn rough sketches and reference images into polished digital layouts",
                "Export drafts directly to design suites or frontend code"
            ],
            prerequisites: "Bring your laptop and a Google account. Great for designers, devs, and builders!"
        },
        {
            id: "event-6",
            defaultLocked: true,
            qnaCategory: "Event 4",
            eventNumber: "Event 6",
            badgeText: "Agentic AI",
            colorTheme: "amber",
            stickerImage: "assets/gsa/star-google.png",
            title: "Defying Limits: Advanced Implementations with Antigravity",
            shortDropdownLabel: "🟢 Event 6: Google Antigravity",
            toolName: "Google Antigravity",
            toolUrl: "https://antigravity.google/",
            date: "Fri, Nov 27, 2026",
            time: "15:30–16:30 WIB",
            duration: "60 Mins",
            room: "Room 11.05",
            venue: "UNIJI, Jakarta International Tower",
            format: "Offline Hands-on",
            capacity: "20 Students",
            targetAudience:
                "Active UNIJI students across all study programs ready to build complex academic or personal projects with Agentic AI.",
            summary:
                "Dive into Google Antigravity's modular Agentic AI environment to orchestrate complex, multi-layered operations and build real projects.",
            overview:
                "Utilize the dynamic, modular capabilities of Google Antigravity to execute complex, multi-layered AI operations and project implementations.",
            background:
                "Real-world technology projects require more than single-turn chat prompts. This flagship workshop introduces Google Antigravity, an advanced Agentic AI platform in the Google AI ecosystem, giving you hands-on experience configuring modules, dynamic variables, and end-to-end project workflows.",
            whatToDiscuss: [
                "What separates Agentic AI & Antigravity from standard chat AI",
                "Interface walkthrough and modular workspace setup",
                "Configuring dynamic variables and multi-step agent operations",
                "Executing a live, end-to-end project use case",
                "Best practices for academic & personal projects"
            ],
            benefits: [
                "Understand Agentic AI architecture vs. traditional chat interfaces",
                "Configure and orchestrate Google Antigravity for multi-step projects",
                "Apply hands-on best practices to accelerate academic and personal builds"
            ],
            prerequisites: "Bring your laptop! Open to all majors, come see Agentic AI in action."
        }
    ],

    // ------------------------------------------------------------------------
    // 5. COMMUNITY Q&A SECTION TEXTS
    // ------------------------------------------------------------------------
    qnaSection: {
        sectionTitle: "Community Q&A",
        sectionSubtitle:
            "Ask a question about any workshop, no login required. Similar questions are grouped by Gemini AI for clear official answers.",
        formTitle: "Ask a Question",
        formSubtitle: "Anonymous or with your name",
        categoryLabel: "Workshop / Topic",
        generalCategoryOption: "🌐 General Series Questions",
        nameLabel: "Name",
        nameOptionalHint: "(Optional)",
        namePlaceholder: "Leave blank for anonymous",
        questionLabel: "Question",
        questionPlaceholder:
            "e.g., Do I need to install anything before the workshop, or can I join if I missed earlier sessions?",
        submitButtonText: "Submit Question",
        aiHelperNote: "Similar questions are automatically merged by Gemini AI.",
        tabAnsweredLabel: "Official Answers",
        tabAllQuestionsLabel: "All Questions",
        allCategoriesFilterLabel: "All Workshops"
    },

    // ------------------------------------------------------------------------
    // 6. FOOTER TEXTS
    // ------------------------------------------------------------------------
    footer: {
        organizationLine: "Google AI Workshop Series • University of Jakarta International",
        organizerCredit: "Simmon Priady Sasmita (GSAID26B20269)",
        poweredByLine: "Powered by Firebase & Gemini AI"
    }
};
