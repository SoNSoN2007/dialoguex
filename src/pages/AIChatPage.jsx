import React from 'react';
import { 
  Box, 
  Container, 
  VStack, 
  HStack, 
  Text, 
  Input, 
  Button, 
  Avatar, 
  Flex
} from '@chakra-ui/react';

const AIChatPage = () => {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([
    { id: 1, text: 'مرحباً! أنا المساعد الذكي لتطبيق DialogueX. كيف يمكنني مساعدتك اليوم؟', sender: 'ai', timestamp: '10:00' },
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
      
      // محاكاة رد الذكاء الاصطناعي بعد ثانيتين
      setTimeout(() => {
        const aiReply = {
          id: messages.length + 2,
          text: `هذا رد تجريبي من الذكاء الاصطناعي على سؤالك: "${message}". في النسخة النهائية، سيتم ربط هذا بخدمة ذكاء اصطناعي حقيقية.`,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prevMessages => [...prevMessages, aiReply]);
      }, 2000);
    }
  };

   const bgColor = 'gray.50';
  const userBubbleColor = 'blue.100';
  const aiBubbleColor = 'green.100';;

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
          <Avatar size="sm" name="DialogueX AI" src="/ai-avatar.png" mr={3} bg="purple.500" />
          <Box>
            <Text fontWeight="bold">المساعد الذكي</Text>
            <Text fontSize="xs" color="gray.500">متاح دائماً للمساعدة</Text>
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
              {msg.sender === 'ai' && (
                <Avatar size="xs" name="DialogueX AI" src="/ai-avatar.png" mr={2} mt={1} bg="purple.500" />
              )}
              <Box
                maxW="70%"
                p={3}
                borderRadius="lg"
                bg={msg.sender === 'user' ? userBubbleColor : aiBubbleColor}
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
            placeholder="اسأل المساعد الذكي..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button colorScheme="purple" onClick={handleSendMessage}>
            إرسال
          </Button>
        </HStack>
      </Box>
    </Container>
  );
};

export default AIChatPage;
