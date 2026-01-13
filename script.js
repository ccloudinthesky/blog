// Global variables
let currentYear = 2025;
// Fallback data
const FALLBACK_ARTICLES = [
    { id: 'ai-meal-plan', title: 'Improving daily life with an AI meal plan', date: '2025-01-18' },
    { id: 'design-thinking', title: 'The Art of Design Thinking in Modern UX', date: '2025-02-15' },
    { id: 'biggest-fear', title: 'How to Conquer Your Biggest Fear', date: '2024-05-09' },
    { id: 'creative-process', title: 'Finding Inspiration in Everyday Moments', date: '2024-08-22' },
];
const FALLBACK_PROJECTS = [
    { id: 'project1', title: 'Automated Order Management System', date: '2025-06-01', tag: 'UI/UX', image: 'images/projects/flower_cover.png' },
    { id: 'project2', title: 'Redesigning Learning Spaces and Innovation Services', date: '2024-11-15', tag: 'Service Design', image: 'images/projects/service_design_cover.png' },
    { id: 'project3', title: 'EventMate: Event Registration System', date: '2024-11-15', tag: 'Web App', image: 'images/projects/eventmate_cover.png' }
];
const FALLBACK_POSTS = {
    'ai-meal-plan': {
        title: 'Improving daily life with an AI meal plan',
        date: '2025-01-18',
        tag: 'Technology',
        image: 'https://picsum.photos/seed/ai/1400/600',
        body: '<p>As a third-year Information Management student, I\'ve always been fascinated by how technology can solve everyday problems. Recently, I\'ve been exploring how artificial intelligence can revolutionize something as fundamental as meal planning.</p><p>In today\'s fast-paced world, maintaining a healthy diet while juggling studies, work, and social life can be incredibly challenging. This article shares my journey of discovering how AI technology is transforming meal planning and nutrition management.</p><h3>The Problem with Traditional Meal Planning</h3><p>Traditional meal planning often involves:</p><ul><li>Spending hours browsing recipes</li><li>Calculating nutritional values manually</li><li>Creating shopping lists from scratch</li><li>Dealing with food waste from poor planning</li></ul><p>As a busy student, I found myself defaulting to quick, often unhealthy meals simply because planning was too time-consuming.</p><h3>How AI Changes Everything</h3><p>Modern AI meal planning apps analyze multiple factors to create personalized recommendations:</p><ul><li><strong>Dietary preferences:</strong> Vegetarian, vegan, keto, Mediterranean</li><li><strong>Health goals:</strong> Weight loss, muscle gain, energy optimization</li><li><strong>Available ingredients:</strong> What\'s in your fridge right now</li><li><strong>Time constraints:</strong> 15-minute meals vs. weekend cooking projects</li><li><strong>Budget considerations:</strong> Cost-effective meal suggestions</li></ul><h3>My Personal Experience</h3><p>After using an AI meal planner for three months, I noticed significant improvements:</p><ul><li>40% reduction in food waste</li><li>More diverse and nutritious meals</li><li>2 hours saved per week on meal planning</li><li>Better grocery shopping efficiency</li></ul><blockquote><p>"The AI doesn\'t just suggest recipes—it understands my lifestyle and adapts to my changing needs. It\'s like having a personal nutritionist who knows me better than I know myself."</p></blockquote><h3>The Technology Behind It</h3><p>These systems use machine learning algorithms that:</p><ul><li>Learn from your food preferences and feedback</li><li>Analyze nutritional databases in real-time</li><li>Consider seasonal availability and pricing</li><li>Adapt to your cooking skill level</li></ul><h3>Looking Forward</h3><p>As AI technology continues to evolve, I\'m excited about the potential for even more personalized and intelligent meal planning. The future might include integration with smart kitchen appliances, real-time health monitoring, and even more sophisticated nutritional analysis.</p><p>For now, AI meal planning has become an essential tool in my daily routine, helping me maintain a healthy lifestyle while focusing on my studies and other priorities.</p>'
    },
    'design-thinking': {
        title: 'The Art of Design Thinking in Modern UX',
        date: '2025-02-15',
        tag: 'Design',
        image: 'https://picsum.photos/seed/design/1400/600',
        body: '<p>Coming from an Information Management background, I\'ve always been drawn to the intersection of technology and human behavior. Design thinking has become one of the most valuable frameworks I\'ve learned for creating meaningful digital experiences.</p><p>Design thinking isn\'t just a methodology—it\'s a mindset that puts human needs at the center of every problem-solving process. In this article, I\'ll share my understanding of how this approach transforms user experience design.</p><h3>What is Design Thinking?</h3><p>Design thinking is a human-centered approach to innovation that draws from the designer\'s toolkit to integrate the needs of people, the possibilities of technology, and the requirements for business success.</p><p>It\'s based on the fundamental belief that all great innovations begin with understanding people and their needs.</p><h3>The Five Stages of Design Thinking</h3><ol><li><strong>Empathize:</strong> Understand your users\' needs, challenges, and motivations through observation and interviews</li><li><strong>Define:</strong> Clearly articulate the problem you\'re solving based on user insights</li><li><strong>Ideate:</strong> Generate creative solutions without constraints or judgment</li><li><strong>Prototype:</strong> Build tangible representations of your ideas to test and iterate</li><li><strong>Test:</strong> Validate solutions with real users and gather feedback</li></ol><h3>Applying Design Thinking to UX</h3><p>In user experience design, this process helps create products that truly resonate with users. It\'s not just about making things look good—it\'s about solving real problems that people face in their daily lives.</p><p>During my studies, I\'ve applied design thinking to several projects, including a mobile app for university students to manage their course schedules and assignments.</p><h3>Key Principles That Guide My Work</h3><ul><li><strong>Human-centered approach:</strong> Always start with user research and empathy</li><li><strong>Collaborative mindset:</strong> Involve stakeholders and users throughout the process</li><li><strong>Bias toward action:</strong> Build prototypes early and often</li><li><strong>Embrace failure as learning:</strong> Each iteration teaches us something valuable</li><li><strong>Iterative process:</strong> Design is never finished, only improved</li></ul><h3>Real-World Application</h3><p>In one of my recent projects, I used design thinking to redesign a university course registration system. Through user interviews, I discovered that students were frustrated by the complex interface and lack of clear information about course requirements.</p><p>The design thinking process led me to create a more intuitive interface that:</p><ul><li>Simplified the course selection process</li><li>Provided clear prerequisite information</li><li>Offered visual course scheduling</li><li>Included conflict detection and resolution</li></ul><h3>The Impact of Design Thinking</h3><p>By following these principles, designers can create more meaningful and effective user experiences that truly make a difference in people\'s lives. It\'s not just about aesthetics—it\'s about understanding and solving real human problems.</p><p>As I continue my journey in Information Management, design thinking remains a cornerstone of my approach to creating technology solutions that serve people first.</p>'
    },
    'biggest-fear': {
        title: 'How to Conquer Your Biggest Fear',
        date: '2024-05-09',
        tag: 'Mindset',
        image: 'https://picsum.photos/seed/fear/1400/600',
        body: '<p>Fear is one of the most powerful emotions we experience as humans. It can protect us from danger, but it can also hold us back from reaching our full potential. As someone who has struggled with various fears throughout my academic and personal journey, I want to share what I\'ve learned about facing and overcoming them.</p><p>This isn\'t about eliminating fear entirely—that would be both impossible and unwise. Instead, it\'s about learning to work with fear, understand it, and use it as a tool for growth rather than an obstacle to progress.</p><h3>Understanding Fear</h3><p>Fear often stems from our brain\'s natural protective mechanisms. When we encounter something new or challenging, our amygdala (the fear center of the brain) activates, preparing us for fight, flight, or freeze responses.</p><p>However, in modern life, many of our fears are not about physical survival but about:</p><ul><li>Failure and rejection</li><li>Judgment from others</li><li>Uncertainty about the future</li><li>Not being good enough</li><li>Change and the unknown</li></ul><h3>My Personal Journey with Fear</h3><p>One of my biggest fears was public speaking. As a student, I would avoid presentations and group discussions whenever possible. The thought of standing in front of a class made my heart race and my palms sweat.</p><p>But I realized that this fear was holding me back from:</p><ul><li>Sharing my ideas effectively</li><li>Building confidence in my abilities</li><li>Networking and making connections</li><li>Advancing in my career</li></ul><h3>Strategies That Helped Me</h3><p>Here are the techniques I used to gradually overcome my fear of public speaking:</p><h4>1. Start Small</h4><p>I began by speaking up in small group discussions, then moved to asking questions in class, and eventually volunteered for presentations.</p><h4>2. Prepare Thoroughly</h4><p>Preparation reduces uncertainty, which is a major source of fear. I would practice my presentations multiple times and anticipate potential questions.</p><h4>3. Reframe the Narrative</h4><p>Instead of thinking "I\'m going to embarrass myself," I started thinking "I\'m sharing valuable information that could help others."</p><h4>4. Embrace Imperfection</h4><p>I learned that making mistakes is part of the learning process. Each presentation, even if not perfect, was a step forward.</p><h4>5. Seek Support</h4><p>I joined a public speaking club and found mentors who had overcome similar fears.</p><h3>The Science Behind Fear Management</h3><p>Research shows that exposure therapy—gradually facing your fears in a controlled way—is one of the most effective methods for overcoming phobias and anxieties.</p><p>When we repeatedly expose ourselves to feared situations without negative consequences, our brain learns that the fear response is unnecessary, and the fear gradually diminishes.</p><h3>Building a Fear-Facing Mindset</h3><p>Here are some principles that can help anyone face their fears:</p><ul><li><strong>Identify your specific fears:</strong> Write them down and examine them objectively</li><li><strong>Understand the worst-case scenario:</strong> Often, it\'s not as bad as we imagine</li><li><strong>Focus on growth:</strong> View challenges as opportunities to develop new skills</li><li><strong>Celebrate small wins:</strong> Acknowledge every step forward, no matter how small</li><li><strong>Practice self-compassion:</strong> Be kind to yourself during the process</li></ul><h3>The Rewards of Facing Fear</h3><p>Overcoming my fear of public speaking has opened doors I never imagined possible. I\'ve been able to:</p><ul><li>Present my research at academic conferences</li><li>Lead team projects with confidence</li><li>Mentor other students who share similar fears</li><li>Build stronger professional relationships</li></ul><h3>Conclusion</h3><p>Fear is a natural part of being human, but it doesn\'t have to control our lives. By understanding our fears, taking small steps to face them, and maintaining a growth mindset, we can transform fear from an obstacle into a catalyst for personal development.</p><p>Remember: courage isn\'t the absence of fear—it\'s the decision to act despite it. Every time we choose to face our fears, we become stronger, more confident, and more capable of achieving our goals.</p>'
    },
    'creative-process': {
        title: 'Finding Inspiration in Everyday Moments',
        date: '2024-08-22',
        tag: 'Creativity',
        image: 'https://picsum.photos/seed/creative/1400/600',
        body: '<p>As someone who\'s passionate about photography, design, and creative expression, I\'ve learned that inspiration doesn\'t always come from grand gestures or extraordinary experiences. Often, the most profound creative insights emerge from the most ordinary moments of daily life.</p><p>In this article, I want to share how I\'ve cultivated a mindset that allows me to find beauty, meaning, and creative potential in the seemingly mundane aspects of everyday existence.</p><h3>Redefining Inspiration</h3><p>Many people wait for inspiration to strike like lightning—a sudden, dramatic moment that transforms their creative work. But I\'ve discovered that inspiration is more like a muscle that needs regular exercise.</p><p>True inspiration comes from:</p><ul><li>Paying attention to details others overlook</li><li>Asking "what if" questions about ordinary situations</li><li>Finding patterns and connections between seemingly unrelated things</li><li>Maintaining curiosity about the world around us</li></ul><h3>My Daily Practice of Mindful Observation</h3><p>Every morning, I take a 15-minute walk around my neighborhood with no specific destination in mind. During these walks, I practice what I call "creative observation"—actively looking for interesting details, textures, colors, and interactions.</p><p>Some of my best photography ideas have come from these walks:</p><ul><li>The way morning light hits a particular building</li><li>Interesting shadows cast by everyday objects</li><li>Unexpected color combinations in nature</li><li>Human interactions that tell a story</li></ul><h3>Finding Stories in the Ordinary</h3><p>One of my favorite creative exercises is to imagine the story behind ordinary objects or situations. For example:</p><ul><li>Who sat on that park bench before me?</li><li>What conversations happened in this coffee shop?</li><li>How did this building change over the years?</li><li>What emotions does this color combination evoke?</li></ul><p>This practice helps me see the world with fresh eyes and discover creative possibilities everywhere.</p><h3>Techniques for Cultivating Creative Awareness</h3><h4>1. The 5-Minute Detail Hunt</h4><p>Set a timer for 5 minutes and find as many interesting details as possible in your immediate environment. Look for textures, colors, shapes, and patterns you\'ve never noticed before.</p><h4>2. The "What If" Game</h4><p>Take any ordinary object or situation and ask "What if..." questions. What if this chair could talk? What if this street was underwater? What if this building was made of glass?</p><h4>3. The Emotion Mapping Exercise</h4><p>Walk through a familiar space and identify what emotions different areas evoke. Notice how lighting, colors, and textures affect your mood and energy.</p><h4>4. The Pattern Recognition Challenge</h4><p>Look for repeating patterns in your environment—in architecture, nature, human behavior, or even your own daily routines.</p><h3>Documenting Your Discoveries</h3><p>I keep a creative journal where I document interesting observations, ideas, and inspirations. This isn\'t a formal diary, but rather a collection of:</p><ul><li>Quick sketches and doodles</li><li>Photo references</li><li>Color combinations that catch my eye</li><li>Interesting quotes or conversations</li><li>Ideas for future projects</li></ul><h3>From Observation to Creation</h3><p>The key is not just to observe, but to actively transform your observations into creative work. Here\'s how I do it:</p><ol><li><strong>Capture:</strong> Take photos, make sketches, or write notes about interesting observations</li><li><strong>Reflect:</strong> Think about what makes this observation interesting or meaningful</li><li><strong>Connect:</strong> Look for connections to other ideas or experiences</li><li><strong>Create:</strong> Use these insights to inform your creative projects</li></ol><h3>The Ripple Effect of Creative Awareness</h3><p>Developing this mindful approach to everyday life has had unexpected benefits beyond my creative work:</p><ul><li>Increased appreciation for the present moment</li><li>Better problem-solving skills in academic work</li><li>Stronger connections with people and places</li><li>Reduced stress and anxiety</li><li>Greater sense of purpose and meaning</li></ul><h3>Challenges and Solutions</h3><p>Of course, maintaining this creative awareness isn\'t always easy. Life gets busy, and it\'s easy to fall back into autopilot mode.</p><p>Here are some strategies that help me stay engaged:</p><ul><li><strong>Set reminders:</strong> Use phone alerts to prompt mindful observation</li><li><strong>Change your routine:</strong> Take different routes, try new activities</li><li><strong>Join creative communities:</strong> Share observations with others who appreciate them</li><li><strong>Be patient with yourself:</strong> It\'s okay to have days when inspiration feels distant</li></ul><h3>Conclusion</h3><p>Finding inspiration in everyday moments isn\'t about waiting for the perfect conditions or extraordinary experiences. It\'s about developing a mindset that sees creative potential in the ordinary, the overlooked, and the seemingly mundane.</p><p>By practicing mindful observation and maintaining curiosity about the world around us, we can transform our daily lives into a constant source of inspiration and creative fuel. The beauty is that this approach is available to everyone, everywhere, at any time.</p><p>Start small, be patient with yourself, and remember that every great creative work begins with a single moment of noticing something that others might have missed.</p>'
    }
};
// Utility functions
function renderTag(tag) {
    if (!tag)
        return '';
    return `<span class="badge">${tag}</span>`;
}
// Navigation toggle functionality
function initializeNavigation() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            const isOpen = links.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });
    }
}
// Data loading functions
async function loadArticles() {
    try {
        console.log('Attempting to load articles from content/articles.json');
        const response = await fetch('content/articles.json');
        console.log('Response status:', response.status);
        if (response.ok) {
            const articlesData = await response.json();
            console.log('Loaded articles:', articlesData);
            return Object.entries(articlesData).map(([id, article]) => ({
                id,
                title: article.title,
                date: article.date
            }));
        }
        else {
            console.error('Failed to load articles. Status:', response.status);
        }
    }
    catch (error) {
        console.error('Error loading articles:', error);
        console.log('This might be due to CORS restrictions. Try running a local server.');
    }
    return [];
}
async function loadProjects() {
    try {
        console.log('Attempting to load projects from content/projects.json');
        const response = await fetch('content/projects.json');
        console.log('Response status:', response.status);
        if (response.ok) {
            const projectsData = await response.json();
            console.log('Loaded projects:', projectsData);
            return Object.entries(projectsData).map(([id, project]) => ({
                id,
                title: project.title,
                date: project.date,
                tag: project.tag,
                image: project.image,
                body: project.body
            }));
        }
        else {
            console.error('Failed to load projects. Status:', response.status);
        }
    }
    catch (error) {
        console.error('Error loading projects:', error);
        console.log('This might be due to CORS restrictions. Try running a local server.');
    }
    return [];
}
async function loadPostContent(slug) {
    try {
        console.log('Loading content for slug:', slug);
        // If slug starts with 'project', try projects.json first
        if (slug.startsWith('project')) {
            console.log('Slug starts with project, loading from projects.json');
            const projectsResponse = await fetch(`content/projects.json`);
            if (projectsResponse.ok) {
                const projects = await projectsResponse.json();
                console.log('Projects loaded:', projects);
                if (projects[slug]) {
                    console.log('Found project in JSON:', projects[slug]);
                    return {
                        title: projects[slug].title,
                        date: projects[slug].date,
                        tag: projects[slug].tag,
                        image: projects[slug].image,
                        body: projects[slug].body
                    };
                }
                else {
                    console.log('Project not found in JSON for slug:', slug);
                }
            }
            else {
                console.log('Failed to load projects.json, status:', projectsResponse.status);
            }
        }
        // Try to load from articles.json
        const articlesResponse = await fetch(`content/articles.json`);
        if (articlesResponse.ok) {
            const articles = await articlesResponse.json();
            if (articles[slug]) {
                return {
                    title: articles[slug].title,
                    date: articles[slug].date,
                    tag: articles[slug].tag,
                    image: articles[slug].image,
                    body: articles[slug].body
                };
            }
        }
        // If not found in articles and not a project, try projects.json as fallback
        if (!slug.startsWith('project')) {
            const projectsResponse = await fetch(`content/projects.json`);
            if (projectsResponse.ok) {
                const projects = await projectsResponse.json();
                if (projects[slug]) {
                    return {
                        title: projects[slug].title,
                        date: projects[slug].date,
                        tag: projects[slug].tag,
                        image: projects[slug].image,
                        body: projects[slug].body
                    };
                }
            }
        }
        // Fallback to hardcoded content
        if (FALLBACK_POSTS[slug]) {
            console.log('Using fallback content for:', slug);
            return FALLBACK_POSTS[slug];
        }
        // Final fallback
        return {
            title: 'Article Not Found',
            date: new Date().toISOString().split('T')[0],
            tag: 'Error',
            image: 'https://picsum.photos/seed/error/1400/600',
            body: '<p>The requested article could not be found.</p>'
        };
    }
    catch (error) {
        console.error('Error loading content:', error);
        // Use fallback content if fetch fails
        if (FALLBACK_POSTS[slug]) {
            console.log('Using fallback content due to error for:', slug);
            return FALLBACK_POSTS[slug];
        }
        return {
            title: 'Error Loading Content',
            date: new Date().toISOString().split('T')[0],
            tag: 'Error',
            image: 'https://picsum.photos/seed/error/1400/600',
            body: '<p>There was an error loading the content. Please try again later.</p>'
        };
    }
}
// UI rendering functions
function renderHomePosts(articles) {
    const homeList = document.getElementById('home-posts');
    if (homeList) {
        const latest = articles.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
        latest.forEach(p => {
            const d = new Date(p.date);
            const li = document.createElement('li');
            li.className = 'post-row';
            li.innerHTML = `<span class="post-date">${d.toLocaleString('en-US', { month: 'short' })} ${d.getDate()}</span>
                            <a class="post-title" href="post.html?slug=${p.id}">${p.title}</a>
                            <span class="post-arrow">→</span>`;
            homeList.appendChild(li);
        });
    }
}
function renderArticleList(articles, year) {
    const postList = document.getElementById('post-list');
    if (postList) {
        postList.innerHTML = '';
        const filteredArticles = articles.filter(p => new Date(p.date).getFullYear() === year);
        console.log(`Filtering for year ${year}:`, filteredArticles);
        filteredArticles.sort((a, b) => b.date.localeCompare(a.date))
            .forEach((p, index) => {
            const d = new Date(p.date);
            const li = document.createElement('li');
            li.className = 'post-row';
            li.innerHTML = `<span class="post-date">${d.toLocaleString('en-US', { month: 'short' })} ${d.getDate()}</span>
                                <a class="post-title" href="post.html?slug=${p.id}">${p.title}</a>
                                <span class="post-arrow">→</span>`;
            postList.appendChild(li);
        });
    }
}
function extractTechnologies(body) {
    if (!body || !Array.isArray(body)) return [];
    const bodyText = body.join(' ');
    const techMatch = bodyText.match(/<h3>Technologies Used<\/h3>[\s\S]*?<ul>([\s\S]*?)<\/ul>/i);
    if (techMatch) {
        const listItems = techMatch[1].match(/<li>(.*?)<\/li>/g);
        if (listItems) {
            return listItems.map(item => {
                // Extract only the tool name (before "for" or any description)
                let tech = item.replace(/<[^>]*>/g, '').trim();
                // Remove "for xxx" part
                tech = tech.split(/ for | - |: /)[0].trim();
                return tech;
            });
        }
    }
    return [];
}

