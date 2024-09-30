# Giphy Clone

## Overview
This is a **Giphy Clone** built with **React**, offering features such as browsing **GIFs, Stickers, and Clips** with the ability to search content using a debounced search bar for optimal performance. Users can also "like" GIFs, which will be stored in their **Favorites**. The application is fully responsive and styled with **Tailwind CSS**, making it look great on all devices. It is deployed on **Netlify** for easy accessibility.

## Live Video
https://github.com/user-attachments/assets/a39bf284-d411-4d73-b5b7-ba6d3bac919d



## Features

- **GIFs, Stickers, and Clips**: Browse popular and trending media content.
- **Search Functionality**: Search for specific GIFs, Stickers, or Clips with a debounced search bar to prevent unnecessary API calls and improve performance.
- **Favorites**: Users can "like" their favorite GIFs, which will be stored in the **Favorites** section for easy access.
- **Responsive Design**: Fully responsive and optimized for different screen sizes using **Tailwind CSS**.
- **Optimized Performance**: Implemented **debouncing** in the search functionality to enhance the performance by limiting the number of API requests during rapid user input.
- **Netlify Deployment**: The app is deployed and hosted on **Netlify**.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Giphy API**: Used to fetch GIFs, Stickers, and Clips data.
- **Debouncing**: For optimized search functionality.
- **Netlify**: For deployment and hosting.

## Getting Started

### Prerequisites

Before you can run this project, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/giphy-clone.git
    ```

2. Navigate to the project directory:
    ```bash
    cd giphy-clone
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Get your Giphy API key by signing up on [Giphy Developers](https://developers.giphy.com/), and create a `.env` file in the root of the project:
    ```
    REACT_APP_GIPHY_API_KEY=your_giphy_api_key
    ```

5. Start the development server:
    ```bash
    npm start
    ```

6. Open the app in your browser at `http://localhost:3000`.

### Build for Production

To create a production build, run:
```bash
npm run build
```

### Deploy on Netlify

The project is already set up for Netlify deployment. If you want to redeploy or clone the project to a different Netlify account:

1. Push the code to your GitHub repository.
2. Connect the repository to Netlify.
3. Add the GIPHY API key to the Netlify environment variables settings.
4. Deploy the site!

## Project Structure

```
/src
│   ├── /components        # React components (SearchBar, GIFGrid, Favourites, etc.)
│   ├── /pages             # Different pages (Home, Favourites, etc.)
│   ├── /assets            # Static assets like images, logos, etc.
│   ├── /utils             # Helper functions (Debounce, API calls, etc.)
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
│   ├── styles.css         # Global styles
├── /public
├── .env                   # API keys and environment variables
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json           # Project dependencies and scripts
```

## Key Functionalities

### 1. Search Bar with Debouncing
The search bar uses **debouncing** to ensure that only one API call is made when the user stops typing, improving performance and reducing API request load. You can adjust the debounce time inside the `utils/debounce.js` file.

### 2. Like and Favorite GIFs
When a user clicks the "like" button on any GIF, it gets stored in the **Favorites** section, which can be accessed at any time.

### 3. Responsive Design
The app is styled using **Tailwind CSS** and is fully responsive, adapting its layout to all screen sizes, from mobile to desktop.

## Deployment

This project is deployed on Netlify at the following URL:
- **Live Demo**: [Your Netlify Link](https://your-netlify-app.netlify.app)

## Contributing

If you want to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

---

Enjoy browsing your favorite GIFs and clips with this Giphy Clone!
