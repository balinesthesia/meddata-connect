
# Security Policy

## Supported Versions

We maintain security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Security Vulnerabilities

### Vite CORS Vulnerability

As of November 2023, Vite versions between 5.0.0 and 5.4.11 were vulnerable to a security issue that allowed websites to send requests to development servers and read responses due to default CORS settings and lack of validation on the Origin header for WebSocket connections.

This vulnerability has been patched in Vite 5.4.12 and above. We have implemented additional security measures in our Vite configuration to mitigate this issue.

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please send an email to security@meddsa.io. All security vulnerabilities will be promptly addressed.

When reporting vulnerabilities, please include:

1. Description of the vulnerability
2. Steps to reproduce the issue
3. Potential impact of the vulnerability
4. Any suggestions for fixing the vulnerability (if applicable)

The security team will acknowledge receipt of your report within 48 hours and will send a more detailed response within 72 hours indicating the next steps in handling your report. After the initial reply to your report, the security team will endeavor to keep you informed of the progress toward a fix and full announcement.
