---
layout: test
title:  "Medical History Museum"
---

This is a test output of the Objects found in the Medical History Museum Collection


{% for medical_history_museum_collection in site.medical_history_museum_collection %}
  <h2>{{ medical_history_museum_collection.title }}</h2>
  <p>test</p>
 {% endfor %}
