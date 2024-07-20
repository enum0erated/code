# **Lazyload images using jquery**
by enum0erated and chatGPT
```
Made to load <div> background images and images in <img>:

<div class="the_image lazy" data-bg="./img0.jpeg"></div>
<img class="the_image lazy" data-src="./img1.jpeg" src="img1.jpg" alt="The Image">
```

Images are only loaded if they are in the browser's viewport; this improves the initial page load. I need this because I’m making a huge catalog, and some categories will have hundreds of subcategories and hundreds of items (if not thousands). I don’t want to sacrifice SEO with <img> tags, so loading images with JavaScript and removing src while using data-src only is not an option in my use case.