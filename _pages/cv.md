---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="reveal" markdown="1">

## Education

- **M.S. in Software Engineering** — ECNU (East China Normal University), 2026 – 2029 (expected)
- **B.S. in Computer Science** — CQUST (Chongqing University of Science & Technology), 2019 – 2023

## Research Experience

- **Graduate Researcher** — ECNU, 2026 – Present
  - Focus on deep learning applications in software engineering

## Publications

{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}

## Skills

- **Programming**: Python, [others]
- **Tools & Frameworks**: [list relevant tools]
- **Languages**: Chinese (native), English ([level])

</div>
