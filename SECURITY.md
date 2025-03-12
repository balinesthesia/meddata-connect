
# Security Policy

## Supported Versions

We maintain security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Security Vulnerabilities

### Vite CORS and Frame Options

Our application has been updated to properly handle CORS settings for both development and production environments. We've made the following security-related changes:

1. Updated CORS configuration to allow proper development-to-production connections
2. Modified X-Frame-Options to SAMEORIGIN to enable iframe embedding for development
3. Added explicit Access-Control headers to ensure proper cross-origin resource sharing

The security configuration is managed in the vite.config.ts file with separate settings for development and production environments.

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please send an email to security@meddsa.io. All security vulnerabilities will be promptly addressed.

When reporting vulnerabilities, please include:

1. Description of the vulnerability
2. Steps to reproduce the issue
3. Potential impact of the vulnerability
4. Any suggestions for fixing the vulnerability (if applicable)

The security team will acknowledge receipt of your report within 48 hours and will send a more detailed response within 72 hours indicating the next steps in handling your report. After the initial reply to your report, the security team will endeavor to keep you informed of the progress toward a fix and full announcement.
