You can see live my portfolio at : https://portfolio-two-lilac-s0pxup697i.vercel.app/

## 🚀 How to Run the Project

Follow these steps to set up and run the project locally:

### 1️⃣ Install Dependencies

After downloading/cloning the project, navigate to the project directory and run:

```bash
npm install
# or
yarn install
```

This will install all required dependencies.

### 2️⃣ Start the Development Server

Once the installation is complete, start the server with:

```bash
npm run dev
# or
yarn dev
```

Your portfolio will now be running at `http://localhost:3000`.

### ⚠️ Important: Set Up Environment Variables

Before running the project, make sure to create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

This ensures proper configuration of environment variables.

## Folder Structure Overview

![Next.js portfolio template folder structure overview](https://ik.imagekit.io/cpnw7c0xpe/Tailwind%20Components/Templates/Folder%20Structure%20Overview.png?updatedAt=1741684501824)

- **content:** Contains data for projects. Add any additional section data here.
- **Components:** All the UI components of app e.g. navbar, hero, projects, footer etc
- **src/services:** Retrieves data (e.g., projects, testimonials) using the fs module. Update this file if you change or modify the data source.
- **src/assets:** Stores all assets, including images and icons, additionally you can add audio, video, and local fonts here.
- **src/hooks:** Holds custom hooks.
- **src/lib/types.d.ts:** Contains TypeScript types.
- **util/icons:** Centralizes icons and images for easy updates.
- **appData:** Includes app data, such as services and skills (including icons).
- **app/page.tsx:** Root file of the app.
- **app/layout.tsx:** Manages global and SEO configurations (e.g., fonts, head tags, analytics).

## 📨 Configuring the Contact Section

To integrate **Formspree** into your contact form, follow these simple steps:

1. Go to the [Formspree website](https://formspree.io/) and create a new project.
2. Add a new form (you'll get a unique form endpoint URL).
3. Copy the form endpoint and paste it into your `.env.local` file like this:

```env
CONTACT_FORM_ACTION_URL=https://formspree.io/f/your-form-id
```

> Note: This URL is just an endpoint to receive your form submissions. You can use any service of your choice (like Formcarry, Getform, or your own API) if you're not using Formspree.

Make sure the name attributes in your form match what your form handler or service expects (e.g., `name`, `email`, `subject`, `message`).

