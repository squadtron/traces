---
layout: building-list
title: Buildings Listing
permalink: /buildings/
menu-weight: 1
---
This will be the buildings listing page, hopefully ordered by proximity


{% comment %} Here we print all the buildings, sorted by proximity {% endcomment %}

{% for buildings in site.buildings %}

<h2><a href="{{ buildings.url | prepend: site.baseurl }}">
	{{ buildings.title }}
</a></h2>

{% comment %} check if building has lat / long coordinates {% endcomment %}
{% if buildings.location-lat != empty and buildings.location-long != empty %}
Location: 
{{ buildings.location-lat }}, 
{{ buildings.location-long }}
{% endif %}

{% endfor %}
