# Versioning & Branching Conventions

## Flutter Version Management

This guide outlines the strategy for managing version numbers and build codes in your Flutter projects.

### Versioning Strategy

We follow Semantic Versioning (MAJOR.MINOR.PATCH):

-   **Pre-Launch (Development):** versions start below `1.0.0` (e.g., `0.1.2`).
-   **Post-Launch (Production):** versions start from `1.0.0` and increment accordingly (e.g., `1.0.1`, `1.1.0`).

### Build Code Strategy

The `versionCode` (build number) follows a date-based format: `YYYYMMDDXX`.

-   `YYYYMMDD`: Current date.
-   `XX`: Two-digit build count for that day (starting from `01`).

**Example:**
For the first build on December 1st, 2025: `2025120101`

---

## Git Branch Naming Conventions

Maintain a clean and organized repository by following these branch naming conventions:

-   **Feature Branches:** `feat/feature-name`
    -   Example: `feat/login-screen`
-   **Developer Branches:** simply use your name or username.
    -   Example: `sonam`



