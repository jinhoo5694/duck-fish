# Task: Fix Dark/Light Theme Background Not Changing

## Problem
The background color is not changing when toggling between dark and light mode.

## Root Cause Analysis
The issue is that Tailwind CSS 4 uses a different approach for dark mode. The `dark:` variant needs to be properly configured, and the theme toggle is adding/removing the `dark` class on `<html>`, but Tailwind might not be picking it up correctly.

**Tailwind CSS 4 requires `@custom-variant` to define the dark mode selector.**

## Solution

Added to `globals.css`:
```css
@custom-variant dark (&:where(.dark, .dark *));
```

This tells Tailwind CSS 4 to use the `.dark` class on any parent element to trigger dark mode styles.

## Status: RESOLVED
