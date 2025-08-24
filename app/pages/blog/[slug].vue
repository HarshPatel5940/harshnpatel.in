<template>
  <div
    :class="[
      'min-h-screen transition-colors duration-300',
      isDark ? 'portfolio-body dark' : 'portfolio-body light',
    ]"
  >
    <!-- Header -->
    <header
      class="sticky top-0 z-10 backdrop-blur-sm border-b transition-colors duration-300"
      :class="[
        isDark
          ? 'border-gray-700 bg-gray-900/80'
          : 'border-gray-200 bg-white/80',
      ]"
    >
      <div class="max-w-4xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink
            to="/blog"
            class="font-medium flex items-center transition-colors duration-300"
            :class="[
              isDark
                ? 'text-green-400 hover:text-green-300'
                : 'text-green-600 hover:text-green-700',
            ]"
          >
            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Back to Blog
          </NuxtLink>
          <div class="flex items-center gap-4">
            <button
              class="theme-toggle"
              :class="isDark ? '' : 'light'"
              aria-label="Toggle theme"
              @click="toggleTheme"
            >
              <svg
                v-if="isDark"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="theme-icon-sun"
              >
                <path
                  d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <svg
                v-else
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="theme-icon-moon"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="currentColor"
                />
              </svg>
            </button>
            <NuxtLink
              to="/"
              class="font-medium transition-colors duration-300"
              :class="
                isDark
                  ? 'text-gray-400 hover:text-gray-300'
                  : 'text-gray-600 hover:text-gray-700'
              "
            >
              Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Loading State -->
    <div v-if="pending" class="max-w-4xl mx-auto px-4 py-12 text-center">
      <div
        class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"
      />
      <p class="mt-4 text-gray-600 dark:text-gray-400">Loading post...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="max-w-4xl mx-auto px-4 py-12 text-center">
      <div class="text-6xl mb-4">😔</div>
      <h1 class="text-2xl font-bold mb-2">Post Not Found</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        The blog post you're looking for doesn't exist or has been moved.
      </p>
      <NuxtLink
        to="/blog"
        class="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Browse All Posts
      </NuxtLink>
    </div>

    <!-- Blog Post -->
    <article v-else-if="post" class="max-w-4xl mx-auto px-4 py-8 blog-post">
      <!-- Post Header -->
      <header class="mb-8">
        <!-- Featured Badge -->
        <div v-if="post.featured" class="mb-4">
          <span
            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
            :class="[
              isDark
                ? 'bg-green-900 text-green-200'
                : 'bg-green-100 text-green-800',
            ]"
          >
            ⭐ Featured Post
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {{ post.title }}
        </h1>

        <!-- Description -->
        <p
          class="text-xl mb-6 leading-relaxed transition-colors duration-300"
          :class="isDark ? 'text-gray-400' : 'text-gray-600'"
        >
          {{ post.description }}
        </p>

        <!-- Meta Information -->
        <div
          class="flex flex-wrap items-center gap-6 mb-6 transition-colors duration-300"
          :class="isDark ? 'text-gray-400' : 'text-gray-500'"
        >
          <div class="flex items-center">
            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
            <time :datetime="post.date">
              {{ formatDate(post.date) }}
            </time>
          </div>

          <div class="flex items-center">
            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              />
            </svg>
            {{ post.reading_time }}
          </div>

          <div class="flex items-center">
            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="capitalize">{{ post.category }}</span>
          </div>
        </div>

        <!-- Tags -->
        <div v-if="post.tags?.length" class="mb-8">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
              :class="[
                isDark
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
              ]"
            >
              #{{ tag }}
            </span>
          </div>
        </div>

        <!-- Divider -->
        <hr
          class="transition-colors duration-300"
          :class="isDark ? 'border-gray-700' : 'border-gray-200'"
        />
      </header>

      <!-- Post Content -->
      <div class="prose prose-lg dark:prose-invert max-w-none prose-green">
        <ContentRenderer :value="post" @render="onContentRendered" />
      </div>

      <!-- Post Footer -->
      <footer
        class="mt-12 pt-8 border-t transition-colors duration-300"
        :class="isDark ? 'border-gray-700' : 'border-gray-200'"
      >
        <!-- Share Section -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold mb-4">Share this post</h3>
          <div class="flex gap-4">
            <a
              :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`"
              target="_blank"
              rel="noopener"
              class="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
              Twitter
            </a>

            <a
              :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`"
              target="_blank"
              rel="noopener"
              class="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300"
            >
              <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex justify-between items-center">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
          >
            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            All Posts
          </NuxtLink>

          <a
            href="mailto:hi@harshnpatel.in?subject=Blog Post Feedback"
            class="font-medium transition-colors duration-300"
            :class="[
              isDark
                ? 'text-green-400 hover:text-green-300'
                : 'text-green-600 hover:text-green-700',
            ]"
          >
            Send Feedback
          </a>
        </div>
      </footer>
    </article>

    <!-- Footer -->
    <footer
      class="border-t mt-16 transition-colors duration-300"
      :class="isDark ? 'border-gray-700' : 'border-gray-200'"
    >
      <div class="max-w-4xl mx-auto px-4 py-8 text-center">
        <p
          class="transition-colors duration-300"
          :class="isDark ? 'text-gray-400' : 'text-gray-600'"
        >
          © {{ new Date().getFullYear() }} Harsh Patel. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isDark = ref(false);

