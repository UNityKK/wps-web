#!/bin/bash

# 安装依赖
echo "Installing dependencies..."
npm install

# 运行测试
echo "Running tests..."
npm test

# 构建项目
echo "Building project..."
npm run build

# 部署到选择的平台
echo "Deploying..."
if [ "$1" = "vercel" ]; then
    vercel --prod
elif [ "$1" = "netlify" ]; then
    netlify deploy --prod
else
    echo "Please specify deployment platform (vercel/netlify)"
    exit 1
fi

echo "Deployment complete!" 