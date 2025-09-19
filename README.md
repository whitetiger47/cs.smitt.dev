# cs.smitt.dev - A Counter-Strike Themed Portfolio

This repository contains the source code for my personal portfolio website, [cs.smitt.dev](https://cs.smitt.dev). It is designed as a nostalgic tribute to the classic game *Counter-Strike 1.6*, replicating its iconic menu user interface to showcase my projects and personal information.

## Live Demo

Experience the nostalgia here: **[https://cs.smitt.dev](https://cs.smitt.dev)**

## Features

The portfolio is built as a single-page application that mimics the look, feel, and sounds of the Counter-Strike 1.6 main menu.

### Authentic UI/UX

*   **Classic Visuals**: The UI is styled using a combination of the `cs16.css` library and custom CSS to accurately reproduce the game's dialogs, buttons, tabs, and overall aesthetic.
*   **Nostalgic Intro**: On loading the site, a short intro video plays, inspired by the classic Valve software intro sequence.
*   **Sound Effects**: Authentic sound effects from the game are used for UI interactions, such as menu clicks, window closures, and other actions to enhance the immersive experience.

### Interactive Menu System

The main navigation is designed around the familiar game menu options:

*   **New Game**: This opens a "Create Server" dialog that serves as a welcome message and an introduction to the project, explaining the personal significance of Counter-Strike.
*   **Find Servers**: This cleverly repurposed section acts as the project showcase. It opens a "Servers" browser where each "server" is one of my projects. The list displays the project name, description, technologies used (as "Players"), and its current status ("Live", "Offline", etc.). Users can "Connect" to a server to visit the project's live URL or repository.
*   **Options**: The "Options" menu functions as an "About Me" page. It includes my name, a customizable "spray paint" avatar, my age, location, and links to my Twitter and GitHub profiles.
*   **Quit**: This option opens a confirmation dialog that, upon confirmation, redirects the user to my Twitter profile.

## Technology Stack

*   **HTML5**: Structures the content of the single-page application.
*   **CSS3**: Provides the styling, recreating the classic CS 1.6 look, and handles layout. It utilizes the `cs16.css` library for base components.
*   **JavaScript**: Manages all the website's interactivity, including:
    *   Displaying and hiding modal dialogs.
    *   Handling user interactions and event listeners.
    *   Playing sound effects.
    *   Dynamically updating the "Find Servers" list and "Options" avatar.

## Project Structure

The repository is organized as a straightforward static website.

```
.
├── index.html          # The main HTML file containing the entire UI structure.
├── style.css           # Custom styles for layout, positioning, and UI tweaks.
├── style.js            # JavaScript for all interactivity and DOM manipulation.
├── images/
│   ├── intro.webm      # The Valve-style intro video.
│   └── ...             # Background and avatar images.
└── sounds/
    └── ...             # UI sound effects from Counter-Strike.
```

## Running Locally

As this is a static website with no build dependencies, you can run it locally by simply opening the `index.html` file in your web browser. For the best experience, it is recommended to serve the files using a simple local web server to avoid potential issues with file pathing.
