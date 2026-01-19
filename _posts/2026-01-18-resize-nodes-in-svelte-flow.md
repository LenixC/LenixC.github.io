---
layout: blog
title: "Resizing Nodes in Svelte Flow"
summary: "Maybe I failed to RTFM, but this was a pain"
---

## Manual Resizing of Nodes in Svelte Flow
I was building something in Svelte Flow recently that involved using HTML/CSS 
to resize a node to a fixed size. This was very easy, except I ran into an issue
with the sink and source handles no longer cleanly aligning. 

To fix this, what you are supposed to do is manually set the width/height on the
node object directly. If you pass it as a string (i.e via 'styles') it fails and 
the nodes just hang out wherever it was before. If you try to do it in the node 
directly, it does the same thing. This is what I ended up doing, if you ran into this, hope it helps.

```js
  function handleToggleExpand(nodeId, isExpanded) {
    nodes = nodes.map(node => {
      if (node.id === nodeId) {
        if (isExpanded) {
          return {
            ...node,
            width: 400,
            height: 300
          };
        } else {
          const { width, height, ...rest } = node;
          return rest;
        }
      }
      return node;
    });
  }
```
