---
layout: test
title:  "Dental Museum"
---

This is a test output of a page

{% for dental_museum_collection in site.dental_museum_collection %}
  <h2>{{ dental_museum_collection.title }}</h2>
  {{ dental_museum_collection.content }}
  {{ dental_museum_collection.link }}
  {{ dental_museum_collection.permalink }}
 {% endfor %}
