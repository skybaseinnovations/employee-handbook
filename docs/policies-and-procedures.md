# Policies and Procedures

*Last updated: FY 2083/84*

These policies apply to everyone at Skybase — full-time, part-time, interns, and contractors. They set the minimum standard for how we protect company data, client work, and each other's accounts. Follow them from day one and keep them current as tools or roles change.

Questions about a specific tool? Raise a **ticket** on [Karyabase](https://karyabase.com) or contact the **Operations Manager**.

---

## Two-Factor Authentication (2FA)

**2FA is mandatory** on every work account. No exceptions.

Enable 2FA before you use any tool for company work. Prefer an **authenticator app** (Google Authenticator, Authy, 1Password, or similar). Use SMS or email only when the service does not support an app.

| Tool | 2FA required | Notes |
| --- | --- | --- |
| Company email (`@skybase.com.np`) | Yes | Set up when you claim your address |
| [Discord](https://discord.com) | Yes | Use your company email account only |
| [GitHub](https://github.com) | Yes | Required before repo access is granted |
| [Karyabase](https://karyabase.com) | Yes | Enable as soon as your account is active |
| Any other communication or PM tool | Yes | Slack, Figma, cloud consoles, client portals — if we use it for work, 2FA is on |

If you lose access to your 2FA device, contact the **Operations Manager** immediately. Do not disable 2FA to "fix" login issues on your own.

---

## Password Policy

Use **strong, unique passwords** for every work account. Never reuse a password across services.

### Requirements

- **Minimum 12 characters**
- Mix of **uppercase**, **lowercase**, **numbers**, and **symbols**
- **No dictionary words** or obvious patterns (e.g. `Skybase2024!`)
- **No sharing** — not with coworkers, not in Discord, not in tickets

### Update schedule

| Account type | Maximum age | Action |
| --- | --- | --- |
| **Project management tools** (Karyabase and similar) | **90 days** | Change password before expiry; update your password manager |
| **Communication tools** (email, Discord) | **180 days** | Change on schedule or when the service prompts you |
| **GitHub and code platforms** | **180 days** | Same as above; also rotate if a key or token may be exposed |
| **Any account after a suspected breach** | **Immediately** | Change password and notify the Operations Manager |

We recommend a **password manager** (1Password, Bitwarden, or equivalent) so you can keep unique passwords without writing them down.

---

## Communication Tools

### Company email

- Use **`name@skybase.com.np`** for all official communication, sign-ups, and audit trails.
- Do not use a personal email for work accounts or client correspondence.
- Do not forward confidential company or client information to personal inboxes.
- Report suspicious emails (phishing, impersonation) to the Operations Manager — do not click links or open attachments from unknown senders.

### Discord

- Create and use Discord with your **company email** only. Keep work and personal Discord accounts separate.
- Enable **2FA** before joining the company server.
- Do not share invite links publicly or with people outside the team.
- Use appropriate channels — sensitive or client-specific topics belong in designated private channels, not `#general`.
- Daily work updates belong in **Karyabase**, not Discord. See [Daily Work Updates](/daily-updates).

### Karyabase

- Log in only with credentials issued to you. Do not share your login with anyone.
- Post **leave requests**, **attendance corrections**, **tickets**, and **daily updates** here — not in chat.
- Change your password on the **90-day schedule** above.
- Log out on shared or public devices.

---

## GitHub and Development Access

- **2FA is required** on your work GitHub account before you push code or access private repos.
- Use **SSH keys with a passphrase** when working with multiple accounts. See [Git Multi Accounts](/git-multi-accounts).
- Never commit **secrets** (API keys, passwords, `.env` files with live credentials) to any repository.
- Revoke access tokens and SSH keys you no longer need.
- Report lost devices, leaked keys, or accidental secret commits to the Operations Manager at once.

For branching, commits, and versioning standards, see [Git Conventions](/git-conventions) and [Version Conventions](/conventions).

---

## Device and Workspace Security

- **Lock your screen** when you step away — at the office or when working remotely.
- Keep your **operating system and browsers updated** on machines used for company work.
- Do not install **unapproved software** on company-provided devices without Management approval.
- Do not store company or client data on **personal cloud drives** (Google Drive, Dropbox, iCloud, etc.) unless explicitly approved.
- Use **company-approved channels** for file sharing and backups.
- On public or shared networks, avoid accessing sensitive systems without a secure connection when one is provided by the company.

---

## Acceptable Use

Company accounts, devices, and infrastructure exist for **work purposes**.

- Do not use company resources for illegal activity, harassment, or content that damages the company's reputation.
- Do not attempt to bypass security controls, scrape internal systems without permission, or access data outside your role.
- Client work stays **confidential** — see [About Your Employment](/about) and [Accidents, Misconduct and Disputes](/accident) for broader conduct expectations.

---

## Reporting Security Issues

Report any of the following **immediately** (same day, without waiting):

- Lost or stolen laptop, phone, or 2FA device
- Suspected phishing or account takeover
- Accidental exposure of credentials, API keys, or client data
- Unauthorized access to a system or repository

**How to report:** message the **Operations Manager** on Discord and raise a **ticket** on [Karyabase](https://karyabase.com) with what happened, when, and what you have already done (e.g. password changed).

We treat good-faith reports seriously. Fixing a mistake quickly is always better than hiding it.

---

## Compliance

Following these policies is part of your employment responsibilities.

- Management may **audit** that 2FA and password standards are in place on work accounts.
- Repeated or deliberate failure to comply may result in **warnings**, **revoked access**, or **termination**, depending on severity — especially where client data or company security is put at risk.
- When in doubt, ask before you share, install, or connect something new to company systems.
