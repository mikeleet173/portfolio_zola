+++
title = "Home"
template = "index.html"
description = "Welcome to my portfolio - showcasing my latest web development projects and skills"

[extra]
[[extra.projects]]
type = "Web Application"
title = "E-commerce Platform"
description = "Modern e-commerce solution built with React and Node.js. Features include real-time inventory, secure payments, and responsive design."
tech = ["React", "Node.js", "MongoDB", "Redux", "Stripe"]
demo_link = "#"
github_link = "#"
image = "/images/projects/ecommerce.jpg"
featured = true

[[extra.projects]]
type = "Full Stack"
title = "Task Management App"
description = "Collaborative task management platform with real-time updates, team chat, and project analytics dashboard."
tech = ["Vue.js", "Express", "PostgreSQL", "WebSocket", "Docker"]
demo_link = "#"
github_link = "#"
image = "/images/projects/taskapp.jpg"
featured = true

[[extra.projects]]
type = "Static Site"
title = "Portfolio Website"
description = "A modern portfolio website built with Zola static site generator, featuring dark mode and smooth animations."
tech = ["Zola", "HTML5", "CSS3", "JavaScript", "AOS"]
demo_link = "#"
github_link = "#"
image = "/images/projects/portfolio.jpg"
featured = true

# Skills configuration
[extra.skills]
frontend = [
    { name = "HTML5/CSS3", level = 90 },
    { name = "JavaScript (ES6+)", level = 95 },
    { name = "React.js", level = 85 },
    { name = "Vue.js", level = 80 },
    { name = "Responsive Design", level = 90 }
]
backend = [
    { name = "Node.js", level = 85 },
    { name = "Express", level = 80 },
    { name = "MongoDB", level = 75 },
    { name = "PostgreSQL", level = 80 },
    { name = "RESTful APIs", level = 90 }
]
tools = [
    { name = "Git & GitHub", level = 85 },
    { name = "Docker", level = 70 },
    { name = "Webpack", level = 75 },
    { name = "VS Code", level = 90 },
    { name = "Command Line", level = 85 }
]
+++

<section class="hero" data-aos="fade-up">
    <div class="hero-content">
        <h1>Hello, I'm {{ config.extra.author }}</h1>
        <h2>{{ config.extra.role }}</h2>
        <p>I craft modern, responsive web applications with a focus on user experience and performance. Based in {{ config.extra.location }}, I specialize in building exceptional digital experiences.</p>
        <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-secondary">Get In Touch</a>
        </div>
    </div>
</section>

<section id="about" class="about" data-aos="fade-up">
    <h2>About Me</h2>
    <p>I'm a passionate web developer with a keen eye for design and a commitment to creating seamless user experiences. With expertise in both frontend and backend technologies, I bring ideas to life through clean, efficient code.</p>
</section>

<section id="skills" class="skills" data-aos="fade-up">
    <h2>Skills & Expertise</h2>
    <div class="skills-grid">
        <div class="skill-category">
            <h3>Frontend Development</h3>
            <ul>
                {% for skill in extra.skills.frontend %}
                <li>
                    <span class="skill-name">{{ skill.name }}</span>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: {{ skill.level }}%"></div>
                    </div>
                </li>
                {% endfor %}
            </ul>
        </div>
        <div class="skill-category">
            <h3>Backend Development</h3>
            <ul>
                {% for skill in extra.skills.backend %}
                <li>
                    <span class="skill-name">{{ skill.name }}</span>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: {{ skill.level }}%"></div>
                    </div>
                </li>
                {% endfor %}
            </ul>
        </div>
        <div class="skill-category">
            <h3>Tools & Technologies</h3>
            <ul>
                {% for skill in extra.skills.tools %}
                <li>
                    <span class="skill-name">{{ skill.name }}</span>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: {{ skill.level }}%"></div>
                    </div>
                </li>
                {% endfor %}
            </ul>
        </div>
    </div>
</section>
