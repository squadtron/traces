---
title: 'Medical History Museum'
location-lat: '-37.8011657'
location-long: '144.9564851'
hero-image: ''
layout: building
---
This is a test output of the Objects found in the Medical History Museum Collection

{% comment %} Here we print all the objects associated with the medical history museum's collection {% endcomment %}

{% for medical_history_museum_collection in site.medical_history_museum_collection %}
<h2><a href="{{ medical_history_museum_collection.url | prepend: site.baseurl }}">
	{{ medical_history_museum_collection.title }}
</a></h2>
{% endfor %}
	
	