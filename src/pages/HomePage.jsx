import React from 'react';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            DialogueX - نسخة الويب
          </Heading>
          <Text fontSize="md" textAlign="center">
            مرحباً بك في النسخة التجريبية من موقع DialogueX. هذه النسخة مخصصة للمستخدمين الذين لا يملكون هواتف ذكية.
          </Text>
        </Box>
        
        {/* هنا سيتم إضافة مكونات الصفحة الرئيسية مثل المنشورات والقصص */}
      </VStack>
    </Container>
  );
};

export default HomePage;
