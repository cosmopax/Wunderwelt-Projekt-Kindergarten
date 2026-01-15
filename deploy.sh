#!/bin/bash
echo "Pushing Wunderwelt to GitHub..."
git add .
git commit -m "Autonomous Deployment $(date)" || echo "No changes to commit"
git push origin HEAD:main
echo "Deployed to GitHub Pages."
