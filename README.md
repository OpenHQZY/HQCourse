<div id="readme-top"></div>

<!-- Logo -->
<div align="center">
  <img src="./doc/hq.png" alt="logo" width="140"  height="auto" />
  <br/>

<h3><b>湖汽课表</b></h3>

[![Go][Go]][Go-url]
[![React][React.js]][React-url]
[![Gin][Gin]][Gin-url]
[![Python][Python]][Python-url]

</div>

<!-- 项目描述 -->

# 📖 湖汽课表 <a id="about-project"></a>

> 一个基于 Go + React 开发的课表查询系统，支持将湖汽课表导入到 WakeUp 课程表 App 中使用。本项目采用前后端分离架构，提供简洁美观的用户界面和高效稳定的后端服务。

## ✨ 主要功能

- 🔍 课表查询：支持按班级查询课表
- 📱 一键导入：支持将课表一键导入到 WakeUp 课程表
- 💾 数据缓存：实现课表分享码的缓存机制，提高响应速度
- 📊 数据统计：记录查询日志，支持数据分析
- 🛡️ 跨域支持：支持跨域请求，方便前端调用

## 🛠 技术栈 <a id="built-with"></a>

### 技术栈详情 <a id="tech-stack"></a>

<details>
  <summary>客户端</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a> - 用户界面构建</li>
    <li>现代化的UI设计</li>
    <li>响应式布局</li>
  </ul>
</details>

<details>
  <summary>服务端</summary>
  <ul>
    <li><a href="https://gin-gonic.com/">Gin</a> - Go Web 框架</li>
    <li>RESTful API 设计</li>
    <li>高性能的数据处理</li>
  </ul>
</details>

<details>
<summary>课表分析</summary>
  <ul>
    <li><a href="https://www.python.org/">Python Pandas</a> - 数据分析和处理</li>
    <li>自动化的课表转换</li>
  </ul>
</details>

## 📁 项目结构

```
.
├── frontend/          # React 前端项目
├── admin/            # 管理后台相关代码
├── data/            # 课表数据存储
├── doc/             # 项目文档和资源
├── 课表转换/         # Python 课表转换工具
├── main.go          # 后端主程序入口
├── go.mod           # Go 依赖管理
└── config.json      # 项目配置文件
```

## 🚀 在线演示 <a id="live-demo"></a>

- [在线网站](https://c.d5v.cc)

## 💻 快速开始 <a id="getting-started"></a>

### 前置要求

- Go 1.16+
- Node.js 14+
- Python 3.7+（用于课表转换）

### 后端启动

```sh
# 安装依赖
go get
go mod tidy

# 启动服务（默认端口5001）
go run main.go

# 指定端口启动
go run main.go -port 8080
```

### 前端开发

```sh
# 安装依赖
cd frontend
yarn

# 开发模式
yarn dev

# 构建生产版本
yarn build
```

### 部署说明

1. 构建前端项目，将 `frontend/dist` 目录下的文件复制到后端项目根目录的 `dist` 文件夹
2. 确保 `data` 目录下有课表数据文件
3. 启动后端服务即可

## 👨‍💼 管理员指南

### 课表管理

1. 下载本仓库到本地
2. 准备原始课表文件（Excel 格式）
3. 将原始课表文件另存为，如`2025-1.xlsx`格式，放到`课表转换/`目录下
4. 使用课表转换工具进行转换：
   ```sh
   cd 课表转换
   # 1. 修改 src/main.ipynb 中的配置
   # 2. 运行 main.ipynb 进行数据处理
   # 3. 运行 write.ipynb 生成 .wakeup_schedule 文件
   ```
   > 每年课表不大一样，需要修改部分代码
5. 转换后的文件将保存在 `课表转换/data` 目录
6. 登录管理后台 `https://c.d5v.cc/admin/` 上传课表
7. 创建一个 Pull Request 将修改的代码推送到本仓库（详细看 [#🤝 贡献](#contributing)）

## 🤝 贡献 <a id="contributing"></a>

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建新分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📝 许可证 <a id="license"></a>

本项目基于 MIT 许可证开源，详见 [LICENSE](LICENSE) 文件。

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[Go]: https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white
[Go-url]: https://golang.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Gin]: https://img.shields.io/badge/Gin-00ADD8?style=for-the-badge&logo=go&logoColor=white
[Gin-url]: https://gin-gonic.com/
[Python]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/
