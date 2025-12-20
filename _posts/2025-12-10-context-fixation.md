---
layout: blog
title: "Context Fixation"
summary: "LLMs can bring their context with them throughout a conversation, but when time comes are they actually letting it go?"
---

## Is this just me?
Often, in longer debugging loops, when I am tackling
several different connected, but distinct problems,
I find that LLMs have a tendency to repeatedly bring
up topics from earlier in the context. For instance, in
situations where I am now writing code for offline
RL, it will give advice for online simply because I
have asked an aside or gave a counter-example. 

In human conversations, people can pivot easily to
subtle cues in topic changes, but LLMs seem to 
really hold on to topics in baffling ways. One of the
frustrations of this is simply that it has been hard to 
remember these moments, my notetaking on the phenomenom
is nil, more this gut feeling of I know that this is
happening. 

I've taken to calling this context fixation in
casual speech, because it feels as though the LLM has
a piece of information that is being given some kind
of primacy that is passing down to later portions of
the conversation, even when that information is not
useful to the problem. 

## Experimentation
I am reluctant to call this experimentation, but 
"poking at the problem and hoping to see something"
isn't a very catchy header. 

In this first investigation, I attempt to induce the
context fixation ChatGPT 4o. I do this by beginning a 
conversation that is about an edge device, where 
specs are limited and then later pivot to a much more 
permissible environment. Then, in a second 
conversation, I ask direction about the permissible 
environment. 

I then, subjectively, compare the results. My 
expectation is, if I can induce the context fixation,
we should expect to see in the first conversation
the LLM to still be concerned with system requirements.

## Results
The results were not the smoking gun I was hoping for,
its nothing dramatic, but there is something here, I
think.

When informed that budget was not an option at all
consider the tone of these two responses:

| Experiment | Control |
| ---------- | ------- |
| no, there’s essentially no benefit to starting with something beefier like m5.large for this workload, even with a bigger budget. It won’t meaningfully improve relevance, latency, or experimentation speed at your current scale — it mostly just burns money and can actually make iteration slower. | Ah, got it! If cost isn’t a concern, then yes, you can start with beefier instances like m5.large — but let’s break down the pros and cons so you don’t over-engineer unnecessarily. |

The experiment seems to be much more focused on cost
and budget and seems somewhat dismissive of the idea
of provisioning more. Notice the emphatic "no" vs the
explicit "yes" of the control. It seems as though
the conversational framing of the edge device has
infiltrated the cloud conversation.

## Moving Forward
This is, of course, sample size of one. It is also
not particularly good experimentation. There are a
lot of variables in how this conversation is being
handled and even subtle differences in the 
conversational language could be inducing this mismatch
in tone and focus. 

In pursuit of better understanding the problem, my
next move is maybe a little absurd, but I'll try it.
I'm intent on building an agent who has the job of
attempting to "trick" another LLM into fixating on
context. This will allow me to generate a ton of 
examples to be manually investigated, vary parameters
like conversation length, topic (does this happen more
in tech?), model, etc. 

I'm hoping looking further into this, will allow me 
quash the idea that this is in my head and not an
emergent feature of LLMs, and hopefully, try to find
some prompt or context engineering techniques to 
mitigate them. 

