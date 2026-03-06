Ось детальний та професійний README.md для вашого репозиторію 04-react-query.

Судячи з посилання на Vercel (03-react-movies-ebon-six.vercel.app) та наявності файлу .env.example, це додаток для пошуку/перегляду фільмів, який отримує дані зі стороннього API (наприклад, TMDB). Головна мета цього проєкту — демонстрація роботи з бібліотекою React Query (TanStack Query) для асинхронних запитів та кешування.

Ось готовий текст для копіювання:

Markdown
# React Movies App 🍿

A dynamic web application for browsing movies, designed to demonstrate advanced data fetching, caching, and state management using **TanStack React Query**.

🔗 **[Live Demo](https://03-react-movies-ebon-six.vercel.app/)**

## 📖 About the Project

This project focuses on handling complex asynchronous operations in React. Instead of using standard `useEffect` hooks for API calls, this app implements **React Query** to fetch data from an external Movie API. This approach provides out-of-the-box caching, background updates, and elegant error/loading state handling, resulting in a much smoother user experience.

### Key Features:
- **Efficient Data Fetching:** Utilizes React Query to fetch, cache, and update movie data seamlessly.
- **Loading & Error States:** Built-in UI feedback for pending requests and failed API calls.
- **Search & Filter:** Find movies quickly using an integrated search API.
- **Modern UI:** Clean, responsive design for both desktop and mobile screens.

## 🛠 Built With

- **[React](https://react.dev/):** Library for building user interfaces.
- **[TanStack Query (React Query)](https://tanstack.com/query/latest):** Powerful asynchronous state management.
- **[TypeScript](https://www.typescriptlang.org/):** Ensures code reliability and provides strong typing for API responses.
- **[Vite](https://vitejs.dev/):** Blazing fast build tool and development server.
- **CSS:** Custom styling.

## 🚀 How to Run Locally

To run this project on your machine, you'll need to set up the API key:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ibuizle/04-react-query.git](https://github.com/ibuizle/04-react-query.git)
Navigate to the project folder:

Bash
cd 04-react-query
Install dependencies:

Bash
npm install
Environment Variables:

Create a .env file in the root directory.

Look at .env.example for reference and add your API key (e.g., from TMDB or OMDB).

Start the development server:

Bash
npm run dev
Open your browser and visit http://localhost:5173.

👤 Author
GitHub — @ibuizle
