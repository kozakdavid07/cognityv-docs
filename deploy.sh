#!/bin/bash

# Cognityv Docs Deployment Script
echo "🚀 Starting Cognityv Docs deployment..."

# Set project ID (update this to your actual project ID)
PROJECT_ID="cognityv-docs"

# Set the GCP project
echo "📋 Setting GCP project to: $PROJECT_ID"
gcloud config set project $PROJECT_ID

# Build the site locally (optional - Cloud Build will also do this)
echo "🔨 Building Docusaurus site..."
npm run build

# Deploy using Cloud Build
echo "☁️ Deploying to Google Cloud Platform..."
gcloud builds submit --config cloudbuild-appengine.yaml

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://$PROJECT_ID.appspot.com" 