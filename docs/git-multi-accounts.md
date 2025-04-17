# 🚀 Managing Multiple GitHub Accounts (Work & Personal)

This guide outlines the recommended way to manage **multiple GitHub accounts** (e.g. personal and work) on the same machine using SSH keys, Git configuration, and SSH aliasing.

---

## 🧱 Prerequisites

- Git installed (`git --version`)
- SSH installed (`ssh -V`)
- GitHub accounts: e.g., `personal` and `work`

---

## 🔐 Step 1: Generate SSH Keys for Each Account (Choose RSA or ED25519)
> Choose **one** key type (ED25519 is recommended unless your system doesn’t support it).
### ✅ Option 1: ED25519 (recommended)
```bash
# Personal account
ssh-keygen -t ed25519 -C "your_personal_email@example.com" -f ~/.ssh/id_ed25519_personal

# Work account
ssh-keygen -t ed25519 -C "your_work_email@company.com" -f ~/.ssh/id_ed25519_work
```

### 🛡️ Option 2: RSA (for legacy support)
```bash
# Personal account
ssh-keygen -t rsa -b 4096 -C "your_personal_email@example.com" -f ~/.ssh/id_rsa_personal

# Work account
ssh-keygen -t rsa -b 4096 -C "your_work_email@company.com" -f ~/.ssh/id_rsa_work
```


## 🛠️ Step 2: Add SSH Keys to the SSH Agent

```bash
eval "$(ssh-agent -s)"

# For ED25519
ssh-add ~/.ssh/id_ed25519_personal
ssh-add ~/.ssh/id_ed25519_work

# Or for RSA
ssh-add ~/.ssh/id_rsa_personal
ssh-add ~/.ssh/id_rsa_work
```

## 📁 Step 3: Configure ~/.ssh/config
```bash
# ~/.ssh/config

# Personal GitHub
Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal  # or id_rsa_personal
  IdentitiesOnly yes

# Work GitHub
Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work  # or id_rsa_work
  IdentitiesOnly yes
```

## 🌐 Step 4: Add Public Keys to GitHub

```bash
cat ~/.ssh/id_ed25519_personal.pub  # or id_rsa_personal.pub
cat ~/.ssh/id_ed25519_work.pub      # or id_rsa_work.pub
```

## 🧭 Step 5: Clone Repos Using SSH Aliases

```bash
# Personal
git clone git@github-personal:your-username/personal-repo.git

# Work
git clone git@github-work:your-org/work-repo.git

```

## ⚙️ Step 6: Set Git User Per Repository
```bash
# Inside personal repo
git config --local user.name "Your Personal Name"
git config --local user.email "your_personal_email@example.com"

# Inside work repo
git config --local user.name "Your Work Name"
git config --local user.email "your_work_email@company.com"
```
**Or use a global conditional setup in ~/.gitconfig:**
```bash
# ~/.gitconfig

[includeIf "gitdir:~/projects/work/"]
  path = .gitconfig-work

[includeIf "gitdir:~/projects/personal/"]
  path = .gitconfig-personal
```
```bash
# ~/.gitconfig-personal
[user]
  name = Your Personal Name
  email = your_personal_email@example.com

# ~/.gitconfig-work
[user]
  name = Your Work Name
  email = your_work_email@company.com
```

## 🧪 Test SSH Connections
```bash
ssh -T git@github.com-personal
ssh -T git@github.com-work
```
