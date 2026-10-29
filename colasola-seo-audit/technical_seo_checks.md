# 技术 SEO 审计与修复清单 (Technical SEO Checks)

检查执行日期：2026-10-29  
测试环境：本地生产构建（Vite 6.4.2 / React 18 / TypeScript）

| 检查维度 | 具体检查项 | 严重级别 | 发现与现状 | 处理措施与验证方法 | 责任人 | 状态 |
|---|---|---|---|---|---|---|
| **实体标识** | 结构化数据 Schema NAP 完整性 | **P0** | 初始地址缺少 Moo 6 与街道，缺少经纬度坐标与 DBD 税号 | 在 `geo.ts` 与 `index.html` 中注入完整 DBD 税号、`GeoCoordinates` (18.7656, 99.0062) 与 `hasMap` | 工程师 | **已完成** |
| **生态跨域** | lazzor.com 双向链接与实体互通 | **P0** | lazzor.com 单向推荐 colasola，但 colasola 站点无任何反向链接与实体关联 | 在 About、Projects、Footer、Contact 引入 Chiang Mai AI Center (lazzor.com)，并在 `sameAs` 数组中互相关联 | 工程师 | **已完成** |
| **爬虫调度** | robots.txt 对 AI 搜索引擎支持 | **P1** | 仅有通用 `User-agent: *`，未明确标注对主流 AI 搜索引擎的欢迎规则 | 显式添加针对 `GPTBot`、`ClaudeBot`、`PerplexityBot`、`Google-Extended` 的放行规则，声明 `sitemap.xml` | 工程师 | **已完成** |
| **索引调度** | sitemap.xml 更新鲜度标识 | **P1** | 缺少 `<lastmod>` 与 `<changefreq>` 标签，无法向搜索引擎提示页面更新周期 | 补全所有核心页面的 `<lastmod>2026-10-29</lastmod>` 与 `<changefreq>`，优先级分层设定 | 工程师 | **已完成** |
| **GEO 语义层** | llms.txt & ai-profile.json 事实性 | **P1** | 前版仅列出笼统概况，缺少 DBD 代码与清迈总部科技园区实体信息 | 重写 `llms.txt` 和 `ai-profile.json`，植入精确泰文/英文关键词与示范案例事实问答 | 工程师 | **已完成** |
| **本地互动** | Contact 页面实体导航入口 | **P2** | 地址仅为纯文本，用户无法一键在 Google Maps 查看路线与周边配套 | 增设直接跳转 Google Maps 导航的链接（带经纬度参数），提升移动端转化 | 工程师 | **已完成** |
| **代码体积** | 构建产物体积与代码分割 | **P2** | 生产构建单 JS 文件 725KB (gzip 192KB)，终端提示可优化 manualChunks | 目前首屏加载良好，后续可针对路由做动态 `React.lazy()` 懒加载优化 | 工程师 | **待排期** |
