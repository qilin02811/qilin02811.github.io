---
permalink: /
title: "About"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
toc: true
---

Hi, I'm Qilin Chen — a Master's student in Software Engineering at **ECNU** (East China Normal University). My research interests lie at the intersection of **Software Engineering** and **Deep Learning**.

## Research Interests
{: #interests}

- **Software Engineering** — Software analysis, testing, and automated program repair
- **Deep Learning** — Neural networks, representation learning, and their applications in SE tasks

## News
{: #news}

- **[Sep 2026]** — Started M.S. in Software Engineering at ECNU
- **[Jun 2023]** — Graduated with B.S. in Computer Science from CQUST

## Education
{: #education}

- **M.S. in Software Engineering** — ECNU, 2026 – 2029 (expected)
- **B.S. in Computer Science** — CQUST (Chongqing University of Science & Technology), 2019 – 2023

## Publications
{: #publications}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
