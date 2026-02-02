---
layout: blog
title: "Dorsal-Palmar Hand Matching"
summary: "Given the back of someone's hand, can you reliably identify their palm?"
---

## Problem
If I showed you one photo of the back of someone's hand, could you pick out their
palm from a lineup? You might respond, of course not, I've never seen their 
palm and what a palm looks like isn't clear from what the back of a hand looks
like! Then you see the challenge. 
I was curious, in the field of identification, how effective can we be with
cross-view learning. A dataset that allowed me to expose that quite cleanly was
the 11k Hands dataset. Photos include left/right, dorsal/palmar, fingers 
closed/opened. This is a summation of my thoughts and decision making, rather
than a technical document, for that read the 
[README.](https://github.com/LenixC/Hands-Cross-View)

## Architecture
I wanted to establish a baseline with a simple but effective mode, for two reasons.
Firstly, I have often found that the baseline is good enough for many problems,
not everything needs a neural net, and often the cost of inference or training
make it unfeasible or the juice just isn't worth the squeeze. Secondly, 
when we have a good model, it is also good to know how good that model is, if
you'll excuse the good-ness. While we can compare to a random guessing model,
I find that often isn't particularly informative, because it doesn't say how
solvable a problem is. 

### ResNet50 + Contrastive Loss
My baseline then, is simply a ResNet50 encoder as a twin network with contrastive
loss. For this problem, we simply randomly choose positive sample pairs and
negative sample pairs, and use contrastive loss to pull positives together and
push negatives apart in the space. The way to think about these encoding problems
is simply, does this make sense as a spatial problem, and how do well represent the
space. The simplicity of this architecture makes it pretty clear that this is a
spatial problem, and we can represent this space by having this sort of shared
universe of palmar and dorsal photos where we are trying to pack together these
cross-view sets. 

This technique performed quite admirably, though admittedly with some fussing in
the beginning. When given the dorsal photo, the mean rank of the true palmar photo
is roughly 12, meaning that the 12th closest point was correct. Additionally, we 
measured Recall@k and got k=1 of 9.8%, k=5 of 41.5%, and k=10 of 63.4%. So, 10%
of the time, we got the problem exactly right. This might not sound very 
impressive, but this is a truly challenging problem space in practice. I want you
to imagine how hard it would be to identify the palm of someone hand, having only
seen one photo of the back it. It wouldn't be easy.

### DINOv2 + Triplet Loss + Hard Negative Mining
My second model was to use the DINOv2 vision transformer to attempt to take 
advantage of some of the increased capabilities to identify actually meaningful
features as a benefit of using a pretrained model. Additionally, Hard Negative
Mining was chosen as a literature-backed default for this sort of problem. 
Hard Negative Mining lets us focus on the distinctions between good matches and
bad matches more directly.
Triplet loss is beneficial because it directly optimizes for the ranking element, 
which in our problem is the key. We want better guesses better ranked. 

This technique, as I certainly hoped, did much, much better than my baseline.
Achieving a mean rank of 2.5, and recalls@k of 61%, 90%, and 95% for k=1, 5, 10
respectively. This is obviously a huge improvement, however, it comes with the 
cost of training time (though not unreasonable) and inference speed. Likely, I 
wouldn't be using this technique, if query latency were a factor, but the 
performance is hard to beat. 

## Improvements
In addition to the computational challenges listed in the README, I'd be 
interested in seeing what can be done by augmenting the current data. If we added
some photometric variations to simulate different lighting conditions, rotations, 
translations, can we improve the generalizability of the model? Would this 
translate to better recall@k? 

## Future Work
I want to experiment with more models and more compute, or I'd encourage you to 
extend the problem in the same way. Further experimentation should certainly be
done on augmenting the data or perhaps finding an even larger dataset
for the problem. I also would like to write a tutorial on this,
and actually make some visual explainers of how things like contrastive loss 
compares philosophically with HNMining and triplet loss. 
