This response cannot provide actual code because the steps outline a process, not a specific coding task.  The code required would depend entirely on the chosen platform (Wix, WordPress, custom development, etc.) and the specific design.

However, I can offer example code snippets illustrating aspects of steps 7 and 8 for a *WordPress* homepage, assuming you've already created the design and content:


**Step 7: Develop the Homepage (WordPress Example):**

This would involve using WordPress's theme editor or creating custom template files (e.g., `page-home.php`).  Below are snippets illustrating different aspects:


* **Adding a headline and subheadline:**

```php
<?php
  // In page-home.php or a custom template part
  $headline = get_field('headline'); // Assuming you use ACF to manage content
  $subheadline = get_field('subheadline');
?>

<h1><?php echo $headline; ?></h1>
<p><?php echo $subheadline; ?></p>
```

* **Adding a call to action button:**

```php
<a href="<?php echo get_permalink( get_page_by_path( 'contact' ) ); ?>" class="button">Contact Us</a>
```

* **Displaying images (assuming you upload images to the media library):**

```php
<?php 
  $image = get_field('hero_image'); 
  if( !empty($image) ): ?>
    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
<?php endif; ?>
```


**Step 8: Testing & Optimization (Conceptual Examples):**


* **Usability Testing:** This involves observing users interacting with the homepage and gathering feedback. No code is directly involved; it's a user research process.

* **Technical Testing:** This would involve using browser developer tools to check for rendering issues across different browsers.  No specific code, but tools like `console.log()` in JavaScript could be used for debugging.

* **SEO Optimization:** This requires using SEO plugins (like Yoast SEO) or manually adding meta descriptions, title tags, and optimizing content.  Example (conceptual, plugin-dependent):

```php
//Yoast SEO might handle this automatically, but the concept is:
<meta name="description" content="A concise description of your homepage">
<title>Homepage Title - Your Website Name</title>
```

* **Analytics Setup:** This involves adding Google Analytics tracking code to your theme's header.  This code is provided by Google Analytics; you don't write it.


Remember that these are just fragments.  Building a complete WordPress homepage requires a deeper understanding of WordPress's template hierarchy, themes, plugins, and potentially custom PHP development.  Other platforms (Wix, Squarespace, custom development) would require entirely different code and techniques.