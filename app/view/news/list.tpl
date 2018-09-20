
<html>
<head>
	<title>Hacker News</title>

</head>
<body>
内容
	<ul class="news-view view">
		{% for item in list %}
			<li class="item">
				<a href="{{item.url}}">{{item.title}}</a>
			</li>
		{% endfor %}
	</ul>
</body>
</html>