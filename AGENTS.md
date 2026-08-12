<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in 
ode_modules/next/dist/docs/ before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:codex-safety -->
# DO NOT kill all Node processes

NEVER run Get-Process -Name "node" | Stop-Process or any equivalent command that kills all Node processes. Codex CLI runs on Node.js — killing all Node processes kills Codex itself, which terminates the session. Target specific processes by PID if you must stop something.
<!-- END:codex-safety -->
