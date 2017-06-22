# 工作室主页

基于Angular框架编写的一个工作室主页，使用Bootstrap进行响应式布局。 

该项目为静态网站，获取的数据来自静态的JSON文件。

演示地址： [演示地址](http://studio.zhiqing.info/)

### 安装Angular Cli

```bash
npm install -g angular-cli
```

### 运行

```bash
cd studio
ng server
```

使用浏览器访问 http://localhost:4200

### 部署

部署到Github Pages:

```bash
ng github-pages:deploy -prod
```

### 生成页面

```bash
ng build
```

生成的页面在 `dist` 目录中
