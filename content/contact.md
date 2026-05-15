---
title: "Contact Us"
description: "Get in touch with us"
---

We'd love to hear from you! Use the form below to send us a message.

{{< highlight lang="html" caption="Contact form with Formspree" >}}
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="max-w-md">
  <div class="mb-4">
    <label for="name" class="block text-sm font-medium mb-2">Name</label>
    <input type="text" id="name" name="name" required class="input">
  </div>
  <div class="mb-4">
    <label for="email" class="block text-sm font-medium mb-2">Email</label>
    <input type="email" id="email" name="email" required class="input">
  </div>
  <div class="mb-6">
    <label for="message" class="block text-sm font-medium mb-2">Message</label>
    <textarea id="message" name="message" rows="5" required class="input"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Send</button>
</form>
{{< /highlight >}}

Alternatively, reach us at: **hello@example.com**
