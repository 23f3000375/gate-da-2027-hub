# gate-da-2027-hub

# 🎯 GATE DA 2027 — One-Stop Preparation & Command Center

[Deployed on Vercel](https://www.google.com/search?q=https%3A%2F%2Fvercel.com)
[GATE DA 2027](https://www.google.com/search?q=https%3A%2F%2Fgate2027.iitm.ac.in%2F)
[Content Powered by GeeksforGeeks](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fgate%2Fgate-da-notes-according-to-gate-2025-syllabus%2F)
[License: MIT](https://www.google.com/search?q=https%3A%2F%2Fopensource.org%2Flicenses%2FMIT)

An open-source, interactive web application engineered for **GATE 2027 Data Science & Artificial Intelligence (DA)** aspirants. Designed around a high-yield **3.5-month (15-week) sprint**, this hub unifies the complete 168-subtopic syllabus, an **in-portal live GeeksforGeeks article reader**, a CBT negative-marking simulator, formula flashcards, and persistent progress tracking in a single zero-cold-start workspace.

## 💚 Special Thanks & Content Attribution

We gratefully acknowledge and thank **[GeeksforGeeks](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2F)** (*Sanchhaya Education Private Limited*) for making high-quality computer science, data science, and engineering resources freely accessible to students worldwide.

- **Primary Syllabus & Study Notes:** Sourced from [GATE DA Syllabus 2027 - GeeksforGeeks](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fgate%2Fgate-da-notes-according-to-gate-2025-syllabus%2F) and [GATE DA (Data Science and Artificial Intelligence) Syllabus 2027](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fcompetitive-exam-experiences%2Fgate-data-science-and-artificial-intelligence-syllabus%2F).
- **Rapid Revision & Practice Portals:** Powered by [GeeksforGeeks Last Minute Notes (LMNs)](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fgfg-academy%2Flast-minute-notes-lmns%2F), [GATE DA Subject-Wise PYQ Quizzes](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fgate%2Fgate-da-topic-wise-quizzes%2F), [100 Days of GATE Data Science \& AI](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fgate%2F100-days-of-gate-data-science-ai%2F), and [GATE CSE \& DA Previous Year Papers](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fgate%2Foriginal-gate-previous-year-question-papers-cse-and-it-gq%2F).
- **Official Exam Schedule & Conducting Institute:** Exam dates, eligibility, and official syllabus structure are credited to [IIT Madras — GATE 2027 Official Portal](https://www.google.com/search?q=https%3A%2F%2Fgate2027.iitm.ac.in%2F) and the [Official GATE 2027 DA Syllabus PDF](https://www.google.com/search?q=https%3A%2F%2Fgate2027.iitm.ac.in%2Fstatic%2Fdoc%2FGATE2027_Syllabus%2FDA_GATE2027_Syllabus.pdf).

*Note: This project is an independent, non-commercial, open-source study companion created for educational use. All rights to external articles, tutorials, and trademarks belong to their respective owners.*

## ✨ Key Features

- **📖 In-Portal Live GeeksforGeeks Study Reader:** Click any of the 168 subtopics to slide open an interactive study drawer. It immediately displays a built-in **GATE DA Rapid Formula & Exam Trap Sheet** while fetching and rendering the live [GeeksforGeeks](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fgate%2Fgate-da-notes-according-to-gate-2025-syllabus%2F) tutorial inside the portal via a Vercel Serverless API (`/api/gfg`) with automatic CORS-safe fallback.
- **📚 Complete 8-Section, 168-Topic Interactive Tracker:** Covers all 7 core GATE DA sections plus General Aptitude. Cycle any subtopic through `⬜ Not Started` → `🟦 In Progress` → `🟨 Needs Revision` → `🟩 Completed`, filter by subject or status, and attach personal revision notes to individual topics.
- **📊 Real-Time Readiness & Weighted Marks Analytics:** Automatically computes your weighted preparation score out of **100 Marks** based on subject-wise GATE DA weightage, tracks your daily topic completion pace, and counts down live to the [IIT Madras GATE 2027 Exam Window (Feb 6–21, 2027)](https://www.google.com/search?q=https%3A%2F%2Fgate2027.iitm.ac.in%2Fimportant_dates).
- **🗓️ 3.5-Month (15-Week) Strategic Study Planner:** A structured week-by-week roadmap (Mid-October 2026 to Early February 2027) prioritizing high-weightage Mathematics (34 Marks) and Python/DSA (21 Marks) first, followed by Machine Learning & AI (22 Marks), DBMS & Warehousing (8 Marks), and General Aptitude (15 Marks).
- **🧠 Authentic CBT Quiz Arena & Negative Marking Simulator:** Practice high-yield GATE DA questions with step-by-step solutions and simulate your projected net GATE score under official marking rules (`-1/3` for 1-mark MCQs, `-2/3` for 2-mark MCQs, and `0` penalty for MSQ and NAT questions).
- **⚡ Formula & Theorem Flashcards (LMN Deck):** Interactive flip-cards covering Bayes' Theorem, Poisson/Exponential processes, Rank-Nullity, SVD, Taylor Series, Master Theorem, Normal Forms, OLAP Cubes, Ridge/Lasso, SVM, PCA, and Alpha-Beta Pruning.
- **💾 Automatic Browser Persistence + JSON Backup/Restore:** Saves all topic statuses, weekly milestones, daily tasks, personal notes, and Pomodoro study logs in `localStorage`, with one-click `.json` export and restore for cross-device syncing.

## 📈 GATE DA 2027 Subject Weightage & Integrated Study Links

The application tracks readiness across all **65 Questions (100 Marks)** using the official [GATE DA Exam Pattern](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fcompetitive-exam-experiences%2Fgate-data-science-and-artificial-intelligence-syllabus%2F) and [Subject-Wise Weightage Breakdown](https://www.google.com/search?q=https%3A%2F%2Fwww.madeeasy.in%2Fblog%2Fgate-da-subject-wise-weightage):

| Section | Subject Area | Expected Qs | Marks | Integrated GeeksforGeeks Resources |
| :--- | :--- | :--- | :--- | :--- |
| **Sec 1** | **Probability and Statistics** | 10 Qs | **16 Marks** | [Probability for GATE](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fgate%2Fprobability-and-statistics-for-gate-exam%2F) • [Probability \& Stats LMNs](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fmaths%2Flast-minute-notes-lmns-probability-and-statistics%2F) |
| **Sec 2** | **Linear Algebra** | 6 Qs | **10 Marks** | [Maths for ML](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fmachine-learning%2Fmachine-learning-mathematics%2F) • [Engineering Maths LMNs](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fengineering-mathematics%2Flast-minute-notes-engineering-mathematics%2F) |
| **Sec 3** | **Calculus and Optimization** | 5 Qs | **8 Marks** | [Maths for ML](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fmachine-learning%2Fmachine-learning-mathematics%2F) • [Engineering Maths LMNs](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fengineering-mathematics%2Flast-minute-notes-engineering-mathematics%2F) |
| **Sec 4** | **Programming, Data Structures & Algorithms** | 13 Qs | **21 Marks** | [Python DSA Tutorial](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fdsa%2Fdata-structures-with-python-tutorial-for-gate-da-2025%2F) • [Python DSA LMNs](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fdsa%2Flast-minute-notes-lmns-data-structures-with-python%2F) |
| **Sec 5** | **Database Management & Warehousing** | 6 Qs | **8 Marks** | [DBMS LMNs](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fdbms%2Flast-minute-notes-dbms%2F) • [Data Warehousing LMNs](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fdbms%2Flmns-data-warehousing%2F) |
| **Sec 6** | **Machine Learning** | 8 Qs | **11 Marks** | [AI, ML \& DS Tutorial](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fmachine-learning%2Fai-ml-and-data-science-tutorial-learn-ai-ml-and-data-science%2F) • [Machine Learning LMNs](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fmachine-learning%2Flast-minute-notes-lmns-machine-learning%2F) |
| **Sec 7** | **Artificial Intelligence** | 7 Qs | **11 Marks** | [AI for GATE 2027](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fartificial-intelligence%2Fartificial-intelligence-for-gate-2025%2F) • [Artificial Intelligence LMNs](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fartificial-intelligence%2Flmns-artificial-intelligence%2F) |
| **GA** | **General Aptitude** | 10 Qs | **15 Marks** | [Aptitude Q\&A](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Faptitude%2Faptitude-questions-and-answers%2F) • [Subject-Wise PYQ Quizzes](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fgate%2Fgate-da-topic-wise-quizzes%2F) |
| **Total** | **Full 3-Hour Computer Based Test (CBT)** | **65 Qs** | **100 Marks** | [GATE DA Syllabus 2027 Hub](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2Fgate%2Fgate-da-notes-according-to-gate-2025-syllabus%2F) • [Official IITM Syllabus PDF](https://www.google.com/search?q=https%3A%2F%2Fgate2027.iitm.ac.in%2Fstatic%2Fdoc%2FGATE2027_Syllabus%2FDA_GATE2027_Syllabus.pdf) |

## 🗂️ Repository Structure

```text
gate-da-2027-hub/
├── index.html          # Main interactive Single-Page Web Application (Vercel & Browser)
├── api/
│   └── gfg.js          # Vercel Serverless Function for CORS-free live GeeksforGeeks fetching
├── app.py              # Optional Python Streamlit dashboard version
├── requirements.txt    # Python dependencies for Streamlit Community Cloud deployment
└── README.md           # Project documentation and attribution
```

## 🚀 Deployment & Local Setup

### 1. Deploy on Vercel (Primary WebApp + Serverless Reader)

1. Fork or clone this repository:
   ```bash
   git clone https://github.com/your-username/gate-da-2027-hub.git
   cd gate-da-2027-hub
   ```
2. Deploy directly with the [Vercel CLI](https://www.google.com/search?q=https%3A%2F%2Fvercel.com%2Fdocs%2Fcli):
   ```bash
   npx vercel --prod
   ```
   Or import the repository on [Vercel](https://www.google.com/search?q=https%3A%2F%2Fvercel.com%2Fnew) with default settings (**Framework Preset:** `Other`, **Root Directory:** `./`). Vercel automatically serves `index.html` at `/` and mounts `api/gfg.js` at `/api/gfg`.

### 2. Run the Python Streamlit Version Locally or on Streamlit Cloud

```bash
pip install -r requirements.txt
streamlit run app.py
```

## 🤝 Contributing

Contributions, additional GATE DA PYQ practice problems, formula cards, and broken-link fixes are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

Distributed under the **MIT License**. Educational content and external articles fetched via the reader remain the intellectual property of **[GeeksforGeeks](https://www.google.com/search?q=https%3A%2F%2Fwww.geeksforgeeks.org%2F)** (*Sanchhaya Education Private Limited*).

