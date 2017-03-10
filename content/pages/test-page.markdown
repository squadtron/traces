---
layout: test
title:  "Test Page"
---

This is a test output of a page

{% for dental_museum_collection in site.dental_museum_collection %}
  <h2>{{ dental_museum_collection.title }}</h2>
  <p>test</p>
 {% endfor %}