function extractLinks(body) {
    if (!body || !Array.isArray(body)) return { github: '', demo: '' };
    const bodyText = body.join(' ');
    const links = { github: '', demo: '' };
    
    // Try to find GitHub link
    const githubMatch = bodyText.match(/github\.com\/[^\s"']+/i);
    if (githubMatch) {
        links.github = 'https://' + githubMatch[0];
    }
    
    // Try to find demo/video link
    const demoMatch = bodyText.match(/(?:demo|video|youtube|vimeo)[^\s"']*https?:\/\/[^\s"']+/i);
    if (demoMatch) {
        const urlMatch = demoMatch[0].match(/https?:\/\/[^\s"']+/);
        if (urlMatch) {
            links.demo = urlMatch[0];
        }
    }
    
    return links;
}

function extractDescription(body) {
    if (!body || !Array.isArray(body)) return '';
    // Get the first paragraph that's not a heading
    for (let i = 0; i < body.length; i++) {
        const text = body[i];
        if (text.startsWith('<p>') && !text.includes('<h3>')) {
            return text.replace(/<[^>]*>/g, '').trim();
        }
    }
    return '';
}

function renderProjects(projects) {
    const projectsList = document.querySelector('.projects-list');
    const folderTabs = document.querySelector('.folder-tabs');
    const folderContent = document.querySelector('.folder-content');
    
    if (!projectsList || !folderTabs || !folderContent) {
        console.error('Projects elements not found!');
        return;
    }
    
    if (projects.length > 0) {
        console.log('Loading', projects.length, 'projects');
        
        // Clear existing content
        projectsList.innerHTML = '';
        folderTabs.innerHTML = '';
        
        let activeProjectId = projects[0].id;
        
        // Render left column - project list (only one visible at a time)
        projects.forEach((project, index) => {
            const projectNumber = String(index + 1).padStart(2, '0');
            
            // Create project item
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.dataset.projectId = project.id;
            if (index === 0) {
                projectItem.classList.add('active');
            }
            
            // Get images (one large, two small - using same image for now)
            const largeImage = project.image;
            const smallImages = [project.image, project.image];
            
            projectItem.innerHTML = `
                <div class="project-number">(${projectNumber})</div>
                <div class="project-title">${project.title}</div>
                <div class="project-images">
                    <div class="project-image large">
                        <img src="${largeImage}" alt="${project.title}">
                    </div>
                    ${smallImages.map(img => `
                        <div class="project-image small">
                            <img src="${img}" alt="${project.title}">
                        </div>
                    `).join('')}
                </div>
            `;
            
            projectsList.appendChild(projectItem);
            
            // Create folder tab
            const tab = document.createElement('button');
            tab.className = 'folder-tab';
            tab.textContent = projectNumber;
            tab.dataset.projectId = project.id;
            if (index === 0) {
                tab.classList.add('active');
            }
            
            tab.addEventListener('click', () => {
                activeProjectId = project.id;
                updateActiveProject(projects, activeProjectId);
            });
            
            folderTabs.appendChild(tab);
        });
        
        // Render initial project details
        updateProjectDetails(projects[0]);
    } else {
        console.log('No projects loaded, showing fallback message');
        projectsList.innerHTML = '<p>No projects available at the moment.</p>';
    }
}

function updateActiveProject(projects, projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    // Update active states for left column (only one visible)
    document.querySelectorAll('.project-item').forEach(item => {
        item.classList.toggle('active', item.dataset.projectId === projectId);
    });
    
    // Update active states for folder tabs
    document.querySelectorAll('.folder-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.projectId === projectId);
    });
    
    // Update project details in right column
    updateProjectDetails(project);
}

function updateProjectDetails(project) {
    const categoryEl = document.querySelector('.project-category');
    const descriptionEl = document.querySelector('.project-description');
    const technologiesEl = document.querySelector('.project-technologies');
    const linksEl = document.querySelector('.project-links');
    
    if (!categoryEl || !descriptionEl || !technologiesEl || !linksEl) return;
    
    // Category
    categoryEl.innerHTML = renderTag(project.tag);
    
    // Description
    const description = extractDescription(project.body);
    descriptionEl.innerHTML = `<p>${description || 'No description available.'}</p>`;
    
    // Technologies (only tool names)
    const technologies = extractTechnologies(project.body);
    if (technologies.length > 0) {
        technologiesEl.innerHTML = technologies.map(tech => 
            `<span class="keyword-tag">${tech}</span>`
        ).join('');
    } else {
        technologiesEl.innerHTML = '';
    }
    
    // Links (GitHub and Demo)
    const links = extractLinks(project.body);
    linksEl.innerHTML = `
        ${links.github ? `<a href="${links.github}" target="_blank" rel="noreferrer" class="project-link">GitHub</a>` : ''}
        ${links.demo ? `<a href="${links.demo}" target="_blank" rel="noreferrer" class="project-link">Demo Video</a>` : ''}
    `;
    
    // If no links, show placeholder buttons
    if (!links.github && !links.demo) {
        linksEl.innerHTML = `
            <a href="#" class="project-link" style="opacity: 0.5; pointer-events: none;">GitHub</a>
            <a href="#" class="project-link" style="opacity: 0.5; pointer-events: none;">Demo Video</a>
        `;
    }
}
function renderPostContent(post) {
    // Hide loading and show content
    const loadingElement = document.getElementById('loading');
    const contentElement = document.getElementById('post-content');
    if (loadingElement)
        loadingElement.style.display = 'none';
    if (contentElement)
        contentElement.classList.add('loaded');
    const titleElement = document.getElementById('post-title');
    const dateElement = document.getElementById('post-date');
    const tagElement = document.getElementById('post-tag');
    const imageElement = document.getElementById('post-image');
    const bodyElement = document.getElementById('post-body');
    if (titleElement)
        titleElement.textContent = post.title;
    if (dateElement)
        dateElement.textContent = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    if (tagElement)
        tagElement.innerHTML = renderTag(post.tag);
    if (imageElement)
        imageElement.src = post.image;
    if (bodyElement) {
        if (Array.isArray(post.body)) {
            bodyElement.innerHTML = post.body.join('');
        }
        else {
            bodyElement.innerHTML = post.body;
        }
    }
    console.log('Post loaded successfully:', post.title);
}
// Event handlers
function handleYearFilterClick(event) {
    const btn = event.target.closest('button[data-year]');
    if (!btn)
        return;
    currentYear = Number(btn.dataset.year);
    const yearFilter = document.getElementById('year-filter');
    if (yearFilter) {
        [...yearFilter.querySelectorAll('button')].forEach(b => b.classList.toggle('selected', b === btn));
    }
    // Re-render articles for the selected year
    loadArticles().then(articles => {
        if (articles.length === 0) {
            articles = FALLBACK_ARTICLES;
        }
        renderArticleList(articles, currentYear);
    });
}
// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    initializeNavigation();
    // Load and populate articles
    loadArticles().then(articles => {
        // Use fallback if no articles loaded
        if (articles.length === 0) {
            console.log('Using fallback articles data');
            articles = FALLBACK_ARTICLES;
        }
        console.log('Articles to display:', articles);
        // Render home posts
        renderHomePosts(articles);
        // Setup year filter
        const yearFilter = document.getElementById('year-filter');
        if (yearFilter) {
            renderArticleList(articles, currentYear);
            yearFilter.addEventListener('click', handleYearFilterClick);
        }
    });
    // Load and populate projects
    loadProjects().then(projects => {
        console.log('Projects to display:', projects);
        // Use fallback if no projects loaded
        if (projects.length === 0) {
            console.log('Using fallback projects data');
            // Convert fallback to include body for description extraction
            projects = FALLBACK_PROJECTS.map(p => ({
                ...p,
                body: ['<p>Project description will be loaded from projects.json</p>']
            }));
        }
        renderProjects(projects);
    }).catch(error => {
        console.error('Error loading projects:', error);
        console.log('Using fallback projects due to error');
        // Convert fallback to include body for description extraction
        const fallbackProjects = FALLBACK_PROJECTS.map(p => ({
            ...p,
            body: ['<p>Project description will be loaded from projects.json</p>']
        }));
        renderProjects(fallbackProjects);
    });
    // Post page rendering
    if (location.pathname.endsWith('post.html')) {
        const params = new URLSearchParams(location.search);
        const slug = params.get('slug') || 'ai-meal-plan';
        // Load and display content
        loadPostContent(slug).then(post => {
            console.log('Loading post for slug:', slug);
            console.log('Post content:', post);
            if (post) {
                renderPostContent(post);
            }
            else {
                // Show error if no post found
                const loadingElement = document.getElementById('loading');
                if (loadingElement)
                    loadingElement.innerHTML = 'Article not found';
            }
        }).catch(error => {
            console.error('Error loading post:', error);
            const loadingElement = document.getElementById('loading');
            if (loadingElement)
                loadingElement.innerHTML = 'Error loading article';
        });
    }
});
// Scroll Animation System
class ScrollAnimator {
    constructor() {
        this.elements = document.querySelectorAll('.scroll-animate');
        this.init();
    }
    init() {
        // Create intersection observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Stop observing once animated
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of element is visible
            rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
        });
        // Start observing all elements
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }
    // Method to add new elements to observe (useful for dynamically loaded content)
    observeNewElements() {
        const newElements = document.querySelectorAll('.scroll-animate:not([data-observed])');
        newElements.forEach(element => {
            element.setAttribute('data-observed', 'true');
            this.observer.observe(element);
        });
    }
    // Method to refresh the animator (useful when content is dynamically loaded)
    refresh() {
        this.elements = document.querySelectorAll('.scroll-animate');
        this.observeNewElements();
    }
}
// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimator();
});
// Re-initialize animations for dynamically loaded content
window.addEventListener('load', () => {
    // Small delay to ensure all content is loaded
    setTimeout(() => {
        const animator = new ScrollAnimator();
        // Make animator globally available for dynamic content
        window.scrollAnimator = animator;
    }, 100);
});
export {};
//# sourceMappingURL=script.js.map