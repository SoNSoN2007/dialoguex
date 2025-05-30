import React, { useState } from 'react';
import { Box, Flex, Button, Image, HStack, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const bgColor = 'white';
  const borderColor = 'gray.200';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Box 
      as="nav" 
      position="fixed" 
      top="0" 
      width="100%" 
      zIndex="1000" 
      bg={bgColor} 
      boxShadow="sm" 
      borderBottom="1px" 
      borderColor={borderColor}
    >
      <Flex 
        h="60px" 
        alignItems="center" 
        justifyContent="space-between" 
        px={4}
        maxW="container.xl"
        mx="auto"
      >
        {/* الشعار */}
        <RouterLink to="/">
          <Box fontWeight="bold" fontSize="xl">DialogueX</Box>
        </RouterLink>

        {/* القائمة الرئيسية - تظهر على الشاشات المتوسطة والكبيرة */}
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Button as={RouterLink} to="/feed" variant="ghost">الرئيسية</Button>
          <Button as={RouterLink} to="/chat" variant="ghost">الدردشة</Button>
          <Button as={RouterLink} to="/ai-chat" variant="ghost">الذكاء الاصطناعي</Button>
          <Button as={RouterLink} to="/profile" variant="ghost">الملف الشخصي</Button>
          <Button as={RouterLink} to="/about" variant="ghost">حول</Button>
        </HStack>

  {/* قائمة منسدلة للشاشات الصغيرة - تم استبدالها بأزرار عادية */}
        <Box display={{ base: 'block', md: 'none' }}>
          <Button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="outline"
            size="sm"
          >
            ☰
          </Button>
          
          {mobileMenuOpen && (
            <Box 
              position="absolute" 
              top="60px" 
              left="0" 
              right="0" 
              bg="white" 
              boxShadow="md" 
              p={2}
              zIndex={1000}
            >
              <VStack spacing={2} align="stretch">
                <Button as={RouterLink} to="/feed" variant="ghost" justifyContent="start">الرئيسية</Button>
                <Button as={RouterLink} to="/chat" variant="ghost" justifyContent="start">الدردشة</Button>
                <Button as={RouterLink} to="/ai-chat" variant="ghost" justifyContent="start">الذكاء الاصطناعي</Button>
                <Button as={RouterLink} to="/profile" variant="ghost" justifyContent="start">الملف الشخصي</Button>
                <Button as={RouterLink} to="/about" variant="ghost" justifyContent="start">حول</Button>
              </VStack>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
