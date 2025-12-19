---
layout: blog
title: "Using Adversarial AI Agents to Find Semantic Code Differences"
summary: "AI is a useful tool in managing cognitive load. Can we use it to quickly identify differences in code snippets?"
---

## The Problem
I often find myself working with SQL queries or
editing Python scripts for small efficiency gains.
In this, I often find that identifying if a change is
breaking or if it has a meaningful impact on function
is challenging, and requires rigorous study of both
pieces of code. 

To fill this gap, we have to find the semantic 
difference between the code snippets, not just
compare syntax or AST trees. 

## The Idea
My preferred way to use AI as a coding assistant is
for it to write as little code as possible, because
I want to hoard the understanding all of myself.
What it does instead is that it serves as an
antagonist to my code, when I describe systems, it
tells me that they are slow or clunky, when I 
write code, it tells me what I'm missing. 

Using this as a jumping off point, I built an 
adversarial agentic AI workflow, where one agent
writes and runs test cases, and the other evaluates
them and identifies gaps. The idea being, they
argue until the adversarial agent believes that it
has found all cases where a semantic difference 
between the two snippets exists. 

## The Implementation
I use LangGraph to generate a statful directed 
graph that pits two agents against each other. 

The first agent analyzes the code and identifies
potential differences in behavior and tries to spot
edge cases. It uses this background to generate
5 test cases per iteration. The test cases are then
run on both code snippets, and the results are
recorded. If the behavior between snippets is 
different, then it records the differences to 
behavior divergence and to inform future iterations.

The second agent evaluates the results and the
test coverage. It challenges what was found by the
first agent, then give feedback on cases that may
be missed. It calculates its confidence that test
cases sufficiently cover the distinctions between
the two code snippets. If the agent is not confident
in the results, it sends feedback to the first agent
and the cycle repeats. The two agents argue until
they agree, or they run out of iterations.

```
START → analyze → generate_tests → run_tests → evaluate_coverage → [continue/finalize] → END
           ↑                                              |
           └──────────────────────────────────────────────┘
```

For more depth, I invite you to check the README
and the code.

## Artifacts
The semantic diff tool produces two key products. 
Firstly, it produces a diff-like syntax for 
comparing results, showing where the differences
actually exist in function, not syntax. Secondly,
it generates tests cases that can be added to a 
testing suite to identify similar changes in the 
future. 

## Try It Yourself
The code is on 
[GitHub](https://github.com/LenixC/SemanticDiff/tree/master).
You'll need a Gemini API key (free tier works fine). 
Run it with `--verbose 3` to watch the agents argue.

## Limitations
This is fundamentally a proof of concept, and as
such, it has not been thoroughly tested (ironically).
On the handful of moderate difficulty data processing
type workflows I have given it, it identified gaps
that were both significant and trivial, but might
cause an issue in an extreme edge case. Further work
is encouraged on this idea (especially for the 
author). Additionally, the technique for testing is a
bit naive, only handling single-function snippets,
potentially brittle subprocess isolation, and
confidence scoring is perhap a bit arbitrary.
