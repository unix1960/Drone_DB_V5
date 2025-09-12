# 本地资源文件说明

本目录包含了 `sample-display.html` 页面的所有本地化资源文件，替代了原来的远程CDN资源。

## 文件结构

### CSS文件 (`css/`)
- **`tailwind-custom.css`**: 自定义的Tailwind CSS样式文件，包含页面所需的所有样式类
- **`font-awesome.min.css`**: Font Awesome 4.7.0 图标字体样式文件
- **`inter-font.css`**: Google Fonts Inter字体样式文件，已修改为引用本地字体文件

### 字体文件 (`fonts/`)
#### Font Awesome字体
- `fontawesome-webfont.eot` - IE兼容格式
- `fontawesome-webfont.woff2` - 现代浏览器推荐格式
- `fontawesome-webfont.woff` - 广泛支持的格式
- `fontawesome-webfont.ttf` - 通用TrueType格式

#### Inter字体
- `inter-300.ttf` - Inter Light (300)
- `inter-400.ttf` - Inter Regular (400)
- `inter-500.ttf` - Inter Medium (500) 
- `inter-600.ttf` - Inter SemiBold (600)
- `inter-700.ttf` - Inter Bold (700)

### 图片文件 (`images/`)
- `mountain-1015.jpg` - 山顶景观样片图片
- `lake-1031.jpg` - 湖畔风光样片图片
- `city-1016.jpg` - 城市地标样片图片
- `forest-1020.jpg` - 森林公园样片图片

## 原始远程资源对照

### 替换的CDN资源
1. **Tailwind CSS**: `https://cdn.tailwindcss.com` → `assets/css/tailwind-custom.css`
2. **Font Awesome**: `https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css` → `assets/css/font-awesome.min.css`
3. **Google Fonts**: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap` → `assets/css/inter-font.css`
4. **图片资源**: 
   - `https://picsum.photos/id/1015/600/400` → `assets/images/mountain-1015.jpg`
   - `https://picsum.photos/id/1031/600/400` → `assets/images/lake-1031.jpg`
   - `https://picsum.photos/id/1016/600/400` → `assets/images/city-1016.jpg`
   - `https://picsum.photos/id/1020/600/400` → `assets/images/forest-1020.jpg`

## HTML文件更改

在 `sample-display.html` 中进行了以下更改：

1. 移除了Tailwind CSS CDN链接和配置脚本
2. 添加了本地CSS文件引用
3. 更新了所有图片src属性指向本地文件
4. 更新了JavaScript中的图片URL参数

## 优势

- **离线可用**: 无需网络连接即可正常显示
- **加载速度**: 本地资源加载更快
- **稳定性**: 不依赖外部CDN的可用性
- **定制化**: 可以根据需要修改和优化本地资源

## 注意事项

- 确保所有资源文件路径正确
- 字体文件需要正确的MIME类型支持
- 图片文件大小已优化，适合web使用
- Tailwind自定义CSS仅包含页面实际使用的样式类
