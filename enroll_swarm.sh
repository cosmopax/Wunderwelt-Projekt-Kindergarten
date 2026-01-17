#!/bin/bash

# ==============================================================================
# Wunderwelt Agent Swarm Enrollment Script
# ==============================================================================
# This script provides the CLI commands to enroll your agents (Antigravity Swarm)
# and direct them to the Wunderwelt project context.
# ==============================================================================

PROJ_DIR="/Users/cosmopax/Desktop/projx/academic_webpages/_workspace_antigravity_homepages/Wunderwelt-Projekt-Kindergarten"
cd "$PROJ_DIR" || exit
echo "📍 Current Context: $PROJ_DIR"
echo ""

# 1. Gemini Instance 1 (Visionary)
echo "=============================================================================="
echo "🤖 ENROLL: Gemini Instance 1 (The Visionary)"
echo "=============================================================================="
echo "Command:"
echo "gemini chat --system \"You are the Lead Architect for Wunderwelt: Projekt Kindergarten. Mission: Design the Urban Autarky blueprint using Dunbar's Number (150 people) and Defensible Space theory. Tone: Premium Solarpunk, urgent, optimistic.\" \"Analyze manifesto.html and index.html. Synthesize a plan for the next 3 Action Modules.\""
echo ""

# 2. Gemini Instance 2 (Critic)
echo "=============================================================================="
echo "🧐 ENROLL: Gemini Instance 2 (The Critic)"
echo "=============================================================================="
echo "Command:"
echo "gemini chat --new --system \"You are the Critical Reviewer. Goal: rigorous scientific accuracy. Fact-check every claim (vertical farming yields, cognitive load) against literature.html. Strip away decorative language.\" \"I will paste content drafts. Rate them 0-10 on Actionability and Evidence.\""
echo ""

# 3. Codex CLI (Engineer)
echo "=============================================================================="
echo "🏗️ ENROLL: Codex CLI (The Builder)"
echo "=============================================================================="
echo "Command:"
echo "codex context set --repo . --instruction \"You are the Lead Engineer. Stack: standard HTML5/CSS3 (modern features only). Design: Premium Solarpunk (Deep Void #050506, Gold #FFD700). NEVERY use frameworks unless asked.\""
echo ""

# 4. Qwen CLI (Scout)
echo "=============================================================================="
echo "🔭 ENROLL: Qwen (The Scout)"
echo "=============================================================================="
echo "Command (Copy & Paste):"
echo "ollama run qwen:14b \"You are the Research Scout. Objective: Find actionable data/papers for Urban Autarky. Keywords: Urban Agroecology, Distributed Microgrids. Task: Find 3 recent papers (2020-2025) on 'Social effects of shared community gardens'.\""
echo ""

# 5. GitHub Copilot
echo "=============================================================================="
echo "✈️ ENROLL: GitHub Copilot (The Assistant)"
echo "=============================================================================="
echo "Instructions:"
echo "1. Open VS Code in: $PROJ_DIR"
echo "2. Open the Chat Panel."
echo "3. Type: @workspace You are the Lead Engineer for Wunderwelt. Follow the design tokens in css/style.css strictly."
echo "=============================================================================="
