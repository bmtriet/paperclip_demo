# MTT-20: Technical SEO and Measurement Requirements

## Purpose
Define the technical SEO operating model for the Savatech market-scanning role so hiring can evaluate candidates on execution capability, not generic marketing claims.

## Role Scope
The role owns technical SEO discovery, implementation guidance, and measurement for Savatech's web presence with a primary objective of increasing qualified organic discovery from search.

## Core Technical Responsibilities
1. Build and maintain a keyword intelligence pipeline for market-scanning topics, competitor terms, and customer problem statements.
2. Translate keyword opportunities into page-level recommendations (new pages, refreshes, internal links, schema, metadata).
3. Maintain technical SEO hygiene: crawlability, indexing controls, canonicalization, robots directives, XML sitemaps, page speed flags, and mobile usability.
4. Define and run a reporting cadence that connects SEO activity to measurable business outcomes.

## Required Workflow
### 1. Keyword Discovery and Prioritization
- Collect seed topics from product docs, sales calls, support tickets, and competitor content.
- Expand with tool-driven suggestions and SERP analysis.
- Segment by intent: informational, commercial, transactional, navigational.
- Score opportunities using: search demand, ranking difficulty, SERP quality, relevance to Savatech offerings, and expected conversion proximity.
- Maintain a prioritized keyword backlog with explicit target URL mapping.

### 2. Technical and Content Audit Loop
- Weekly crawl of the production site to identify indexability and on-page defects.
- Validate title tags, H1/H2 usage, meta descriptions, canonical tags, and broken links.
- Review Core Web Vitals and page-speed regressions for priority pages.
- Maintain issue log categorized by severity (`critical`, `high`, `medium`, `low`) and estimated SEO impact.

### 3. Implementation and Experimentation
- Publish clear implementation tickets for engineering/content owners with expected SEO impact and acceptance criteria.
- Run structured experiments (for example: metadata update, internal-link redesign, schema addition, content-depth enhancement).
- Track baseline, change date, and post-change result window for each experiment.

### 4. Measurement and Reporting
- Report weekly tactical metrics and monthly outcome metrics.
- Tie reporting to keyword clusters and landing page groups, not vanity aggregate traffic alone.
- Flag anomalies, wins, and regressions with root-cause hypotheses.

## Required Tooling Stack
Candidates should demonstrate proficiency with equivalent tools in each category.

- Search performance data: Google Search Console.
- Web behavior and conversions: Google Analytics 4.
- Crawling and technical audit: Screaming Frog or Sitebulb.
- Keyword/SERP research: Ahrefs, Semrush, or equivalent.
- Rank tracking: tool-based daily/weekly position tracking by keyword cluster.
- Dashboarding and analysis: Looker Studio and/or spreadsheets with reproducible logic.
- Work management: issue tracker with ticket-level SEO acceptance criteria.

## Data Sources and Governance
- First-party sources: Search Console, GA4, CRM lead attribution tags, internal customer research.
- External sources: SERP snapshots, competitor content inventories, keyword tools.
- Data governance requirements:
  - Define source-of-truth for each KPI.
  - Preserve change logs for experiment and implementation dates.
  - Keep metric definitions stable over time and document any definition change.

## KPI Framework
### Leading Indicators (weekly)
- Indexed pages count and index coverage error rate.
- Share of priority keywords with rank movement in positive direction.
- CTR uplift on pages with updated titles/meta.
- Number of technical SEO issues opened vs resolved by severity.
- Crawl health indicators: broken links, redirect chains, duplicate titles/descriptions.

### Lagging Indicators (monthly)
- Non-branded organic sessions to priority landing pages.
- Top-10 ranking count for target keyword set.
- Organic-assisted and organic-last-touch conversions.
- Qualified inbound leads attributable to organic search.
- Revenue or pipeline contribution from organic-discovered leads (if data available).

## Reporting Cadence and Deliverables
### Weekly Deliverable
- 1-page SEO execution update with:
  - completed actions,
  - open blockers and owner,
  - KPI movement summary,
  - next-week focus list.

### Monthly Deliverable
- Market-scanning and SEO performance report with:
  - keyword opportunity updates,
  - experiment outcomes,
  - content/technical roadmap adjustments,
  - forecast for next month and dependency asks.

## Hiring Evaluation Criteria
A qualified candidate should be able to:
1. Produce a 30/60/90 day SEO action plan tied to measurable outcomes.
2. Demonstrate a repeatable keyword-to-page mapping method.
3. Explain technical SEO defects and their business impact in plain language.
4. Build a dashboard that separates leading indicators from outcome KPIs.
5. Show at least one prior example where technical SEO work improved rankings and qualified traffic.

## 30/60/90 Day Execution Expectations
- First 30 days:
  - Baseline all core SEO metrics.
  - Complete technical crawl and prioritize remediation backlog.
  - Publish initial keyword cluster map and URL targeting plan.
- By day 60:
  - Ship first optimization wave for top-priority pages.
  - Stand up weekly reporting and issue tracking rhythm.
  - Launch first controlled SEO experiments with clear hypotheses.
- By day 90:
  - Show measurable movement in at least two leading indicators and one lagging indicator.
  - Deliver updated quarterly SEO roadmap with dependencies and projected impact.

## Definition of Done for This Requirement Set
- Technical SEO requirements are explicit enough to be used in job description screening and interview scorecards.
- KPI definitions and cadence are specific enough for immediate onboarding execution.
- Cross-functional dependencies (content, engineering, analytics) are documented as operating constraints.
