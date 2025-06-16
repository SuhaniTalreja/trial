You did not provide any information about the desired functionality, current state, or specific troubles with your homepage.  Therefore, I will provide a basic example of a homepage using HTML, CSS, and a little JavaScript. This example includes a hero image, some text, and a simple contact form.  You can adapt this to your specific needs.


**HTML (index.html):**

```html
<!DOCTYPE html>
<html>
<head>
<title>My Homepage</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Welcome to My Homepage</h1>
  </header>

  <section id="hero">
    <img src="hero-image.jpg" alt="Hero Image">
  </section>

  <section id="about">
    <h2>About Us</h2>
    <p>This is a sample homepage.  You can customize it to your liking.</p>
  </section>

  <section id="contact">
    <h2>Contact Us</h2>
    <form id="contactForm">
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name"><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br><br>
      <input type="submit" value="Submit">
    </form>
    <p id="message"></p>
  </section>

  <footer>
    <p>&copy; 2023 My Website</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

**CSS (style.css):**

```css
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}

#hero {
  text-align: center;
}

#hero img {
  width: 100%;
  height: auto;
}

section {
  padding: 20px;
}

#contact form {
  width: 300px;
  margin: 0 auto;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
```

**JavaScript (script.js):**

```javascript
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted!'); // Replace with actual form submission logic
  document.getElementById('message').textContent = 'Thank you for your message!';
});
```

Remember to replace `"hero-image.jpg"` with the actual path to your hero image. This is a very basic example.  To get more specific help, please provide the details requested in the original prompt.  For example, are you using a framework like React or Angular? What specific styling issues are you facing?  The more information you provide, the better I can assist you.