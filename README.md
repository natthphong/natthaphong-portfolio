
## Installation
Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm run dev`
2. Open your browser and visit `http://localhost:3000` to view the website.

## Email configuration

Configure the contact form email flow with:

```bash
RESEND_API_KEY=
EMAIL_FROM=no-reply@tarcloud.win
EMAIL_NOTIFY_TO=your-real-email@example.com
EMAIL_RESUME_PDF_PATH=/cv.pdf
```

Behavior:

- `EMAIL_FROM` is the sender used for the outgoing email.
- The email is sent to both the submitted form email and `EMAIL_NOTIFY_TO` when provided.
- `EMAIL_RESUME_PDF_PATH` is read from disk and attached as `Natthaphong_Jaroenpronprasit_Resume.pdf`. It supports either a public-style path like `/cv.pdf` or a filesystem path like `./public/cv.pdf`.
- If `EMAIL_NOTIFY_TO` is empty, the email still sends to the submitted form email.
- If the resume file is missing or unreadable, the API returns a clear error instead of sending a broken email.

## Dependencies

The following dependencies are required for this project:

- Next.js: A React framework for server-side rendering and static site generation.
- Tailwind CSS: A highly customizable CSS framework.
- React: A JavaScript library for building user interfaces.
- React Icons: A collection of popular icons for React projects.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Resend: Resend is the email API for developers.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.
