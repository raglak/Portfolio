export const hero = {
  firstName: 'LAKSHYA',
  lastName: 'KHANDELWAL',
  role: 'Python Developer',
  roleSecond: '& Data Engineer',
  subcopy:
    'Building scalable data pipelines and backend systems that turn raw data into real decisions.',
  ctaPrimary: 'View Work',
  ctaSecondary: 'Resume PDF',
}

export const about = {
  text: `B.Tech Computer Science student at Poornima University (2023–2027), passionate about building data-driven systems. Experienced in ETL pipelines, REST APIs, and machine learning workflows. I thrive on transforming complex datasets into actionable insights and designing systems that scale. Currently seeking opportunities in data engineering and Python development where I can apply my skills to solve real-world problems.`,
}

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'SQL', 'Java'],
  },
  {
    category: 'Data Engineering',
    items: [
      'ETL Pipelines',
      'Data Modeling',
      'Data Cleaning',
      'Batch Processing',
    ],
  },
  {
    category: 'Libraries',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost'],
  },
  {
    category: 'Backend',
    items: ['Flask', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'SQLite', 'MongoDB'],
  },
  {
    category: 'Visualization',
    items: ['Power BI', 'Plotly Dash'],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Jupyter Notebook',
      'Apache Airflow',
    ],
  },
  {
    category: 'Cloud',
    items: ['AWS Fundamentals', 'GCP Fundamentals'],
  },
  {
    category: 'Concepts',
    items: ['DSA', 'OOP', 'Machine Learning'],
  },
]

export const projects = [
  {
    index: '01',
    year: '2025',
    title: 'RetailPulse',
    subtitle: 'E-commerce Sales Intelligence Dashboard',
    stack: ['Python', 'Plotly Dash', 'SQLite', 'XGBoost'],
    description:
      'End-to-end sales analytics platform for e-commerce data with real-time interactive visualizations and predictive modeling.',
    highlights: [
      'Processed 50,000+ transaction records via a scalable ETL pipeline',
      'Interactive dashboards for sales, retention, and product analytics',
      'RFM segmentation + churn prediction model (ROC-AUC: 0.84)',
      '30% SQL query performance improvement using window functions',
    ],
    metrics: { value: '50K+', label: 'Records Processed' },
    link: 'https://github.com/raglak',
  },
  {
    index: '02',
    year: '2025',
    title: 'Churn Prediction',
    subtitle: 'Customer Churn Prediction System',
    stack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Streamlit'],
    description:
      'Full ML pipeline with REST API and monitoring dashboard for real-time churn risk assessment.',
    highlights: [
      'End-to-end pipeline: preprocessing → feature engineering → model training',
      'Flask REST APIs for real-time churn prediction serving',
      'Streamlit dashboard for churn risk monitoring',
    ],
    metrics: { value: '0.84', label: 'ROC-AUC Score' },
    link: 'https://github.com/raglak',
  },
  {
    index: '03',
    year: '2025',
    title: 'Data Pipeline',
    subtitle: 'Automated Data Processing Pipeline',
    stack: ['Python', 'Pandas', 'SQL'],
    description:
      'Automated ETL pipeline for large dataset processing with integrated analytics and reporting.',
    highlights: [
      'Automated extract, transform, and load for large datasets',
      'Integrated cleaned data into SQL for analytics and reporting',
      '40% reduction in manual preprocessing effort',
    ],
    metrics: { value: '40%', label: 'Effort Reduced' },
    link: 'https://github.com/raglak',
  },
]

export const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Poornima University, Jaipur',
    years: '2023 – 2027',
    score: 'CGPA: 8.5',
  },
  {
    degree: '12th CBSE Board',
    institution: 'Tagore Public School, Jaipur',
    years: '2022 – 2023',
    score: '85%',
  },
]

export const certifications = [
  {
    title: 'Learning Analytics Tools',
    issuer: 'NPTEL — IIT Kharagpur',
  },
  {
    title: 'Introduction to IoT',
    issuer: 'NPTEL — IIT Bombay',
  },
]

export const achievements = [
  {
    value: '380+',
    label: 'DSA Problems Solved',
    context: 'LeetCode, GeeksForGeeks & Coding Ninjas',
  },
  {
    value: 'SIH',
    label: 'Smart India Hackathon',
    context: 'National-level participant',
  },
  {
    value: 'SAP',
    label: 'SAP Hackfest',
    context: 'Enterprise hackathon participant',
  },
]

export const contact = {
  email: 'khandelwal8769266481@gmail.com',
  phone: '+91 9799301556',
  location: 'Jaipur, Rajasthan',
  linkedin: 'https://www.linkedin.com/in/lakshya-khandelwal-28a39b313/',
  github: 'https://github.com/raglak',
}

export const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]
