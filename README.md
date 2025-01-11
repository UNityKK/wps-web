# wps-web

一个基于 React + TypeScript 实现的现代化在线办公套件。本项目旨在提供完整的在线办公解决方案，包括文档编辑、电子表格和演示文稿等核心功能。

## ✨ 特性

### 文档编辑
- 专业的富文本编辑器，支持多种格式化选项
- 完整的 Markdown 支持，满足技术写作需求
- 所见即所得的实时预览功能，提升编辑效率

### 电子表格
- 强大的数据处理能力，支持复杂计算和数据分析
- 灵活的表格编辑功能，包括单元格格式化、公式计算等
- 完整的 Excel 文件导入导出支持，确保与本地办公软件的兼容性

### 演示文稿
- 专业的幻灯片制作工具，支持多种版式和模板
- 内置丰富的基础图形工具，满足常见设计需求
- 支持自定义动画效果，让演示更生动有趣

## 🛠️ 技术栈

- **React 18**: 最新版本的 React 框架，提供优秀的性能和用户体验
- **TypeScript**: 为项目提供类型安全和更好的开发体验
- **Tailwind CSS**: 现代化的 CSS 框架，实现灵活的样式定制
- **Monaco Editor**: 微软开源的专业代码编辑器，用于文本编辑功能
- **Fabric.js**: 强大的 HTML5 Canvas 库，处理绘图和图形编辑
- **XLSX**: 专业的电子表格处理库，提供 Excel 文件格式支持

## 🚀 快速开始

### 环境要求

- Node.js 16+
- npm 或 yarn

### 安装步骤

1. 克隆项目到本地
```bash
git clone https://github.com/UNityKK/wps-web.git
cd wps-web
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

## 📝 项目结构

```
wps-web/
├── src/
│   ├── components/     # 公共组件
│   ├── pages/         # 页面组件
│   ├── services/      # 业务逻辑
│   ├── utils/         # 工具函数
│   └── App.tsx        # 应用入口
├── public/            # 静态资源
├── package.json       # 项目配置
└── tsconfig.json     # TypeScript 配置
```

## 🤝 贡献指南

欢迎提交 Issue 或 Pull Request 来帮助改进项目。在贡献代码前，请确保：

1. 代码遵循项目的代码规范
2. 添加必要的测试用例
3. 更新相关文档

## 📄 许可证

本项目采用 MIT 许可证，详见 LICENSE 文件。
