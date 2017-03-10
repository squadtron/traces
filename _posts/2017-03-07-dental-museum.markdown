---
layout: test
title:  "Dental Museum"
---

This is a test output of the Objects found in the Dental Museum Collection

{% for medical_history_museum_collection in site.medical_history_museum_collection %}
  <h2>{{ medical_history_museum_collection.title }}</h2>
 {% endfor %}
