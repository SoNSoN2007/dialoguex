import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';

// استيراد الصفحات
import HomePage from './pages/HomePage';
import FeedPage from './pages/FeedPage';
import ChatPage from './pages/ChatPage';
import AIChatPage from './pages/AIChatPage';
import ProfilePage from './pages/ProfilePage';
import StoryViewerPage from './pages/StoryViewerPage';
import LiveStreamPage from './pages/LiveStreamPage';
import AboutPage from './pages/AboutPage';

// استيراد المكونات
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh" pt="60px">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/ai-chat" element={<AIChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/story" element={<StoryViewerPage />} />
            <Route path="/live" element={<LiveStreamPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