// Get the slug from the route
const route = useRoute();
const slug = route.params.slug;

// Fetch the blog post
const {
  data: post,
  pending,
  error,
} = await useAsyncData(`blog-${slug}`, async () => {
  try {
    const allPosts = await queryCollection("blog").all();
    console.log("All posts:", allPosts);
    console.log("Looking for slug:", slug);

    const matchingPost = allPosts.find((post) => {
      console.log("Checking post:", post._id);

      if (post._id && post._id.includes(slug)) {
        return true;
      }

      if (post.title) {
        const titleSlug = post.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
        if (titleSlug === slug) {
          return true;
        }
      }

      return false;
    });

    console.log("Found post:", matchingPost);
    return matchingPost || null;
  } catch (err) {
    console.error("Error fetching blog post:", err);
    return null;
  }
});

// Initialize theme on mount
onMounted(() => {
  initializeTheme();

  // Set up mutation observer to watch for content changes
  if (import.meta.client) {
    setupContentObserver();
  }
});

// Watch for post changes to add copy buttons
watch(
  () => post.value,
  () => {
    if (import.meta.client) {
      setTimeout(() => {
        addCopyButtonsToCodeBlocks();
      }, 100);
    }
  },
  { deep: true },
);

// Handle when content is rendered
function onContentRendered() {
  setTimeout(() => {
    addCopyButtonsToCodeBlocks();
  }, 100);
}

// Set up mutation observer to detect when content is rendered
function setupContentObserver() {
  const observer = new MutationObserver((mutations) => {
    let shouldAddButtons = false;

    mutations.forEach((mutation) => {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if any pre elements were added
            if (
              node.tagName === "PRE" ||
              (node.querySelector && node.querySelector("pre"))
            ) {
              shouldAddButtons = true;
            }
          }
        });
      }
    });

    if (shouldAddButtons) {
      setTimeout(() => {
        addCopyButtonsToCodeBlocks();
      }, 50);
    }
  });

  // Start observing the document with the configured parameters
  const target = document.querySelector(".prose") || document.body;
  observer.observe(target, {
    childList: true,
    subtree: true,
  });
}

