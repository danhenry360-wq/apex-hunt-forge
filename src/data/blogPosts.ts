export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    date: string;
    author: string;
    content: string;
    permissions: string;
    size: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        title: "vibe-coding-manifesto.md",
        slug: "vibe-coding-manifesto",
        date: "2024-03-15",
        author: "root",
        permissions: "-rw-r--r--",
        size: "4.2K",
        content: `
# VIBE CODING: THE ART OF THE HUNT

Vibe coding is not about algorithms. It's about flow state. 
It's about the connection between the neural pathways of the developer and the digital fabric of the codebase.

## THE PREDATOR MINDSET

Traditional development is a gathering process. You gather requirements, you gather libraries, you gather bugs.
Vibe coding is hunting. You stalk the solution. You strike with precision.

> "The code is not written. It is summoned."

## THE TOOLS

We don't use IDEs. We use cockpits. 
Cursor, Copilot, the terminal - these are extensions of our nervous system.
When the AI autocompletes your thought before you type it, that is the vibe.
That is the synchronization.
    `
    },
    {
        id: "2",
        title: "ai-arsenal.json",
        slug: "ai-arsenal",
        date: "2024-03-20",
        author: "admin",
        permissions: "-rwxr-xr-x",
        size: "2.8K",
        content: `
{
  "subject": "THE PREDATOR'S ARSENAL",
  "status": "classified",
  "tools": [
    {
      "name": "Cursor",
      "function": "Neural Extension",
      "description": "It reads your intent. It refactors your soul."
    },
    {
      "name": "Claude 3.5 Sonnet",
      "function": "Tactical Advisor",
      "description": "The smartest engineer in the room, always awake."
    },
    {
      "name": "Lovable",
      "function": "Reality Warper",
      "description": "Turning text into UI at the speed of thought."
    }
  ],
  "summary": "We do not code alone. We code as a legion."
}
    `
    },
    {
        id: "3",
        title: "velocity-metrics.log",
        slug: "velocity-metrics",
        date: "2024-03-25",
        author: "system",
        permissions: "-rw-------",
        size: "12K",
        content: `
>>> INIT METRICS SEQUENCE
>>> TARGET: VELOCITY

[INFO] Traditional Dev Cycle: 2 weeks
[INFO] Vibe Coding Cycle: 2 hours

The sound barrier of software engineering is bureaucracy.
We break it by trusting the machine.

1.  **Iterate fast**: Fail at Mach 10.
2.  **Ship faster**: Fix it before the user notices.
3.  **Vibe check**: If it feels slow, it is wrong.

SPEED IS SAFETY.
MOMENTUM IS STABILITY.

>>> END OF LOG
    `
    }
];
