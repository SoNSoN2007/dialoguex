import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  VStack, 
  HStack, 
  Text, 
  Input, 
  Button, 
  Avatar, 
  Flex, 
  Divider
} from '@chakra-ui/react';

const ChatPage = () => {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([
    { id: 1, text: 'مرحباً! كيف يمكنني مساعدتك اليوم؟', sender: 'other', timestamp: '10:00' },
    { id: 2, text: 'أهلاً، أريد معرفة المزيد عن ميزات التطبيق', sender: 'user', timestamp: '10:02' },
    { id: 3, text: 'بالتأكيد! يوفر تطبيق DialogueX العديد من الميزات مثل الدردشة، القصص التفاعلية، البث المباشر، والمزيد. هل هناك ميزة معينة تريد معرفة المزيد عنها؟', sender: 'other', timestamp: '10:03' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // محاكاة رد تلقائي بعد ثانيتين
      setTimeout(() => {
        const autoReply = {
          id: messages.length + 2,
          text: 'هذا رد تلقائي على رسالتك. في النسخة النهائية، سيتم ربط هذا بخدمة الدردشة الفعلية.',
          sender: 'other',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prevMessages => [...prevMessages, autoReply]);
      }, 2000);
    }
  };

  const bgColor = 'gray.50';
  const userBubbleColor = 'blue.100';
  const otherBubbleColor = 'gray.200';

  return (
    <Container maxW="container.md" py={5}>
      <Box
        height="80vh"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        bg={bgColor}
      >
        {/* رأس الدردشة */}
        <Flex 
          p={4} 
          borderBottomWidth="1px" 
          alignItems="center"
          bg={useColorModeValue('white', 'gray.800')}
        >
          <Avatar size="sm" name="محمد أحمد" src="https://via.placeholder.com/40" mr={3} />
          <Box>
            <Text fontWeight="bold">محمد أحمد</Text>
            <Text fontSize="xs" color="gray.500">متصل الآن</Text>
          </Box>
        </Flex>
        
        {/* محتوى الدردشة */}
        <VStack 
          p={4} 
          spacing={4} 
          align="stretch" 
          overflowY="auto" 
          height="calc(80vh - 140px)"
          css={{
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              width: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray.300',
              borderRadius: '24px',
            },
          }}
        >
          {messages.map((msg) => (
            <Flex key={msg.id} justify={msg.sender === 'user' ? 'flex-end' : 'flex-start'}>
              {msg.sender !== 'user' && (
                <Avatar size="xs" name="محمد أحمد" src="https://via.placeholder.com/40" mr={2} mt={1} />
              )}
              <Box
                maxW="70%"
                p={3}
                borderRadius="lg"
                bg={msg.sender === 'user' ? userBubbleColor : otherBubbleColor}
              >
                <Text>{msg.text}</Text>
                <Text fontSize="xs" color="gray.500" textAlign="right" mt={1}>
                  {msg.timestamp}
                </Text>
              </Box>
            </Flex>
          ))}
        </VStack>
        
        {/* مدخل الرسائل */}
        <HStack 
          p={4} 
          borderTopWidth="1px"
          bg={useColorModeValue('white', 'gray.800')}
        >
          <Input
            placeholder="اكتب رسالة..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button colorScheme="blue" onClick={handleSendMessage}>
            إرسال
          </Button>
        </HStack>
      </Box>
    </Container>
  );
};

export default ChatPage;