// Add copy buttons to code blocks
function addCopyButtonsToCodeBlocks() {
  if (!import.meta.client) return;

  nextTick(() => {
    const codeBlocks = document.querySelectorAll(
      ".prose pre:not(.has-copy-btn)",
    );

    codeBlocks.forEach((pre) => {
      const codeBlock = pre.querySelector("code");
      if (!codeBlock) return;

      // Mark as processed
      pre.classList.add("has-copy-btn");

      // Create header with copy button
      const header = document.createElement("div");
      header.className = "code-header";

      // Debug logging to see what classes we have
      if (process.dev) {
        console.log("Code block classes:", codeBlock.className);
        console.log("Pre element classes:", pre.className);
        console.log("Code block HTML:", codeBlock.outerHTML.substring(0, 200));
      }

      // Get language from various sources
      let language = "text";

      // Method 1: Check code element class attribute
      const codeLanguageMatch = codeBlock.className.match(/language-(\w+)/);
      if (codeLanguageMatch) {
        language = codeLanguageMatch[1];
        if (process.dev)
          console.log("Found language from code class:", language);
      }

      // Method 2: Check pre element class attribute
      if (language === "text") {
        const preLanguageMatch = pre.className.match(/language-(\w+)/);
        if (preLanguageMatch) {
          language = preLanguageMatch[1];
          if (process.dev)
            console.log("Found language from pre class:", language);
        }
      }

      // Method 3: Check for highlight.js classes
      if (language === "text") {
        const hlMatch = (codeBlock.className + " " + pre.className).match(
          /(?:^|\s)hljs-(\w+)/,
        );
        if (hlMatch) {
          language = hlMatch[1];
          if (process.dev)
            console.log("Found language from highlight.js:", language);
        }
      }

      // Method 4: Check data attributes
      if (language === "text") {
        const dataLang =
          codeBlock.getAttribute("data-language") ||
          pre.getAttribute("data-language");
        if (dataLang) {
          language = dataLang;
          if (process.dev)
            console.log("Found language from data attribute:", language);
        }
      }

      // Method 5: Try to parse from the code content structure
      if (language === "text") {
        const firstLine = codeBlock.textContent.split("\n")[0];
        if (firstLine.includes("```")) {
          const langMatch = firstLine.match(/```(\w+)/);
          if (langMatch) {
            language = langMatch[1];
            if (process.dev)
              console.log("Found language from code content:", language);
          }
        }
      }

      // Map common aliases
      const languageMap = {
        js: "javascript",
        ts: "typescript",
        jsx: "javascript",
        tsx: "typescript",
        py: "python",
        rb: "ruby",
        sh: "bash",
        shell: "bash",
        yml: "yaml",
        dockerfile: "docker",
      };

      language = languageMap[language] || language;
      if (process.dev) console.log("Final language:", language);

      // Create language label
      const languageLabel = document.createElement("span");
      languageLabel.className = "code-language";
      languageLabel.textContent = language;

      // Create copy button
      const copyButton = document.createElement("button");
      copyButton.className = "code-copy-btn";
      copyButton.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>Copy</span>
      `;
      copyButton.setAttribute("aria-label", "Copy code to clipboard");

      // Add click handler
      copyButton.addEventListener("click", (e) => {
        e.preventDefault();
        copyCodeToClipboard(codeBlock, copyButton);
      });

      // Assemble header
      header.appendChild(languageLabel);
      header.appendChild(copyButton);

      // Add header before the code block
      pre.style.position = "relative";
      pre.insertBefore(header, codeBlock);
    });
  });
}

// Copy code to clipboard
async function copyCodeToClipboard(codeElement, button) {
  if (!import.meta.client) return;

  try {
    const code = codeElement.textContent || codeElement.innerText;
    const cleanCode = code.replace(/^\n+|\n+$/g, ""); // Remove leading/trailing newlines

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(cleanCode);
    } else {
      // Fallback for older browsers or non-HTTPS
      const textArea = document.createElement("textarea");
      textArea.value = cleanCode;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (!successful) {
        throw new Error("Copy command failed");
      }
    }

    // Update button appearance
    const originalHTML = button.innerHTML;
    const span = button.querySelector("span");
    if (span) {
      span.textContent = "Copied!";
    }
    button.style.color = "#10b981"; // Green color
    button.disabled = true;

    // Reset after 2 seconds
    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.style.color = "";
      button.disabled = false;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy code:", err);

    // Show error state
    const span = button.querySelector("span");
    if (span) {
      span.textContent = "Failed!";
    }
    button.style.color = "#ef4444"; // Red color

    setTimeout(() => {
      const span = button.querySelector("span");
      if (span) {
        span.textContent = "Copy";
      }
      button.style.color = "";
    }, 2000);
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  isDark.value =
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  applyTheme();
}

function applyTheme() {
  document.body.className = isDark.value
    ? "portfolio-body dark"
    : "portfolio-body light";
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}

function toggleTheme() {
  isDark.value = !isDark.value;
  applyTheme();
}

const currentUrl = computed(() => {
  if (import.meta.client) {
    return window.location.href;
  }
  return `https://harshnpatel.in/blog/${slug}`;
});

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

useHead(() => ({
  title: post.value
    ? `${post.value.title} - Harsh Patel`
    : "Blog Post - Harsh Patel",
  meta: [
    {
      name: "description",
      content: post.value?.description || "Read this blog post by Harsh Patel",
    },
    {
      property: "og:title",
      content: post.value
        ? `${post.value.title} - Harsh Patel`
        : "Blog Post - Harsh Patel",
    },
    {
      property: "og:description",
      content: post.value?.description || "Read this blog post by Harsh Patel",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "article:published_time",
      content: post.value?.date,
    },
    {
      property: "article:author",
      content: "Harsh Patel",
    },
    {
      property: "article:section",
      content: post.value?.category,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:creator",
      content: "@harshpatel5940",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: currentUrl.value,
    },
  ],
}));

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog post not found",
  });
}
</script>

