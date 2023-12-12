## **Skybase Innovations Commit Protocol**
Welcome to Skybase Innovations' official commit protocol. This document outlines the mandatory guidelines for commit messages within our repositories. Adherence to these standards is not optional and is crucial for maintaining codebase clarity and consistency.

### **Commit Message Structure**
Each commit message must adhere to the following format:


    <Action Verb in Present Tense> <Component>: <Concise Description>

    [Optional] <Detailed Explanation>

### **Action Verbs:**
**Add:** Introducing new features or additions to the code.

- Example: Add encryption layer to user authentication

**Fix: **Rectifying bugs or issues.

- Example: Fix data race condition in payment processing

**Update:** Modifying existing code or documentation.

- Example: Update API documentation for clarity


**Refactor:** Altering the structure of the code without changing its external behavior.

- Example: Refactor user interface logic for efficiency
  
**Remove:** Deleting code or files.

- Example: Remove deprecated functions from legacy system

### **Component:**
This should be a specific element of the codebase such as a module, class, method, or file.

- Example: LoginController, UserModel, database_config.json
  
**Concise Description:**
This is a brief, clear summary of the changes made. It should be direct and to the point.

**Extended Description (Optional):**
For complex changes, a detailed explanation is encouraged. This should clarify the rationale behind the changes and the approach taken.

### **Commit Message Standards:**
**Clarity and Precision:** Commit messages must clearly and precisely convey the changes made.

**Brevity:** Keep the message concise, without sacrificing clarity.

**No Ambiguity:** Avoid vague descriptions; be specific about what was changed and why.

**Professional Tone:** Maintain a formal and professional tone.


## **Good Commit Message Examples**

1. **Add User Location Tracking to Analytics Module**
    - **Why Good**: Begins with a clear action verb in present tense, specifies the component, and provides a concise description of what was added.
2. **Fix Memory Leak in Video Streaming Functionality**
    - **Why Good**: Uses an action verb indicative of bug fixing, names the specific component affected, and succinctly describes the issue resolved.
3. **Update README for Installation Guidelines**
    - **Why Good**: Clearly states the action performed (Update), specifies the component (README), and briefly describes what was updated (Installation Guidelines).
4. **Refactor Database Connection Logic for Increased Scalability**
    - **Why Good**: The message starts with an appropriate action verb (Refactor), identifies the component being refactored (Database Connection Logic), and provides a reason (Increased Scalability).
5. **Remove Deprecated PaymentValidation API**
    - **Why Good**: Uses a direct action verb (Remove), specifies the exact component (PaymentValidation API), and indicates that it is deprecated.

## **Bad Commit Message Examples**

1. **added new login feature**
    - **Why Bad**: Starts with a lowercase letter and lacks a clear, present-tense action verb. The description is vague and does not specify the component affected.
2. **changes in code**
    - **Why Bad**: Begins with a lowercase letter, uses a vague term "changes", and lacks specificity about what changes were made and to which part of the codebase.
3. **fixes**
    - **Why Bad**: Again, starts with a lowercase letter, uses an unclear and overly broad term, and provides no information about what was fixed or where.
4. **Update stuff**
    - **Why Bad**: Though it starts with a proper action verb, "stuff" is too vague and unprofessional, failing to specify what was updated.
5. **refactor**
    - **Why Bad**: Lacks a capital letter at the start, and provides no detail about what was refactored, making it unclear to other team members what changes were made.


### **Compliance:**
Failure to adhere to these guidelines will result in code review rejection and a requirement to revise the commit message. Consistent non-compliance will be addressed through further disciplinary measures.

### **Conclusion:**
This protocol ensures that our codebase remains clean, understandable, and navigable. Your cooperation and diligence in following these guidelines are essential to the success and efficiency of our team.