# News App - React Native Expo Application

A mobile application for browsing the latest news articles, with the ability to save favorites for offline viewing.

---

## Features

-  **View Latest News**: Browse the latest news headlines from various sources.
-  **Detailed News View**: Read full articles with detailed information.
-  **Favorites Management**: Add or remove news articles from your favorites list.
-  **Offline Favorites**: Access your saved favorites even without an internet connection.
-  **Pull-to-Refresh**: Refresh the news feed with a simple swipe gesture.

---

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For streamlined development and deployment.
- **React Navigation**: For seamless navigation between screens.
- **Context API**: For state management (favorites functionality).
- **AsyncStorage**: For offline storage of favorite articles.
- **Axios**: For fetching data from the News API.
- **Jest**: For unit testing components and services.

---

## API Used

This app uses the [NewsAPI](https://newsapi.org/) to fetch real-time news data.

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Duman16/react-native-RK2.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd react-native-RK2
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npx expo start
   ```

---

## Running Tests

To run the unit tests, use the following command:
```bash
npm test
```

---

## Project Structure

```
App/
├── src/
│   ├── components/       # Reusable UI components
│   ├── context/          # Context API for state management
│   ├── screens/          # Application screens (Home, Favorites, NewsDetail)
│   ├── services/         # API service for fetching news
│   └── __tests__/        # Unit tests for components and services
├── App.js                # Main application entry point
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```


---

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Contact

For any questions or feedback, feel free to reach out:

- **Author**: Duman Talgatuly
- **GitHub**: [Duman16](https://github.com/Duman16)