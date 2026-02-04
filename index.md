---
layout: index
title: "Lenix Carter"
author: "Lenix Carter"
---

<header>
  {%- comment -%}
  <nav>
    <ul>
      <li><a href="{{ '/' | relative_url }}" class="active">Home</a></li>
      <li><a href="{{ '/about' | relative_url }}">About</a></li>
      <li><a href="{{ '/portfolio' | relative_url }}">Portfolio</a></li>
      <li><a href="{{ '/contact' | relative_url }}">Contact</a></li>
    </ul>
  </nav>
  {%- endcomment -%}
</header>

<main>
  <div class="spec-box black">
    <div class="spec-tab">0. About Me</div>
    <div class="spec-content">
      Howdy, I'm Lenix. I do computers. I build machine learning and AI systems, 
      I optimize pipelines, and I investigate novel architectures.
    </div>
  </div>

  <div class="spec-box black">
    <div class="spec-tab">1. WORK</div>
    <div class="spec-content">
      Below are some selected personal projects:
    </div>

    <div class="spec-box red">
      <div class="spec-tab">1a. Semantic Code Diff Analyzer</div>
      <div class="spec-content">
        <p>
          An LLM-powered agentic testing framework that identifies semantic differences 
          between functionally similar code snippets through adversarial test generation 
          and execution. Built on LangGraph, the tool implements a stateful directed graph 
          where two agents work adversarially - one generating targeted test cases based on 
          semantic analysis, the other evaluating coverage gaps and challenging assumptions. 
          The agents iterate until reaching high confidence that all behavioral differences 
          have been identified. Unlike traditional diff tools that compare syntax, this 
          approach detects behavioral differences by executing both code versions in isolated 
          subprocesses and producing confidence-scored semantic diff reports along with 
          reusable test cases.
        </p>
        
        <a href="/2025/12/18/semantic-diff.html">
          Read my article about building an adversarial AI testing framework.
        </a>
    
        <ul class="highlight-list">
          <li class="highlight-item">Python</li>
          <li class="highlight-item">LangGraph</li>
          <li class="highlight-item">Gemini</li>
          <li class="highlight-item">LLMs</li>
          <li class="highlight-item">Agentic AI</li>
          <li class="highlight-item">Testing</li>
          <li class="highlight-item">Code Analysis</li>
          <li class="highlight-item">State Management</li>
        </ul>
      </div>
    </div>

    <div class="spec-box red">
      <div class="spec-tab">1b. Sentiment Analysis API</div>
      <div class="spec-content">
        <p>
          This project is a production-ready sentiment analysis API built with FastAPI,
          powered by a custom-trained DistilBERT model for fast and efficient text
          classification. Trained on IMDB movie reviews, the model provides high-quality
          sentiment predictions. The API offers real-time analysis with a focus on both
          accuracy and performance. Docker containerization ensures easy deployment, and
          Prometheus monitoring tracks key metrics like request count, response time, and
          error rates. The CI/CD pipeline, managed with GitHub Actions, automates testing
          and code validation. This project demonstrates MLOps best practices
          for training, deploying, and maintaining machine learning models in production.
        </p>
        
        <a href="https://medium.com/towards-data-science/minimum-viable-mle-306877dd6030">
          Read my article about it on Towards Data Science.
        </a>

        <ul class="highlight-list">
          <li class="highlight-item">Python</li>
          <li class="highlight-item">FastAPI</li>
          <li class="highlight-item">Prometheus</li>
          <li class="highlight-item">HuggingFace</li>
          <li class="highlight-item">LLMs</li>
          <li class="highlight-item">MLOPs</li>
          <li class="highlight-item">AI</li>
          <li class="highlight-item">CI/CD</li>
          <li class="highlight-item">NLP</li>
        </ul>
      </div>
    </div>

    <div class="spec-box red">
      <div class="spec-tab">1c. Daylio Analysis</div>
      <div class="spec-content">
        <p>
          This project allows users of the popular mood tracking app
          to analyze both the trends of their moods, as well as 
          identifying impact of activities on their mood.
          <br>
          This development requires heavy manipulation of the data,
          time-series analysis, statistical analysis, frequent 
          pattern mining, and association mining. 
        </p>
        <a href="https://daylio-inspector.streamlit.app/">
          Try it on Streamlit.
        </a>

        <ul class="highlight-list">
          <li class="highlight-item">Python</li>
          <li class="highlight-item">Data Mining</li>
          <li class="highlight-item">Time-Series</li>
          <li class="highlight-item">Forecasting</li>
          <li class="highlight-item">Streamlit</li>
          <li class="highlight-item">mlxtend</li>
          <li class="highlight-item">scipy</li>
          <li class="highlight-item">plotly</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="spec-box black">
    <div class="spec-tab">2. EDUCATION</div>
    <div class="spec-content">
      <p>I studied Mathematics and Computer Science 
      at Emory University for my Undergraduate Degree 
      and am studying for a Master's Degree in Computer Science at the 
      Georgia Institute of Technology.
      Below are some Selected Courses:</p>
    </div>

    <div class="spec-box red">
      <div class="spec-tab">2a. Georgia Institute of Technology</div>
      <div class="spec-content">
        <p>
          As a student at GaTech, I am studying Computer Science with 
          a specialization in machine learning.  
          While at GaTech I have taken several fascinating courses 
          that have involved a high level of both programming efficacy
          and theoretical foundations.
        </p>
        <ul>
          <li>
            <strong>Reinforcement Learning</strong> – During this 
            course, I implemented several state-of-the-art RL 
            algorithms and applied and fine-tuned them to a variety 
            of environments. These include:
            <ul>
              <li>DDPG Actor-Critic methods for continuous space 
                  problems in OpenAI Gym environments,</li>
              <li>Counterfactual Credit Assignment for 
                  Multi-Agent RL,</li>
              <li>DQN with YOLO for self-driving 
                  vehicles.</li>
            </ul>
          </li>
          <ul class="highlight-list">
            <li class="highlight-item">Python</li>
            <li class="highlight-item">PyTorch</li>
            <li class="highlight-item">Deep Learning</li>
            <li class="highlight-item">Neural Networks</li>
            <li class="highlight-item">CNN</li>
            <li class="highlight-item">Reinforcement Learning</li>
            <li class="highlight-item">Supervised Learning</li>
            <li class="highlight-item">Experimental Design</li>
            <li class="highlight-item">Matplotlib</li>
          </ul>
          <br/>
          <li>
            <strong>Network Science</strong> – This course focuses
            on the study of Networks and analysis techniques on them.
            I implemented large-scale analysis of social, biological, 
            and technological datasets. Methods include:
            <ul>
              <li>Community detection algorithms (e.g. modularity
                maximization, clustering) to uncover
                hidden structures and functional modelling,</li>
              <li>Computing and interpreting key network metrics and
                centrality measures (degree, betweenness, PageRank),
                clustering coefficients, shortest paths, and 
                resilience,</li>
              <li>Modelling and simulating spreading process on
                networks, including epidemic models, and information
                diffusion.</li>
            </ul>
            <ul class="highlight-list">
              <li class="highlight-item">Python</li>
              <li class="highlight-item">NetworkX</li>
              <li class="highlight-item">Matplotlib</li>
              <li class="highlight-item">GNN</li>
              <li class="highlight-item">Data Analysis</li>
            </ul>
            <br/>
            <strong>Health Informatics</strong> – This course examines 
            the integration of information technology and healthcare,
            focusing on the use, analysis, and exchange of health data 
            to improve patient outcomes and healthcare delivery. I 
            worked with diverse health data sources and standards, 
            including Electronic Health Records (EHRs), FHIR 
            (Fast Healthcare Interoperability Resources), 
            and common data elements (CDEs), to ensure data 
            interoperability and consistency across systems.<br>
            Methods include:
            <ul>
              <li>Preprocessing and harmonizing health data from EHRs 
                and other clinical sources using standardized data 
                elements (such as those defined in USCDI and CDE 
                repositories),</li>
              <li>Implementing and utilizing FHIR for interoperable 
                health data exchange and integration,</li>
              <li>Applying machine learning models for disease 
                prediction, patient risk stratification, and clinical 
                decision support,</li>
              <li>Analyzing and visualizing health data to support 
                research, quality improvement, and patient care.</li>
            </ul>
            <ul class="highlight-list">
              <li class="highlight-item">Python</li>
              <li class="highlight-item">JavaScript</li>
              <li class="highlight-item">APIs</li>
              <li class="highlight-item">FHIR</li>
              <li class="highlight-item">EHRs</li>
              <li class="highlight-item">Common Data Elements (CDEs)</li>
              <li class="highlight-item">Health Data Standards</li>
            </ul>
            <br/>
          </li>
        </ul>
      </div>
    </div>

    <div class="spec-box red">
      <div class="spec-tab">2b. Emory University</div>
      <div class="spec-content">
        <p>
          As a student at Emory University, I am received a degree in 
          Mathematics and Computer Science with a focus on building robust 
          systems and data-driven applications.  
          My coursework has provided me with a strong foundation in both 
          theoretical concepts and practical programming skills, preparing 
          me to tackle complex challenges across the computing landscape.
        </p>
        <ul>
          <li>
            <strong>Systems Programming</strong> – In this course, I gained hands-on experience designing and implementing low-level software components that interact closely with hardware and operating systems. Key projects and skills include:
            <ul>
              <li>Developing multi-threaded applications in C for process synchronization and inter-process communication,</li>
              <li>Building custom shell environments and file system utilities,</li>
              <li>Debugging and profiling system-level code for performance and reliability.</li>
            </ul>
            <ul class="highlight-list">
              <li class="highlight-item">C</li>
              <li class="highlight-item">Linux/Unix</li>
              <li class="highlight-item">Shell Scripting</li>
              <li class="highlight-item">Concurrency</li>
              <li class="highlight-item">Systems Programming</li>
              <li class="highlight-item">Debugging</li>
            </ul>
            <br/>
          </li>
          <li>
            <strong>Machine Learning</strong> – This course provided a comprehensive introduction to modern machine learning techniques and their applications. I implemented and evaluated a variety of models and algorithms, including:
            <ul>
              <li>Supervised learning methods such as linear regression, logistic regression, and decision trees,</li>
              <li>Unsupervised learning techniques including clustering (K-means, hierarchical),</li>
              <li>Model evaluation using cross-validation, ROC curves, and hyperparameter tuning.</li>
            </ul>
            <ul class="highlight-list">
              <li class="highlight-item">Python</li>
              <li class="highlight-item">Supervised-Learning</li>
              <li class="highlight-item">Unsupervised-Learning</li>
              <li class="highlight-item">scikit-learn</li>
              <li class="highlight-item">Pandas</li>
              <li class="highlight-item">Data Analysis</li>
              <li class="highlight-item">Machine Learning</li>
              <li class="highlight-item">Model Evaluation</li>
            </ul>
            <br/>
          </li>
          <li>
            <strong>Database Systems</strong> – This course explored the design, implementation, and optimization of relational database systems. I worked on projects involving:
            <ul>
              <li>Designing normalized relational schemas and writing complex SQL queries,</li>
              <li>Implementing transaction management and concurrency control,</li>
            </ul>
            <ul class="highlight-list">
              <li class="highlight-item">SQL</li>
              <li class="highlight-item">PostgreSQL</li>
              <li class="highlight-item">Database Design</li>
              <li class="highlight-item">Data Modeling</li>
              <li class="highlight-item">Transaction Management</li>
            </ul>
            <br/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</main>
