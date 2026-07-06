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

- **Ph.D. in [Field]** — [University Name], [Year] – Present
- **M.S. in [Field]** — [University Name], [Year]
- **B.S. in [Field]** — [University Name], [Year]

## Research Experience

- **[Position Title]** — [Lab / Institution], [Year] – Present
  - [Brief description of research work]

- **[Position Title]** — [Lab / Institution], [Year]
  - [Brief description of research work]

## Publications

{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}

## Skills

- **Programming**: Python, [others]
- **Tools & Frameworks**: [list relevant tools]
- **Languages**: Chinese (native), English ([level])

</div>
