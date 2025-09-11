---
layout: blog_index
title: "Blog Entries"
---

<div class="spec-box black">
  <div class="spec-tab"> {{ page.title }}</div>
  {% for post in site.posts %}
    {% if post.summary %}
      <div class="spec-box red">
        <div class="spec-tab">{{ forloop.index0 }}. {{post.title}}</div>
        <div class="spec-content">
          <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
          <p>
              {{ post.summary }}
          </p>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>
