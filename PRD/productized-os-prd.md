# Productized OS - Product Requirements Document (PRD)

**Version:** 1.0  
**Last Updated:** January 2025  
**Author:** Hossein  
**Status:** Ready for Development

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Target Users](#3-target-users)
4. [Product Vision](#4-product-vision)
5. [Core Features](#5-core-features)
6. [Technical Architecture](#6-technical-architecture)
7. [Database Schema](#7-database-schema)
8. [API Specifications](#8-api-specifications)
9. [User Flows](#9-user-flows)
10. [UI/UX Requirements](#10-uiux-requirements)
11. [Success Metrics](#11-success-metrics)
12. [Development Phases](#12-development-phases)
13. [Claude Code Implementation Guide](#13-claude-code-implementation-guide)

---

## 1. Executive Summary

### Product Name
**Productized OS™**

### One-Line Description
A stage-gated founder incubation platform that transforms burned-out corporate professionals into successful startup founders through AI-powered guidance, community support, and systematic methodology.

### Business Model
- **MasterClass:** $3,000 + $99/month (6-week program)
- **MasterMind:** $7,000 + $199/month (12-week program)
- **Bold Buyback Guarantee:** Company purchases startups at fair market value if no exit offers within 1 year (MasterMind only)

### Key Differentiators
1. Stage-gated progression with kill criteria (prevents wasted effort)
2. "Secret startup" methodology (build while employed)
3. Revenue-first validation (sell before you build)
4. AI-powered personalization based on Founder DNA
5. Bold Buyback Guarantee (de-risks the entire journey)

---

## 2. Problem Statement

### The Problem
Corporate professionals earning $100K-$250K feel trapped in the "time-for-money" cycle. They have:
- Deep expertise but no way to monetize it independently
- Fear of leaving stable income
- No technical skills to build products
- Analysis paralysis from too many options
- No systematic path to entrepreneurship

### Current Solutions & Gaps
| Solution | Gap |
|----------|-----|
| Generic courses | No personalization, no accountability |
| Accelerators | Require quitting job, raising capital |
| Coaching | Expensive, inconsistent methodology |
| No-code tools | No guidance on what to build |

### Our Solution
A complete operating system for building investment-grade businesses that:
- Personalizes the journey to individual circumstances
- Enforces stage gates to prevent premature scaling
- Uses AI to eliminate coding barriers
- Provides community accountability
- Guarantees exit or buyback

---

## 3. Target Users

### Primary Persona: "The Trapped Expert"

**Demographics:**
- Age: 35-50
- Income: $100K-$250K
- Role: Mid-to-senior corporate professional or consultant
- Location: US, UK, Canada, Australia (English-speaking)

**Psychographics:**
- Feels undervalued despite external success
- Has tried side hustles without success
- Wants location/time freedom
- Values family security over risk
- Believes they have valuable expertise

**Technical Profile:**
- Not a developer
- Comfortable with basic SaaS tools
- Has used ChatGPT/AI tools casually
- Can learn no-code tools with guidance

**Goals:**
1. Replace corporate income within 12-24 months
2. Build an asset that can be sold
3. Achieve time freedom
4. Leverage existing expertise
5. Avoid risking family financial security

**Frustrations:**
1. "I don't know what to build"
2. "I can't code"
3. "I don't have time"
4. "I can't afford to quit my job"
5. "I've tried courses that didn't work"

### Secondary Persona: "The Scaling Consultant"

**Demographics:**
- Age: 30-45
- Income: $150K-$500K (consulting)
- Role: Independent consultant
- Location: Global

**Goals:**
1. Escape trading time for money
2. Productize existing services
3. Build recurring revenue
4. Create exit opportunity

---

## 4. Product Vision

### Vision Statement
"Transform 10,000 corporate professionals into successful startup founders by 2030, generating $1B+ in combined exits."

### Core Principles

1. **Revenue Before Product**
   - Validate with paying customers before building
   - Manual service → Productized service → SaaS progression

2. **Stage Gates Over Speed**
   - Clear criteria to advance
   - Kill criteria to pivot
   - No skipping stages

3. **Community as Infrastructure**
   - Build audience before product
   - Peer accountability
   - Shared learning

4. **AI as Equalizer**
   - Eliminate technical barriers
   - Personalize at scale
   - 24/7 guidance

5. **Secret by Design**
   - Compatible with employment
   - Privacy-first architecture
   - Stealth mode support

### The Productized OS Framework

```
┌─────────────────────────────────────────────────────────────────┐
│                     PRODUCTIZED OS FRAMEWORK                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  STAGE 1          STAGE 2        STAGE 3        STAGE 4          │
│  ┌──────────┐    ┌──────────┐   ┌──────────┐   ┌──────────┐     │
│  │ FOUNDER  │───▶│   IDEA   │──▶│ STRATEGY │──▶│  BUILD   │     │
│  │   DNA    │    │   LAB    │   │  STUDIO  │   │ WORKSHOP │     │
│  └──────────┘    └──────────┘   └──────────┘   └──────────┘     │
│       │               │              │              │            │
│       ▼               ▼              ▼              ▼            │
│  Assessment      Validation     Go-to-Market    MVP Launch       │
│  Complete        Revenue        Plan Ready      5+ Users         │
│                  ($1K+)                                          │
│                                                                   │
│  STAGE 5              STAGE 6                                    │
│  ┌──────────┐        ┌──────────────────┐                       │
│  │CONVERSION│───────▶│  SCALE / EXIT    │                       │
│  │  ENGINE  │        │  COMMAND CENTER  │                       │
│  └──────────┘        └──────────────────┘                       │
│       │                      │                                   │
│       ▼                      ▼                                   │
│  $10K MRR              7-Figure Exit                            │
│  Achieved              or Buyback                               │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### The Productization Ladder

```
Level 5: Self-Serve SaaS      │ $500K+ ARR  │ Automated delivery
Level 4: Hybrid SaaS          │ $250K+ ARR  │ Software + service
Level 3: Productized Service  │ $100K+ ARR  │ Standardized offering
Level 2: Packaged Consulting  │ $50K+ ARR   │ Fixed scope/price
Level 1: Pure Consulting      │ $25K+ ARR   │ Time-based billing
```

---

## 5. Core Features

### 5.1 Founder DNA Engine (Onboarding)

**Purpose:** Create personalized founder profile that customizes entire platform experience.

**Features:**

| Feature | Description | Priority |
|---------|-------------|----------|
| DNA Assessment | 50-question assessment covering personality, skills, risk tolerance, circumstances | P0 |
| Archetype Assignment | Categorize into founder archetypes (Builder, Networker, Operator, Visionary) | P0 |
| Skills Inventory | Map professional skills to market opportunities | P0 |
| Time Calculator | Calculate available hours based on work/life circumstances | P0 |
| Risk Tolerance Score | Determine appropriate path based on financial situation | P1 |
| Stealth Compatibility | Check for employment conflicts | P1 |
| DNA Report | Generate comprehensive founder profile PDF | P0 |

**Assessment Categories:**

```javascript
const assessmentCategories = {
  personality: {
    questions: 12,
    measures: ['risk_tolerance', 'decision_style', 'communication', 'leadership']
  },
  expertise: {
    questions: 10,
    measures: ['industry_depth', 'skill_breadth', 'network_strength', 'credibility']
  },
  circumstances: {
    questions: 8,
    measures: ['time_available', 'financial_runway', 'family_obligations', 'employment_status']
  },
  motivation: {
    questions: 10,
    measures: ['exit_goals', 'income_targets', 'timeline', 'commitment_level']
  },
  technical: {
    questions: 10,
    measures: ['tool_comfort', 'learning_speed', 'ai_familiarity', 'systems_thinking']
  }
};
```

**Founder Archetypes:**

| Archetype | Description | Recommended Path |
|-----------|-------------|------------------|
| The Builder | Technical-minded, wants to create | Direct to Build stage |
| The Networker | Relationship-driven, sales-oriented | Community-first approach |
| The Operator | Process-focused, systematic | Productized service path |
| The Visionary | Big-picture thinker | Strategy-heavy approach |

**Stage Gate:** Assessment completion unlocks Stage 2.

---

### 5.2 Idea Lab (Stage 2)

**Purpose:** Guide founders to validated, revenue-generating ideas.

**Features:**

| Feature | Description | Priority |
|---------|-------------|----------|
| Idea Generator | AI-powered idea suggestions based on DNA profile | P0 |
| Pre-Validated Ideas | Database of 100+ proven business models | P0 |
| Validation Scorecard | Rate ideas on 10 criteria | P0 |
| Customer Interview Templates | Scripts and frameworks for validation | P1 |
| Competitive Analysis Tool | Map competitors and positioning | P1 |
| Kill Criteria Dashboard | Clear metrics for when to pivot | P0 |
| Community Feedback | Post ideas for peer validation | P1 |

**Idea Validation Scorecard:**

```javascript
const validationCriteria = {
  market_demand: {
    weight: 0.20,
    questions: [
      'Are people actively searching for solutions?',
      'Is there existing spend in this category?',
      'Are competitors making money?'
    ]
  },
  expertise_fit: {
    weight: 0.20,
    questions: [
      'Do you have relevant professional experience?',
      'Can you credibly serve this market?',
      'Do you have existing relationships?'
    ]
  },
  revenue_potential: {
    weight: 0.15,
    questions: [
      'What is realistic first-year revenue?',
      'Is the market large enough for your goals?',
      'Can you charge premium prices?'
    ]
  },
  technical_feasibility: {
    weight: 0.15,
    questions: [
      'Can this be built with no-code/AI tools?',
      'Is the MVP scope reasonable?',
      'Are there existing templates to leverage?'
    ]
  },
  time_to_revenue: {
    weight: 0.15,
    questions: [
      'Can you get paid within 30 days?',
      'Is manual delivery possible initially?',
      'Are customers ready to buy?'
    ]
  },
  scalability: {
    weight: 0.10,
    questions: [
      'Can this become a product over time?',
      'Is there a path to recurring revenue?',
      'Can you build systems around delivery?'
    ]
  },
  stealth_compatibility: {
    weight: 0.05,
    questions: [
      'Can you work on this without employer conflict?',
      'Does it require your public identity?',
      'Can you operate anonymously initially?'
    ]
  }
};
```

**Kill Criteria:**

| Metric | Threshold | Action |
|--------|-----------|--------|
| Customer interviews | <10 in 2 weeks | Increase outreach |
| Interest rate | <20% positive | Pivot idea |
| Validation revenue | $0 after 4 weeks | Major pivot |
| Time invested | >8 weeks no traction | Kill or pivot |

**Stage Gate:** $1,000+ validation revenue OR 100+ qualified leads with 30%+ conversion intent.

---

### 5.3 Strategy Studio (Stage 3)

**Purpose:** Transform validated idea into complete business strategy.

**Features:**

| Feature | Description | Priority |
|---------|-------------|----------|
| Business Model Canvas | Interactive canvas builder | P0 |
| Productization Ladder | Define progression from service to SaaS | P0 |
| Pricing Calculator | AI-powered pricing recommendations | P0 |
| Positioning Generator | Create positioning statements | P0 |
| Go-to-Market Planner | 90-day launch plan builder | P0 |
| Legal Checklist | Entity formation, trademarks, contracts | P1 |
| Financial Projections | Revenue/expense forecasting | P1 |
| Community Blueprint | Plan for building audience | P0 |

**Productization Ladder Builder:**

```javascript
const productizationLadder = {
  level_1: {
    name: 'Pure Consulting',
    revenue_target: '$25K ARR',
    characteristics: {
      pricing: 'Hourly/daily rate',
      delivery: '100% manual',
      scalability: 'None',
      margin: '60-70%'
    },
    checklist: [
      'Define hourly/daily rate',
      'Create service description',
      'Build basic proposal template',
      'Set up invoicing'
    ]
  },
  level_2: {
    name: 'Packaged Consulting',
    revenue_target: '$50K ARR',
    characteristics: {
      pricing: 'Fixed project fee',
      delivery: '90% manual',
      scalability: 'Low',
      margin: '70-80%'
    },
    checklist: [
      'Define 2-3 fixed packages',
      'Create scope documents',
      'Build intake process',
      'Standardize deliverables'
    ]
  },
  level_3: {
    name: 'Productized Service',
    revenue_target: '$100K ARR',
    characteristics: {
      pricing: 'Subscription/retainer',
      delivery: '70% manual, 30% automated',
      scalability: 'Medium',
      margin: '75-85%'
    },
    checklist: [
      'Create recurring offer',
      'Build onboarding system',
      'Develop SOPs',
      'Hire first contractor'
    ]
  },
  level_4: {
    name: 'Hybrid SaaS',
    revenue_target: '$250K ARR',
    characteristics: {
      pricing: 'Software + service',
      delivery: '50% manual, 50% automated',
      scalability: 'High',
      margin: '80-90%'
    },
    checklist: [
      'Build MVP software',
      'Integrate with service',
      'Create self-serve elements',
      'Scale team'
    ]
  },
  level_5: {
    name: 'Self-Serve SaaS',
    revenue_target: '$500K+ ARR',
    characteristics: {
      pricing: 'Pure subscription',
      delivery: '10% manual, 90% automated',
      scalability: 'Very high',
      margin: '85-95%'
    },
    checklist: [
      'Remove manual dependencies',
      'Build self-serve onboarding',
      'Create automated support',
      'Optimize for scale'
    ]
  }
};
```

**Legal Checklist:**

- [ ] Choose business structure (LLC vs C-Corp)
- [ ] Register business entity
- [ ] Obtain EIN
- [ ] Set up business bank account
- [ ] File trademark application
- [ ] Create client contract template
- [ ] Create NDA template
- [ ] Review employment agreement for conflicts
- [ ] Set up accounting system
- [ ] Understand tax obligations

**Stage Gate:** Complete business model canvas, legal entity formed, first paying client signed.

---

### 5.4 AI Build Workshop (Stage 4)

**Purpose:** Guide founders through building MVP using AI/no-code tools.

**Features:**

| Feature | Description | Priority |
|---------|-------------|----------|
| Tool Selector | Recommend best tools based on project | P0 |
| Prompt Library | Pre-built prompts for common features | P0 |
| Build Sprints | Weekly structured building sessions | P0 |
| Template Gallery | Starter templates for common apps | P1 |
| Integration Guides | Connect tools and services | P1 |
| Code Review (AI) | AI reviews and improves generated code | P1 |
| Ship It Challenges | Gamified shipping milestones | P2 |
| Debug Assistant | AI-powered troubleshooting | P1 |

**Tool Recommendations:**

```javascript
const toolRecommendations = {
  'Landing Page': {
    primary: 'Framer',
    alternatives: ['Webflow', 'Carrd'],
    complexity: 'Low',
    timeline: '1-2 days'
  },
  'Web Application': {
    primary: 'Lovable',
    alternatives: ['Bolt', 'v0'],
    complexity: 'Medium',
    timeline: '1-2 weeks'
  },
  'Complex SaaS': {
    primary: 'Cursor',
    alternatives: ['Windsurf', 'Claude Code'],
    complexity: 'High',
    timeline: '2-4 weeks'
  },
  'Mobile App': {
    primary: 'FlutterFlow',
    alternatives: ['Adalo', 'Glide'],
    complexity: 'Medium',
    timeline: '2-3 weeks'
  },
  'Automation': {
    primary: 'Make',
    alternatives: ['Zapier', 'n8n'],
    complexity: 'Low',
    timeline: '1-3 days'
  },
  'Database/Backend': {
    primary: 'Supabase',
    alternatives: ['Firebase', 'Xano'],
    complexity: 'Medium',
    timeline: '3-5 days'
  },
  'AI Features': {
    primary: 'OpenAI API',
    alternatives: ['Anthropic API', 'Replicate'],
    complexity: 'Medium',
    timeline: '1-2 weeks'
  }
};
```

**Prompt Library Categories:**

1. **Authentication & Users**
   - User registration
   - Login/logout
   - Password reset
   - Role-based access
   - Profile management

2. **Payments & Billing**
   - Stripe integration
   - Subscription management
   - Invoice generation
   - Payment history

3. **Dashboards**
   - Admin dashboard
   - User dashboard
   - Analytics displays
   - KPI tracking

4. **Content Management**
   - Blog/article system
   - Media uploads
   - Rich text editing
   - Content scheduling

5. **Communication**
   - Email notifications
   - In-app messaging
   - Chat integration
   - Notification preferences

6. **AI Features**
   - Chatbot integration
   - Content generation
   - Data analysis
   - Recommendations

**Build Sprint Structure:**

```
Week 1: Foundation
- Day 1-2: Set up development environment
- Day 3-4: Build authentication
- Day 5-7: Core data models

Week 2: Core Features
- Day 1-2: Main user workflow
- Day 3-4: Dashboard/interface
- Day 5-7: Key feature #1

Week 3: Enhancement
- Day 1-2: Key feature #2
- Day 3-4: Payments integration
- Day 5-7: Polish and testing

Week 4: Launch Prep
- Day 1-2: Bug fixes
- Day 3-4: Onboarding flow
- Day 5-7: Soft launch to beta users
```

**Stage Gate:** Functional MVP with 5+ active users providing feedback.

---

### 5.5 Conversion Engine (Stage 5)

**Purpose:** Build marketing and sales systems that replace salary income.

**Features:**

| Feature | Description | Priority |
|---------|-------------|----------|
| Funnel Builder | Templates for high-converting funnels | P0 |
| Content Calendar | AI-generated 365-day content plan | P0 |
| Email Sequences | Pre-built nurture and sales sequences | P0 |
| LinkedIn Playbooks | Step-by-step LinkedIn growth | P0 |
| Community Growth Tracker | Metrics for community building | P1 |
| Revenue Dashboard | MRR, churn, LTV tracking | P0 |
| Salary Replacement Calculator | Visual countdown to income replacement | P1 |
| A/B Testing | Test headlines, offers, pages | P2 |

**Content Calendar System:**

```javascript
const contentCalendar = {
  themes: {
    week_1_2: 'Problem Awareness',
    week_3_4: 'Solution Introduction',
    week_5_6: 'Social Proof',
    week_7_8: 'Objection Handling',
    week_9_10: 'Transformation Stories',
    week_11_12: 'Call to Action'
  },
  daily_posts: {
    monday: { type: 'Educational', format: 'Carousel' },
    tuesday: { type: 'Story', format: 'Text' },
    wednesday: { type: 'How-to', format: 'Video' },
    thursday: { type: 'Social Proof', format: 'Screenshot' },
    friday: { type: 'Behind-the-scenes', format: 'Photo' },
    saturday: { type: 'Community', format: 'Poll' },
    sunday: { type: 'Reflection', format: 'Thread' }
  },
  platforms: ['LinkedIn', 'Twitter/X', 'Instagram', 'TikTok', 'Facebook'],
  posting_times: {
    LinkedIn: '8:00 AM EST',
    Twitter: '12:00 PM EST',
    Instagram: '6:00 PM EST',
    TikTok: '7:00 PM EST'
  }
};
```

**Funnel Templates:**

1. **Lead Magnet Funnel**
   - Landing page with value proposition
   - Email opt-in form
   - Thank you page with upsell
   - 5-email nurture sequence

2. **Webinar Funnel**
   - Registration page
   - Confirmation sequence
   - Webinar delivery
   - Post-webinar sales sequence

3. **Challenge Funnel**
   - 5-day challenge registration
   - Daily content delivery
   - Community engagement
   - Offer presentation

4. **Application Funnel**
   - Long-form sales page
   - Application form
   - Calendar booking
   - Sales call sequence

**Revenue Dashboard Metrics:**

| Metric | Definition | Target |
|--------|------------|--------|
| MRR | Monthly Recurring Revenue | Track growth |
| ARR | Annual Recurring Revenue | $100K+ |
| Churn Rate | Monthly customer loss | <5% |
| LTV | Lifetime Value | >3x CAC |
| CAC | Customer Acquisition Cost | <$500 |
| Conversion Rate | Visitors to customers | >2% |
| NPS | Net Promoter Score | >50 |

**Stage Gate:** $10,000/month recurring revenue for 3 consecutive months.

---

### 5.6 Scale or Exit Command Center (Stage 6)

**Purpose:** Prepare business for 7-figure scaling or acquisition.

**Features:**

| Feature | Description | Priority |
|---------|-------------|----------|
| Valuation Calculator | Estimate business value | P0 |
| Due Diligence Vault | Organize all business documents | P0 |
| Pitch Deck Builder | Create investor/acquirer presentations | P0 |
| Exit Timeline | Track progress toward exit | P0 |
| Acquirer Matching | Connect with potential buyers | P1 |
| Scaling Playbooks | Hiring, systems, operations | P0 |
| Bold Buyback Tracker | Monitor guarantee eligibility | P0 |
| Advisor Network | Connect with exit specialists | P2 |

**Valuation Calculator:**

```javascript
const valuationMethods = {
  revenue_multiple: {
    description: 'Multiple of Annual Revenue',
    ranges: {
      'Consulting': { low: 0.5, mid: 1.0, high: 1.5 },
      'Productized Service': { low: 1.0, mid: 2.0, high: 3.0 },
      'SaaS': { low: 3.0, mid: 5.0, high: 10.0 }
    }
  },
  arr_multiple: {
    description: 'Multiple of ARR (SaaS)',
    ranges: {
      '<$1M ARR': { low: 2.0, mid: 4.0, high: 6.0 },
      '$1M-$5M ARR': { low: 4.0, mid: 6.0, high: 10.0 },
      '>$5M ARR': { low: 6.0, mid: 8.0, high: 15.0 }
    }
  },
  sde_multiple: {
    description: 'Multiple of Seller Discretionary Earnings',
    ranges: {
      '<$500K SDE': { low: 2.0, mid: 3.0, high: 4.0 },
      '$500K-$1M SDE': { low: 3.0, mid: 4.0, high: 5.0 },
      '>$1M SDE': { low: 4.0, mid: 5.0, high: 6.0 }
    }
  }
};
```

**Due Diligence Checklist:**

**Financial Documents:**
- [ ] 3 years of P&L statements
- [ ] Balance sheets
- [ ] Tax returns
- [ ] Bank statements
- [ ] Revenue by customer
- [ ] Accounts receivable/payable

**Legal Documents:**
- [ ] Articles of incorporation
- [ ] Operating agreements
- [ ] Customer contracts
- [ ] Vendor agreements
- [ ] IP assignments
- [ ] Trademark registrations

**Operational Documents:**
- [ ] Employee/contractor agreements
- [ ] SOPs and documentation
- [ ] Tech stack overview
- [ ] Customer list
- [ ] Vendor list
- [ ] Insurance policies

**Growth Documents:**
- [ ] Marketing metrics
- [ ] Sales pipeline
- [ ] Product roadmap
- [ ] Customer testimonials
- [ ] Case studies

**MasterMind 12-Week Curriculum:**

| Week | Focus | Deliverables |
|------|-------|--------------|
| 1 | MasterClass Review | Gap assessment, action plan |
| 2 | Business Model | Refined model canvas, pricing |
| 3 | Market Opportunity | TAM/SAM/SOM analysis |
| 4 | Product Development | Roadmap, technical assessment |
| 5 | Marketing & Sales | Channel strategy, funnel audit |
| 6 | Financials & KPIs | Dashboard, projections |
| 7 | Fundraising | Deck, investor list (if applicable) |
| 8 | Legal & Compliance | Audit, cleanup |
| 9 | Networking | Strategic relationships |
| 10 | Pitch Polishing | Refined deck, practice |
| 11 | Bonus Sessions | Specialized topics |
| 12 | Group Pitch | Final presentations |

**Bold Buyback Guarantee Criteria:**

```javascript
const buybackEligibility = {
  requirements: {
    program_completion: true,
    revenue_threshold: 50000, // $50K ARR minimum
    documentation_complete: true,
    listing_period: 365, // Days listed for sale
    price_reasonableness: true, // Within fair market value
    active_participation: true // Engaged in exit process
  },
  valuation_method: 'Independent third-party appraisal',
  payment_terms: 'Cash at closing or structured buyout',
  exclusions: [
    'Businesses with pending litigation',
    'Businesses with undisclosed liabilities',
    'Founders who violated program terms'
  ]
};
```

**Stage Gate:** Successful exit (acquisition) or buyback activation.

---

### 5.7 Cross-Platform Features

#### 5.7.1 Community Hub

**Features:**

| Feature | Description | Priority |
|---------|-------------|----------|
| Cohort Groups | Stage-specific communities | P0 |
| Discussion Forums | Topic-based conversations | P0 |
| Direct Messaging | Member-to-member chat | P1 |
| Accountability Pods | Small groups (5-7 members) | P0 |
| Weekly Wins | Celebrate member achievements | P0 |
| Leaderboards | Gamified progress tracking | P2 |
| Member Directory | Searchable member profiles | P1 |
| Events Calendar | Live sessions, office hours | P0 |

**Community Structure:**

```
├── All Members
│   ├── Announcements
│   ├── Introductions
│   └── General Discussion
├── MasterClass
│   ├── Week 1-2 Cohort
│   ├── Week 3-4 Cohort
│   └── Week 5-6 Cohort
├── MasterMind
│   ├── Active Cohort
│   ├── Alumni
│   └── Exit Track
├── Stage-Specific
│   ├── Founder DNA
│   ├── Idea Validation
│   ├── Strategy
│   ├── Building
│   ├── Conversion
│   └── Scale/Exit
└── Special Interest
    ├── AI Builders
    ├── B2B SaaS
    ├── Agencies
    └── Coaches/Consultants
```

#### 5.7.2 Progress Dashboard

**Features:**

| Feature | Description | Priority |
|---------|-------------|----------|
| Stage Map | Visual journey representation | P0 |
| Progress Tracker | Checklist completion | P0 |
| Metrics Dashboard | Key numbers at a glance | P0 |
| Time-in-Stage | Duration tracking | P1 |
| Peer Comparison | Anonymous benchmarking | P2 |
| Predictions | AI-estimated completion | P2 |
| Streak Tracker | Consistency gamification | P2 |

**Dashboard Components:**

```javascript
const dashboardWidgets = {
  stage_progress: {
    current_stage: 'string',
    completion_percentage: 'number',
    tasks_remaining: 'array',
    estimated_completion: 'date'
  },
  key_metrics: {
    validation_revenue: 'number',
    mrr: 'number',
    customers: 'number',
    community_size: 'number'
  },
  activity_feed: {
    recent_actions: 'array',
    upcoming_tasks: 'array',
    deadlines: 'array'
  },
  community_stats: {
    posts_this_week: 'number',
    replies_given: 'number',
    accountability_check_ins: 'number'
  }
};
```

#### 5.7.3 AI Coach

**Features:**

| Feature | Description | Priority |
|---------|-------------|----------|
| 24/7 Chat | Always-available guidance | P0 |
| Framework Expert | Trained on methodology | P0 |
| Personalized Advice | Uses DNA profile | P0 |
| Resource Finder | Points to relevant content | P1 |
| Escalation | Routes to human when needed | P0 |
| Progress Check-ins | Proactive engagement | P2 |

**AI Coach Capabilities:**

```javascript
const aiCoachCapabilities = {
  knowledge_base: [
    'Productized OS Framework',
    'Stage-specific guidance',
    'Tool recommendations',
    'Common problems/solutions',
    'Success stories',
    'Template explanations'
  ],
  personalization_inputs: [
    'Founder DNA profile',
    'Current stage',
    'Business type',
    'Previous interactions',
    'Progress data'
  ],
  escalation_triggers: [
    'Mental health concerns',
    'Legal questions',
    'Financial advice requests',
    'Technical blockers requiring expert',
    'Explicit request for human'
  ],
  limitations: [
    'Cannot make decisions for user',
    'Cannot guarantee outcomes',
    'Cannot provide legal/financial advice',
    'Cannot access external systems'
  ]
};
```

#### 5.7.4 Office Hours System

**Features:**

| Feature | Description | Priority |
|---------|-------------|----------|
| Calendar Booking | Schedule 1:1 or group sessions | P0 |
| Mentor Matching | Connect based on expertise | P1 |
| Session Recording | Archive for replay | P0 |
| Notes & Action Items | Document outcomes | P1 |
| Follow-up Tasks | Auto-create from sessions | P2 |

**Office Hours Structure:**

| Session Type | Frequency | Duration | Participants |
|--------------|-----------|----------|--------------|
| Group Q&A | Daily | 60 min | All MasterMind |
| 1:1 Coaching | Weekly | 30 min | By appointment |
| Expert Sessions | Weekly | 90 min | Topic-specific |
| Pitch Practice | Bi-weekly | 120 min | Exit track only |

#### 5.7.5 Resource Vault

**Categories:**

1. **Legal Templates**
   - LLC Operating Agreement
   - C-Corp Bylaws
   - Client Service Agreement
   - NDA (Mutual)
   - Contractor Agreement
   - Terms of Service
   - Privacy Policy

2. **Financial Templates**
   - Revenue Projection Model
   - Pricing Calculator
   - Cap Table Template
   - Budget Tracker
   - Invoice Template

3. **Sales Templates**
   - Proposal Template
   - Sales Script
   - Objection Handling Guide
   - Follow-up Sequences
   - Case Study Template

4. **Marketing Templates**
   - Content Calendar
   - Email Sequences
   - Landing Page Copy
   - Social Media Templates
   - Webinar Script

5. **Operations Templates**
   - SOP Template
   - Onboarding Checklist
   - Meeting Agenda
   - Project Brief
   - Handoff Document

6. **Exit Templates**
   - Pitch Deck Template
   - Due Diligence Checklist
   - Valuation Model
   - LOI Template
   - Data Room Structure

---

## 6. Technical Architecture

### 6.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
├─────────────────────────────────────────────────────────────────┤
│  Web App (Next.js)  │  Mobile (React Native)  │  Admin Portal   │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                          API LAYER                               │
├─────────────────────────────────────────────────────────────────┤
│  API Gateway (Next.js API Routes / tRPC)                        │
│  ├── Authentication (NextAuth.js / Clerk)                       │
│  ├── Rate Limiting                                              │
│  └── Request Validation                                         │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                       SERVICE LAYER                              │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ User Service │  │ Stage Service│  │Content Service│          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ AI Service   │  │Payment Service│ │Community Svc │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │Analytics Svc │  │ Email Service│  │Calendar Svc  │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                        DATA LAYER                                │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  PostgreSQL  │  │    Redis     │  │  S3/R2      │          │
│  │  (Supabase)  │  │   (Cache)    │  │ (Storage)    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                             │
├─────────────────────────────────────────────────────────────────┤
│  Stripe │ Anthropic │ OpenAI │ Resend │ Cal.com │ Mux │ Skool  │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 Technology Stack

**Frontend:**
| Technology | Purpose | Rationale |
|------------|---------|-----------|
| Next.js 14+ | Framework | App router, RSC, excellent DX |
| TypeScript | Language | Type safety, better tooling |
| Tailwind CSS | Styling | Rapid development, consistency |
| shadcn/ui | Components | Beautiful, accessible, customizable |
| Framer Motion | Animations | Smooth, performant animations |
| React Query | Data fetching | Caching, optimistic updates |
| Zustand | State management | Simple, performant |

**Backend:**
| Technology | Purpose | Rationale |
|------------|---------|-----------|
| Next.js API Routes | API | Unified codebase |
| tRPC | Type-safe API | End-to-end type safety |
| Prisma | ORM | Type-safe database access |
| Supabase | Database + Auth | PostgreSQL, realtime, auth |
| Redis (Upstash) | Caching | Session management, rate limiting |

**Infrastructure:**
| Technology | Purpose | Rationale |
|------------|---------|-----------|
| Vercel | Hosting | Next.js optimized, edge functions |
| Cloudflare R2 | File storage | S3-compatible, cost-effective |
| Supabase | Database | Managed PostgreSQL |
| Upstash | Redis | Serverless Redis |

**External Services:**
| Service | Purpose |
|---------|---------|
| Stripe | Payments, subscriptions |
| Anthropic Claude | AI coach, content generation |
| Resend | Transactional email |
| Cal.com | Scheduling |
| Mux | Video hosting |
| Skool API | Community (optional integration) |

### 6.3 Authentication & Authorization

**Authentication Flow:**

```
User → Login Page → Supabase Auth → JWT Token → Protected Routes
                         │
                         ├── Email/Password
                         ├── Google OAuth
                         ├── LinkedIn OAuth
                         └── Magic Link
```

**Authorization Levels:**

```javascript
const roles = {
  FREE: {
    access: ['Stage 1 Preview', 'Community Read-only'],
    features: ['DNA Assessment Preview']
  },
  MASTERCLASS: {
    access: ['Stages 1-5', 'Community Full', 'Weekly Calls'],
    features: ['AI Coach', 'Templates', 'Content Calendar']
  },
  MASTERMIND: {
    access: ['All Stages', 'Community Full', 'Daily Office Hours'],
    features: ['AI Coach Pro', 'All Templates', 'Exit Support', 'Buyback Eligible']
  },
  ALUMNI: {
    access: ['Community Full', 'Resource Vault'],
    features: ['AI Coach Basic', 'Templates']
  },
  ADMIN: {
    access: ['All'],
    features: ['All', 'User Management', 'Analytics']
  }
};
```

### 6.4 Security Considerations

**Data Protection:**
- All data encrypted at rest (AES-256)
- TLS 1.3 for data in transit
- PII handling compliant with GDPR/CCPA
- Regular security audits

**Authentication Security:**
- Multi-factor authentication option
- Session timeout after inactivity
- IP-based anomaly detection
- Secure password requirements

**Business Data Privacy:**
- User business ideas encrypted
- Stealth mode prevents public visibility
- Data isolation between users
- Secure sharing controls

---

## 7. Database Schema

### 7.1 Core Tables

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  avatar_url TEXT,
  role VARCHAR(50) DEFAULT 'FREE',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Subscription
  stripe_customer_id VARCHAR(255),
  subscription_status VARCHAR(50),
  subscription_tier VARCHAR(50),
  subscription_started_at TIMESTAMPTZ,
  subscription_ends_at TIMESTAMPTZ,
  
  -- Progress
  current_stage INTEGER DEFAULT 1,
  stage_started_at TIMESTAMPTZ DEFAULT NOW(),
  onboarding_completed BOOLEAN DEFAULT FALSE
);

-- Founder DNA Profile
CREATE TABLE founder_dna (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  
  -- Assessment Results
  archetype VARCHAR(50),
  risk_tolerance INTEGER, -- 1-10
  time_available INTEGER, -- hours per week
  financial_runway INTEGER, -- months
  
  -- Personality Scores
  personality_scores JSONB,
  expertise_scores JSONB,
  circumstance_scores JSONB,
  motivation_scores JSONB,
  technical_scores JSONB,
  
  -- Recommendations
  recommended_path VARCHAR(50),
  strengths TEXT[],
  growth_areas TEXT[],
  
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Business Ideas
CREATE TABLE business_ideas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  
  -- Idea Details
  title VARCHAR(255) NOT NULL,
  description TEXT,
  target_market TEXT,
  problem_statement TEXT,
  solution TEXT,
  
  -- Validation
  validation_score INTEGER, -- 0-100
  validation_data JSONB,
  validation_revenue DECIMAL(10,2) DEFAULT 0,
  customer_interviews INTEGER DEFAULT 0,
  
  -- Status
  status VARCHAR(50) DEFAULT 'draft', -- draft, validating, validated, killed
  is_active BOOLEAN DEFAULT TRUE,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Business Strategy
CREATE TABLE business_strategy (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  idea_id UUID REFERENCES business_ideas(id),
  
  -- Business Model Canvas
  business_model_canvas JSONB,
  
  -- Productization Ladder
  current_level INTEGER DEFAULT 1,
  target_level INTEGER,
  ladder_plan JSONB,
  
  -- Pricing
  pricing_model VARCHAR(50),
  price_points JSONB,
  
  -- Go-to-Market
  gtm_plan JSONB,
  target_launch_date DATE,
  
  -- Legal
  entity_type VARCHAR(50),
  entity_formed BOOLEAN DEFAULT FALSE,
  trademark_filed BOOLEAN DEFAULT FALSE,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Product/MVP
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  strategy_id UUID REFERENCES business_strategy(id),
  
  -- Product Details
  name VARCHAR(255) NOT NULL,
  description TEXT,
  product_type VARCHAR(50), -- service, saas, hybrid
  tech_stack TEXT[],
  
  -- URLs
  landing_page_url TEXT,
  app_url TEXT,
  demo_url TEXT,
  
  -- Metrics
  active_users INTEGER DEFAULT 0,
  paying_customers INTEGER DEFAULT 0,
  mrr DECIMAL(10,2) DEFAULT 0,
  
  -- Status
  status VARCHAR(50) DEFAULT 'building', -- building, beta, launched, scaling
  launched_at TIMESTAMPTZ,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Stage Progress
CREATE TABLE stage_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  stage_number INTEGER NOT NULL,
  
  -- Progress
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  completion_percentage INTEGER DEFAULT 0,
  
  -- Tasks
  tasks_completed INTEGER DEFAULT 0,
  tasks_total INTEGER DEFAULT 0,
  task_data JSONB,
  
  -- Gate
  gate_criteria JSONB,
  gate_passed BOOLEAN DEFAULT FALSE,
  gate_passed_at TIMESTAMPTZ,
  
  UNIQUE(user_id, stage_number)
);

-- Content/Lessons
CREATE TABLE content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Content Details
  title VARCHAR(255) NOT NULL,
  description TEXT,
  content_type VARCHAR(50), -- video, text, template, worksheet
  stage_number INTEGER,
  order_index INTEGER,
  
  -- Media
  video_url TEXT,
  video_duration INTEGER, -- seconds
  markdown_content TEXT,
  attachments JSONB,
  
  -- Access
  access_tier VARCHAR(50) DEFAULT 'MASTERCLASS',
  is_published BOOLEAN DEFAULT TRUE,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Content Progress
CREATE TABLE content_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content_id UUID REFERENCES content(id) ON DELETE CASCADE,
  
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  time_spent INTEGER DEFAULT 0, -- seconds
  
  UNIQUE(user_id, content_id)
);

-- Community Posts
CREATE TABLE community_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  
  -- Post Details
  channel VARCHAR(100) NOT NULL,
  title VARCHAR(255),
  content TEXT NOT NULL,
  
  -- Engagement
  likes_count INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  
  -- Metadata
  is_pinned BOOLEAN DEFAULT FALSE,
  is_announcement BOOLEAN DEFAULT FALSE,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Community Comments
CREATE TABLE community_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES community_comments(id),
  
  content TEXT NOT NULL,
  likes_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI Chat History
CREATE TABLE ai_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  
  -- Conversation
  messages JSONB NOT NULL DEFAULT '[]',
  context JSONB, -- Relevant user context
  
  -- Metadata
  escalated BOOLEAN DEFAULT FALSE,
  escalated_at TIMESTAMPTZ,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Office Hours Sessions
CREATE TABLE office_hours (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Session Details
  title VARCHAR(255) NOT NULL,
  description TEXT,
  session_type VARCHAR(50), -- group, 1on1, expert
  host_user_id UUID REFERENCES users(id),
  
  -- Scheduling
  scheduled_at TIMESTAMPTZ NOT NULL,
  duration INTEGER DEFAULT 60, -- minutes
  timezone VARCHAR(50) DEFAULT 'UTC',
  
  -- Recording
  recording_url TEXT,
  recording_transcript TEXT,
  
  -- Capacity
  max_attendees INTEGER,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Office Hours Bookings
CREATE TABLE office_hours_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES office_hours(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  
  -- Status
  status VARCHAR(50) DEFAULT 'booked', -- booked, attended, cancelled
  attended_at TIMESTAMPTZ,
  
  -- Notes
  notes TEXT,
  action_items JSONB,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(session_id, user_id)
);

-- Templates
CREATE TABLE templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Template Details
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  
  -- Content
  file_url TEXT,
  preview_url TEXT,
  file_type VARCHAR(50),
  
  -- Access
  access_tier VARCHAR(50) DEFAULT 'MASTERCLASS',
  download_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Revenue Tracking
CREATE TABLE revenue_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  
  -- Revenue Details
  amount DECIMAL(10,2) NOT NULL,
  revenue_type VARCHAR(50), -- one-time, recurring
  source VARCHAR(100),
  customer_name VARCHAR(255),
  
  -- Date
  revenue_date DATE NOT NULL,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Exit Tracking (MasterMind)
CREATE TABLE exit_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  
  -- Valuation
  estimated_valuation DECIMAL(12,2),
  valuation_method VARCHAR(50),
  valuation_date DATE,
  
  -- Exit Status
  exit_status VARCHAR(50), -- preparing, listed, negotiating, closed, buyback
  listing_date DATE,
  target_exit_date DATE,
  
  -- Buyback Eligibility
  buyback_eligible BOOLEAN DEFAULT FALSE,
  buyback_criteria_met JSONB,
  
  -- Outcome
  exit_amount DECIMAL(12,2),
  exit_date DATE,
  acquirer VARCHAR(255),
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_stage_progress_user ON stage_progress(user_id);
CREATE INDEX idx_business_ideas_user ON business_ideas(user_id);
CREATE INDEX idx_products_user ON products(user_id);
CREATE INDEX idx_community_posts_channel ON community_posts(channel);
CREATE INDEX idx_content_stage ON content(stage_number);
CREATE INDEX idx_revenue_entries_user_date ON revenue_entries(user_id, revenue_date);
```

### 7.2 Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  avatarUrl String?
  role      Role     @default(FREE)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Subscription
  stripeCustomerId      String?
  subscriptionStatus    SubscriptionStatus?
  subscriptionTier      SubscriptionTier?
  subscriptionStartedAt DateTime?
  subscriptionEndsAt    DateTime?

  // Progress
  currentStage        Int      @default(1)
  stageStartedAt      DateTime @default(now())
  onboardingCompleted Boolean  @default(false)

  // Relations
  founderDna         FounderDna?
  businessIdeas      BusinessIdea[]
  businessStrategies BusinessStrategy[]
  products           Product[]
  stageProgress      StageProgress[]
  contentProgress    ContentProgress[]
  communityPosts     CommunityPost[]
  communityComments  CommunityComment[]
  aiConversations    AiConversation[]
  officeHoursHosted  OfficeHours[]        @relation("host")
  officeHoursBooked  OfficeHoursBooking[]
  revenueEntries     RevenueEntry[]
  exitTracking       ExitTracking[]
}

enum Role {
  FREE
  MASTERCLASS
  MASTERMIND
  ALUMNI
  ADMIN
}

enum SubscriptionStatus {
  ACTIVE
  PAST_DUE
  CANCELLED
  TRIALING
}

enum SubscriptionTier {
  MASTERCLASS
  MASTERMIND
}

model FounderDna {
  id     String @id @default(uuid())
  userId String @unique
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  // Assessment Results
  archetype      String?
  riskTolerance  Int?
  timeAvailable  Int?
  financialRunway Int?

  // Scores
  personalityScores   Json?
  expertiseScores     Json?
  circumstanceScores  Json?
  motivationScores    Json?
  technicalScores     Json?

  // Recommendations
  recommendedPath String?
  strengths       String[]
  growthAreas     String[]

  completedAt DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model BusinessIdea {
  id     String @id @default(uuid())
  userId String
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  // Details
  title            String
  description      String?
  targetMarket     String?
  problemStatement String?
  solution         String?

  // Validation
  validationScore    Int?
  validationData     Json?
  validationRevenue  Decimal  @default(0)
  customerInterviews Int      @default(0)

  // Status
  status   IdeaStatus @default(DRAFT)
  isActive Boolean    @default(true)

  strategies BusinessStrategy[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum IdeaStatus {
  DRAFT
  VALIDATING
  VALIDATED
  KILLED
}

model BusinessStrategy {
  id     String       @id @default(uuid())
  userId String
  user   User         @relation(fields: [userId], references: [id], onDelete: Cascade)
  ideaId String?
  idea   BusinessIdea? @relation(fields: [ideaId], references: [id])

  // Business Model
  businessModelCanvas Json?

  // Productization
  currentLevel Int?
  targetLevel  Int?
  ladderPlan   Json?

  // Pricing
  pricingModel String?
  pricePoints  Json?

  // GTM
  gtmPlan          Json?
  targetLaunchDate DateTime?

  // Legal
  entityType     String?
  entityFormed   Boolean @default(false)
  trademarkFiled Boolean @default(false)

  products Product[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Product {
  id         String            @id @default(uuid())
  userId     String
  user       User              @relation(fields: [userId], references: [id], onDelete: Cascade)
  strategyId String?
  strategy   BusinessStrategy? @relation(fields: [strategyId], references: [id])

  // Details
  name        String
  description String?
  productType ProductType?
  techStack   String[]

  // URLs
  landingPageUrl String?
  appUrl         String?
  demoUrl        String?

  // Metrics
  activeUsers      Int     @default(0)
  payingCustomers  Int     @default(0)
  mrr              Decimal @default(0)

  // Status
  status     ProductStatus @default(BUILDING)
  launchedAt DateTime?

  revenueEntries RevenueEntry[]
  exitTracking   ExitTracking[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum ProductType {
  SERVICE
  SAAS
  HYBRID
}

enum ProductStatus {
  BUILDING
  BETA
  LAUNCHED
  SCALING
}

model StageProgress {
  id          String @id @default(uuid())
  userId      String
  user        User   @relation(fields: [userId], references: [id], onDelete: Cascade)
  stageNumber Int

  // Progress
  startedAt            DateTime @default(now())
  completedAt          DateTime?
  completionPercentage Int      @default(0)

  // Tasks
  tasksCompleted Int   @default(0)
  tasksTotal     Int   @default(0)
  taskData       Json?

  // Gate
  gateCriteria Json?
  gatePassed   Boolean   @default(false)
  gatePassedAt DateTime?

  @@unique([userId, stageNumber])
}

model Content {
  id String @id @default(uuid())

  // Details
  title       String
  description String?
  contentType ContentType
  stageNumber Int?
  orderIndex  Int?

  // Media
  videoUrl        String?
  videoDuration   Int?
  markdownContent String?
  attachments     Json?

  // Access
  accessTier  SubscriptionTier @default(MASTERCLASS)
  isPublished Boolean          @default(true)

  progress ContentProgress[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum ContentType {
  VIDEO
  TEXT
  TEMPLATE
  WORKSHEET
}

model ContentProgress {
  id        String  @id @default(uuid())
  userId    String
  user      User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  contentId String
  content   Content @relation(fields: [contentId], references: [id], onDelete: Cascade)

  completed   Boolean   @default(false)
  completedAt DateTime?
  timeSpent   Int       @default(0)

  @@unique([userId, contentId])
}

model CommunityPost {
  id      String @id @default(uuid())
  userId  String
  user    User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  channel String
  title   String?
  content String

  likesCount    Int @default(0)
  commentsCount Int @default(0)

  isPinned       Boolean @default(false)
  isAnnouncement Boolean @default(false)

  comments CommunityComment[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model CommunityComment {
  id       String        @id @default(uuid())
  postId   String
  post     CommunityPost @relation(fields: [postId], references: [id], onDelete: Cascade)
  userId   String
  user     User          @relation(fields: [userId], references: [id], onDelete: Cascade)
  parentId String?
  parent   CommunityComment?  @relation("Replies", fields: [parentId], references: [id])
  replies  CommunityComment[] @relation("Replies")

  content    String
  likesCount Int @default(0)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model AiConversation {
  id      String @id @default(uuid())
  userId  String
  user    User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  messages Json @default("[]")
  context  Json?

  escalated   Boolean   @default(false)
  escalatedAt DateTime?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model OfficeHours {
  id String @id @default(uuid())

  title       String
  description String?
  sessionType SessionType
  hostUserId  String?
  host        User?       @relation("host", fields: [hostUserId], references: [id])

  scheduledAt DateTime
  duration    Int      @default(60)
  timezone    String   @default("UTC")

  recordingUrl        String?
  recordingTranscript String?

  maxAttendees Int?

  bookings OfficeHoursBooking[]

  createdAt DateTime @default(now())
}

enum SessionType {
  GROUP
  ONE_ON_ONE
  EXPERT
}

model OfficeHoursBooking {
  id        String      @id @default(uuid())
  sessionId String
  session   OfficeHours @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  userId    String
  user      User        @relation(fields: [userId], references: [id], onDelete: Cascade)

  status      BookingStatus @default(BOOKED)
  attendedAt  DateTime?
  notes       String?
  actionItems Json?

  createdAt DateTime @default(now())

  @@unique([sessionId, userId])
}

enum BookingStatus {
  BOOKED
  ATTENDED
  CANCELLED
}

model Template {
  id String @id @default(uuid())

  name        String
  description String?
  category    String?

  fileUrl     String?
  previewUrl  String?
  fileType    String?

  accessTier    SubscriptionTier @default(MASTERCLASS)
  downloadCount Int              @default(0)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model RevenueEntry {
  id        String   @id @default(uuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  productId String?
  product   Product? @relation(fields: [productId], references: [id])

  amount       Decimal
  revenueType  RevenueType
  source       String?
  customerName String?
  revenueDate  DateTime

  createdAt DateTime @default(now())
}

enum RevenueType {
  ONE_TIME
  RECURRING
}

model ExitTracking {
  id        String   @id @default(uuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  productId String?
  product   Product? @relation(fields: [productId], references: [id])

  estimatedValuation Decimal?
  valuationMethod    String?
  valuationDate      DateTime?

  exitStatus     ExitStatus @default(PREPARING)
  listingDate    DateTime?
  targetExitDate DateTime?

  buybackEligible    Boolean @default(false)
  buybackCriteriaMet Json?

  exitAmount Decimal?
  exitDate   DateTime?
  acquirer   String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum ExitStatus {
  PREPARING
  LISTED
  NEGOTIATING
  CLOSED
  BUYBACK
}
```

---

## 8. API Specifications

### 8.1 API Structure

Using tRPC for type-safe APIs. All routes protected by authentication middleware unless specified.

### 8.2 Authentication Routes

```typescript
// src/server/routers/auth.ts

export const authRouter = router({
  // Get current user
  getSession: publicProcedure.query(async ({ ctx }) => {
    return ctx.session;
  }),

  // Update user profile
  updateProfile: protectedProcedure
    .input(z.object({
      name: z.string().optional(),
      avatarUrl: z.string().url().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: input,
      });
    }),

  // Complete onboarding
  completeOnboarding: protectedProcedure
    .mutation(async ({ ctx }) => {
      return ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: { onboardingCompleted: true },
      });
    }),
});
```

### 8.3 Founder DNA Routes

```typescript
// src/server/routers/founderDna.ts

export const founderDnaRouter = router({
  // Get DNA profile
  get: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.founderDna.findUnique({
      where: { userId: ctx.session.user.id },
    });
  }),

  // Get assessment questions
  getQuestions: protectedProcedure.query(async () => {
    return assessmentQuestions; // From constants
  }),

  // Submit assessment answers
  submitAssessment: protectedProcedure
    .input(z.object({
      answers: z.record(z.number()), // questionId -> answer (1-5)
    }))
    .mutation(async ({ ctx, input }) => {
      const results = calculateAssessmentResults(input.answers);
      
      return ctx.prisma.founderDna.upsert({
        where: { userId: ctx.session.user.id },
        create: {
          userId: ctx.session.user.id,
          ...results,
          completedAt: new Date(),
        },
        update: {
          ...results,
          completedAt: new Date(),
        },
      });
    }),

  // Get recommended path
  getRecommendations: protectedProcedure.query(async ({ ctx }) => {
    const dna = await ctx.prisma.founderDna.findUnique({
      where: { userId: ctx.session.user.id },
    });
    
    if (!dna) throw new TRPCError({ code: 'NOT_FOUND' });
    
    return generateRecommendations(dna);
  }),
});
```

### 8.4 Business Ideas Routes

```typescript
// src/server/routers/businessIdeas.ts

export const businessIdeasRouter = router({
  // List all ideas
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.businessIdea.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: { createdAt: 'desc' },
    });
  }),

  // Get single idea
  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.businessIdea.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
        include: { strategies: true },
      });
    }),

  // Create idea
  create: protectedProcedure
    .input(z.object({
      title: z.string().min(1),
      description: z.string().optional(),
      targetMarket: z.string().optional(),
      problemStatement: z.string().optional(),
      solution: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.businessIdea.create({
        data: {
          userId: ctx.session.user.id,
          ...input,
        },
      });
    }),

  // Update idea
  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      title: z.string().optional(),
      description: z.string().optional(),
      targetMarket: z.string().optional(),
      problemStatement: z.string().optional(),
      solution: z.string().optional(),
      validationRevenue: z.number().optional(),
      customerInterviews: z.number().optional(),
      status: z.enum(['DRAFT', 'VALIDATING', 'VALIDATED', 'KILLED']).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.prisma.businessIdea.update({
        where: { id, userId: ctx.session.user.id },
        data,
      });
    }),

  // Validate idea with AI
  aiValidate: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const idea = await ctx.prisma.businessIdea.findFirst({
        where: { id: input.id, userId: ctx.session.user.id },
      });
      
      if (!idea) throw new TRPCError({ code: 'NOT_FOUND' });
      
      const validation = await validateIdeaWithAI(idea);
      
      return ctx.prisma.businessIdea.update({
        where: { id: input.id },
        data: {
          validationScore: validation.score,
          validationData: validation.data,
        },
      });
    }),

  // Get pre-validated ideas
  getPreValidated: protectedProcedure.query(async ({ ctx }) => {
    const dna = await ctx.prisma.founderDna.findUnique({
      where: { userId: ctx.session.user.id },
    });
    
    return getPreValidatedIdeas(dna);
  }),
});
```

### 8.5 Stage Progress Routes

```typescript
// src/server/routers/stageProgress.ts

export const stageProgressRouter = router({
  // Get all stage progress
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.stageProgress.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: { stageNumber: 'asc' },
    });
  }),

  // Get current stage
  getCurrent: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: { id: ctx.session.user.id },
    });
    
    return ctx.prisma.stageProgress.findFirst({
      where: { 
        userId: ctx.session.user.id, 
        stageNumber: user?.currentStage 
      },
    });
  }),

  // Update task completion
  updateTask: protectedProcedure
    .input(z.object({
      stageNumber: z.number(),
      taskId: z.string(),
      completed: z.boolean(),
    }))
    .mutation(async ({ ctx, input }) => {
      const progress = await ctx.prisma.stageProgress.findFirst({
        where: { 
          userId: ctx.session.user.id, 
          stageNumber: input.stageNumber 
        },
      });
      
      const taskData = progress?.taskData as Record<string, boolean> || {};
      taskData[input.taskId] = input.completed;
      
      const tasksCompleted = Object.values(taskData).filter(Boolean).length;
      const tasksTotal = Object.keys(taskData).length;
      const completionPercentage = Math.round((tasksCompleted / tasksTotal) * 100);
      
      return ctx.prisma.stageProgress.upsert({
        where: { 
          userId_stageNumber: { 
            userId: ctx.session.user.id, 
            stageNumber: input.stageNumber 
          } 
        },
        create: {
          userId: ctx.session.user.id,
          stageNumber: input.stageNumber,
          taskData,
          tasksCompleted,
          tasksTotal,
          completionPercentage,
        },
        update: {
          taskData,
          tasksCompleted,
          completionPercentage,
        },
      });
    }),

  // Check stage gate
  checkGate: protectedProcedure
    .input(z.object({ stageNumber: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const gateCriteria = getGateCriteria(input.stageNumber);
      const userMetrics = await getUserMetrics(ctx.session.user.id);
      
      const passed = evaluateGate(gateCriteria, userMetrics);
      
      if (passed) {
        await ctx.prisma.stageProgress.update({
          where: { 
            userId_stageNumber: { 
              userId: ctx.session.user.id, 
              stageNumber: input.stageNumber 
            } 
          },
          data: {
            gatePassed: true,
            gatePassedAt: new Date(),
            completedAt: new Date(),
          },
        });
        
        await ctx.prisma.user.update({
          where: { id: ctx.session.user.id },
          data: { 
            currentStage: input.stageNumber + 1,
            stageStartedAt: new Date(),
          },
        });
      }
      
      return { passed, criteria: gateCriteria, metrics: userMetrics };
    }),
});
```

### 8.6 AI Coach Routes

```typescript
// src/server/routers/aiCoach.ts

export const aiCoachRouter = router({
  // Get conversation history
  getConversation: protectedProcedure
    .input(z.object({ conversationId: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      if (input.conversationId) {
        return ctx.prisma.aiConversation.findFirst({
          where: { id: input.conversationId, userId: ctx.session.user.id },
        });
      }
      
      return ctx.prisma.aiConversation.findFirst({
        where: { userId: ctx.session.user.id },
        orderBy: { updatedAt: 'desc' },
      });
    }),

  // Send message
  sendMessage: protectedProcedure
    .input(z.object({
      conversationId: z.string().optional(),
      message: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      // Get user context
      const userContext = await getUserContext(ctx.session.user.id);
      
      // Get or create conversation
      let conversation = input.conversationId
        ? await ctx.prisma.aiConversation.findFirst({
            where: { id: input.conversationId, userId: ctx.session.user.id },
          })
        : null;
      
      const messages = (conversation?.messages as any[]) || [];
      messages.push({ role: 'user', content: input.message });
      
      // Generate AI response
      const response = await generateAIResponse(messages, userContext);
      messages.push({ role: 'assistant', content: response.content });
      
      // Check for escalation
      const shouldEscalate = checkForEscalation(input.message, response);
      
      // Save conversation
      if (conversation) {
        return ctx.prisma.aiConversation.update({
          where: { id: conversation.id },
          data: {
            messages,
            escalated: shouldEscalate,
            escalatedAt: shouldEscalate ? new Date() : null,
          },
        });
      } else {
        return ctx.prisma.aiConversation.create({
          data: {
            userId: ctx.session.user.id,
            messages,
            context: userContext,
            escalated: shouldEscalate,
            escalatedAt: shouldEscalate ? new Date() : null,
          },
        });
      }
    }),

  // Start new conversation
  newConversation: protectedProcedure
    .mutation(async ({ ctx }) => {
      const userContext = await getUserContext(ctx.session.user.id);
      
      return ctx.prisma.aiConversation.create({
        data: {
          userId: ctx.session.user.id,
          messages: [],
          context: userContext,
        },
      });
    }),
});
```

### 8.7 Community Routes

```typescript
// src/server/routers/community.ts

export const communityRouter = router({
  // List posts
  listPosts: protectedProcedure
    .input(z.object({
      channel: z.string().optional(),
      limit: z.number().default(20),
      cursor: z.string().optional(),
    }))
    .query(async ({ ctx, input }) => {
      const posts = await ctx.prisma.communityPost.findMany({
        where: input.channel ? { channel: input.channel } : {},
        take: input.limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        orderBy: [
          { isPinned: 'desc' },
          { createdAt: 'desc' },
        ],
        include: {
          user: { select: { id: true, name: true, avatarUrl: true } },
        },
      });
      
      let nextCursor: string | undefined;
      if (posts.length > input.limit) {
        const nextItem = posts.pop();
        nextCursor = nextItem?.id;
      }
      
      return { posts, nextCursor };
    }),

  // Create post
  createPost: protectedProcedure
    .input(z.object({
      channel: z.string(),
      title: z.string().optional(),
      content: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.communityPost.create({
        data: {
          userId: ctx.session.user.id,
          ...input,
        },
      });
    }),

  // Like post
  likePost: protectedProcedure
    .input(z.object({ postId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.communityPost.update({
        where: { id: input.postId },
        data: { likesCount: { increment: 1 } },
      });
    }),

  // Add comment
  addComment: protectedProcedure
    .input(z.object({
      postId: z.string(),
      content: z.string().min(1),
      parentId: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const comment = await ctx.prisma.communityComment.create({
        data: {
          postId: input.postId,
          userId: ctx.session.user.id,
          content: input.content,
          parentId: input.parentId,
        },
      });
      
      await ctx.prisma.communityPost.update({
        where: { id: input.postId },
        data: { commentsCount: { increment: 1 } },
      });
      
      return comment;
    }),
});
```

### 8.8 Payments Routes

```typescript
// src/server/routers/payments.ts

export const paymentsRouter = router({
  // Create checkout session
  createCheckout: protectedProcedure
    .input(z.object({
      tier: z.enum(['MASTERCLASS', 'MASTERMIND']),
    }))
    .mutation(async ({ ctx, input }) => {
      const prices = {
        MASTERCLASS: {
          oneTime: process.env.STRIPE_MASTERCLASS_PRICE_ID,
          monthly: process.env.STRIPE_MASTERCLASS_MONTHLY_PRICE_ID,
        },
        MASTERMIND: {
          oneTime: process.env.STRIPE_MASTERMIND_PRICE_ID,
          monthly: process.env.STRIPE_MASTERMIND_MONTHLY_PRICE_ID,
        },
      };
      
      const session = await stripe.checkout.sessions.create({
        customer_email: ctx.session.user.email,
        mode: 'subscription',
        line_items: [
          { price: prices[input.tier].oneTime, quantity: 1 },
          { price: prices[input.tier].monthly, quantity: 1 },
        ],
        success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing?cancelled=true`,
        metadata: {
          userId: ctx.session.user.id,
          tier: input.tier,
        },
      });
      
      return { url: session.url };
    }),

  // Get billing portal
  getBillingPortal: protectedProcedure
    .mutation(async ({ ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: ctx.session.user.id },
      });
      
      if (!user?.stripeCustomerId) {
        throw new TRPCError({ code: 'NOT_FOUND' });
      }
      
      const session = await stripe.billingPortal.sessions.create({
        customer: user.stripeCustomerId,
        return_url: `${process.env.NEXT_PUBLIC_URL}/dashboard`,
      });
      
      return { url: session.url };
    }),

  // Get subscription status
  getSubscription: protectedProcedure
    .query(async ({ ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: ctx.session.user.id },
        select: {
          subscriptionStatus: true,
          subscriptionTier: true,
          subscriptionStartedAt: true,
          subscriptionEndsAt: true,
        },
      });
      
      return user;
    }),
});
```

---

## 9. User Flows

### 9.1 Onboarding Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                      ONBOARDING FLOW                             │
└─────────────────────────────────────────────────────────────────┘

Landing Page
     │
     ▼
Sign Up (Email/Google/LinkedIn)
     │
     ▼
Welcome Screen ─────────────────────────────────────────┐
     │                                                   │
     ▼                                                   │
Founder DNA Assessment                                   │
├── Personality (12 questions)                          │
├── Expertise (10 questions)                            │
├── Circumstances (8 questions)                         │
├── Motivation (10 questions)                           │
└── Technical (10 questions)                            │
     │                                                   │
     ▼                                                   │
Processing Animation ────────────────────────────────── │
     │                                                   │
     ▼                                                   │
DNA Results Screen                                       │
├── Founder Archetype                                   │
├── Strengths & Growth Areas                            │
├── Recommended Path                                    │
└── Personalized Recommendations                        │
     │                                                   │
     ▼                                                   │
Program Selection                                        │
├── MasterClass ($3,000 + $99/mo) ────────────────────┐│
├── MasterMind ($7,000 + $199/mo) ─────────────────┐  ││
└── Free Preview ─────────────────────────────────┐│  ││
     │                                             ││  ││
     ▼                                             ▼▼  ▼▼
Stripe Checkout ◄──────────────────────────────────────┘
     │
     ▼
Welcome to Program
├── Quick Tour
├── Community Introduction
├── First Task Assignment
└── Office Hours Calendar
     │
     ▼
Dashboard (Stage 1 or Stage 2 based on DNA completion)
```

### 9.2 Stage Progression Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                   STAGE PROGRESSION FLOW                         │
└─────────────────────────────────────────────────────────────────┘

Current Stage Dashboard
     │
     ├── View Tasks ────────────────────────────────┐
     │        │                                      │
     │        ▼                                      │
     │   Task List                                   │
     │   ├── Video Lessons                          │
     │   ├── Worksheets                             │
     │   ├── Action Items                           │
     │   └── Deliverables                           │
     │        │                                      │
     │        ▼                                      │
     │   Complete Task                               │
     │        │                                      │
     │        ▼                                      │
     │   Update Progress                             │
     │                                               │
     ├── View Stage Gate Requirements ──────────────┤
     │        │                                      │
     │        ▼                                      │
     │   Gate Criteria Checklist                    │
     │   ├── Revenue Target: $X                     │
     │   ├── Customers: X                           │
     │   ├── Tasks Complete: X%                     │
     │   └── Community Activity: X                  │
     │                                               │
     ├── Request Gate Check ────────────────────────┤
     │        │                                      │
     │        ▼                                      │
     │   System Evaluates Criteria                  │
     │        │                                      │
     │        ├── PASS ──────────────────────────┐  │
     │        │        │                          │  │
     │        │        ▼                          │  │
     │        │   Celebration Screen              │  │
     │        │   Unlock Next Stage               │  │
     │        │        │                          │  │
     │        │        ▼                          │  │
     │        │   Next Stage Dashboard            │  │
     │        │                                   │  │
     │        └── FAIL ──────────────────────────┤  │
     │               │                            │  │
     │               ▼                            │  │
     │          Show Missing Criteria             │  │
     │          Suggest Actions                   │  │
     │          Link to Resources                 │  │
     │                                            │  │
     └── Access AI Coach ─────────────────────────┴──┘
              │
              ▼
         Chat Interface
         Contextual Help
         Resource Suggestions
```

### 9.3 Content Consumption Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                  CONTENT CONSUMPTION FLOW                        │
└─────────────────────────────────────────────────────────────────┘

Stage Curriculum
     │
     ├── Module List
     │        │
     │        ▼
     │   Module Overview
     │   ├── Learning Objectives
     │   ├── Estimated Time
     │   └── Prerequisites
     │        │
     │        ▼
     │   Start Module
     │        │
     │        ├── Video Lesson ────────────────────┐
     │        │        │                            │
     │        │        ▼                            │
     │        │   Video Player                     │
     │        │   ├── Progress Tracking            │
     │        │   ├── Playback Speed               │
     │        │   ├── Chapters                     │
     │        │   └── Notes                        │
     │        │        │                            │
     │        │        ▼                            │
     │        │   Mark Complete                    │
     │        │                                     │
     │        ├── Worksheet ───────────────────────┤
     │        │        │                            │
     │        │        ▼                            │
     │        │   Interactive Form                 │
     │        │   Save Progress                    │
     │        │   Download PDF                     │
     │        │                                     │
     │        ├── Template ────────────────────────┤
     │        │        │                            │
     │        │        ▼                            │
     │        │   Preview                          │
     │        │   Download                         │
     │        │   Customize                        │
     │        │                                     │
     │        └── Action Item ─────────────────────┤
     │                 │                            │
     │                 ▼                            │
     │            Task Description                 │
     │            Due Date                         │
     │            Mark Complete                    │
     │                                              │
     └── Track Progress ───────────────────────────┘
              │
              ▼
         Progress Dashboard
         Completion %
         Time Spent
         Streak
```

### 9.4 Community Interaction Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                  COMMUNITY INTERACTION FLOW                      │
└─────────────────────────────────────────────────────────────────┘

Community Hub
     │
     ├── Browse Channels ──────────────────────────┐
     │        │                                     │
     │        ▼                                     │
     │   Channel List                              │
     │   ├── Announcements                         │
     │   ├── General                               │
     │   ├── Stage-Specific                        │
     │   └── Special Interest                      │
     │        │                                     │
     │        ▼                                     │
     │   View Channel                              │
     │        │                                     │
     │        ├── Read Posts                       │
     │        │        │                            │
     │        │        ▼                            │
     │        │   Like / Comment / Save            │
     │        │                                     │
     │        └── Create Post ─────────────────────┤
     │                 │                            │
     │                 ▼                            │
     │            Post Editor                      │
     │            ├── Rich Text                    │
     │            ├── Media Upload                 │
     │            └── @mentions                    │
     │                 │                            │
     │                 ▼                            │
     │            Submit Post                      │
     │                                              │
     ├── Member Directory ─────────────────────────┤
     │        │                                     │
     │        ▼                                     │
     │   Search / Filter Members                   │
     │   View Profiles                             │
     │   Direct Message                            │
     │                                              │
     ├── Weekly Wins ──────────────────────────────┤
     │        │                                     │
     │        ▼                                     │
     │   Submit Win                                │
     │   Celebrate Others                          │
     │   View Leaderboard                          │
     │                                              │
     └── Accountability Pod ───────────────────────┤
              │                                     │
              ▼                                     │
         Pod Dashboard                             │
         ├── Members (5-7)                         │
         ├── Weekly Check-in                       │
         ├── Goals Tracker                         │
         └── Group Chat                            │
```

---

## 10. UI/UX Requirements

### 10.1 Design System

**Brand Colors:**

```css
:root {
  /* Primary */
  --primary-50: #f0f9ff;
  --primary-100: #e0f2fe;
  --primary-200: #bae6fd;
  --primary-300: #7dd3fc;
  --primary-400: #38bdf8;
  --primary-500: #0ea5e9;
  --primary-600: #0284c7;
  --primary-700: #0369a1;
  --primary-800: #075985;
  --primary-900: #0c4a6e;
  
  /* Secondary (Gold/Success) */
  --secondary-50: #fffbeb;
  --secondary-100: #fef3c7;
  --secondary-200: #fde68a;
  --secondary-300: #fcd34d;
  --secondary-400: #fbbf24;
  --secondary-500: #f59e0b;
  
  /* Neutral */
  --neutral-50: #f8fafc;
  --neutral-100: #f1f5f9;
  --neutral-200: #e2e8f0;
  --neutral-300: #cbd5e1;
  --neutral-400: #94a3b8;
  --neutral-500: #64748b;
  --neutral-600: #475569;
  --neutral-700: #334155;
  --neutral-800: #1e293b;
  --neutral-900: #0f172a;
  
  /* Semantic */
  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;
}
```

**Typography:**

```css
:root {
  /* Font Families */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Cal Sans', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
}
```

**Spacing:**

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
}
```

### 10.2 Component Library

Use **shadcn/ui** as the base component library, customized with brand colors.

**Key Components:**

1. **StageCard** - Display stage progress
2. **ProgressRing** - Circular progress indicator
3. **TaskItem** - Checkbox with task details
4. **MetricCard** - KPI display
5. **ChatBubble** - AI coach messages
6. **PostCard** - Community post display
7. **MemberAvatar** - User avatar with status
8. **GateCriteria** - Stage gate requirements
9. **VideoPlayer** - Course video player
10. **ContentCard** - Module/lesson card

### 10.3 Page Layouts

**Dashboard Layout:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Logo       Navigation                    Profile | Notifications│
├─────────────────────────────────────────────────────────────────┤
│          │                                                       │
│          │  ┌─────────────────────────────────────────────────┐ │
│  Sidebar │  │                    Main Content                  │ │
│          │  │                                                   │ │
│  - Dashboard │                                                  │ │
│  - Stages    │  ┌──────────┐ ┌──────────┐ ┌──────────┐        │ │
│  - Community │  │  Metric  │ │  Metric  │ │  Metric  │        │ │
│  - Resources │  └──────────┘ └──────────┘ └──────────┘        │ │
│  - AI Coach  │                                                  │ │
│  - Settings  │  ┌─────────────────────────────────────────────┐│ │
│          │  │              Stage Progress                   ││ │
│          │  └─────────────────────────────────────────────┘│ │
│          │                                                   │ │
│          │  ┌──────────────────┐ ┌──────────────────────┐  │ │
│          │  │   Recent Tasks   │ │   Community Activity │  │ │
│          │  └──────────────────┘ └──────────────────────┘  │ │
│          │                                                   │ │
│          └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Stage View Layout:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Back to Dashboard           Stage 3: Strategy Studio         │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │  Stage Progress: 45% ████████░░░░░░░░░░                   │   │
│  │  Tasks: 12/27 complete                                     │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌─────────────────────┐  ┌─────────────────────────────────┐   │
│  │                     │  │                                   │   │
│  │  Module List        │  │  Module Content                   │   │
│  │                     │  │                                   │   │
│  │  ▸ Module 1 ✓      │  │  [Video Player]                   │   │
│  │  ▾ Module 2        │  │                                   │   │
│  │    • Lesson 1 ✓    │  │  Lesson Description               │   │
│  │    • Lesson 2 ◉    │  │                                   │   │
│  │    • Lesson 3      │  │  [Worksheet/Action Items]         │   │
│  │  ▸ Module 3        │  │                                   │   │
│  │  ▸ Module 4        │  │  [Mark Complete Button]           │   │
│  │                     │  │                                   │   │
│  └─────────────────────┘  └─────────────────────────────────┘   │
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │  Stage Gate Requirements                      [Check Gate] │   │
│  │  ☑ Business Model Canvas Complete                          │   │
│  │  ☑ Legal Entity Formed                                     │   │
│  │  ☐ First Paying Client ($500+)                             │   │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### 10.4 Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### 10.5 Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios ≥ 4.5:1
- Focus indicators
- Alt text for images
- Captions for videos

---

## 11. Success Metrics

### 11.1 Business Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| Monthly Active Users | Users logging in per month | 80% of paid users |
| Conversion Rate | Free to paid conversion | 5% |
| Churn Rate | Monthly cancellation rate | <5% |
| LTV | Lifetime Value | >$10,000 |
| CAC | Customer Acquisition Cost | <$1,000 |
| NPS | Net Promoter Score | >50 |
| Revenue per User | Monthly revenue per user | >$150 |

### 11.2 Product Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| Stage Completion Rate | Users completing each stage | >60% |
| Content Completion | Lessons completed per user | >70% |
| Community Engagement | Posts/comments per week | 3+ per user |
| AI Coach Usage | Conversations per week | 5+ per user |
| Office Hours Attendance | Session attendance rate | >80% |
| Time to First Win | Days to first revenue | <30 days |

### 11.3 Outcome Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| Businesses Launched | Products reaching MVP | 80% of MasterClass |
| Revenue Generated | Total client revenue | $100K+ per cohort |
| Exit Rate | Successful acquisitions | 10% of MasterMind |
| Buyback Activations | Buyback guarantee used | <5% |
| Salary Replacement | Users replacing income | 30% within 12 months |

---

## 12. Development Phases

### Phase 1: Foundation (Weeks 1-4)

**Scope:**
- Project setup (Next.js, Prisma, Supabase)
- Authentication system
- User management
- Basic dashboard
- Founder DNA assessment

**Deliverables:**
- [ ] Next.js project with TypeScript
- [ ] Supabase integration
- [ ] Authentication (email, Google, LinkedIn)
- [ ] User registration/login
- [ ] Profile management
- [ ] DNA assessment (50 questions)
- [ ] DNA results display
- [ ] Basic dashboard layout

**Success Criteria:**
- Users can sign up, complete DNA assessment, view results
- Admin can view user list

### Phase 2: Core Platform (Weeks 5-8)

**Scope:**
- Stage progression system
- Content management
- Basic community features
- Stripe integration

**Deliverables:**
- [ ] Stage progress tracking
- [ ] Content delivery (video, text, worksheets)
- [ ] Stage gate logic
- [ ] Community posts/comments
- [ ] Stripe checkout
- [ ] Subscription management
- [ ] Basic resource vault

**Success Criteria:**
- Users can progress through stages
- Users can consume content
- Users can post in community
- Users can purchase subscriptions

### Phase 3: AI Integration (Weeks 9-10)

**Scope:**
- AI Coach implementation
- Content personalization
- Idea validation AI

**Deliverables:**
- [ ] AI coach chat interface
- [ ] Context-aware responses
- [ ] Escalation system
- [ ] Idea validation scoring
- [ ] Personalized recommendations

**Success Criteria:**
- AI coach provides helpful, contextual responses
- Users report high satisfaction with AI coach

### Phase 4: Advanced Features (Weeks 11-12)

**Scope:**
- Office hours system
- Advanced community features
- Revenue tracking
- Exit preparation tools

**Deliverables:**
- [ ] Cal.com integration
- [ ] Session booking
- [ ] Recording management
- [ ] Accountability pods
- [ ] Revenue dashboard
- [ ] Valuation calculator
- [ ] Due diligence vault

**Success Criteria:**
- Users can book and attend office hours
- Users can track revenue
- MasterMind users can access exit tools

### Phase 5: Polish & Launch (Weeks 13-14)

**Scope:**
- Performance optimization
- Bug fixes
- Documentation
- Launch preparation

**Deliverables:**
- [ ] Performance audit and fixes
- [ ] Mobile responsiveness
- [ ] User testing feedback
- [ ] Admin dashboard
- [ ] Analytics setup
- [ ] Documentation

**Success Criteria:**
- <3s page load times
- 95%+ uptime
- All critical bugs fixed

---

## 13. Claude Code Implementation Guide

### 13.1 Getting Started

When working with Claude Code on this project, start with these prompts:

**Initial Setup:**

```
Create a new Next.js 14 project with:
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Prisma ORM
- tRPC for API
- Supabase for database and auth

Project name: productized-os
```

**Directory Structure:**

```
productized-os/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth routes
│   │   ├── (dashboard)/       # Protected routes
│   │   ├── api/               # API routes
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                # shadcn components
│   │   ├── forms/             # Form components
│   │   ├── layout/            # Layout components
│   │   └── features/          # Feature components
│   ├── lib/
│   │   ├── supabase/          # Supabase client
│   │   ├── stripe/            # Stripe helpers
│   │   ├── ai/                # AI integration
│   │   └── utils/             # Utilities
│   ├── server/
│   │   ├── routers/           # tRPC routers
│   │   └── trpc.ts            # tRPC setup
│   ├── hooks/                  # Custom hooks
│   ├── types/                  # TypeScript types
│   └── constants/              # Constants
├── prisma/
│   └── schema.prisma
├── public/
└── package.json
```

### 13.2 Module-by-Module Prompts

**Module 1: Authentication**

```
Implement authentication using Supabase Auth with:
- Email/password signup and login
- Google OAuth
- LinkedIn OAuth
- Magic link option
- Protected routes middleware
- Session management

Reference the auth routes specification in section 8.2.
```

**Module 2: Founder DNA**

```
Create the Founder DNA assessment system with:
- 50 assessment questions (use the categories from section 5.1)
- Multi-step form with progress indicator
- Score calculation logic
- Archetype assignment algorithm
- Results page with recommendations
- DNA profile storage in database

Reference the founderDna router in section 8.3.
```

**Module 3: Stage System**

```
Build the stage progression system with:
- 6 stages (Founder DNA, Idea Lab, Strategy Studio, Build Workshop, Conversion Engine, Scale/Exit)
- Task tracking within each stage
- Progress percentage calculation
- Stage gate criteria checking
- Unlock logic when gates are passed
- Visual stage map component

Reference the stageProgress router in section 8.5.
```

**Module 4: Content Management**

```
Create the content delivery system with:
- Video player with Mux integration
- Markdown content rendering
- Worksheet forms with save functionality
- Progress tracking per content item
- Module/lesson organization
- Download capability for templates

Reference the content schema and types in section 7.
```

**Module 5: Community**

```
Build the community features with:
- Channel-based post organization
- Post creation with rich text
- Comment threading
- Like functionality
- Member directory
- Accountability pods (small groups)
- Weekly wins submission

Reference the community router in section 8.7.
```

**Module 6: AI Coach**

```
Implement the AI coach with:
- Chat interface using streaming responses
- Context injection from user profile (DNA, stage, business)
- Conversation history management
- Escalation detection and handling
- Anthropic Claude API integration
- Prompt engineering for framework guidance

Reference the aiCoach router in section 8.6.

System prompt should include:
- Productized OS framework knowledge
- User's current stage and progress
- User's DNA profile
- User's business details
- Escalation triggers
```

**Module 7: Payments**

```
Integrate Stripe payments with:
- Checkout session creation
- Subscription management
- Webhook handling for subscription events
- Billing portal access
- Access control based on subscription tier

Reference the payments router in section 8.8.
```

**Module 8: Office Hours**

```
Build office hours booking with:
- Cal.com integration
- Session scheduling
- Booking management
- Recording attachment
- Notes and action items

Reference the office hours schema in section 7.
```

### 13.3 Prompt Templates for Features

**Creating a New Component:**

```
Create a React component called [ComponentName] that:
- [Description of functionality]
- Uses shadcn/ui components
- Is fully typed with TypeScript
- Handles loading and error states
- Is responsive

Props:
- [prop1]: [type] - [description]
- [prop2]: [type] - [description]

Example usage:
<[ComponentName] prop1={value} prop2={value} />
```

**Creating a New API Route:**

```
Create a tRPC router called [routerName] with these procedures:

1. [procedureName] (query/mutation)
   - Input: [zod schema]
   - Output: [return type]
   - Logic: [description]

2. [procedureName] (query/mutation)
   - Input: [zod schema]
   - Output: [return type]
   - Logic: [description]

Include proper error handling and authorization checks.
```

**Creating a New Page:**

```
Create a Next.js page at /[path] that:
- [Description of page purpose]
- Fetches data using tRPC
- Shows loading skeleton while loading
- Handles errors gracefully
- Uses the dashboard layout
- Is protected (requires authentication)

Components needed:
- [Component1]
- [Component2]
```

### 13.4 Testing Prompts

```
Write tests for [feature/component] including:
- Unit tests for business logic
- Component tests for UI
- Integration tests for API routes
- E2E tests for critical user flows

Use:
- Jest for unit tests
- React Testing Library for components
- Playwright for E2E

Focus on:
- Happy path scenarios
- Error handling
- Edge cases
- Accessibility
```

### 13.5 Debugging Prompts

```
Debug this issue: [description]

Current behavior: [what happens]
Expected behavior: [what should happen]

Relevant code:
[paste code]

Error message (if any):
[paste error]

Steps to reproduce:
1. [step 1]
2. [step 2]
```

---

## Appendix A: Assessment Questions

### Personality Questions (12)

1. When facing a difficult decision, I prefer to:
   - (1) Act quickly based on instinct
   - (5) Analyze all options thoroughly

2. In group settings, I typically:
   - (1) Let others take the lead
   - (5) Naturally take charge

3. When receiving criticism, I:
   - (1) Feel defensive initially
   - (5) Welcome it as growth opportunity

4. My communication style is:
   - (1) Big picture, conceptual
   - (5) Detailed, specific

5. When plans change unexpectedly, I:
   - (1) Feel stressed and resistant
   - (5) Adapt easily and find opportunities

6. I prefer to work:
   - (1) Completely independently
   - (5) Collaboratively with others

7. My approach to risk is:
   - (1) Avoid whenever possible
   - (5) Embrace calculated risks

8. When starting something new, I:
   - (1) Need extensive preparation
   - (5) Jump in and learn as I go

9. I handle stress by:
   - (1) Withdrawing to recharge
   - (5) Seeking support from others

10. My decision-making style is:
    - (1) Intuition-based
    - (5) Data-driven

11. When facing failure, I:
    - (1) Take it personally
    - (5) See it as a learning opportunity

12. My energy comes from:
    - (1) Quiet reflection
    - (5) Social interaction

### Expertise Questions (10)

1. Years of professional experience:
   - (1) 0-2 years
   - (3) 3-7 years
   - (5) 8+ years

2. Industry depth (same field):
   - (1) 0-2 years
   - (3) 3-5 years
   - (5) 6+ years

3. Leadership/management experience:
   - (1) None
   - (3) Team lead
   - (5) Executive level

4. Professional network strength:
   - (1) Limited connections
   - (5) Extensive network

5. Public speaking/content creation:
   - (1) Never done
   - (5) Regular speaker/creator

6. Sales/business development:
   - (1) No experience
   - (5) Extensive experience

7. Financial/business acumen:
   - (1) Basic understanding
   - (5) Expert level

8. Published/recognized work:
   - (1) None
   - (5) Multiple publications/awards

9. Client-facing experience:
   - (1) Minimal
   - (5) Extensive

10. Unique skills/certifications:
    - (1) None relevant
    - (5) Multiple valuable credentials

### Circumstance Questions (8)

1. Current employment status:
   - (1) Unemployed/seeking
   - (3) Employed, looking to leave
   - (5) Employed, building on side

2. Weekly hours available for business:
   - (1) 0-5 hours
   - (3) 6-15 hours
   - (5) 16+ hours

3. Financial runway without income:
   - (1) Less than 3 months
   - (3) 3-12 months
   - (5) 12+ months

4. Family obligations:
   - (1) Primary caregiver
   - (3) Shared responsibilities
   - (5) Minimal obligations

5. Geographic flexibility:
   - (1) Location restricted
   - (5) Fully flexible

6. Access to startup capital:
   - (1) No savings available
   - (3) $5K-$20K available
   - (5) $50K+ available

7. Partner/family support:
   - (1) Resistance expected
   - (5) Full support

8. Current debt obligations:
   - (1) High debt burden
   - (5) Debt-free

### Motivation Questions (10)

1. Primary motivation:
   - (1) Escape current job
   - (3) Build wealth
   - (5) Create impact

2. Income replacement goal:
   - (1) Match current income
   - (3) 2x current income
   - (5) 5x+ current income

3. Exit timeline preference:
   - (1) Build lifestyle business
   - (3) Flexible on exit
   - (5) Targeting acquisition

4. Work style preference:
   - (1) Solo founder
   - (3) Small team
   - (5) Build large company

5. Industry preference:
   - (1) Leverage current industry
   - (5) Open to any industry

6. Impact vs. income priority:
   - (1) Income focused
   - (5) Impact focused

7. Time to full commitment:
   - (1) ASAP
   - (3) 6-12 months
   - (5) When business proves out

8. Learning commitment:
   - (1) Minimal time for learning
   - (5) Eager to learn extensively

9. Community involvement:
   - (1) Prefer to work alone
   - (5) Want active community

10. Coaching/accountability:
    - (1) Self-directed
    - (5) Want regular guidance

### Technical Questions (10)

1. Overall tech comfort level:
   - (1) Intimidated by technology
   - (5) Very comfortable

2. AI tool experience:
   - (1) Never used
   - (3) Casual ChatGPT user
   - (5) Power user of multiple AI tools

3. No-code tool experience:
   - (1) Never used
   - (3) Used basic tools (Canva, etc.)
   - (5) Built with no-code tools

4. Coding experience:
   - (1) None
   - (3) Basic HTML/CSS
   - (5) Can code applications

5. Data/analytics comfort:
   - (1) Basic spreadsheets
   - (5) Advanced analysis

6. Learning new tools:
   - (1) Takes significant time
   - (5) Learn very quickly

7. Automation experience:
   - (1) None
   - (3) Used Zapier/IFTTT
   - (5) Built complex automations

8. Content creation tools:
   - (1) Basic tools only
   - (5) Professional tools

9. CRM/sales tools:
   - (1) No experience
   - (5) Expert user

10. Project management tools:
    - (1) No experience
    - (5) Expert user

---

## Appendix B: Stage Gate Criteria

### Stage 1 → Stage 2 (DNA → Idea Lab)

| Criterion | Requirement |
|-----------|-------------|
| DNA Assessment | 100% complete |
| Results Review | Viewed and acknowledged |

### Stage 2 → Stage 3 (Idea Lab → Strategy Studio)

| Criterion | Requirement |
|-----------|-------------|
| Ideas Created | At least 1 active idea |
| Validation Score | 60+ on primary idea |
| Customer Interviews | 10+ completed |
| Validation Revenue | $1,000+ OR 100+ qualified leads |

### Stage 3 → Stage 4 (Strategy Studio → Build Workshop)

| Criterion | Requirement |
|-----------|-------------|
| Business Model Canvas | Complete |
| Pricing Model | Defined |
| Legal Entity | Formed |
| First Client | $500+ payment received |
| GTM Plan | Drafted |

### Stage 4 → Stage 5 (Build Workshop → Conversion Engine)

| Criterion | Requirement |
|-----------|-------------|
| MVP | Functional and deployed |
| Active Users | 5+ using product |
| Feedback | Collected from all users |
| Core Feature | Working as intended |

### Stage 5 → Stage 6 (Conversion Engine → Scale/Exit)

| Criterion | Requirement |
|-----------|-------------|
| Monthly Revenue | $10,000+ MRR |
| Revenue Consistency | 3 consecutive months |
| Customers | 10+ paying customers |
| Churn Rate | <10% monthly |
| Systems | Basic SOPs documented |

---

## Appendix C: Environment Variables

```env
# App
NEXT_PUBLIC_URL=http://localhost:3000
NODE_ENV=development

# Database (Supabase)
DATABASE_URL=postgresql://...
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

# Authentication
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx
LINKEDIN_CLIENT_ID=xxx
LINKEDIN_CLIENT_SECRET=xxx

# Payments (Stripe)
STRIPE_SECRET_KEY=sk_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_xxx
STRIPE_MASTERCLASS_PRICE_ID=price_xxx
STRIPE_MASTERCLASS_MONTHLY_PRICE_ID=price_xxx
STRIPE_MASTERMIND_PRICE_ID=price_xxx
STRIPE_MASTERMIND_MONTHLY_PRICE_ID=price_xxx

# AI (Anthropic)
ANTHROPIC_API_KEY=sk-ant-xxx

# Email (Resend)
RESEND_API_KEY=re_xxx

# Video (Mux)
MUX_TOKEN_ID=xxx
MUX_TOKEN_SECRET=xxx

# Storage (Cloudflare R2)
R2_ACCESS_KEY_ID=xxx
R2_SECRET_ACCESS_KEY=xxx
R2_BUCKET_NAME=productized-os
R2_ENDPOINT=xxx

# Calendar (Cal.com)
CAL_API_KEY=xxx
```

---

## Document Revision History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | Jan 2025 | Initial PRD | Hossein |

---

*This PRD is designed to be used with Claude Code for AI-assisted development. Each section can be referenced directly in prompts to maintain context and consistency.*
