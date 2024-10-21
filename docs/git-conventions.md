## Skybase Innovations Commit Protocol

Welcome to Skybase Innovations' official commit protocol. This document outlines the **mandatory guidelines** for commit messages within our repositories. Adherence to these standards is crucial for maintaining codebase clarity and consistency.

---

## Commit Message Structure

Each commit message must adhere to the following format:

```php
<Tag> <Component>: <Concise Description>

[Optional] <Detailed Explanation>

```

### Available Tags:

- **feat**: Introducing a new feature.
    
    *Example: `feat(auth): Add two-factor authentication`*
    
- **fix**: Rectifying bugs or issues.
    
    *Example: `fix(payment): Fix data race condition in transaction handler`*
    
- **chore**: Maintenance tasks or minor updates that don't affect the code's behavior.
    
    *Example: `chore(deps): Update npm dependencies`*
    
- **refactor**: Modifying code structure without changing its external behavior.
    
    *Example: `refactor(ui): Optimize user interface layout`*
    
- **style**: Changes that don't affect the meaning of the code (white-space, formatting, etc.).
    
    *Example: `style(css): Fix indentation in stylesheet`*
    
- **docs**: Documentation updates.
    
    *Example: `docs(README): Update installation instructions`*
    
- **test**: Adding or modifying tests.
    
    *Example: `test(auth): Add unit tests for login functionality`*
    
- **perf**: Changes that improve performance.
    
    *Example: `perf(api): Improve response time for search queries`*
    
- **build**: Changes that affect the build system or external dependencies.
    
    *Example: `build(docker): Update Dockerfile to use Node 16`*
    
- **ci**: Changes related to Continuous Integration configurations and scripts.
    
    *Example: `ci(github-actions): Add linting check to CI pipeline`*
    
- **revert**: Reverting a previous commit.
    
    *Example: `revert: Revert "feat(auth): Add two-factor authentication"`*
    

### Component:

This should be a specific element of the codebase such as a module, class, method, or file.

- *Example: `LoginController`, `UserModel`, `database_config.json`*

### Concise Description:

A brief, clear summary of the changes made. It should be direct and to the point.

### Extended Description (Optional):

For complex changes, a detailed explanation is encouraged. This should clarify the rationale behind the changes and the approach taken.

---

## Commit Message Standards:

- **Clarity and Precision**: Commit messages must clearly and precisely convey the changes made.
- **Brevity**: Keep the message concise, without sacrificing clarity.
- **No Ambiguity**: Avoid vague descriptions; be specific about what was changed and why.
- **Professional Tone**: Maintain a formal and professional tone.

---

## Good Commit Message Examples:

- `feat(analytics): Add user location tracking feature`
    - Why Good: Uses `feat` to indicate a new feature, specifies the component (`analytics`), and provides a concise description.
- `fix(video): Fix memory leak in video streaming functionality`
    - Why Good: Uses `fix` to indicate a bug fix, names the affected component (`video`), and succinctly describes the issue resolved.
- `docs(API): Update API documentation for clarity`
    - Why Good: Uses `docs` for documentation changes, specifies the component (`API`), and briefly describes what was updated.
- `refactor(db): Refactor database connection logic for scalability`
    - Why Good: Uses `refactor` to indicate code restructuring, identifies the component (`db`), and provides a reason (scalability).
- `remove(api): Remove deprecated PaymentValidation API`
    - Why Good: Uses `remove` to indicate deletion, specifies the exact component (`PaymentValidation API`), and states that it's deprecated.

---

## Bad Commit Message Examples:

- `added new login feature`
    - Why Bad: Does not follow the specified format, lacks clarity, and is vague about the feature.
- `changes in code`
    - Why Bad: No tag or component is mentioned, and the description is too generic.
- `fixes`
    - Why Bad: Does not describe what was fixed or where, and lacks important details.
- `update stuff`
    - Why Bad: Though it uses `update`, the term "stuff" is unprofessional and vague.
- `refactor`
    - Why Bad: Lacks any description about what was refactored, making it unclear to team members what changes were made.

---

## Compliance:

Failure to adhere to these guidelines will result in code review rejection and a requirement to revise the commit message. Consistent non-compliance will be addressed through further disciplinary measures.