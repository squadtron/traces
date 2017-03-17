---
title: 'Dental Museum'
location-lat: ''
location-long: ''
hero-image: ''
layout: building
---

The Dental Hospital, Royal College of Dentistry and Melbourne University Dental School have had a series of residences throughout Melbourne during their long history. The first hospital was on Lonsdale Street, located above an undertaker. The hospital soon outgrew this space and in 1897 moved to another premises on Lonsdale Street, this time above a dressmaker. In 1907, the same year that the first woman graduated, the college and hospital moved to Spring St where it stayed until it was merged into the University of Melbourne, Faculty of Dentistry and moved to 711 Elizabeth St. The Faculty moved in 2005 to join the Royal Dental Hospital of Melbourne at 720 Swanston Street.

"Explore, inquire and enjoy the social history of medicine and its role in society through a diverse exhibition program. Visit the nineteenth century Savory and Moore Pharmacy complete with pharmaceutical jars and equipment.  The Medical History Museum collection has more than 6000 items and changing exhibition program. Opened in 1967, established by a grant from the Wellcome Trust. 

The Medical History Museum is a free museum for those inquisitive about medicine's contribution to scientific discovery and the community. It is open to the general public. 

Opening hours are: Monday to Friday 10.00am to 5.00pm, Saturday 1.00pm to 2.00pm. "

{% for dental_museum_collection in site.dental_museum_collection %}
<h2><a href="{{ dental_museum_collection.url | prepend: site.baseurl }}">
	{{ dental_museum_collection.title }}
</a></h2>

<!--   {{ dental_museum_collection.content }} -->
{% endfor %}