<style>
/* Portfolio body styles */
.portfolio-body {
  font-family:
    "Geist",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.portfolio-body.dark {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(255, 255, 255, 0.15) 1px,
    transparent 0
  );
  background-size: 20px 20px;
  color: #ffffff;
}

.portfolio-body.light {
  background: linear-gradient(135deg, #8ff99f 0%, #b8ffd1 100%);
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 0
  );
  background-size: 20px 20px;
  color: #1a1a1a;
}

/* Theme toggle button */
.theme-toggle {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  backdrop-filter: blur(10px);
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.light .theme-toggle {
  border-color: rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.1);
  color: #1a1a1a;
}

.light .theme-toggle:hover {
  background: rgba(0, 0, 0, 0.2);
}

/* Blog post content styling */
.blog-post {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.light .blog-post {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* Custom prose styling */
.prose {
  color: inherit;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  color: inherit;
  font-weight: 700;
}

.prose h2 {
  @apply text-2xl mt-8 mb-4;
}

.prose h3 {
  @apply text-xl mt-6 mb-3;
}

.prose h4 {
  @apply text-lg mt-4 mb-2;
}

.prose p {
  @apply mb-4 leading-relaxed;
}

.prose ul,
.prose ol {
  @apply mb-4;
}

.prose li {
  @apply mb-1;
}

.prose code {
  @apply px-1.5 py-0.5 rounded text-sm font-mono;
  font-weight: 500;
}

.light .prose code {
  background: rgba(0, 0, 0, 0.05);
  color: inherit !important;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.dark .prose code {
  background: rgba(255, 255, 255, 0.1);
  color: inherit !important;
}

.prose pre {
  @apply rounded-lg overflow-x-auto mb-4;
  padding: 0;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.light .prose pre {
  background: #f8f9fa;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: inherit !important;
}

.dark .prose pre {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: inherit !important;
}

.prose pre code {
  @apply p-4;
  background: transparent !important;
  display: block;
  margin-top: 0;
  color: inherit !important;
  border-radius: 0;
}

/* Code block header */
.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.light .code-header {
  background: #f1f3f4;
  color: #666;
  border-bottom-color: rgba(0, 0, 0, 0.1);
}

.dark .code-header {
  background: rgba(255, 255, 255, 0.08);
  color: #ccc;
  border-bottom-color: rgba(255, 255, 255, 0.15);
}

.code-language {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.8;
}

.code-copy-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.code-copy-btn:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.light .code-copy-btn {
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.light .code-copy-btn:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.05);
  color: #333;
}

.dark .code-copy-btn {
  color: #ccc;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .code-copy-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.prose blockquote {
  @apply border-l-4 border-green-500 pl-4 italic mb-4;
  color: rgba(128, 128, 128, 0.8);
}

.prose a {
  @apply no-underline hover:underline;
  color: #22c55e;
  transition: color 0.3s ease;
}

.prose a:hover {
  color: #16a34a;
}

.prose img {
  @apply rounded-lg mb-4;
}

.prose table {
  @apply w-full border-collapse mb-4;
  border: 1px solid rgba(128, 128, 128, 0.3);
}

.prose th,
.prose td {
  @apply px-4 py-2;
  border: 1px solid rgba(128, 128, 128, 0.3);
}

.prose th {
  @apply font-semibold;
  background: rgba(0, 0, 0, 0.1);
}

.dark .prose th {
  background: rgba(255, 255, 255, 0.1);
}

/* Fix scroll issues */
html,
body {
  overflow-x: hidden;
}

/* Theme toggle icons */
.theme-icon-sun {
  filter: brightness(1.3);
}

.theme-icon-moon {
  filter: brightness(0.7);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #22c55e;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #16a34a;
}
</style>
